import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// Lapicero 3D del prototipo (modelo propio exportado desde Unity). Gira según el avance del scroll de la sección.
export default function PenModel({ progressRef }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, 10);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9c4cf, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(4, 6, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0xdfe9f2, 1.2); rim.position.set(-5, -2, -4); scene.add(rim);

    const pivot = new THREE.Group();
    pivot.rotation.set(THREE.MathUtils.degToRad(-12), 0, THREE.MathUtils.degToRad(25));
    scene.add(pivot);
    const spinner = new THREE.Group();
    pivot.add(spinner);

    let disposed = false;
    // Despiece: desplazamiento de cada pieza a lo largo del eje del lapicero (unidades del FBX, +Y hacia la tapa).
    const EXPLODE = { Circle001: 125, Cylinder007: 40, Cylinder009: -24, Cylinder010: -22, Cylinder008: -46 };
    let parts = [];
    new FBXLoader().load('/models/lapicero.fbx', (obj) => {
      if (disposed) return;
      // El FBX trae piezas sueltas, luces y cámara; solo se deja el lapicero armado (cuerpo + tapa).
      const keep = new Set(['Cylinder005', 'Circle001']);
      [...obj.children].forEach((c) => { if (!keep.has(c.name)) obj.remove(c); });
      obj.traverse((c) => {
        if (c.isMesh) {
          const mats = Array.isArray(c.material) ? c.material : [c.material];
          mats.forEach((m) => { if (m && 'shininess' in m) m.shininess = 60; });
        }
      });
      obj.updateMatrixWorld(true);
      const up = new THREE.Vector3(0, 1, 0);
      parts = Object.entries(EXPLODE).map(([name, d]) => {
        const part = obj.getObjectByName(name);
        if (!part || !part.parent) return null;
        // Convierte el desplazamiento del espacio del modelo al espacio local del padre de la pieza.
        const wp = part.getWorldPosition(new THREE.Vector3());
        const a = part.parent.worldToLocal(wp.clone());
        const b = part.parent.worldToLocal(wp.clone().addScaledVector(up, d));
        return { part, base: part.position.clone(), delta: b.sub(a) };
      }).filter(Boolean);
      const box = new THREE.Box3().setFromObject(obj);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      obj.position.sub(center);
      const holder = new THREE.Group();
      holder.add(obj);
      // El lapicero queda en vertical: su eje más largo se alinea con Y.
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      if (size.x === maxDim) holder.rotation.z = Math.PI / 2;
      else if (size.z === maxDim) holder.rotation.x = Math.PI / 2;
      holder.scale.setScalar(2.4 / maxDim); // margen para el lapicero desarmado
      spinner.add(holder);
    });

    const resize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(mount);

    let raf = 0;
    let current = 0;
    let explode = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const el = progressRef && progressRef.current;
      const p = el ? parseFloat(getComputedStyle(el).getPropertyValue('--arch-progress')) || 0 : 0;
      const target = reduced ? 0.6 : p * Math.PI * 2 * 1.25;
      current += (target - current) * 0.08;
      spinner.rotation.y = current;
      // Se desarma entre el 15 % y el 60 % del recorrido de la sección y queda desarmado al final.
      const e = reduced ? 0 : THREE.MathUtils.smoothstep(p, 0.15, 0.6);
      explode += (e - explode) * 0.1;
      parts.forEach(({ part, base, delta }) => part.position.copy(base).addScaledVector(delta, explode));
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, [progressRef]);

  return <div ref={mountRef} className="arch-3d-canvas" />;
}
