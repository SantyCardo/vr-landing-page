import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { SolutionStatic } from './Solution.jsx';

const GREY = new THREE.Color('#aab4be');
const ACCENT = new THREE.Color('#5b7f9c');
const FOV = 34;
const TAN_HALF_FOV = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
// Ancho/altura de mundo que SIEMPRE deben caber dentro del encuadre.
const WORLD_WIDTH = 7.6;
const WORLD_HEIGHT = 6.5;

const smoothstep = (x, a, b) => THREE.MathUtils.smoothstep(x, a, b);

function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function makeParticleTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.8)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

// Sombra radial suave para la sombra de contacto bajo el visor.
function makeShadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(15, 22, 32, 0.5)');
  g.addColorStop(0.55, 'rgba(15, 22, 32, 0.16)');
  g.addColorStop(1, 'rgba(15, 22, 32, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export default function SolutionScene({ progressRef, screens }) {
  const mountRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (err) {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mount.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb9c4cf, 1.4));
    const key = new THREE.DirectionalLight(0xffffff, 2); key.position.set(4, 6, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0xdfe9f2, 1); rim.position.set(-5, -2, -4); scene.add(rim);

    const world = new THREE.Group();
    scene.add(world);
    const visor = new THREE.Group();
    world.add(visor);
    const screensGroup = new THREE.Group();
    world.add(screensGroup);

    const cardboardMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#d9c3a0'), roughness: 0.9, metalness: 0 });
    const coverMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#c9b795'), roughness: 0.9, metalness: 0 });
    const notchMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#8a6f4d'), roughness: 0.9, metalness: 0 });
    const darkMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#1b2430'), roughness: 0.55, metalness: 0 });
    const lensMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#a9cbe0'), roughness: 0.08, metalness: 0.1, emissive: new THREE.Color('#0c141a'), emissiveIntensity: 0.25 });
    const bandMat = new THREE.MeshStandardMaterial({ color: new THREE.Color('#23262b'), roughness: 0.8, metalness: 0 });

    // Cuerpo del visor + muesca nasal inferior + banda elástica.
    const body = new THREE.Mesh(new RoundedBoxGeometry(1.9, 1.1, 1.0, 3, 0.09), cardboardMat);
    const notch = new THREE.Mesh(new RoundedBoxGeometry(0.6, 0.4, 0.06, 2, 0.03), notchMat);
    notch.position.set(0, -0.35, 0.46);
    const band = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.05, 12, 96, Math.PI), bandMat);
    band.rotation.x = -Math.PI / 2;
    band.scale.set(1, 1, 0.45);
    band.position.set(0, 0, -0.05);
    const visorBody = new THREE.Group();
    visorBody.add(body, notch, band);

    // Tapa trasera con las dos lentes.
    const plate = new THREE.Mesh(new RoundedBoxGeometry(1.7, 0.85, 0.1, 2, 0.04), coverMat);
    const lensGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.1, 32);
    lensGeo.rotateX(Math.PI / 2);
    const lens1 = new THREE.Mesh(lensGeo, lensMat);
    const lens2 = new THREE.Mesh(lensGeo, lensMat);
    lens1.position.set(-0.35, 0.05, -0.06);
    lens2.position.set(0.35, 0.05, -0.06);
    const lensPlate = new THREE.Group();
    lensPlate.add(plate, lens1, lens2);

    // Celular: placa oscura delgada con pantalla encendida (captura de la casa).
    const phonePlate = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.85, 0.05, 2, 0.02), darkMat);
    const screenMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0a0e14'), roughness: 0.5, metalness: 0,
      emissive: new THREE.Color('#ffffff'), emissiveMap: null, emissiveIntensity: 0,
    });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.34, 0.75), screenMat);
    screen.position.set(0, 0, 0.032);
    const phone = new THREE.Group();
    phone.add(phonePlate, screen);

    visor.add(visorBody, lensPlate, phone);

    // Piezas que se separan (estado 1) y se ensamblan (estado 2).
    const HALF_PI = Math.PI / 2;
    const parts = [
      { obj: visorBody, base: new THREE.Vector3(0, 0, 0), exp: new THREE.Vector3(-1.5, 0.35, 0.5), br: new THREE.Euler(0, 0, 0), er: new THREE.Euler(0.18, 0.4, 0.12) },
      { obj: lensPlate, base: new THREE.Vector3(0, 0, -0.5), exp: new THREE.Vector3(0.95, 1.05, -0.7), br: new THREE.Euler(0, 0, 0), er: new THREE.Euler(-0.35, 0.55, -0.2) },
      { obj: phone, base: new THREE.Vector3(0, 0, 0.5), exp: new THREE.Vector3(1.15, -1.0, 0.9), br: new THREE.Euler(0, 0, 0), er: new THREE.Euler(0.25, -0.45, 0.18) },
    ];

    const colorMats = [
      { mat: cardboardMat, c: new THREE.Color('#d9c3a0') },
      { mat: coverMat, c: new THREE.Color('#c9b795') },
      { mat: notchMat, c: new THREE.Color('#8a6f4d') },
      { mat: lensMat, c: new THREE.Color('#a9cbe0') },
      { mat: bandMat, c: new THREE.Color('#23262b') },
      { mat: darkMat, c: new THREE.Color('#1b2430') },
    ];

    // Pantallas flotantes: marco blanco + imagen + sombra suave.
    const frameGeo = new THREE.ShapeGeometry(roundedRectShape(1.7, 1.05, 0.12));
    const imgGeo = new THREE.ShapeGeometry(roundedRectShape(1.5, 0.84, 0.08));
    const frameMats = [];
    const imgMats = [];
    const shadowMats = [];
    const screenGroups = [];

    // Marcos a escala 0.8 (1.36 x 0.84) y separados más que su tamaño: no se cruzan ni se recortan en el borde del canvas.
    const arcPos = [
      new THREE.Vector3(0.85, 0.95, 0.2),
      new THREE.Vector3(2.35, 0.8, -0.1),
      new THREE.Vector3(0.9, -0.8, -0.4),
      new THREE.Vector3(2.3, -0.95, -0.7),
    ];
    const rowPos = [
      new THREE.Vector3(-2.55, -1.5, 0.6),
      new THREE.Vector3(-0.85, -1.5, 0.6),
      new THREE.Vector3(0.85, -1.5, 0.6),
      new THREE.Vector3(2.55, -1.5, 0.6),
    ];
    const parDepth = [0.5, 0.65, 0.8, 0.95];

    for (let i = 0; i < 4; i++) {
      const fm = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.FrontSide });
      const im = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, side: THREE.FrontSide });
      const sm = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, side: THREE.FrontSide, depthWrite: false });
      frameMats.push(fm);
      imgMats.push(im);
      shadowMats.push(sm);
      const g = new THREE.Group();
      g.scale.setScalar(0.8);
      const shadowMesh = new THREE.Mesh(frameGeo, sm);
      shadowMesh.position.set(0.08, -0.08, -0.03);
      const frameMesh = new THREE.Mesh(frameGeo, fm);
      const imgMesh = new THREE.Mesh(imgGeo, im);
      imgMesh.position.z = 0.01;
      g.add(shadowMesh, frameMesh, imgMesh);
      screensGroup.add(g);
      screenGroups.push(g);
    }

    const PCOUNT = 240;
    const pPos = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const particleTex = makeParticleTexture();
    const particleMat = new THREE.PointsMaterial({
      size: 0.035, color: new THREE.Color('#5b7f9c'), opacity: 0.45,
      transparent: true, depthWrite: false, map: particleTex,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    world.add(particles);

    // Sombra de contacto suave bajo el visor.
    const shadowTex = makeShadowTexture();
    const contactShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.0, 1.6),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.25, depthWrite: false }),
    );
    contactShadow.rotation.x = -HALF_PI;
    contactShadow.position.set(0, -1.35, 0);
    world.add(contactShadow);

    // Anillo fino de acento (estado 4).
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.012, 16, 128),
      new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0 }),
    );
    ring.position.set(0, 0, 0);
    world.add(ring);

    const textures = [];
    let loaded = false;
    let disposed = false;
    const loader = new THREE.TextureLoader();
    const loadTextures = () => {
      if (loaded) return;
      loaded = true;
      (screens || []).forEach((s, i) => {
        loader.load(s.img, (tex) => {
          if (disposed) { tex.dispose(); return; }
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.anisotropy = 4;
          tex.needsUpdate = true;
          textures[i] = tex;
          imgMats[i].map = tex;
          imgMats[i].needsUpdate = true;
          if (i === 0) { screenMat.emissiveMap = tex; screenMat.needsUpdate = true; }
        });
      });
    };

    let camDist = 17;
    const resize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      const zForWidth = (WORLD_WIDTH / 2) / (TAN_HALF_FOV * camera.aspect);
      const zForHeight = (WORLD_HEIGHT / 2) / TAN_HALF_FOV;
      camDist = Math.max(zForWidth, zForHeight);
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let visible = false;
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) loadTextures();
    }, { threshold: 0 });
    io.observe(mount);

    let mx = 0, my = 0, tmx = 0, tmy = 0;
    const onPointer = (e) => {
      tmx = (e.clientX / window.innerWidth) * 2 - 1;
      tmy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true });
    let raf = 0;
    let progress = reduced ? 0.6 : 0;
    let clock = 0;
    let last = performance.now();

    const tmpV = new THREE.Vector3();
    const tmpE = new THREE.Euler();
    const target = new THREE.Vector3();
    const lookTmp = new THREE.Vector3();
    const arcLook = new THREE.Vector3(1.6, 0, 9);
    const rowLook = new THREE.Vector3(0, -1.5, 9);

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (disposed) return;
      if (!visible || document.hidden) return;

      const now = performance.now();
      const delta = Math.min((now - last) / 1000, 0.05);
      last = now;
      clock += delta;

      if (!reduced) {
        const el = progressRef && progressRef.current;
        const raw = el ? parseFloat(getComputedStyle(el).getPropertyValue('--sol-progress')) || 0 : 0;
        progress += (raw - progress) * (1 - Math.exp(-5 * delta));
      }
      const p = progress;

      const assemble = smoothstep(p, 0.18, 0.42);
      const grey = 1 - assemble;
      const screenOn = smoothstep(p, 0.42, 0.56);
      const orbit = smoothstep(p, 0.5, 0.72);
      const row = smoothstep(p, 0.78, 1.0);
      const screensIn = smoothstep(p, 0.62, 0.78);
      const ringIn = smoothstep(p, 0.82, 0.95);

      // Cámara: más cerca en el estado 2 (ensamblado), sin recortar.
      const zoom = 1 - 0.38 * screenOn * (1 - orbit);
      camera.position.set(0, 0.25, camDist * zoom);
      target.set(0, -0.05 - row * 0.1, 0);
      camera.lookAt(target);

      // Visor: centrado → izquierda (estado 3) → centrado y rotado (estado 4).
      const visorX = -2.15 * (orbit - row);
      const float = reduced ? 0 : Math.sin(clock * 0.9) * 0.08;
      visor.position.set(visorX, row * 0.55 + float, 0);
      visor.rotation.x = -0.15;
      visor.rotation.y = THREE.MathUtils.lerp(0.7, Math.PI - 0.7, row) + (reduced ? 0 : Math.sin(clock * 0.5) * 0.03 * row);

      // Ensamblado de piezas (estado 1 → 2).
      parts.forEach((pt) => {
        tmpV.copy(pt.exp).lerp(pt.base, assemble);
        pt.obj.position.copy(tmpV);
        tmpE.set(pt.er.x, pt.er.y, pt.er.z);
        tmpE.x += (pt.br.x - pt.er.x) * assemble;
        tmpE.y += (pt.br.y - pt.er.y) * assemble;
        tmpE.z += (pt.br.z - pt.er.z) * assemble;
        pt.obj.rotation.set(tmpE.x, tmpE.y, tmpE.z);
      });

      // Color: apagado/gris en el estado 1.
      colorMats.forEach(({ mat, c }) => mat.color.copy(c).lerp(GREY, grey));
      screenMat.emissiveIntensity = screenOn * 1.05;

      const pk = 1 - Math.exp(-3 * delta);
      mx += (tmx - mx) * pk;
      my += (tmy - my) * pk;
      if (reduced) { mx = 0; my = 0; }

      // Pantallas flotantes: arco cóncavo → fila ordenada.
      lookTmp.copy(arcLook).lerp(rowLook, row);
      screenGroups.forEach((g, i) => {
        const op = screensIn;
        frameMats[i].opacity = op;
        imgMats[i].opacity = op;
        shadowMats[i].opacity = op * 0.14;

        tmpV.copy(arcPos[i]).lerp(rowPos[i], row);
        tmpV.z += (1 - screensIn) * 1.5;
        tmpV.x += mx * 0.07 * parDepth[i] * screensIn;
        tmpV.y += my * 0.05 * parDepth[i] * screensIn;
        g.position.copy(tmpV);
        g.lookAt(lookTmp);
      });

      contactShadow.position.x = visorX;
      contactShadow.material.opacity = 0.25 * assemble;

      ring.position.set(visorX, visor.position.y, 0);
      ring.material.opacity = ringIn;
      ring.scale.setScalar(0.85 + 0.15 * ringIn);

      particles.rotation.y = reduced ? 0 : clock * 0.03;

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      textures.forEach((t) => t && t.dispose());
      particleTex.dispose();
      shadowTex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, [progressRef, screens]);

  if (failed) return <SolutionStatic />;
  return (
    <>
      <div className="sol-stage-canvas" ref={mountRef} />
      <p className="sr-only">Escena en 3D de un visor de cartón que se arma con el avance y, junto a cuatro pantallas, muestra el entrenamiento paso a paso.</p>
    </>
  );
}
