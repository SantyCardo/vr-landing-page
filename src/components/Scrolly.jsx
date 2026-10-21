import { useEffect, useRef, useState } from 'react';
import * as C from '../data/content.js';
import { CountUp } from './ui.jsx';

// Parte 1 de la justificación: scrollytelling «El problema en cifras».
// El panel sticky muestra la cifra gigante del paso activo y, a la derecha, una
// línea vertical se dibuja con el scroll mientras cada paso se activa. Solo se
// animan transform y opacity; el progreso vive en la variable CSS --just-progress.
export function Scrolly() {
  const steps = C.stats;
  const links = C.justification.steps;
  const trackRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = [...track.querySelectorAll('.just-step')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.matchMedia('(max-width: 860px)').matches;

    // Sin animación (o en móvil, donde los pasos se apilan): cifras finales,
    // línea completa y todos los pasos activos.
    if (reduced || narrow) {
      track.style.setProperty('--just-progress', 1);
      items.forEach((s) => s.classList.add('is-active'));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      track.style.setProperty('--just-progress', p.toFixed(4));
      const idx = Math.min(items.length - 1, Math.floor(p * items.length));
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
  }, []);

  const value = steps[active].value;
  const isLong = value.replace(/\D/g, '').length > 4;

  return (
    <div className="scrolly-track" ref={trackRef}>
      <div className="scrolly-sticky">
        <span className="scrolly-count" aria-hidden="true">0{active + 1} / 0{steps.length}</span>
        <div className={`scrolly-number${isLong ? ' is-long' : ''}`}>
          <CountUp key={active} value={value} />
        </div>
        <p className="scrolly-label">{steps[active].label}</p>
        <a className="scrolly-source" href={steps[active].url} target="_blank" rel="noreferrer">{steps[active].source}</a>
      </div>

      <ol className="just-flow">
        <span className="just-line" aria-hidden="true"><span className="just-line-fill" /></span>
        {steps.map((s, i) => (
          <li key={s.value} className={`just-step${i <= active ? ' is-active' : ''}`}>
            <span className="just-node" aria-hidden="true">0{i + 1}</span>
            <div className="just-step-body">
              <div className="just-figure">
                <span className="just-figure-num">{s.value}</span>
                <span className="just-figure-label">{s.label}</span>
                <a className="just-figure-source" href={s.url} target="_blank" rel="noreferrer">{s.source}</a>
              </div>
              <p className="just-step-text">{links[i]}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
