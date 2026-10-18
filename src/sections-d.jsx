import React from 'react';
import { SectionHeader } from './sections-a.jsx';

// ============================================
// SECTIONS PART 4: Scope, FAQ, Team, Footer
// ============================================

// ----- SCOPE -----
export function ScopeSection() {
  const stages = [
    { n: 1, phase: 'setup',   title: 'Preparación del dispositivo', body: 'Configurar visor VR y dispositivo móvil. Calibración inicial.', icon: 'device' },
    { n: 2, phase: 'setup',   title: 'Selección de zona', body: 'Elegir y rotar sitios anatómicos de inyección.', icon: 'target' },
    { n: 3, phase: 'practice',title: 'Técnica de inyección', body: 'Aprender y practicar la técnica correcta paso a paso.', icon: 'needle' },
    { n: 4, phase: 'practice',title: 'Almacenamiento de insulina', body: 'Condiciones adecuadas de cadena de frío y conservación.', icon: 'fridge' },
    { n: 5, phase: 'practice',title: 'Desecho de elementos', body: 'Manejo seguro de agujas, lancetas y residuos cortopunzantes.', icon: 'biohazard' },
    { n: 6, phase: 'evaluate',title: 'Evaluación', body: 'Cuestionarios SUS/Likert para medir comprensión.', icon: 'check' },
    { n: 7, phase: 'evaluate',title: 'Validación clínica', body: 'Personal de salud revisa la herramienta con IVC.', icon: 'shield' },
  ];

  const phases = {
    setup:    { label: 'PREPARACIÓN', range: '1-2', color: '#5350cc' },
    practice: { label: 'PRÁCTICA',    range: '3-5', color: '#00b1ff' },
    evaluate: { label: 'VALIDACIÓN',  range: '6-7', color: '#00ffaa' }
  };

  const includes = [
    { t: 'App Android con Google Cardboard', tag: 'BUILD' },
    { t: 'Navegación por Gaze con dwell-timer', tag: 'INPUT' },
    { t: 'Animaciones 3D + narración + subtítulos', tag: 'CONTENT' },
    { t: 'Menú, historial y resumen de sesiones', tag: 'UX' },
    { t: 'Evaluación por módulo con métricas SUS/Likert', tag: 'EVAL' },
    { t: 'Almacenamiento 100% local / offline', tag: 'DATA' },
    { t: 'Validación por profesionales de salud (IVC)', tag: 'CLINICAL' },
  ];

  const excludes = [
    { t: 'Interacción física ni simulación hápticas', tag: 'HAPTIC' },
    { t: 'Integración con historia clínica / hospitales', tag: 'HL7' },
    { t: 'Pruebas directas con pacientes', tag: 'TRIAL' },
    { t: 'Sincronización entre dispositivos', tag: 'CLOUD' },
    { t: 'Modelos 3D de alta fidelidad / fotorealismo', tag: 'AAA' },
  ];

  return (
    <section id="alcance">
      <div className="container">
        <ScopeHeader includes={includes} excludes={excludes} stages={stages}/>
        <ScopeTimeline stages={stages} phases={phases}/>
        <ScopeMatrix includes={includes} excludes={excludes}/>
      </div>

      <style>{`
        /* ===== SCOPE HEADER ===== */
        .scope-header {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 80px;
          align-items: end;
          margin-bottom: 88px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .9s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1);
        }
        .scope-header.in { opacity: 1; transform: none; }
        .scope-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--color-bright-blue);
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .scope-eyebrow::before {
          content: '';
          width: 36px; height: 1px;
          background: var(--color-bright-blue);
        }
        .scope-title {
          font-family: var(--font-display);
          font-size: clamp(40px, 5.4vw, 76px);
          font-weight: 600;
          line-height: 0.96;
          letter-spacing: -0.04em;
          color: var(--color-white);
          margin: 0;
          text-wrap: balance;
        }
        .scope-title .accent { color: var(--color-bright-blue); }
        .scope-title .strike { position: relative; display: inline-block; }
        .scope-title .strike::after {
          content: '';
          position: absolute;
          left: -2%; right: -2%; bottom: 0.08em;
          height: 8px;
          background: var(--color-vivid-green);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.1s cubic-bezier(.2,.8,.2,1) .5s;
          border-radius: 2px;
          opacity: 0.85;
        }
        .scope-header.in .scope-title .strike::after { transform: scaleX(1); }
        .scope-lede {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-ghost-frost);
          opacity: 0.78;
          max-width: 460px;
          margin: 0;
          text-wrap: pretty;
        }
        .scope-meta {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 32px;
          margin-top: 28px;
        }
        .scope-meta-item {
          display: flex; flex-direction: column; gap: 4px;
        }
        .scope-meta-item strong {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .scope-meta-item span {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }

        /* ===== SCOPE TIMELINE ===== */
        .scope-timeline {
          margin-bottom: 88px;
          padding: 36px 28px 28px;
          border-radius: 28px;
          background: rgba(35,34,105,0.5);
          border: 1px solid rgba(83,80,204,0.32);
          position: relative;
          overflow: hidden;
        }
        .scope-timeline::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            transparent;
          pointer-events: none;
        }
        .scope-timeline-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 28px;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
          gap: 18px;
        }
        .scope-timeline-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--color-white);
        }
        .scope-phase-legend {
          display: flex; gap: 18px; flex-wrap: wrap;
        }
        .scope-phase-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(35,34,105,0.6);
          border: 1px solid var(--phase-color);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--phase-color);
        }
        .scope-phase-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--phase-color);
        }
        .scope-phase-pill-range {
          color: var(--color-muted-violet);
          opacity: 0.7;
        }

        .scope-stages {
          position: relative;
          z-index: 2;
          padding: 16px 0 24px;
        }
        .scope-stages-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(7, minmax(140px, 1fr));
          gap: 12px;
          min-width: 980px;
        }
        .scope-stages-scroll {
          overflow-x: auto;
          padding-bottom: 8px;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent);
        }
        .scope-stages-rail {
          position: absolute;
          top: 38px;
          left: 64px;
          right: 64px;
          height: 2px;
          background: #00b1ff;
          opacity: 0.55;
        }
        .scope-stages-rail::after {
          content: '';
          position: absolute;
          inset: -1px 0;
          background: inherit;
          filter: blur(6px);
          opacity: 0.5;
        }
        .scope-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          text-align: center;
          position: relative;
          z-index: 2;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .7s cubic-bezier(.2,.8,.2,1), transform .7s cubic-bezier(.2,.8,.2,1);
        }
        .scope-stages.in .scope-stage { opacity: 1; transform: none; }
        .scope-stage-node {
          width: 76px; height: 76px;
          border-radius: 50%;
          background: rgba(13,13,61,0.9);
          border: 1.5px solid var(--phase-color);
          display: flex; align-items: center; justify-content: center;
          color: var(--phase-color);
          position: relative;
          transition: transform .35s cubic-bezier(.2,.8,.2,1);
        }
        .scope-stage-node::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px dashed var(--phase-color);
          opacity: 0.25;
          animation: scope-node-spin 28s linear infinite;
        }
        @keyframes scope-node-spin {
          to { transform: rotate(360deg); }
        }
        .scope-stage:hover .scope-stage-node {
          transform: translateY(-4px) scale(1.05);
        }
        .scope-stage-num {
          position: absolute;
          top: -8px; right: -8px;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: var(--phase-color);
          color: #08082a;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          letter-spacing: -0.02em;
        }
        .scope-stage-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-white);
          line-height: 1.3;
          max-width: 140px;
          text-wrap: balance;
        }
        .scope-stage-body {
          font-size: 11px;
          line-height: 1.5;
          color: var(--color-muted-violet);
          opacity: 0.78;
          max-width: 140px;
          text-wrap: pretty;
        }

        /* ===== INCLUDES / EXCLUDES MATRIX ===== */
        .scope-matrix {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 64px;
        }
        .scope-list {
          padding: 32px;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          background: rgba(13,13,61,0.55);
          border: 1px solid var(--list-border);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1);
        }
        .scope-list.in { opacity: 1; transform: none; }
        .scope-list::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: transparent;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity .35s;
          pointer-events: none;
        }
        .scope-list:hover::before { opacity: 1; }
        .scope-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          padding-bottom: 18px;
          border-bottom: 1px dashed var(--list-border);
        }
        .scope-list-head-left {
          display: flex; align-items: center; gap: 14px;
        }
        .scope-list-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: var(--list-bg);
          border: 1px solid var(--list-border);
          display: flex; align-items: center; justify-content: center;
          color: var(--list-accent);
        }
        .scope-list-label {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.22em;
          color: var(--list-accent);
          text-transform: uppercase;
        }
        .scope-list-count {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          padding: 5px 11px;
          border-radius: 999px;
          background: var(--list-bg);
          color: var(--list-accent);
          border: 1px solid var(--list-border);
        }
        .scope-list-items {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .scope-list-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 14px;
          background: var(--item-bg);
          border: 1px solid var(--item-border);
          transition: background .3s, transform .3s, border-color .3s;
        }
        .scope-list-item:hover {
          background: var(--item-hover);
          transform: translateX(4px);
          border-color: var(--list-accent);
        }
        .scope-list-item-mark {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--list-bg);
          border: 1px solid var(--list-accent);
          display: flex; align-items: center; justify-content: center;
          color: var(--list-accent);
          flex-shrink: 0;
        }
        .scope-list-item-text {
          font-size: 14px;
          line-height: 1.5;
          color: var(--color-ghost-frost);
        }
        .scope-list-item-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          padding: 4px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          color: var(--list-accent);
          text-transform: uppercase;
          opacity: 0.8;
        }

        /* ===== MILESTONES ===== */
        .scope-milestones {
          padding: 28px 32px;
          border-radius: 24px;
          background: rgba(35,34,105,0.4);
          border: 1px solid rgba(83,80,204,0.3);
          display: grid;
          grid-template-columns: minmax(0, 0.45fr) minmax(0, 1fr);
          gap: 40px;
          align-items: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1);
        }
        .scope-milestones.in { opacity: 1; transform: none; }
        .scope-milestones-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }
        .scope-milestones-label strong {
          display: block;
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--color-white);
          letter-spacing: -0.02em;
          margin-top: 6px;
          text-transform: none;
        }
        .scope-milestones-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          position: relative;
        }
        .scope-milestone {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(13,13,61,0.5);
          border: 1px solid rgba(83,80,204,0.3);
          position: relative;
        }
        .scope-milestone[data-status="done"]   { border-color: rgba(0,255,170,0.55); }
        .scope-milestone[data-status="active"] { border-color: rgba(0,177,255,0.7); background: rgba(0,177,255,0.06); }
        .scope-milestone[data-status="next"]   { opacity: 0.65; }
        .scope-milestone-quarter {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--color-bright-blue);
        }
        .scope-milestone[data-status="done"]   .scope-milestone-quarter { color: var(--color-vivid-green); }
        .scope-milestone[data-status="next"]   .scope-milestone-quarter { color: var(--color-muted-violet); }
        .scope-milestone-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-white);
          line-height: 1.35;
          text-wrap: balance;
        }
        .scope-milestone-status {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
          margin-top: 2px;
        }
        .scope-milestone[data-status="done"]   .scope-milestone-status { color: var(--color-vivid-green); }
        .scope-milestone[data-status="active"] .scope-milestone-status { color: var(--color-bright-blue); }
        .scope-milestone[data-status="active"]::after {
          content: '';
          position: absolute;
          top: 12px; right: 12px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--color-bright-blue);
          box-shadow: 0 0 0 4px rgba(0,177,255,0.18);
          animation: scope-active-pulse 2.2s ease-out infinite;
        }
        @keyframes scope-active-pulse {
          0%, 100% { box-shadow: 0 0 0 4px rgba(0,177,255,0.18); }
          50%      { box-shadow: 0 0 0 10px rgba(0,177,255,0.04); }
        }

        @media (max-width: 980px) {
          .scope-header { grid-template-columns: 1fr; gap: 36px; align-items: start; }
          .scope-matrix { grid-template-columns: 1fr; }
          .scope-milestones { grid-template-columns: 1fr; gap: 24px; }
          .scope-milestones-track { grid-template-columns: repeat(2, 1fr); }
          .scope-meta { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 600px) {
          .scope-milestones-track { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

// ===== Scope subcomponents =====
export function ScopeHeader({ includes, excludes, stages }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <header ref={ref} className="scope-header">
      <div>
        <div className="scope-eyebrow">010 · ALCANCE</div>
        <h2 className="scope-title">
          Alcance y <span className="accent">delimitación</span><br/>
          del prototipo.
        </h2>
      </div>
      <div>
        <p className="scope-lede">
          Siete etapas modulares organizadas en tres fases. Cada decisión
          quedo deliberada: lo que entra al MVP, lo que se posterga, y los
          hitos que validan el avance del anteproyecto.
        </p>
        <div className="scope-meta">
          <div className="scope-meta-item" style={{ color: '#5350cc' }}>
            <strong>{stages.length}</strong>
            <span>Etapas</span>
          </div>
          <div className="scope-meta-item" style={{ color: '#00b1ff' }}>
            <strong>3</strong>
            <span>Fases</span>
          </div>
          <div className="scope-meta-item" style={{ color: '#00ffaa' }}>
            <strong>{includes.length}</strong>
            <span>Incluye</span>
          </div>
          <div className="scope-meta-item" style={{ color: '#b1a6f6' }}>
            <strong>{excludes.length}</strong>
            <span>Excluye</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export const ScopeIcons = {
  device: <><rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="6" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="18" r="0.8" fill="currentColor"/></>,
  target: <><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></>,
  needle: <><path d="M3 21 L13 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="12" y="6" width="7" height="5" rx="1" transform="rotate(45 15 8)" stroke="currentColor" strokeWidth="1.4"/><path d="M19 3 L21 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>,
  fridge: <><rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="7" r="0.7" fill="currentColor"/><circle cx="9" cy="14" r="0.7" fill="currentColor"/></>,
  biohazard: <><circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M12 4 C 9 8 9 10 11 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M19 16 C 15 16 13 15 12.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M5 16 C 9 16 11 15 11.5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
  check: <><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M8 12.5 L11 15 L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></>,
  shield: <><path d="M12 3 L19 6 V12 C 19 16.5 16 19.5 12 21 C 8 19.5 5 16.5 5 12 V6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M9 12 L11.5 14.5 L15 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></>
};

export function ScopeTimeline({ stages, phases }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const stagesEl = el.querySelector('.scope-stages');
          if (stagesEl) stagesEl.classList.add('in');
          const nodes = el.querySelectorAll('.scope-stage');
          nodes.forEach((n, i) => { n.style.transitionDelay = `${i * 80}ms`; });
          io.disconnect();
        }
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="scope-timeline">
      <div className="scope-timeline-head">
        <div className="scope-timeline-title">Etapas del prototipo · flujo educativo</div>
        <div className="scope-phase-legend">
          {Object.entries(phases).map(([k, p]) => (
            <span key={k} className="scope-phase-pill" style={{ '--phase-color': p.color }}>
              <span className="scope-phase-pill-dot"/>
              {p.label}
              <span className="scope-phase-pill-range">· {p.range}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="scope-stages-scroll">
        <div className="scope-stages">
          <div className="scope-stages-track">
            <div className="scope-stages-rail"/>
            {stages.map((s, i) => {
              const color = phases[s.phase].color;
              return (
                <div key={i} className="scope-stage" style={{ '--phase-color': color }}>
                  <div className="scope-stage-node">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">{ScopeIcons[s.icon]}</svg>
                    <span className="scope-stage-num">{s.n}</span>
                  </div>
                  <div className="scope-stage-title">{s.title}</div>
                  <div className="scope-stage-body">{s.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScopeListCard({ kind, items }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(el);
    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--my', `${ev.clientY - r.top}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => { io.disconnect(); el.removeEventListener('mousemove', onMove); };
  }, []);

  const isInclude = kind === 'include';
  const style = isInclude
    ? {
        '--list-bg': 'rgba(0,255,170,0.10)',
        '--list-border': 'rgba(0,255,170,0.35)',
        '--list-accent': 'var(--color-vivid-green)',
        '--list-glow': 'rgba(0,255,170,0.55)',
        '--item-bg': 'rgba(0,255,170,0.04)',
        '--item-border': 'rgba(0,255,170,0.14)',
        '--item-hover': 'rgba(0,255,170,0.08)'
      }
    : {
        '--list-bg': 'rgba(177,166,246,0.10)',
        '--list-border': 'rgba(148,148,169,0.35)',
        '--list-accent': 'var(--color-muted-violet)',
        '--list-glow': 'rgba(177,166,246,0.45)',
        '--item-bg': 'rgba(148,148,169,0.04)',
        '--item-border': 'rgba(148,148,169,0.12)',
        '--item-hover': 'rgba(148,148,169,0.08)'
      };

  return (
    <section ref={ref} className="scope-list" style={style}>
      <header className="scope-list-head">
        <div className="scope-list-head-left">
          <div className="scope-list-icon">
            {isInclude ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
            )}
          </div>
          <div>
            <div className="scope-list-label">{isInclude ? 'INCLUYE · MVP' : 'NO INCLUYE · TRABAJO FUTURO'}</div>
          </div>
        </div>
        <span className="scope-list-count">{String(items.length).padStart(2,'0')} ITEMS</span>
      </header>
      <ul className="scope-list-items">
        {items.map((it, i) => (
          <li key={i} className="scope-list-item">
            <span className="scope-list-item-mark">
              {isInclude ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              )}
            </span>
            <span className="scope-list-item-text">{it.t}</span>
            <span className="scope-list-item-tag">{it.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ScopeMatrix({ includes, excludes }) {
  return (
    <div className="scope-matrix">
      <ScopeListCard kind="include" items={includes}/>
      <ScopeListCard kind="exclude" items={excludes}/>
    </div>
  );
}

export function ScopeMilestones({ milestones }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const statusLabel = { done: 'Cerrado', active: 'En curso', next: 'Planeado' };
  return (
    <div ref={ref} className="scope-milestones">
      <div className="scope-milestones-label">
        Hitos del anteproyecto
        <strong>Roadmap 2026</strong>
      </div>
      <div className="scope-milestones-track">
        {milestones.map((m, i) => (
          <div key={i} className="scope-milestone" data-status={m.status}>
            <span className="scope-milestone-quarter">{m.q} · 2026</span>
            <span className="scope-milestone-label">{m.label}</span>
            <span className="scope-milestone-status">{statusLabel[m.status]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ----- FAQ -----
export function FAQSection() {
  const faqs = [
    {
      cat: 'Ámbito',
      q: '¿El prototipo reemplaza la orientación médica profesional?',
      a: 'No. El prototipo es exclusivamente una herramienta educativa de apoyo. No sustituye la consulta, el diagnóstico ni el tratamiento prescrito por un profesional de salud. Se diseñó para complementar la formación que el paciente recibe del personal médico de la Fundación Clínica FOSUNAB, reforzando la técnica entre consultas y reduciendo la incertidumbre durante el inicio de la insulinoterapia.',
      meta: { read: '40s', tag: 'CLÍNICO' },
      related: [1, 3]
    },
    {
      cat: 'Pedagogía',
      q: '¿Por qué utilizar realidad virtual para enseñar técnicas de insulinización?',
      a: 'La VR permite practicar el procedimiento en un entorno seguro, sin riesgo clínico real ni desperdicio de material. El paciente puede equivocarse, repetir y consolidar la técnica antes de aplicarla sobre su propio cuerpo. Estudios muestran que la práctica inmersiva mejora la retención frente a métodos pasivos como folletos o videos, especialmente en adultos con baja alfabetización digital.',
      meta: { read: '45s', tag: 'VR' },
      related: [2, 0]
    },
    {
      cat: 'Beneficios',
      q: '¿Qué ventajas ofrece el aprendizaje inmersivo frente a los métodos tradicionales?',
      a: 'Tres ventajas clave: aprendizaje activo en lugar de pasivo, repetición ilimitada sin presión clínica, y feedback inmediato ante errores típicos (rotación incorrecta de zonas, reutilización de agujas, vía equivocada). La inmersión activa la memoria episódica y reduce la ansiedad asociada a la primera autoaplicación, mejorando la adherencia a largo plazo.',
      meta: { read: '40s', tag: 'PEDAGOGÍA' },
      related: [1, 3]
    },
    {
      cat: 'Privacidad',
      q: '¿Cómo se protege la privacidad y los datos del usuario?',
      a: 'Toda la información se almacena localmente en el dispositivo del usuario. La aplicación funciona 100% offline: no requiere cuenta, no envía datos a servidores externos ni los comparte con terceros. Cumple con principios de minimización de datos y respeta los lineamientos de protección establecidos en la Ley 1581 de 2012 sobre datos personales en Colombia.',
      meta: { read: '35s', tag: 'PRIVACIDAD' },
      related: [0, 1]
    },
    {
      cat: 'Diferenciación',
      q: '¿Qué elementos diferencian al prototipo frente al estado del arte?',
      a: 'Tres ejes que ninguna solución existente cubre simultáneamente: educación específica en insulinización, experiencia inmersiva mediante VR, y accesibilidad real a través de hardware de bajo costo (Google Cardboard ~USD 8). Plataformas como Virti aportan inmersión pero requieren equipos costosos; SocialDiabetes e Insulclock son accesibles pero carecen de inmersión y no enseñan la técnica de aplicación. El prototipo cruza las tres dimensiones en una sola plataforma offline.',
      meta: { read: '50s', tag: 'EDGE' },
      related: [5, 2]
    },
    {
      cat: 'Mercado',
      q: '¿Qué limitaciones presentan las plataformas existentes?',
      a: 'Cada plataforma cubre solo una porción del problema. Resumen rápido:',
      table: [
        { platform: 'Virti',          limit: 'Hardware costoso' },
        { platform: 'Insulclock',     limit: 'Sin educación inmersiva' },
        { platform: 'SocialDiabetes', limit: 'No enseña técnica' }
      ],
      tail: 'Por eso el prototipo apuesta por combinar VR + insulinización + bajo costo en una misma herramienta.',
      meta: { read: '45s', tag: 'LIMITS' },
      related: [4, 1]
    },
  ];

  const [active, setActive] = React.useState(0);
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const current = faqs[active];

  return (
    <section id="faq" ref={rootRef} className="faq-section">
      <div className="container">
        <div className="faq-marquee" aria-hidden="true">
          <div className="faq-marquee-track">
            {[0,1].map(dup => (
              <div key={dup} className="faq-marquee-row">
                {Array.from({length: 6}).map((_, k) => (
                  <span key={k}>
                    <span className="faq-marquee-asterisk">*</span>
                    PREGUNTAS FRECUENTES
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <header className="faq-head">
          <div>
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-bar"/>
              011 · F.A.Q
              <span className="faq-eyebrow-count">{String(faqs.length).padStart(2,'0')} dudas resueltas</span>
            </div>
            <h2 className="faq-title">
              Lo que mas <em className="faq-title-em">preguntan</em><br/>
              cuando explicamos el proyecto.
            </h2>
          </div>
        </header>

        <div className="faq-shell">
          <aside className="faq-aside">
            <div className="faq-aside-label mono">Índice de dudas</div>
            <ol className="faq-aside-list">
              {faqs.map((f, i) => {
                const isActive = i === active;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      className={`faq-aside-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                    >
                      <span className="faq-aside-num mono">{String(i+1).padStart(2,'0')}</span>
                      <span className="faq-aside-text">
                        <span className="faq-aside-cat mono">{f.cat}</span>
                        <span className="faq-aside-q">{f.q}</span>
                      </span>
                      <span className="faq-aside-arrow" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="faq-aside-foot">
              <span className="mono">¿Tienes otra duda?</span>
              <a href="#contacto" className="faq-aside-cta">
                Escríbenos
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </aside>

          <article className="faq-panel" key={active}>
            <div className="faq-panel-head">
              <span className="faq-panel-tag mono">{current.meta.tag}</span>
              <span className="faq-panel-meta mono">
                <span className="faq-panel-dot"/>
                LECTURA · {current.meta.read}
              </span>
            </div>

            <div className="faq-panel-marker mono">
              <span className="faq-panel-marker-q">Q</span>
              <span className="faq-panel-marker-num">{String(active+1).padStart(2,'0')} / {String(faqs.length).padStart(2,'0')}</span>
            </div>

            <h3 className="faq-panel-question">{current.q}</h3>

            <div className="faq-panel-answer">
              <span className="faq-panel-answer-mark mono">A</span>
              <div className="faq-panel-answer-body">
                <p>{current.a}</p>
                {current.table && (
                  <div className="faq-panel-table">
                    <div className="faq-panel-table-head">
                      <span className="mono">Plataforma</span>
                      <span className="mono">Limitación</span>
                    </div>
                    {current.table.map((row, i) => (
                      <div key={i} className="faq-panel-table-row">
                        <span className="faq-panel-table-platform">{row.platform}</span>
                        <span className="faq-panel-table-limit">{row.limit}</span>
                      </div>
                    ))}
                  </div>
                )}
                {current.tail && <p className="faq-panel-tail">{current.tail}</p>}
              </div>
            </div>

            <footer className="faq-panel-foot">
              <div className="faq-panel-related">
                <span className="mono">También preguntan</span>
                <div className="faq-panel-related-list">
                  {current.related.map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="faq-panel-related-pill"
                      onClick={() => setActive(idx)}
                    >
                      {faqs[idx].q}
                    </button>
                  ))}
                </div>
              </div>
              <div className="faq-panel-nav">
                <button
                  type="button"
                  className="faq-panel-nav-btn"
                  onClick={() => setActive((active - 1 + faqs.length) % faqs.length)}
                  aria-label="Anterior"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  type="button"
                  className="faq-panel-nav-btn"
                  onClick={() => setActive((active + 1) % faqs.length)}
                  aria-label="Siguiente"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
          padding-top: 96px !important;
          padding-bottom: 120px !important;
        }
        .faq-marquee {
          position: relative;
          margin: 0 calc(50% - 50vw) 64px;
          width: 100vw;
          overflow: hidden;
          opacity: 0.08;
          pointer-events: none;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
        .faq-marquee-track {
          display: inline-flex;
          animation: faq-marquee 32s linear infinite;
          white-space: nowrap;
        }
        .faq-marquee-row {
          display: inline-flex;
          gap: 48px;
          padding-right: 48px;
          font-family: var(--font-display);
          font-size: clamp(60px, 11vw, 140px);
          font-weight: 600;
          letter-spacing: -0.05em;
          color: var(--color-white);
          line-height: 1;
        }
        .faq-marquee-row span { display: inline-flex; align-items: center; gap: 28px; }
        .faq-marquee-asterisk {
          color: var(--color-bright-blue);
          font-size: 0.6em;
          animation: faq-spin 8s linear infinite;
          display: inline-block;
        }
        @keyframes faq-marquee { to { transform: translateX(-50%); } }
        @keyframes faq-spin { to { transform: rotate(360deg); } }

        /* HEAD */
        .faq-head {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 56px;
        }
        .faq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--color-bright-blue);
          margin-bottom: 24px;
          text-transform: uppercase;
        }
        .faq-eyebrow-bar { width: 38px; height: 1px; background: var(--color-bright-blue); }
        .faq-eyebrow-count {
          color: var(--color-muted-violet);
          opacity: 0.6;
          letter-spacing: 0.18em;
        }
        .faq-title {
          font-family: var(--font-display);
          font-size: clamp(38px, 5.2vw, 72px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.045em;
          color: var(--color-white);
          margin: 0;
          text-wrap: balance;
        }
        .faq-title-em {
          font-style: italic;
          font-weight: 500;
          color: var(--color-bright-blue);
        }
        .faq-head-aside {
          display: flex;
          gap: 36px;
          justify-content: flex-end;
          padding-bottom: 8px;
        }
        .faq-stat strong {
          display: block;
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: var(--color-white);
          line-height: 1;
        }
        .faq-stat span {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
          margin-top: 6px;
          display: inline-block;
        }

        /* SHELL */
        .faq-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
          gap: 0;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(83,80,204,0.32);
          background: rgba(20,20,80,0.4);
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .9s cubic-bezier(.2,.8,.2,1) .15s, transform .9s cubic-bezier(.2,.8,.2,1) .15s;
        }
        .faq-section.in .faq-shell { opacity: 1; transform: none; }

        /* ASIDE LIST */
        .faq-aside {
          padding: 28px 22px;
          border-right: 1px solid rgba(83,80,204,0.28);
          background: rgba(13,13,61,0.35);
          display: flex;
          flex-direction: column;
        }
        .faq-aside-label {
          font-size: 10px;
          letter-spacing: 0.28em;
          color: var(--color-muted-violet);
          opacity: 0.7;
          padding: 6px 12px 18px;
          border-bottom: 1px dashed rgba(83,80,204,0.3);
          margin-bottom: 14px;
          text-transform: uppercase;
        }
        .faq-aside-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .faq-aside-item {
          width: 100%;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 16px;
          align-items: center;
          text-align: left;
          padding: 14px 14px;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 14px;
          cursor: pointer;
          color: var(--color-ghost-frost);
          transition: background .3s, border-color .3s, transform .3s;
          font-family: var(--font-display);
        }
        .faq-aside-item:hover {
          background: rgba(83,80,204,0.12);
          transform: translateX(3px);
        }
        .faq-aside-item.is-active {
          background: rgba(0,177,255,0.16);
          border-color: rgba(0,177,255,0.5);
        }
        .faq-aside-num {
          font-size: 12px;
          letter-spacing: 0.18em;
          color: var(--color-muted-violet);
          opacity: 0.7;
          align-self: start;
          padding-top: 2px;
        }
        .faq-aside-item.is-active .faq-aside-num {
          color: var(--color-bright-blue);
          opacity: 1;
        }
        .faq-aside-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .faq-aside-cat {
          font-size: 9px;
          letter-spacing: 0.22em;
          color: var(--color-vivid-green);
          opacity: 0.7;
          text-transform: uppercase;
        }
        .faq-aside-item.is-active .faq-aside-cat { color: var(--color-vivid-green); opacity: 1; }
        .faq-aside-q {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.35;
          text-wrap: balance;
        }
        .faq-aside-arrow {
          opacity: 0;
          transform: translateX(-6px);
          color: var(--color-bright-blue);
          transition: opacity .3s, transform .3s;
        }
        .faq-aside-item.is-active .faq-aside-arrow,
        .faq-aside-item:hover .faq-aside-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .faq-aside-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 12px 6px;
          margin-top: 14px;
          border-top: 1px dashed rgba(83,80,204,0.3);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }
        .faq-aside-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(0,177,255,0.12);
          border: 1px solid rgba(0,177,255,0.45);
          color: var(--color-bright-blue);
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 0.18em;
          font-family: var(--font-mono);
          transition: background .25s, transform .25s;
        }
        .faq-aside-cta:hover {
          background: rgba(0,177,255,0.22);
          transform: translateY(-1px);
        }

        /* PANEL */
        .faq-panel {
          position: relative;
          padding: 48px 56px;
          overflow: hidden;
          animation: faq-panel-in .55s cubic-bezier(.2,.8,.2,1);
        }
        @keyframes faq-panel-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }
        .faq-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            transparent;
          pointer-events: none;
        }
        .faq-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 36px;
          position: relative;
          z-index: 2;
        }
        .faq-panel-tag {
          font-size: 10px;
          letter-spacing: 0.2em;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(0,255,170,0.12);
          color: var(--color-vivid-green);
          border: 1px solid rgba(0,255,170,0.4);
          text-transform: uppercase;
        }
        .faq-panel-meta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }
        .faq-panel-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--color-bright-blue);
          animation: faq-dot 2.4s ease-out infinite;
        }
        @keyframes faq-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.7); }
        }

        .faq-panel-marker {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 14px;
          position: relative;
          z-index: 2;
        }
        .faq-panel-marker-q {
          font-family: var(--font-display);
          font-size: 64px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: -0.05em;
          background: var(--color-action-violet);
          -webkit-background-clip: text;
                  background-clip: text;
          color: transparent;
        }
        .faq-panel-marker-num {
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
        }

        .faq-panel-question {
          font-family: var(--font-display);
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: var(--color-white);
          margin: 0 0 32px;
          text-wrap: balance;
          position: relative;
          z-index: 2;
        }

        .faq-panel-answer {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 18px;
          align-items: start;
          padding: 24px;
          border-radius: 18px;
          background: rgba(13,13,61,0.55);
          border: 1px solid rgba(83,80,204,0.32);
          margin-bottom: 36px;
          position: relative;
          z-index: 2;
        }
        .faq-panel-answer-mark {
          font-size: 22px;
          font-weight: 600;
          color: var(--color-vivid-green);
          letter-spacing: -0.04em;
          line-height: 1;
          padding-top: 2px;
        }
        .faq-panel-answer p {
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: var(--color-ghost-frost);
          opacity: 0.92;
          text-wrap: pretty;
        }
        .faq-panel-answer-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .faq-panel-table {
          display: grid;
          grid-template-columns: minmax(0, 0.4fr) minmax(0, 1fr);
          border: 1px solid rgba(83,80,204,0.32);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(13,13,61,0.4);
        }
        .faq-panel-table-head {
          display: contents;
        }
        .faq-panel-table-head span {
          padding: 10px 16px;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--color-bright-blue);
          background: rgba(0,177,255,0.08);
          border-bottom: 1px solid rgba(83,80,204,0.32);
          text-transform: uppercase;
        }
        .faq-panel-table-head span:first-child {
          border-right: 1px solid rgba(83,80,204,0.32);
        }
        .faq-panel-table-row {
          display: contents;
        }
        .faq-panel-table-row > * {
          padding: 12px 16px;
          font-size: 13.5px;
          line-height: 1.5;
        }
        .faq-panel-table-row:not(:last-child) > * {
          border-bottom: 1px dashed rgba(83,80,204,0.22);
        }
        .faq-panel-table-platform {
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--color-white);
          border-right: 1px solid rgba(83,80,204,0.32);
        }
        .faq-panel-table-limit {
          color: var(--color-ghost-frost);
          opacity: 0.88;
        }
        .faq-panel-tail {
          margin: 0 !important;
          font-size: 14px !important;
          color: var(--color-muted-violet) !important;
          opacity: 0.88 !important;
          font-style: italic;
        }

        .faq-panel-foot {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        .faq-panel-related { display: flex; flex-direction: column; gap: 10px; min-width: 0; flex: 1; }
        .faq-panel-related > span {
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }
        .faq-panel-related-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .faq-panel-related-pill {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(83,80,204,0.18);
          border: 1px solid rgba(83,80,204,0.4);
          color: var(--color-ghost-frost);
          font-size: 12px;
          font-family: var(--font-display);
          cursor: pointer;
          transition: background .25s, border-color .25s, transform .25s;
          text-align: left;
          line-height: 1.3;
          max-width: 280px;
        }
        .faq-panel-related-pill:hover {
          background: rgba(0,177,255,0.2);
          border-color: rgba(0,177,255,0.6);
          transform: translateY(-1px);
        }

        .faq-panel-nav {
          display: inline-flex;
          gap: 8px;
        }
        .faq-panel-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(35,34,105,0.6);
          border: 1px solid rgba(83,80,204,0.5);
          color: var(--color-ghost-frost);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .25s, border-color .25s, transform .25s, color .25s;
        }
        .faq-panel-nav-btn:hover {
          background: var(--color-action-violet);
          border-color: var(--color-action-violet);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        @media (max-width: 980px) {
          .faq-head { grid-template-columns: 1fr; gap: 28px; align-items: start; }
          .faq-head-aside { justify-content: flex-start; gap: 28px; }
          .faq-shell { grid-template-columns: 1fr; }
          .faq-aside { border-right: none; border-bottom: 1px solid rgba(83,80,204,0.28); }
          .faq-panel { padding: 40px 32px; }
          .faq-panel-marker-q { font-size: 48px; }
        }
        @media (max-width: 600px) {
          .faq-panel { padding: 32px 22px; }
          .faq-panel-answer { padding: 20px; grid-template-columns: 24px 1fr; gap: 12px; }
          .faq-panel-related-pill { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}

// ----- TEAM -----
export function TeamSection() {
  const team = [
    {
      init: 'SC',
      name: 'Santiago Cardona Prada',
      role: 'Co-investigador',
      sub: 'Ingeniería de Sistemas, UNAB',
      accent: '#00b1ff',
    },
    {
      init: 'BL',
      name: 'Brayan Steven León Martínez',
      role: 'Co-investigador',
      sub: 'Ingeniería de Sistemas, UNAB',
      accent: '#00ffaa',
    },
    {
      init: 'LP',
      name: 'Leonardo Stiven Pardo Niño',
      role: 'Director',
      sub: 'Proyecto de Grado',
      accent: '#b1a6f6',
    },
  ];

  return (
    <section id="contacto">
      <div className="container">
        <SectionHeader
          eyebrow="012 · EQUIPO"
          title={<>Equipo de <span className="text-blue">investigación</span>.</>}
          subtitle="Universidad Autónoma de Bucaramanga (UNAB) · Facultad de Ingeniería, Programa de Ingeniería de Sistemas."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 56,
        }} className="team-grid">
          {team.map((m, i) => (
            <div key={i} className="reveal team-card" data-delay={i * 100} style={{ '--accent': m.accent }}>
              <div className="team-card-avatar">
                <span className="team-card-init">{m.init}</span>
              </div>
              <div className="team-card-role mono">{m.role.toUpperCase()}</div>
              <div className="team-card-name heading">{m.name}</div>
              <div className="team-card-sub body">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* institution */}
        <div className="reveal" style={{
          padding: 40,
          borderRadius: 32,
          background: 'rgba(83,80,204,0.15)',
          border: '1px solid rgba(83,80,204,0.5)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          alignItems: 'center',
        }} className="inst-grid">
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-bright-blue)', marginBottom: 10 }}>UNIVERSIDAD</div>
            <div className="subheading" style={{ fontWeight: 600 }}>UNAB</div>
            <div className="body text-dim" style={{ opacity: 0.7, marginTop: 4 }}>Universidad Autónoma de Bucaramanga · Colombia</div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-vivid-green)', marginBottom: 10 }}>ASESOR TEMÁTICO</div>
            <div className="subheading" style={{ fontWeight: 600 }}>FOSUNAB</div>
            <div className="body text-dim" style={{ opacity: 0.7, marginTop: 4 }}>Fundación Clínica FOSUNAB</div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-muted-violet)', marginBottom: 10 }}>VALIDACIÓN CLÍNICA</div>
            <div className="subheading" style={{ fontWeight: 600 }}>Fundación Clínica UNAB</div>
            <div className="body text-dim" style={{ opacity: 0.7, marginTop: 4 }}>Bucaramanga, Colombia</div>
          </div>
        </div>

        <style>{`
          .team-card {
            padding: 32px;
            border-radius: 24px;
            background: rgba(35,34,105,0.6);
            border: 2px solid rgba(83,80,204,0.4);
            position: relative;
            overflow: hidden;
            transition:
              background .35s cubic-bezier(.2,.8,.2,1),
              border-color .35s cubic-bezier(.2,.8,.2,1),
              transform .35s cubic-bezier(.2,.8,.2,1),
              box-shadow .35s;
          }
          .team-card:hover {
            background: var(--color-white);
            border-color: var(--color-action-violet);
            transform: translateY(-6px);
            box-shadow: 0 24px 48px -24px rgba(83,80,204,0.55);
          }
          .team-card-avatar {
            width: 72px; height: 72px;
            border-radius: 20px;
            background: color-mix(in srgb, var(--accent) 14%, transparent);
            border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 24px;
            transition: background .35s, border-color .35s;
          }
          .team-card:hover .team-card-avatar {
            background: color-mix(in srgb, var(--color-action-violet) 14%, white);
            border-color: var(--color-action-violet);
          }
          .team-card-init {
            font-size: 24px;
            font-weight: 600;
            color: var(--accent);
            letter-spacing: 0.04em;
            transition: color .35s;
          }
          .team-card:hover .team-card-init { color: var(--color-action-violet); }
          .team-card-role {
            font-size: 10px;
            letter-spacing: 0.22em;
            color: var(--accent);
            margin-bottom: 10px;
            transition: color .35s;
          }
          .team-card:hover .team-card-role { color: var(--color-action-violet); }
          .team-card-name {
            font-size: 20px;
            margin-bottom: 6px;
            line-height: 1.3;
            color: var(--color-white);
            transition: color .35s;
          }
          .team-card:hover .team-card-name { color: var(--color-action-violet); }
          .team-card-sub {
            opacity: 0.78;
            color: var(--color-ghost-frost);
            transition: color .35s, opacity .35s;
          }
          .team-card:hover .team-card-sub {
            color: var(--color-action-violet);
            opacity: 0.92;
          }

          @media (max-width: 880px) {
            .team-grid { grid-template-columns: 1fr !important; }
            .inst-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ----- FOOTER -----
export function Footer() {
  return (
    <footer style={{
      position: 'relative',
      paddingTop: 80,
      paddingBottom: 40,
      background: '#0a0a30',
      overflow: 'hidden',
    }}>
      {/* footer ambient glow removed */}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* huge text */}
        <div className="reveal" style={{
          textAlign: 'center',
          marginBottom: 64,
        }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.22em', color: 'var(--color-bright-blue)', marginBottom: 16 }}>
            INSULINIZACIÓN · VR · 2026
          </div>
          <h2 style={{
            fontSize: 'clamp(48px, 9vw, 140px)',
            lineHeight: 0.92,
            letterSpacing: '-0.06em',
            fontWeight: 600,
            color: 'var(--color-white)',
            margin: 0,
          }}>
            Insulin<span style={{ color: 'var(--color-bright-blue)' }}>·VR</span>
          </h2>
          <div className="mono" style={{
            fontSize: 13,
            letterSpacing: '0.15em',
            color: 'var(--color-muted-violet)',
            marginTop: 24,
            maxWidth: 600,
            margin: '24px auto 0',
          }}>
            Prototipo Educativo Inmersivo · UNAB · Bucaramanga
          </div>
        </div>

        <div className="glow-divider" style={{ marginBottom: 32 }}/>

        {/* footer columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: 48,
          alignItems: 'center',
          flexWrap: 'wrap',
        }} className="footer-grid">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 40, height: 40,
              borderRadius: 11,
              background: '#5350cc',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 24px rgba(0,177,255,0.4)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 8h2l2 8h2l2-8h2l2 8h2l2-8h2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>VR Insulinización 2026</div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-muted-violet)' }}>
                © 2026 · UNAB · BGA
              </div>
            </div>
          </div>

          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--color-muted-violet)', textTransform: 'uppercase' }}>
            <span className="text-blue">●</span>&nbsp; SYS.ACTIVE · V1.0.0
          </div>

          <a href="#inicio" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 20px',
            borderRadius: 999,
            border: '1px solid var(--color-outline-violet)',
            color: 'var(--color-white)',
            textDecoration: 'none',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'all .25s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(83,80,204,0.2)'; e.currentTarget.style.borderColor = 'var(--color-action-violet)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--color-outline-violet)'; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5m-7 7l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver arriba
          </a>
        </div>

        <style>{`
          @media (max-width: 720px) {
            .footer-grid { grid-template-columns: 1fr !important; text-align: center; justify-items: center; }
          }
        `}</style>
      </div>
    </footer>
  );
}

// ============================================
// LEGAL & ETHICAL — compact holographic grid
// ============================================
export function LegalSection() {
  const items = [
    {
      n: '01',
      title: 'Protección de datos',
      tag: 'PRIVACIDAD',
      points: [
        'Datos almacenados localmente',
        'Sin transferencia a terceros',
        'Privacidad del usuario'
      ],
      color: '#00b1ff',
      icon: 'lock'
    },
    {
      n: '02',
      title: 'Accesibilidad',
      tag: 'WCAG 2.1',
      points: [
        'Baja alfabetización digital',
        'Subtítulos y navegación simple',
        'Lineamientos WCAG 2.1'
      ],
      color: '#00ffaa',
      icon: 'a11y'
    },
    {
      n: '03',
      title: 'Uso educativo',
      tag: 'ÁMBITO',
      points: [
        'No reemplaza orientación médica',
        'Apoyo educativo inmersivo',
        'Complemento de la práctica clínica'
      ],
      color: '#b1a6f6',
      icon: 'book'
    },
    {
      n: '04',
      title: 'Calidad del software',
      tag: 'ISO 25010',
      points: [
        'Basado en ISO/IEC 25010',
        'Prioridad en usabilidad',
        'Experiencia de usuario validada'
      ],
      color: '#2ee9ff',
      icon: 'quality'
    },
    {
      n: '05',
      title: 'Acceso tecnológico',
      tag: 'LOW-COST',
      points: [
        'Google Cardboard ~USD 8',
        'Hardware de bajo costo',
        'Contextos con recursos limitados'
      ],
      color: '#5350cc',
      icon: 'cardboard'
    }
  ];

  return (
    <section id="normas">
      <div className="container">
        <div className="legal-head reveal">
          <div className="legal-eyebrow mono">
            <span className="legal-eyebrow-bar"/>
            007.B · NORMAS LEGALES Y ÉTICAS
          </div>
          <h2 className="legal-title">
            Principios <span className="legal-title-accent">regulatorios</span>
          </h2>
          <p className="legal-lede">
            Principios regulatorios, éticos y de accesibilidad considerados en
            el desarrollo del prototipo.
          </p>
        </div>

        <div className="legal-grid">
          {items.map((it, i) => (
            <LegalCard key={i} item={it} index={i} total={items.length}/>
          ))}
        </div>

      </div>

      <style>{`
        #normas {
          position: relative;
          overflow: hidden;
        }

        .legal-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 2;
        }
        .legal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--color-bright-blue);
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .legal-eyebrow-bar {
          width: 36px; height: 1px;
          background: var(--color-bright-blue);
        }
        .legal-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.8vw, 60px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: var(--color-white);
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .legal-title-accent {
          color: var(--color-bright-blue);
        }
        .legal-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: var(--color-ghost-frost);
          opacity: 0.78;
          max-width: 560px;
          margin: 0 auto;
          text-wrap: pretty;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
          z-index: 2;
        }
        .legal-card {
          position: relative;
          padding: 24px 22px;
          border-radius: 22px;
          background: rgba(35,34,105,0.55);
          border: 1.5px solid rgba(83,80,204,0.32);
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition:
            background .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s cubic-bezier(.2,.8,.2,1),
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s,
            opacity .8s cubic-bezier(.2,.8,.2,1);
        }
        .legal-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .legal-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1.5px;
          background: var(--accent);
          opacity: 0.5;
          transition: opacity .4s;
        }
        .legal-card:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          transform: translateY(-6px);
          box-shadow: 0 22px 44px -22px rgba(83,80,204,0.55);
        }
        .legal-card:hover::before { opacity: 0; }

        .legal-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .legal-card-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
          color: var(--accent);
          position: relative;
          transition: background .35s, border-color .35s, color .35s;
        }
        .legal-card:hover .legal-card-icon {
          background: color-mix(in srgb, var(--color-action-violet) 14%, white);
          border-color: var(--color-action-violet);
          color: var(--color-action-violet);
        }
        .legal-card-icon::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          border: 1px dashed color-mix(in srgb, var(--accent) 50%, transparent);
          opacity: 0;
          transition: opacity .4s, transform .8s cubic-bezier(.2,.8,.2,1);
        }
        .legal-card:hover .legal-card-icon::before {
          opacity: 1;
          animation: legal-icon-spin 8s linear infinite;
        }
        @keyframes legal-icon-spin { to { transform: rotate(360deg); } }
        .legal-card-n {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--accent);
          opacity: 0.85;
          padding: 4px 8px;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          transition: color .35s, background .35s, border-color .35s;
        }
        .legal-card:hover .legal-card-n {
          color: var(--color-action-violet);
          border-color: var(--color-action-violet);
          background: color-mix(in srgb, var(--color-action-violet) 10%, white);
        }
        .legal-card-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--color-white);
          margin: 0 0 6px;
          text-wrap: balance;
          transition: color .35s;
        }
        .legal-card:hover .legal-card-title { color: var(--color-action-violet); }
        .legal-card-tag {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.18em;
          color: var(--accent);
          opacity: 0.75;
          margin-bottom: 14px;
          text-transform: uppercase;
          transition: color .35s;
        }
        .legal-card:hover .legal-card-tag { color: var(--color-action-violet); opacity: 1; }
        .legal-card-points {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .legal-card-point {
          display: grid;
          grid-template-columns: 10px 1fr;
          gap: 8px;
          align-items: start;
          font-size: 12px;
          line-height: 1.5;
          color: var(--color-ghost-frost);
          opacity: 0.82;
          transition: color .35s, opacity .35s;
        }
        .legal-card-point::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 7px;
          transition: background .35s;
        }
        .legal-card:hover .legal-card-point {
          color: var(--color-action-violet);
          opacity: 0.92;
        }
        .legal-card:hover .legal-card-point::before {
          background: var(--color-action-violet);
        }

        /* connecting lines between cards (desktop) */
        .legal-grid > .legal-card:not(:last-child)::after {
          z-index: -1;
        }

        .legal-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .legal-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--color-bright-blue);
          opacity: 0.5;
          animation: legal-particle-drift linear infinite;
          box-shadow: 0 0 6px var(--color-bright-blue);
        }
        @keyframes legal-particle-drift {
          0%   { transform: translate(0, 0); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { transform: translate(40px, -80px); opacity: 0; }
        }

        @media (max-width: 1180px) {
          .legal-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 760px) {
          .legal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export function LegalCard({ item, index, total }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), index * 90);
          io.disconnect();
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);

    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--my', `${ev.clientY - r.top}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => { io.disconnect(); el.removeEventListener('mousemove', onMove); };
  }, [index]);

  return (
    <article ref={ref} className="legal-card" style={{ '--accent': item.color }}>
      <header className="legal-card-head">
        <div className="legal-card-icon">{LegalIcons[item.icon]}</div>
        <span className="legal-card-n">{item.n}</span>
      </header>
      <h3 className="legal-card-title">{item.title}</h3>
      <div className="legal-card-tag">{item.tag}</div>
      <ul className="legal-card-points">
        {item.points.map((p, i) => (
          <li key={i} className="legal-card-point">{p}</li>
        ))}
      </ul>
    </article>
  );
}

export const LegalIcons = {
  lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.4" fill="currentColor"/>
    </svg>
  ),
  a11y: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2" fill="currentColor"/>
      <path d="M12 8v6m-5-3l5-1 5 1m-7 3l2 6m5-6l-2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 5h6a2 2 0 0 1 2 2v13a1.5 1.5 0 0 0 1.5-1.5H20V5h-6a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      <circle cx="17" cy="9" r="1.2" fill="currentColor"/>
    </svg>
  ),
  quality: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 4v6c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 12.5l2.2 2.2L15 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  cardboard: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="8.5" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="15.5" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M11.5 17 L12 16 L12.5 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  )
};

// ============================================
// RESULTADOS ESPERADOS — dashboard metrics
// ============================================
export function ResultsSection() {
  const results = [
    {
      n: '01',
      title: 'Mejor comprensión del procedimiento',
      desc: 'Facilitar el aprendizaje paso a paso de la técnica de insulinización mediante simulación inmersiva en VR. El paciente observa, repite y consolida cada fase sin riesgo real.',
      bullets: [
        'Microaprendizaje en módulos cortos',
        'Repetición ilimitada sin presión clínica',
        'Feedback inmediato por error detectado'
      ],
      metric: '+45%',
      label: 'Retención esperada',
      sub: 'Medido con cuestionario post-sesión',
      color: '#00b1ff',
      icon: 'brain',
      progress: 76
    },
    {
      n: '02',
      title: 'Reducción de errores técnicos',
      desc: 'Disminuir errores asociados a lipohipertrofia, mala rotación de sitios, reutilización de agujas y vía de administración incorrecta en pacientes con DM2.',
      bullets: [
        'Rotación correcta de zonas anatómicas',
        'Selección adecuada de aguja y dosis',
        'Cero reutilización de material'
      ],
      metric: '−38%',
      label: 'Errores típicos',
      sub: 'Comparado contra grupo control',
      color: '#00ffaa',
      icon: 'shield',
      progress: 62
    },
    {
      n: '03',
      title: 'Mayor adherencia terapéutica',
      desc: 'Fortalecer la confianza y autonomía del paciente al iniciar insulinoterapia, reduciendo la ansiedad asociada a la autoaplicación.',
      bullets: [
        'Reducción de ansiedad pre-aplicación',
        'Autonomía sin acompañante',
        'Continuidad del tratamiento >6 meses'
      ],
      metric: '+52%',
      label: 'Adherencia 6m',
      sub: 'Seguimiento longitudinal post-uso',
      color: '#b1a6f6',
      icon: 'pulse',
      progress: 84
    },
    {
      n: '04',
      title: 'Accesibilidad educativa',
      desc: 'Permitir acceso a formación inmersiva en zonas con recursos limitados, usando smartphones Android y Google Cardboard de bajo costo.',
      bullets: [
        'APK offline, sin internet requerido',
        'Hardware bajo costo (~USD 8)',
        'Escalable a clínicas rurales'
      ],
      metric: 'USD 8',
      label: 'Costo hardware',
      sub: 'Versus headsets premium >USD 300',
      color: '#2ee9ff',
      icon: 'globe',
      progress: 92
    }
  ];

  return (
    <section id="resultados">
      <div className="container">
        <div className="results-head reveal">
          <div className="results-eyebrow mono">
            <span className="results-eyebrow-bar"/>
            008.B · RESULTADOS ESPERADOS
          </div>
          <h2 className="results-title">
            Impactos <span className="results-title-accent">proyectados</span>
          </h2>
          <p className="results-lede">
            Resultados esperados del prototipo inmersivo en educación
            para insulinización en pacientes con diabetes tipo II.
          </p>
        </div>

        <div className="results-grid">
          {results.map((r, i) => (
            <ResultCard key={i} item={r} index={i}/>
          ))}
        </div>

      </div>

      <style>{`
        #resultados {
          position: relative;
          overflow: hidden;
        }

        .results-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 2;
        }
        .results-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--color-vivid-green);
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .results-eyebrow-bar {
          width: 36px; height: 1px;
          background: var(--color-vivid-green);
        }
        .results-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.8vw, 60px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: var(--color-white);
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .results-title-accent {
          color: var(--color-vivid-green);
        }
        .results-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: var(--color-ghost-frost);
          opacity: 0.78;
          max-width: 580px;
          margin: 0 auto;
          text-wrap: pretty;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }
        .result-card {
          position: relative;
          padding: 28px 26px;
          border-radius: 24px;
          background: rgba(35,34,105,0.5);
          border: 1.5px solid rgba(83,80,204,0.32);
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition:
            background .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s cubic-bezier(.2,.8,.2,1),
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s,
            opacity .9s cubic-bezier(.2,.8,.2,1);
        }
        .result-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .result-card:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          transform: translateY(-8px);
          box-shadow: 0 28px 56px -28px rgba(83,80,204,0.55);
        }
        .result-card::before {
          content: '';
          position: absolute;
          top: -1px; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          opacity: 0.6;
          transition: background .35s, opacity .35s;
        }
        .result-card:hover::before {
          background: var(--color-action-violet);
          opacity: 1;
        }
        .result-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 26px;
        }
        .result-card-icon-wrap {
          position: relative;
          width: 56px; height: 56px;
        }
        .result-card-icon {
          width: 100%; height: 100%;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
          color: var(--accent);
          transition: background .35s, border-color .35s, color .35s;
        }
        .result-card:hover .result-card-icon {
          background: color-mix(in srgb, var(--color-action-violet) 14%, white);
          border-color: var(--color-action-violet);
          color: var(--color-action-violet);
        }
        .result-card:hover .result-card-n,
        .result-card:hover .result-card-title,
        .result-card:hover .result-card-desc,
        .result-card:hover .result-card-bullet,
        .result-card:hover .result-card-metric,
        .result-card:hover .result-card-label,
        .result-card:hover .result-card-sub {
          color: var(--color-action-violet);
        }
        .result-card:hover .result-card-bullet::before {
          border-color: var(--color-action-violet);
        }
        .result-card:hover .result-card-bar-fill {
          background: var(--color-action-violet);
        }
        .result-card-n,
        .result-card-title,
        .result-card-desc,
        .result-card-bullet,
        .result-card-metric,
        .result-card-label,
        .result-card-sub {
          transition: color .35s;
        }
        .result-card-bullet::before { transition: border-color .35s; }
        .result-card-bar-fill { transition: background .35s, transform 1.4s cubic-bezier(.2,.8,.2,1); }
        .result-card-icon-ring {
          position: absolute;
          inset: -6px;
          border-radius: 18px;
          border: 1px dashed color-mix(in srgb, var(--accent) 40%, transparent);
          opacity: 0;
          transition: opacity .4s;
        }
        .result-card:hover .result-card-icon-ring {
          opacity: 1;
          animation: result-ring-spin 12s linear infinite;
        }
        @keyframes result-ring-spin { to { transform: rotate(360deg); } }
        .result-card-n {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--accent);
          opacity: 0.85;
        }

        .result-card-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          letter-spacing: -0.018em;
          line-height: 1.25;
          color: var(--color-white);
          margin: 0 0 12px;
          text-wrap: balance;
          min-height: 44px;
        }
        .result-card-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--color-ghost-frost);
          opacity: 0.78;
          margin: 0 0 20px;
          text-wrap: pretty;
          max-width: 56ch;
        }
        .result-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px dashed rgba(83,80,204,0.32);
        }
        .result-card-bullet {
          position: relative;
          padding-left: 22px;
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--color-ghost-frost);
          opacity: 0.82;
        }
        .result-card-bullet::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 12px;
          height: 6px;
          border-left: 1.5px solid var(--accent);
          border-bottom: 1.5px solid var(--accent);
          transform: rotate(-45deg);
        }
        .result-card-sub {
          margin-top: 10px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
          opacity: 0.7;
        }

        .result-card-metric-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .result-card-metric {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.035em;
          color: var(--accent);
          line-height: 1;
        }
        .result-card-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.22em;
          color: var(--color-muted-violet);
          text-transform: uppercase;
        }

        .result-card-bar {
          height: 4px;
          border-radius: 2px;
          background: color-mix(in srgb, var(--accent) 14%, transparent);
          overflow: hidden;
          position: relative;
        }
        .result-card-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.4s cubic-bezier(.2,.8,.2,1);
        }
        .result-card.in .result-card-bar-fill {
          transform: scaleX(var(--progress, 0.5));
        }
        .result-card-bar-shine {
          position: absolute;
          top: 0; bottom: 0;
          width: 36px;
          background: rgba(255,255,255,0.18);
          animation: result-shine 2.6s ease-in-out infinite;
          mix-blend-mode: overlay;
        }
        @keyframes result-shine {
          0%   { left: -36px; }
          100% { left: 100%; }
        }

        @media (max-width: 760px) {
          .results-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export const ResultIcons = {
  brain: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M9 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 1 5 3 3 0 0 0 5 1 3 3 0 0 0 5-1 3 3 0 0 0 1-5 3 3 0 0 0-2-5 3 3 0 0 0-3-3 3 3 0 0 0-2 1 3 3 0 0 0-2-1z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 5v14M15 5v14M5 11h4m6 0h4M5 14h4m6 0h4" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 4v6c0 4.5-3.5 7.5-8 8-4.5-.5-8-3.5-8-8V7l8-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M16 11l-5 5-3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pulse: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
};

export function ResultCard({ item, index }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('in'), index * 110);
          io.disconnect();
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article ref={ref} className="result-card" style={{
      '--accent': item.color,
      '--progress': item.progress / 100
    }}>
      <header className="result-card-head">
        <div className="result-card-icon-wrap">
          <div className="result-card-icon">{ResultIcons[item.icon]}</div>
          <div className="result-card-icon-ring"/>
        </div>
        <span className="result-card-n">{item.n}</span>
      </header>

      <h3 className="result-card-title">{item.title}</h3>
      <p className="result-card-desc">{item.desc}</p>

      {item.bullets && (
        <ul className="result-card-bullets">
          {item.bullets.map((b, i) => (
            <li key={i} className="result-card-bullet">{b}</li>
          ))}
        </ul>
      )}

      <div className="result-card-metric-row">
        <div className="result-card-metric-block">
          <span className="result-card-metric">{item.metric}</span>
          <span className="result-card-label">{item.label}</span>
        </div>
      </div>
      <div className="result-card-bar">
        <span className="result-card-bar-fill"/>
        <span className="result-card-bar-shine"/>
      </div>
      {item.sub && <div className="result-card-sub">{item.sub}</div>}
    </article>
  );
}

// ============================================
// MARCO TEÓRICO — connected concept cards
// ============================================
export function FrameworkSection() {
  const concepts = [
    {
      n: '01',
      title: 'Inmersión y presencia',
      desc: 'La realidad virtual favorece la sensación de presencia y mejora la atención durante el aprendizaje.',
      icon: 'immersion',
      color: '#00b1ff'
    },
    {
      n: '02',
      title: 'Aprendizaje experiencial',
      desc: 'El usuario aprende mediante práctica interactiva y simulación contextual.',
      icon: 'learn',
      color: '#00ffaa'
    },
    {
      n: '03',
      title: 'Educación procedural',
      desc: 'La enseñanza paso a paso facilita la comprensión de procesos clínicos complejos.',
      icon: 'steps',
      color: '#b1a6f6'
    },
    {
      n: '04',
      title: 'Accesibilidad tecnológica',
      desc: 'El uso de Google Cardboard permite experiencias inmersivas de bajo costo.',
      icon: 'access',
      color: '#2ee9ff'
    }
  ];

  return (
    <section id="marco-teorico">
      <div className="container">
        <div className="fw-head reveal">
          <div className="fw-eyebrow mono">008.B · MARCO TEÓRICO</div>
          <h2 className="fw-title">Fundamentos <span className="fw-title-accent">conceptuales</span></h2>
          <p className="fw-lede">
            Fundamentos conceptuales que sustentan el desarrollo del prototipo inmersivo.
          </p>
        </div>

        <div className="fw-grid">
          {/* connector svg */}
          <svg className="fw-connectors" viewBox="0 0 1000 360" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 130 110 Q 250 60 380 110" stroke="#5350cc" strokeWidth="1" strokeDasharray="3 6" fill="none" opacity="0.35" className="fw-conn"/>
            <path d="M 620 110 Q 750 60 870 110" stroke="#5350cc" strokeWidth="1" strokeDasharray="3 6" fill="none" opacity="0.35" className="fw-conn"/>
            <path d="M 130 250 Q 320 320 500 250" stroke="#5350cc" strokeWidth="1" strokeDasharray="3 6" fill="none" opacity="0.35" className="fw-conn"/>
            <path d="M 500 250 Q 680 320 870 250" stroke="#5350cc" strokeWidth="1" strokeDasharray="3 6" fill="none" opacity="0.35" className="fw-conn"/>
          </svg>

          {concepts.map((c, i) => <FrameworkCard key={i} item={c} index={i}/>)}
        </div>
      </div>

      <style>{`
        #marco-teorico {
          position: relative;
          overflow: hidden;
          background: var(--color-white);
          color: var(--color-midnight-indigo);
          margin: 0;
          border-left: 1px solid #ececf5;
          border-right: 1px solid #ececf5;
        }
        #marco-teorico::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(640px, 60%);
          height: 1px;
          background: #d8d8e3;
          pointer-events: none;
        }
        #estado-arte::before,
        #referentes::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(640px, 60%);
          height: 1px;
          background: #d8d8e3;
          pointer-events: none;
        }

        .fw-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 64px;
        }
        .fw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.28em;
          color: var(--color-action-violet);
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .fw-eyebrow-bar { width: 36px; height: 1px; background: var(--color-action-violet); }
        .fw-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.8vw, 60px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: var(--color-midnight-indigo);
          margin: 0 0 16px;
          text-wrap: balance;
        }
        .fw-title-accent { color: var(--color-action-violet); }
        .fw-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: #4a4a6e;
          max-width: 560px;
          margin: 0 auto;
        }

        .fw-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .fw-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        .fw-conn {
          stroke-dasharray: 3 6;
          animation: fw-conn 6s linear infinite;
        }
        @keyframes fw-conn { to { stroke-dashoffset: -36; } }

        .fw-card {
          position: relative;
          padding: 28px 24px;
          border-radius: 22px;
          background: #fbfbfd;
          border: 1.5px solid #ececf5;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transform: translateY(28px);
          transition:
            background .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s cubic-bezier(.2,.8,.2,1),
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s,
            opacity .9s cubic-bezier(.2,.8,.2,1);
        }
        .fw-card.in { opacity: 1; transform: translateY(0); }
        .fw-card:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          transform: translateY(-6px);
          box-shadow: 0 22px 44px -22px rgba(83,80,204,0.45);
        }
        .fw-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .fw-card-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--accent) 14%, white);
          border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
          color: var(--accent);
          transition: background .35s, border-color .35s, color .35s;
        }
        .fw-card:hover .fw-card-icon {
          background: color-mix(in srgb, var(--color-action-violet) 14%, white);
          border-color: var(--color-action-violet);
          color: var(--color-action-violet);
        }
        .fw-card-n {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--accent);
          padding: 4px 9px;
          border-radius: 999px;
          background: color-mix(in srgb, var(--accent) 10%, white);
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          transition: color .35s, background .35s, border-color .35s;
        }
        .fw-card:hover .fw-card-n {
          color: var(--color-action-violet);
          background: color-mix(in srgb, var(--color-action-violet) 10%, white);
          border-color: var(--color-action-violet);
        }
        .fw-card-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--color-midnight-indigo);
          margin: 0 0 10px;
          text-wrap: balance;
          transition: color .35s;
        }
        .fw-card:hover .fw-card-title { color: var(--color-action-violet); }
        .fw-card-desc {
          font-size: 13px;
          line-height: 1.55;
          color: #5a5a78;
          margin: 0;
          text-wrap: pretty;
          transition: color .35s;
        }
        .fw-card:hover .fw-card-desc { color: var(--color-action-violet); }

        @media (max-width: 1100px) {
          .fw-grid { grid-template-columns: repeat(2, 1fr); }
          .fw-connectors { display: none; }
        }
        @media (max-width: 560px) {
          .fw-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export const FrameworkIcons = {
  immersion: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="12" r="3.2" fill="currentColor"/>
      <circle cx="12" cy="12" r="6.8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.6"/>
    </svg>
  ),
  learn: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 17a4 4 0 0 1 7-2.5A4 4 0 0 1 17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="6.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="13.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M19 9l2-2m0 0V4m0 3h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  steps: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 20h4v-4M9 20h4v-8M15 20h4V8M21 4l-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  access: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="8.5" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="15.5" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  )
};

export function FrameworkCard({ item, index }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), index * 100); io.disconnect(); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  return (
    <article ref={ref} className="fw-card" style={{ '--accent': item.color }}>
      <header className="fw-card-head">
        <div className="fw-card-icon">{FrameworkIcons[item.icon]}</div>
        <span className="fw-card-n">{item.n}</span>
      </header>
      <h3 className="fw-card-title">{item.title}</h3>
      <p className="fw-card-desc">{item.desc}</p>
    </article>
  );
}

// ============================================
// ESTADO DEL ARTE — comparison matrix
// ============================================
export function StateOfArtSection() {
  const criteria = [
    'Educación inmersiva',
    'Accesibilidad local',
    'Bajo costo',
    'Educación en insulinización'
  ];

  const solutions = [
    {
      name: 'Virti',
      tag: 'VR · Health Training',
      vals: ['yes', 'no', 'no', 'no'],
      color: '#9494a9'
    },
    {
      name: 'SocialDiabetes',
      tag: 'Mobile · DM Mgmt',
      vals: ['no', 'yes', 'yes', 'no'],
      color: '#9494a9'
    },
    {
      name: 'Insulclock',
      tag: 'Device + App',
      vals: ['no', 'yes', 'yes', 'partial'],
      color: '#9494a9'
    },
    {
      name: 'Prototipo propuesto',
      tag: 'Insulin-VR · UNAB',
      vals: ['yes', 'yes', 'yes', 'yes'],
      color: '#00b1ff',
      featured: true
    }
  ];

  return (
    <section id="estado-arte">
      <div className="container">
        <div className="soa-head reveal">
          <div className="soa-eyebrow mono">
            <span className="soa-eyebrow-bar"/>
            008.C · ESTADO DEL ARTE
          </div>
          <h2 className="soa-title">Comparación <span className="soa-title-accent">competitiva</span></h2>
          <p className="soa-lede">
            Comparación del prototipo frente a soluciones existentes en educación y diabetes.
          </p>
        </div>

        <div className="soa-matrix">
          {solutions.map((s, i) => <SoaCard key={i} sol={s} criteria={criteria} index={i}/>)}
        </div>

        <p className="soa-footnote reveal">
          Actualmente no existe una solución que combine <span className="soa-hl">educación en insulinización</span>,
          <span className="soa-hl"> realidad virtual inmersiva</span> y <span className="soa-hl">accesibilidad mediante hardware de bajo costo</span> en una misma plataforma.
        </p>
      </div>

      <style>{`
        #estado-arte {
          position: relative;
          overflow: hidden;
          background: var(--color-white);
          color: var(--color-midnight-indigo);
          margin: 0;
          border-left: 1px solid #ececf5;
          border-right: 1px solid #ececf5;
        }

        .soa-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .soa-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 11px; letter-spacing: 0.28em;
          color: var(--color-action-violet);
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .soa-eyebrow-bar { width: 36px; height: 1px; background: var(--color-action-violet); }
        .soa-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.8vw, 60px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: var(--color-midnight-indigo);
          margin: 0 0 16px;
        }
        .soa-title-accent { color: var(--color-action-violet); }
        .soa-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: #4a4a6e;
          max-width: 560px;
          margin: 0 auto;
        }

        .soa-matrix {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }

        .soa-card {
          position: relative;
          padding: 28px 24px;
          border-radius: 22px;
          background: #fbfbfd;
          border: 1.5px solid #ececf5;
          overflow: hidden;
          opacity: 0;
          transform: translateY(28px);
          transition:
            background .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s cubic-bezier(.2,.8,.2,1),
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s,
            opacity .9s cubic-bezier(.2,.8,.2,1);
        }
        .soa-card.in { opacity: 1; transform: translateY(0); }
        .soa-card:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          transform: translateY(-6px);
          box-shadow: 0 22px 44px -22px rgba(83,80,204,0.45);
        }
        .soa-card.is-featured {
          border-color: var(--color-action-violet);
          background: color-mix(in srgb, var(--color-action-violet) 6%, white);
        }
        .soa-card.is-featured::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--color-action-violet);
          animation: soa-pulse 2.4s ease-in-out infinite;
        }
        @keyframes soa-pulse {
          0%, 100% { opacity: 0.7; }
          50%      { opacity: 1; }
        }
        .soa-card.is-featured:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          box-shadow: 0 24px 48px -22px rgba(83,80,204,0.55);
        }

        .soa-card-head {
          margin-bottom: 22px;
          padding-bottom: 16px;
          border-bottom: 1px dashed #e0e0ec;
        }
        .soa-card-name {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.018em;
          color: var(--color-midnight-indigo);
          margin: 0 0 4px;
          transition: color .35s;
        }
        .soa-card.is-featured .soa-card-name { color: var(--color-action-violet); }
        .soa-card:hover .soa-card-name { color: var(--color-action-violet); }

        .soa-card-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #9494a9;
          text-transform: uppercase;
          transition: color .35s;
        }
        .soa-card:hover .soa-card-tag { color: var(--color-action-violet); }

        .soa-card-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .soa-card-row {
          display: grid;
          grid-template-columns: 18px 1fr auto;
          gap: 10px;
          align-items: center;
          font-size: 12.5px;
          line-height: 1.4;
          color: #4a4a6e;
          transition: color .35s;
        }
        .soa-card:hover .soa-card-row { color: var(--color-action-violet); }
        .soa-card-mark {
          width: 18px; height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background .35s, color .35s, border-color .35s;
        }
        .soa-card-mark--yes {
          background: color-mix(in srgb, #1dbe7f 16%, white);
          color: #1dbe7f;
          border: 1px solid color-mix(in srgb, #1dbe7f 50%, transparent);
        }
        .soa-card-mark--no {
          background: color-mix(in srgb, #e5475e 12%, white);
          color: #e5475e;
          border: 1px solid color-mix(in srgb, #e5475e 50%, transparent);
        }
        .soa-card-mark--partial {
          background: color-mix(in srgb, #d68a16 14%, white);
          color: #d68a16;
          border: 1px solid color-mix(in srgb, #d68a16 50%, transparent);
        }
        .soa-card-status {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.18em;
          padding: 2px 7px;
          border-radius: 999px;
          text-transform: uppercase;
          transition: color .35s;
        }
        .soa-card-status--yes { color: #1dbe7f; background: color-mix(in srgb, #1dbe7f 10%, white); }
        .soa-card-status--no  { color: #e5475e; background: color-mix(in srgb, #e5475e 10%, white); }
        .soa-card-status--partial { color: #d68a16; background: color-mix(in srgb, #d68a16 10%, white); }
        .soa-card:hover .soa-card-status { color: var(--color-action-violet); }

        .soa-footnote {
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          font-size: 14px;
          line-height: 1.7;
          color: #4a4a6e;
          padding: 20px 24px;
          border-radius: 16px;
          border: 1px dashed #e0e0ec;
          background: #fbfbfd;
        }
        .soa-hl { color: var(--color-action-violet); font-weight: 600; }

        @media (max-width: 1100px) {
          .soa-matrix { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .soa-matrix { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export function SoaCard({ sol, criteria, index }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), index * 110); io.disconnect(); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const renderMark = (v) => {
    if (v === 'yes') return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
    if (v === 'no') return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
    return (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    );
  };

  const statusLabel = { yes: 'Sí', no: 'No', partial: 'Parcial' };

  return (
    <article ref={ref} className={`soa-card ${sol.featured ? 'is-featured' : ''}`}>
      <header className="soa-card-head">
        <h3 className="soa-card-name">{sol.name}</h3>
        <span className="soa-card-tag">{sol.tag}</span>
      </header>
      <ul className="soa-card-list">
        {criteria.map((c, i) => (
          <li key={i} className="soa-card-row">
            <span className={`soa-card-mark soa-card-mark--${sol.vals[i]}`}>{renderMark(sol.vals[i])}</span>
            <span>{c}</span>
            <span className={`soa-card-status soa-card-status--${sol.vals[i]}`}>{statusLabel[sol.vals[i]]}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

// ============================================
// REFERENTES INTERACTIVOS — cinematic showcase
// ============================================
export function ReferencesSection() {
  const refs = [
    {
      n: '01',
      title: 'Lands End',
      tag: 'USTWO · GAZE VR',
      focus: 'Interacción por mirada y exploración inmersiva sin controles.',
      color: '#00b1ff',
      img: 'refs/lands-end.jpg',
      bg: 'lands-end'
    },
    {
      n: '02',
      title: 'Detroit: Become Human',
      tag: 'QUANTIC DREAM',
      focus: 'Navegación visual y diseño futurista.',
      color: '#00ffaa',
      img: 'refs/detroit.png',
      bg: 'detroit'
    },
    {
      n: '03',
      title: 'Job Simulator',
      tag: 'OWLCHEMY · VR',
      focus: 'Aprendizaje interactivo accesible.',
      color: '#b1a6f6',
      img: 'refs/job-sim.png',
      bg: 'job-sim'
    },
    {
      n: '04',
      title: 'Keep Talking and Nobody Explodes',
      tag: 'STEEL CRATE',
      focus: 'Instrucciones secuenciales y claridad procedural.',
      color: '#2ee9ff',
      img: 'refs/keep-talking.png',
      bg: 'keep-talking'
    }
  ];

  return (
    <section id="referentes">
      <div className="container">
        <div className="ref-head reveal">
          <div className="ref-eyebrow mono">
            <span className="ref-eyebrow-bar"/>
            008.D · REFERENTES INTERACTIVOS
          </div>
          <h2 className="ref-title">Inspiración <span className="ref-title-accent">visual</span></h2>
          <p className="ref-lede">
            Experiencias utilizadas como referencia para interacción, inmersión y navegación.
          </p>
        </div>

        <div className="ref-grid">
          {refs.map((r, i) => <RefCard key={i} item={r} index={i}/>)}
        </div>
      </div>

      <style>{`
        #referentes {
          position: relative;
          overflow: hidden;
          background: var(--color-white);
          color: var(--color-midnight-indigo);
          margin: 0 0 0;
          border-left: 1px solid #ececf5;
          border-right: 1px solid #ececf5;
          border-bottom: 1px solid #ececf5;
          border-radius: 0 0 36px 36px;
        }

        .ref-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
        .ref-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 11px; letter-spacing: 0.28em;
          color: var(--color-action-violet);
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .ref-eyebrow-bar { width: 36px; height: 1px; background: var(--color-action-violet); }
        .ref-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.8vw, 60px);
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.035em;
          color: var(--color-midnight-indigo);
          margin: 0 0 16px;
        }
        .ref-title-accent { color: var(--color-action-violet); }
        .ref-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: #4a4a6e;
          max-width: 560px;
          margin: 0 auto;
        }

        .ref-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .ref-card {
          position: relative;
          border-radius: 22px;
          border: 1.5px solid #ececf5;
          overflow: hidden;
          background: #fbfbfd;
          cursor: default;
          opacity: 0;
          transform: translateY(28px);
          transition:
            background .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s cubic-bezier(.2,.8,.2,1),
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s,
            opacity .9s cubic-bezier(.2,.8,.2,1);
        }
        .ref-card.in { opacity: 1; transform: translateY(0); }
        .ref-card:hover {
          background: var(--color-white);
          border-color: var(--color-action-violet);
          transform: translateY(-6px);
          box-shadow: 0 22px 44px -22px rgba(83,80,204,0.45);
        }

        .ref-card-visual {
          position: relative;
          aspect-ratio: 16 / 11;
          overflow: hidden;
          background: #f4f4f8;
          border-bottom: 1px solid #ececf5;
        }
        .ref-card-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .ref-card-tag {
          position: absolute;
          top: 10px; left: 10px;
          z-index: 2;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.2em;
          padding: 4px 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          color: var(--accent);
          border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }
        .ref-card-n {
          position: absolute;
          top: 10px; right: 10px;
          z-index: 2;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--accent);
          padding: 4px 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
        }

        .ref-card-body {
          padding: 22px 22px 24px;
        }
        .ref-card-title {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--color-midnight-indigo);
          margin: 0 0 8px;
          text-wrap: balance;
          transition: color .35s;
        }
        .ref-card:hover .ref-card-title { color: var(--color-action-violet); }
        .ref-card-focus {
          font-size: 12.5px;
          line-height: 1.55;
          color: #5a5a78;
          margin: 0;
          transition: color .35s;
        }
        .ref-card:hover .ref-card-focus { color: var(--color-action-violet); }

        /* image visual */
        .ref-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(.2,.8,.2,1), filter .5s;
          filter: saturate(0.95) contrast(1.02);
        }
        .ref-card:hover .ref-card-img {
          transform: scale(1.06);
          filter: saturate(1.1) contrast(1.05);
        }

        /* SVG visual placeholder per reference (futuristic abstract scene) */
        .ref-card-svg { width: 100%; height: 100%; display: block; }
        .ref-card:hover .ref-card-svg { animation: ref-pulse 3s ease-in-out infinite; }
        @keyframes ref-pulse {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.05); }
        }

        @media (max-width: 1100px) {
          .ref-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .ref-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export function RefCard({ item, index }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => el.classList.add('in'), index * 100); io.disconnect(); }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [index]);

  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <article ref={ref} className="ref-card" style={{ '--accent': item.color }}>
      <div className="ref-card-visual">
        <span className="ref-card-tag">{item.tag}</span>
        <span className="ref-card-n">{item.n}</span>
        {item.img && !imgFailed ? (
          <img
            className="ref-card-img"
            src={item.img}
            alt={item.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <RefVisual variant={item.bg} color={item.color}/>
        )}
      </div>
      <div className="ref-card-body">
        <h3 className="ref-card-title">{item.title}</h3>
        <p className="ref-card-focus">{item.focus}</p>
      </div>
    </article>
  );
}

export function RefVisual({ variant, color }) {
  if (variant === 'lands-end') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" className="ref-card-svg">
        <defs>
          <linearGradient id="rv-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a1a5a"/>
            <stop offset="0.6" stopColor={color} stopOpacity="0.45"/>
            <stop offset="1" stopColor="#0a0a28"/>
          </linearGradient>
          <radialGradient id="rv-sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={color} stopOpacity="0.9"/>
            <stop offset="1" stopColor="transparent"/>
          </radialGradient>
        </defs>

        {/* sky */}
        <rect width="320" height="220" fill="url(#rv-sky)"/>

        {/* horizon sun glow */}
        <circle cx="160" cy="150" r="60" fill="url(#rv-sun)"/>

        {/* distant peaks silhouette */}
        <path d="M 0 160 L 50 130 L 90 145 L 130 110 L 170 138 L 220 100 L 270 130 L 320 115 L 320 220 L 0 220 Z"
          fill="#0a0a28" opacity="0.75"/>

        {/* mid peaks */}
        <path d="M 0 180 L 60 158 L 110 175 L 160 145 L 220 168 L 280 152 L 320 170 L 320 220 L 0 220 Z"
          fill="#0a0a28" opacity="0.95"/>

        {/* floating gaze dots (signature Lands End mechanic) */}
        <g>
          <circle cx="80" cy="80" r="3" fill={color}/>
          <circle cx="80" cy="80" r="9" fill="none" stroke={color} strokeWidth="0.8" opacity="0.55" className="rv-gaze-a"/>

          <circle cx="220" cy="60" r="3" fill={color}/>
          <circle cx="220" cy="60" r="9" fill="none" stroke={color} strokeWidth="0.8" opacity="0.55" className="rv-gaze-b"/>

          <circle cx="250" cy="100" r="2.5" fill={color} opacity="0.7"/>
          <circle cx="60" cy="120" r="2.5" fill={color} opacity="0.7"/>
        </g>

        {/* gaze connection paths */}
        <path d="M 80 80 Q 150 50 220 60" fill="none" stroke={color} strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5"/>

        {/* reticle (central gaze cursor) */}
        <g opacity="0.85">
          <circle cx="160" cy="110" r="6" fill="none" stroke={color} strokeWidth="1.2"/>
          <circle cx="160" cy="110" r="1.5" fill={color}/>
          <line x1="160" y1="100" x2="160" y2="104" stroke={color} strokeWidth="1"/>
          <line x1="160" y1="116" x2="160" y2="120" stroke={color} strokeWidth="1"/>
          <line x1="150" y1="110" x2="154" y2="110" stroke={color} strokeWidth="1"/>
          <line x1="166" y1="110" x2="170" y2="110" stroke={color} strokeWidth="1"/>
        </g>

        <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="8" fill={color} opacity="0.7" letterSpacing="1.4">GAZE · LOOK TO MOVE</text>

        <style>{`
          .rv-gaze-a, .rv-gaze-b {
            transform-origin: center;
            animation: rv-gaze-ping 2.6s ease-out infinite;
          }
          .rv-gaze-b { animation-delay: 1.3s; }
          @keyframes rv-gaze-ping {
            0%   { transform: scale(0.6); opacity: 0.7; }
            100% { transform: scale(2.4); opacity: 0; }
          }
        `}</style>
      </svg>
    );
  }
  if (variant === 'detroit') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" className="ref-card-svg">
        <rect width="320" height="220" fill="#0a0a28"/>
        {/* dystopian skyline */}
        <g opacity="0.85">
          {[40, 70, 95, 120, 150, 170, 200, 225, 260, 290].map((x, i) => (
            <rect key={i} x={x} y={120 - (i * 7) % 50 - 20} width="14" height="100" fill="none" stroke={color} strokeWidth="0.8"/>
          ))}
        </g>
        {/* HUD circles */}
        <g>
          <circle cx="220" cy="60" r="14" fill="none" stroke={color} strokeWidth="1.2"/>
          <circle cx="220" cy="60" r="6" fill={color} opacity="0.5"/>
          <line x1="200" y1="60" x2="180" y2="60" stroke={color} strokeWidth="0.6"/>
        </g>
        <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="8" fill={color} opacity="0.65" letterSpacing="1.4">CINEMATIC UI</text>
        {/* dashed scan */}
        <line x1="0" y1="200" x2="320" y2="200" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5"/>
      </svg>
    );
  }
  if (variant === 'job-sim') {
    return (
      <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" className="ref-card-svg">
        <rect width="320" height="220" fill="#0a0a28"/>
        {/* desk + objects */}
        <rect x="0" y="160" width="320" height="60" fill={color} opacity="0.1"/>
        <rect x="40" y="120" width="60" height="40" rx="3" fill="none" stroke={color} strokeWidth="1.4"/>
        <circle cx="160" cy="130" r="22" fill="none" stroke={color} strokeWidth="1.4"/>
        <circle cx="160" cy="130" r="10" fill={color} opacity="0.3"/>
        <rect x="210" y="115" width="50" height="45" rx="3" fill="none" stroke={color} strokeWidth="1.4"/>
        <line x1="218" y1="125" x2="252" y2="125" stroke={color} strokeWidth="0.8" opacity="0.6"/>
        <line x1="218" y1="135" x2="244" y2="135" stroke={color} strokeWidth="0.8" opacity="0.6"/>
        <line x1="218" y1="145" x2="248" y2="145" stroke={color} strokeWidth="0.8" opacity="0.6"/>
        <text x="14" y="30" fontFamily="JetBrains Mono" fontSize="8" fill={color} opacity="0.65" letterSpacing="1.4">HANDS-ON LEARN</text>
      </svg>
    );
  }
  // keep-talking
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice" className="ref-card-svg">
      <rect width="320" height="220" fill="#0a0a28"/>
      {/* bomb-like device with buttons */}
      <rect x="80" y="50" width="160" height="120" rx="8" fill="none" stroke={color} strokeWidth="1.5"/>
      {/* button grid */}
      {[0,1,2,3].map((c) => [0,1,2].map((r) => (
        <circle key={`${c}-${r}`} cx={100 + c * 40} cy={80 + r * 30} r="6" fill="none" stroke={color} strokeWidth="1.2" opacity={0.6 + ((c+r)%2)*0.3}/>
      )))}
      {/* timer */}
      <rect x="125" y="20" width="70" height="22" rx="3" fill={color} opacity="0.18" stroke={color} strokeWidth="1"/>
      <text x="160" y="36" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="11" fontWeight="700" fill={color} letterSpacing="1.4">02:47</text>
      <text x="14" y="200" fontFamily="JetBrains Mono" fontSize="8" fill={color} opacity="0.65" letterSpacing="1.4">PROCEDURAL · STEP-BY-STEP</text>
    </svg>
  );
}

