import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import * as C from '../data/content.js';

const SolutionScene = lazy(() => import('./SolutionScene.jsx'));

// Detecta WebGL sin cargar three: así no se trae el chunk de la escena cuando
// el navegador no puede dibujarla.
function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) {
    return false;
  }
}

// Fallback estático: los 4 pasos apilados, cada uno con su captura en un marco
// de «celular/visor». Se usa en móvil, con movimiento reducido o sin WebGL.
export function SolutionStatic() {
  const s = C.solution;
  return (
    <div className="sol-fallback">
      <ol className="sol-fallback-steps">
        {s.steps.map((st, i) => (
          <li key={st.title} className="sol-fallback-step">
            <figure className="sol-phone" aria-hidden="true">
              <img src={s.screens[i].img} alt="" loading="lazy" />
              <figcaption className="sol-phone-label">{s.screens[i].label}</figcaption>
            </figure>
            <div className="sol-fallback-text">
              <span className="sol-tag">{st.tag}</span>
              <h3>{st.title}</h3>
              <p>{st.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="sol-chips">
        {s.chips.map((c) => (
          <span key={c.label} className="sol-chip"><strong>{c.value}</strong><span>{c.label}</span></span>
        ))}
      </div>
    </div>
  );
}

// Sección «La solución»: scrollytelling con un único canvas WebGL en panel sticky.
export function Solution() {
  const s = C.solution;
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [useScene] = useState(() => {
    if (typeof window === 'undefined') return false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 860px)').matches;
    return !reduced && !narrow && supportsWebGL();
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !useScene) return;
    const steps = [...track.querySelectorAll('.sol-step')];
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      track.style.setProperty('--sol-progress', p.toFixed(4));
      const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [useScene]);

  return (
    <div className="sol reveal">
      <div className="sol-head">
        <span className="eyebrow">{s.eyebrow}</span>
        <h2 className="h2">{s.title[0]}<br />{s.title[1]}</h2>
      </div>

      {useScene ? (
        <div className="sol-track" ref={trackRef}>
          <ol className="sol-steps">
            {s.steps.map((st, i) => (
              <li key={st.title} className={`sol-step${i <= active ? ' is-active' : ''}`}>
                <span className="sol-tag">{st.tag}</span>
                <h3 className="sol-step-title">{st.title}</h3>
                <p className="sol-step-body">{st.body}</p>
              </li>
            ))}
          </ol>

          <div className="sol-stage">
            <span className="sol-progress" aria-hidden="true">
              {s.steps.map((_, i) => <span key={i} className={`sol-dot${i <= active ? ' is-on' : ''}`} />)}
            </span>
            <Suspense fallback={<SolutionStatic />}>
              <SolutionScene progressRef={trackRef} screens={s.screens} />
            </Suspense>
            <div className={`sol-chips${active >= 2 ? ' is-visible' : ''}`} aria-hidden="true">
              {s.chips.map((c) => (
                <span key={c.label} className="sol-chip"><strong>{c.value}</strong><span>{c.label}</span></span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <SolutionStatic />
      )}
    </div>
  );
}
