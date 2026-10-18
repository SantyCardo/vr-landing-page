import React from 'react';
import { Counter } from './effects.jsx';
import { AnimatedText } from './motion.jsx';

// ============================================
// SECTIONS PART 1: About, Justification, Problem
// ============================================

// reusable section header — uses AnimatedText for cinematic reveal
export function SectionHeader({ eyebrow, title, subtitle, align = 'left', maxWidth = 760, marginBottom = 80 }) {
  return (
    <div style={{ textAlign: align, maxWidth, marginBottom, ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}>
      {eyebrow &&
      <div className="section-eyebrow reveal" style={align === 'center' ? { justifyContent: 'center' } : {}}>
          <span>{eyebrow}</span>
        </div>
      }
      <h2 className="heading-lg" style={{ marginBottom: 20 }}>
        <AnimatedText as="span" stagger={50} delay={120}>{title}</AnimatedText>
      </h2>
      {subtitle &&
      <p className="subheading text-dim reveal" data-delay="400" style={{ opacity: 0.8, maxWidth: 620, ...(align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}>
          {subtitle}
        </p>
      }
    </div>);

}

// ----- ABOUT (Proyecto) -----
export function AboutSection() {
  const tags = ['Insulinización', 'Realidad Virtual', 'Salud', 'Seguridad', 'Educación', 'Inmersión'];
  const stats = [
  { val: 537, suffix: 'M', label: 'Personas con diabetes en el mundo (OMS)', color: '#00b1ff' },
  { val: 3.5, decimals: 1, suffix: 'M+', label: 'Casos en Colombia (FID 2024)', color: '#00ffaa' },
  { val: 50, prefix: '<', suffix: '%', label: 'Adherencia terapéutica en LMIC', color: '#b1a6f6' },
  { val: 36, suffix: '%', label: 'Pacientes con ansiedad asociada', color: '#2ee9ff' }];


  const [activeNode, setActiveNode] = React.useState(-1);

  const defaultText = {
    eyebrow: null,
    title: null,
    paragraphs: [
      <>El proyecto propone un prototipo funcional de herramienta educativa
        inmersiva e interactiva mediante <span className="about-hl">Realidad Virtual</span> y <span className="about-hl">Google Cardboard</span> para
        enseñar la técnica de insulinización y el almacenamiento correcto de insulina
        a pacientes adultos con diabetes tipo 2 en Bucaramanga.</>,
      <>La insulinización requiere que el paciente se inyecte correctamente de forma autónoma.
        Sin embargo, la formación insuficiente genera <span className="about-hl">lipohipertrofia</span>,
        variabilidad glucémica, ansiedad y baja adherencia al tratamiento.</>,
      <>Este prototipo ocupa la <strong className="about-strong">intersección de tres dimensiones</strong> que
        ninguna solución existente cubre simultáneamente: educación en insulinización,
        experiencia inmersiva y accesibilidad local sin internet.</>
    ]
  };

  const nodeTexts = [
    { // 0 Insulinización
      eyebrow: '01 · INSULINIZACIÓN',
      title: 'Técnica clínica enseñada',
      color: '#00b1ff',
      paragraphs: [
        <>El prototipo enseña paso a paso la <span className="about-hl">técnica correcta de aplicación</span> de
          insulina, abordando errores comunes como reutilización de agujas, falta de rotación de sitios
          y vía incorrecta de administración.</>,
        <>Cada sub-tarea clínica se valida en un entorno controlado antes de pasar a la
          práctica con el paciente real. Reduce la curva de aprendizaje y mitiga ansiedad
          asociada a la autoaplicación.</>
      ]
    },
    { // 1 Realidad Virtual
      eyebrow: '02 · REALIDAD VIRTUAL',
      title: 'Inmersión 360° con Google Cardboard',
      color: '#00ffaa',
      paragraphs: [
        <>La VR provee un <span className="about-hl">entorno seguro de práctica</span> donde el paciente puede
          repetir el procedimiento sin riesgos clínicos reales — accesible mediante un visor de bajo costo
          (~USD 8) y un smartphone Android.</>,
        <>Interacción 3DOF por gaze (mirada) con dwell-timer de 1.2s. Sin controles externos, sin
          cables y sin dependencia de internet. Escalable a clínicas rurales y consultorios médicos.</>
      ]
    },
    { // 2 Salud
      eyebrow: '03 · SALUD',
      title: 'Bienestar del paciente diabético',
      color: '#b1a6f6',
      paragraphs: [
        <>Impacto directo sobre la <span className="about-hl">calidad de vida</span> de pacientes con diabetes
          tipo 2: mejora la adherencia, reduce la variabilidad glucémica y previene complicaciones derivadas
          de la mala aplicación.</>,
        <>Aborda directamente factores clave del fracaso terapéutico — lipohipertrofia, mala rotación
          de zonas y reutilización de material — para mejorar el control metabólico a largo plazo.</>
      ]
    },
    { // 3 Seguridad
      eyebrow: '04 · SEGURIDAD',
      title: 'Práctica sin riesgo real',
      color: '#2ee9ff',
      paragraphs: [
        <>Espacio controlado para <span className="about-hl">practicar el procedimiento</span> antes de
          hacerlo sobre el cuerpo: elimina la ansiedad de los primeros intentos y reduce errores que
          comprometen la salud.</>,
        <>El paciente puede equivocarse, retroceder y repetir sin consecuencias clínicas. Refuerza
          la confianza antes de la primera inyección real bajo supervisión.</>
      ]
    },
    { // 4 Educación
      eyebrow: '05 · EDUCACIÓN',
      title: 'Pedagogía basada en evidencia',
      color: '#524fe1',
      paragraphs: [
        <>Metodología validada por profesionales de la <span className="about-hl">FOSUNAB</span>, con módulos
          cortos de 15 a 20 minutos y evaluación integrada para retroalimentación inmediata al paciente.</>,
        <>Contenido fundamentado en el consenso FITTER y en evidencia clínica revisada
          (20+ artículos científicos). Diseño didáctico orientado al adulto con baja alfabetización digital.</>
      ]
    },
    { // 5 Inmersión
      eyebrow: '06 · INMERSIÓN',
      title: 'Experiencia sensorial completa',
      color: '#5350cc',
      paragraphs: [
        <>Audio guiado, subtítulos, navegación por gaze y escenas 3D que <span className="about-hl">capturan la atención</span> del
          paciente y aumentan la retención del conocimiento clínico clave.</>,
        <>La inmersión combinada con repetición genera memoria muscular del procedimiento,
          mejorando significativamente la transferencia del aprendizaje al contexto clínico real.</>
      ]
    }
  ];

  const activeText = activeNode >= 0 ? nodeTexts[activeNode] : defaultText;
  const accentStyle = activeNode >= 0 ? { '--about-accent': activeText.color } : {};

  return (
    <section id="proyecto">
      <div className="container">
        <div className="about-title-wrap reveal">
          <div className="about-eyebrow mono">002 · ACERCA DEL PROYECTO</div>
          <h2 className="about-title">Acerca del Proyecto</h2>
          <span className="about-underline" aria-hidden="true"/>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'center',
          marginBottom: 96
        }} className="about-grid">
          <div className="reveal about-text-col" data-delay="100" style={accentStyle}>
            <div className="about-text-swap" key={activeNode}>
              {activeText.eyebrow && (
                <div className="about-text-eyebrow mono">{activeText.eyebrow}</div>
              )}
              {activeText.title && (
                <h3 className="about-text-title">{activeText.title}</h3>
              )}
              {activeText.paragraphs.map((p, i) => (
                <p key={i} className="about-p">{p}</p>
              ))}
              {activeNode >= 0 && (
                <button type="button" className="about-text-reset" onClick={() => setActiveNode(-1)}>
                  ← Volver
                </button>
              )}
            </div>
          </div>

          {/* VR Goggles carousel */}
          <VRGogglesCarousel active={activeNode} onActive={setActiveNode}/>
        </div>

        {/* stats row */}
        <div className="glow-divider reveal" style={{ marginBottom: 72 }} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 28
        }} className="stats-grid">
          {stats.map((s, i) =>
          <div key={i} className="reveal stat-card" data-reveal="scale-in" data-delay={i * 80}>
              <div className="stat-card-value" style={{ '--accent': s.color }}>
                <Counter to={s.val} prefix={s.prefix || ''} suffix={s.suffix || ''} decimals={s.decimals || 0} />
              </div>
              <div className="stat-card-label">
                {s.label}
              </div>
            </div>
          )}
        </div>

        <style>{`
          .about-title-wrap {
            text-align: center;
            margin-bottom: 56px;
          }
          .about-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 11px;
            letter-spacing: 0.28em;
            color: var(--color-bright-blue);
            margin-bottom: 16px;
            text-transform: uppercase;
          }
          .about-title {
            font-family: var(--font-display);
            font-size: clamp(36px, 4.4vw, 56px);
            font-weight: 600;
            line-height: 1.05;
            letter-spacing: -0.035em;
            color: var(--color-white);
            margin: 0 0 18px;
            text-wrap: balance;
          }
          .about-underline {
            display: inline-block;
            width: 88px;
            height: 3px;
            border-radius: 2px;
            background: var(--color-action-violet);
          }
          .about-text-col {
            display: flex;
            flex-direction: column;
            gap: 22px;
          }
          .about-p {
            font-size: 15.5px;
            line-height: 1.7;
            color: var(--color-ghost-frost);
            opacity: 0.85;
            text-wrap: pretty;
            margin: 0;
            max-width: 56ch;
          }
          .about-hl { color: var(--color-bright-blue); font-weight: 600; }
          .about-strong { color: var(--color-white); font-weight: 600; }

          .about-text-swap {
            display: flex;
            flex-direction: column;
            gap: 22px;
            animation: about-text-fade .5s cubic-bezier(.2,.8,.2,1) both;
          }
          @keyframes about-text-fade {
            from { opacity: 0; transform: translateX(-12px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          .about-text-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 11px;
            letter-spacing: 0.28em;
            color: var(--about-accent, var(--color-bright-blue));
            text-transform: uppercase;
            margin: 0;
          }
          .about-text-eyebrow::before {
            content: '';
            width: 28px; height: 1px;
            background: var(--about-accent, var(--color-bright-blue));
          }
          .about-text-title {
            font-family: var(--font-display);
            font-size: clamp(26px, 2.8vw, 34px);
            font-weight: 600;
            letter-spacing: -0.03em;
            line-height: 1.15;
            color: var(--color-white);
            margin: -8px 0 0;
            text-wrap: balance;
          }
          .about-text-col[style*="about-accent"] .about-hl {
            color: var(--about-accent, var(--color-bright-blue));
          }
          .about-text-reset {
            align-self: flex-start;
            margin-top: 12px;
            padding: 9px 16px;
            border-radius: 999px;
            background: transparent;
            border: 1px solid color-mix(in srgb, var(--about-accent, var(--color-bright-blue)) 45%, transparent);
            color: var(--about-accent, var(--color-bright-blue));
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            cursor: pointer;
            transition: background .25s, transform .25s, border-color .25s;
          }
          .about-text-reset:hover {
            background: color-mix(in srgb, var(--about-accent, var(--color-bright-blue)) 12%, transparent);
            transform: translateY(-1px);
            border-color: var(--about-accent, var(--color-bright-blue));
          }

          .stat-card {
            padding: 36px 32px;
            border-radius: 24px;
            background: rgba(35,34,105,0.45);
            border: 2px solid rgba(83,80,204,0.3);
            position: relative;
            overflow: hidden;
            transition:
              background .35s cubic-bezier(.2,.8,.2,1),
              border-color .35s cubic-bezier(.2,.8,.2,1),
              transform .35s cubic-bezier(.2,.8,.2,1),
              box-shadow .35s;
          }
          .stat-card:hover {
            background: var(--color-white);
            border-color: var(--color-action-violet);
            transform: translateY(-4px);
            box-shadow: 0 18px 36px -20px rgba(83,80,204,0.55);
          }
          .stat-card-value {
            font-size: 52px;
            line-height: 1;
            letter-spacing: -0.04em;
            font-weight: 600;
            color: var(--accent);
            margin-bottom: 14px;
            transition: color .35s;
          }
          .stat-card:hover .stat-card-value {
            color: var(--color-action-violet);
          }
          .stat-card-label {
            font-size: 13.5px;
            line-height: 1.5;
            color: var(--color-ghost-frost);
            opacity: 0.82;
            transition: color .35s, opacity .35s;
          }
          .stat-card:hover .stat-card-label {
            color: var(--color-action-violet);
            opacity: 1;
          }

          @media (max-width: 980px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .about-text-col { max-width: 640px; margin: 0 auto; }
          }
        `}</style>
      </div>
    </section>);

}

// VR Goggles orbital — 6 icon nodes around centered goggles
export function VRGogglesCarousel({ active: extActive, onActive }) {
  const topics = [
    { label: 'Insulinización',  icon: 'syringe', color: '#00b1ff' },
    { label: 'Realidad Virtual', icon: 'goggles', color: '#00ffaa' },
    { label: 'Salud',            icon: 'pulse',   color: '#b1a6f6' },
    { label: 'Seguridad',        icon: 'shield',  color: '#2ee9ff' },
    { label: 'Educación',        icon: 'book',    color: '#524fe1' },
    { label: 'Inmersión',        icon: 'eye',     color: '#5350cc' }
  ];

  const icons = {
    syringe: <><path d="M3 21 L13 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><rect x="11" y="6" width="8" height="6" rx="1.2" transform="rotate(45 15 9)" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M18 4 L20 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>,
    goggles: <><rect x="3" y="8" width="18" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.6" fill="none"/><circle cx="8.5" cy="12.5" r="2.2" stroke="currentColor" strokeWidth="1.4" fill="none"/><circle cx="15.5" cy="12.5" r="2.2" stroke="currentColor" strokeWidth="1.4" fill="none"/></>,
    pulse:   <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>,
    shield:  <><path d="M12 3 L19 6 V12 C 19 16.5 16 19.5 12 21 C 8 19.5 5 16.5 5 12 V6 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/><path d="M9 12 L11.5 14.5 L15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></>,
    book:    <path d="M4 4 H10 A2 2 0 0 1 12 6 V20 A1.5 1.5 0 0 0 13.5 18.5 H20 V4 H14 A2 2 0 0 0 12 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>,
    eye:     <><ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2.6" fill="currentColor"/></>
  };

  const [internalActive, setInternalActive] = React.useState(0);
  const controlled = typeof onActive === 'function';
  const externalIdx = controlled && extActive >= 0 ? extActive : null;
  const active = externalIdx !== null ? externalIdx : internalActive;

  const setActive = (i) => {
    if (controlled) onActive(i);
    else setInternalActive(i);
  };

  const N = topics.length;
  const radius = 142;
  const slotAngle = (i) => -90 + (i - active) * (360 / N);

  React.useEffect(() => {
    if (controlled && extActive >= 0) return;
    const t = setInterval(() => {
      if (controlled) {
        setInternalActive((a) => (a + 1) % N);
      } else {
        setInternalActive((a) => (a + 1) % N);
      }
    }, 3800);
    return () => clearInterval(t);
  }, [N, controlled, extActive]);

  return (
    <div className="vr-orbital reveal" data-delay="200">
      <div className="vr-orbital-stage">
        <svg viewBox="0 0 400 400" className="vr-orbital-ring">
          <defs>
            <radialGradient id="vr-orb-glow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor={topics[active].color} stopOpacity="0.3"/>
              <stop offset="1" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="170" fill="url(#vr-orb-glow)" opacity="0.6"
            style={{ transition: 'all .8s' }}/>
          <circle cx="200" cy="200" r={radius} fill="none"
            stroke="rgba(83,80,204,0.4)" strokeWidth="1" strokeDasharray="2 6"/>
          <circle cx="200" cy="200" r={radius + 14} fill="none"
            stroke="rgba(83,80,204,0.18)" strokeWidth="0.5"/>
        </svg>

        {/* Center: VR goggles */}
        <div className="vr-orbital-center">
          <svg viewBox="0 0 240 140" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <path d="M30 70 Q5 70 5 60" fill="none" stroke="rgba(83,80,204,0.5)" strokeWidth="3" strokeLinecap="round"/>
            <path d="M210 70 Q235 70 235 60" fill="none" stroke="rgba(83,80,204,0.5)" strokeWidth="3" strokeLinecap="round"/>
            <rect x="22" y="30" width="196" height="80" rx="18"
              fill="rgba(35,34,105,0.95)" stroke={topics[active].color} strokeWidth="1.5"
              style={{ transition: 'stroke .6s' }}/>
            <circle cx="71" cy="70" r="22" fill="rgba(13,13,61,0.9)"
              stroke={topics[active].color} strokeWidth="1.5" style={{ transition: 'stroke .6s' }}/>
            <circle cx="71" cy="70" r="14" fill="none"
              stroke={topics[active].color} strokeWidth="0.5" strokeOpacity="0.6"/>
            <circle cx="71" cy="70" r="3" fill={topics[active].color}/>
            <circle cx="169" cy="70" r="22" fill="rgba(13,13,61,0.9)"
              stroke={topics[active].color} strokeWidth="1.5" style={{ transition: 'stroke .6s' }}/>
            <circle cx="169" cy="70" r="14" fill="none"
              stroke={topics[active].color} strokeWidth="0.5" strokeOpacity="0.6"/>
            <circle cx="169" cy="70" r="3" fill={topics[active].color}/>
            <path d="M95 80 Q120 95 145 80" fill="none" stroke="rgba(83,80,204,0.6)" strokeWidth="1"/>
            <text x="120" y="128" textAnchor="middle"
              fontFamily="JetBrains Mono" fontSize="8"
              fill="rgba(180,166,246,0.7)" letterSpacing="2">VR · CARDBOARD</text>
          </svg>
        </div>

        {/* Orbiting icon nodes */}
        {topics.map((t, i) => {
          const a = slotAngle(i) * Math.PI / 180;
          const cx = 50 + (radius / 400) * 100 * Math.cos(a);
          const cy = 50 + (radius / 400) * 100 * Math.sin(a);
          const isActive = i === active;
          return (
            <button key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={t.label}
              className={`vr-orbital-node ${isActive ? 'is-active' : ''}`}
              style={{
                left: `${cx}%`, top: `${cy}%`,
                '--node-color': t.color
              }}
            >
              <span className="vr-orbital-icon">
                <svg width="22" height="22" viewBox="0 0 24 24">{icons[t.icon]}</svg>
              </span>
              <span className="vr-orbital-label">{t.label}</span>
            </button>
          );
        })}
      </div>

      <style>{`
        .vr-orbital {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin-left: auto;
          overflow: visible;
        }
        .vr-orbital-stage {
          position: relative;
          aspect-ratio: 1;
          width: 100%;
          overflow: visible;
        }
        .vr-orbital-ring {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .vr-orbital-center {
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          width: 50%;
          aspect-ratio: 2 / 1.1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vr-orbital-node {
          position: absolute;
          transform: translate(-50%, -50%);
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: left .9s cubic-bezier(.2,.8,.2,1), top .9s cubic-bezier(.2,.8,.2,1);
          z-index: 3;
          outline: none;
        }
        .vr-orbital-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(13,13,61,0.85);
          border: 1px solid rgba(83,80,204,0.5);
          color: var(--color-muted-violet);
          transition: background .35s, border-color .35s, color .35s, transform .35s, box-shadow .35s;
        }
        .vr-orbital-node:hover .vr-orbital-icon {
          border-color: var(--node-color);
          color: var(--node-color);
          transform: scale(1.08);
        }
        .vr-orbital-node.is-active .vr-orbital-icon {
          background: rgba(13,13,61,0.95);
          border-color: var(--node-color);
          color: var(--node-color);
          transform: scale(1.15);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--node-color) 12%, transparent);
        }
        .vr-orbital-label {
          font-family: var(--font-mono);
          font-size: 9.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-muted-violet);
          opacity: 0.75;
          white-space: nowrap;
          transition: color .3s, opacity .3s;
        }
        .vr-orbital-node:hover .vr-orbital-label,
        .vr-orbital-node.is-active .vr-orbital-label {
          color: var(--node-color);
          opacity: 1;
        }
        @media (max-width: 980px) {
          .vr-orbital { margin: 0 auto !important; }
        }
        @media (max-width: 600px) {
          .vr-orbital-icon { width: 38px; height: 38px; }
          .vr-orbital-label { font-size: 8.5px; }
        }
      `}</style>
    </div>
  );
}


// ----- JUSTIFICATION -----
export function JustificationSection() {
  const blocks = [
  {
    eyebrow: 'PROBLEMA',
    title: 'Brecha clínica',
    body: 'En Colombia, ~8.4% de la población adulta vive con diabetes (FID, 2024). Errores en la técnica como reutilización de agujas o falta de rotación provocan lipohipertrofia y afectan el control glucémico.',
    color: '#00b1ff'
  },
  {
    eyebrow: 'INNOVACIÓN',
    title: 'Convergencia tecnológica',
    body: 'Convergencia entre tecnología y salud pública. Software educativo inmersivo que fortalece la fundación, mitiga la desinformación y prioriza el acceso para poblaciones de riesgo.',
    color: '#00ffaa'
  },
  {
    eyebrow: 'FORMACIÓN',
    title: 'Aplicación en sistemas',
    body: 'Aplicación de competencias en Ingeniería de Sistemas: diseño de software, interacción humano-computador y prototipado inmersivo con enfoque social para educación en salud.',
    color: '#b1a6f6'
  }];


  return (
    <section id="justificacion">
      <div className="container">
        <SectionHeader
          eyebrow="003 · JUSTIFICACIÓN"
          title={<>Convergencia entre innovación tecnológica y <span className="text-green">salud pública.</span></>}
          subtitle="Transformar la educación en insulinización a través de la inmersión, el acceso y la evidencia clínica." />
        

        {/* before/after flow */}
        <div className="reveal" style={{
          marginBottom: 64,
          padding: '40px',
          borderRadius: 32,
          background: 'rgba(35,34,105,0.55)',
          border: '1px solid rgba(83,80,204,0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="hud-corner tl" />
          <div className="hud-corner br" />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: 32,
            alignItems: 'center'
          }} className="flow-grid">
            <div style={{ textAlign: 'right' }} className="flow-l">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-muted-violet)', marginBottom: 12 }}>ESTADO ACTUAL</div>
              <div className="heading" style={{ color: 'var(--color-ghost-frost)', lineHeight: 1.2 }}>
                Mala educación<br />en insulinización
              </div>
              <div style={{ marginTop: 12, display: 'inline-flex', gap: 4 }}>
                {[0, 1, 2, 3, 4].map((i) =>
                <span key={i} style={{
                  width: 24, height: 4, borderRadius: 2,
                  background: i < 2 ? '#ff4d6d' : 'rgba(255,77,109,0.2)'
                }} />
                )}
              </div>
            </div>

            {/* connector */}
            <div className="flow-m" style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10
            }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-bright-blue)' }}>VR·MODULE</div>
              <div style={{
                width: 64, height: 64,
                borderRadius: 18,
                background: '#5350cc',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 40px rgba(0,177,255,0.5)',
                position: 'relative'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3h-3l-2 2-2-2H6a3 3 0 01-3-3V8z" stroke="#fff" strokeWidth="1.5" />
                  <circle cx="9" cy="12" r="1.5" fill="#fff" />
                  <circle cx="15" cy="12" r="1.5" fill="#fff" />
                </svg>
              </div>
              <div style={{
                width: 2, height: 32,
                background: 'var(--color-bright-blue)'
              }} />
            </div>

            <div className="flow-r">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-vivid-green)', marginBottom: 12 }}>RESULTADO ESPERADO</div>
              <div className="heading" style={{ color: 'var(--color-white)', lineHeight: 1.2 }}>
                Mejor cumplimiento<br />del tratamiento
              </div>
              <div style={{ marginTop: 12, display: 'inline-flex', gap: 4 }}>
                {[0, 1, 2, 3, 4].map((i) =>
                <span key={i} style={{
                  width: 24, height: 4, borderRadius: 2,
                  background: 'var(--color-vivid-green)',
                  opacity: 0.3 + i / 5 * 0.7,
                  boxShadow: i >= 3 ? '0 0 8px var(--color-vivid-green)' : 'none'
                }} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* three pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginBottom: 64
        }} className="pillar-grid">
          {[
          { title: 'Desarrollo de software educativo', body: 'Software para mejorar el bienestar', icon: 'code' },
          { title: 'Implementación de técnicas de cuidado', body: 'Enseñar cuidado, almacenamiento y aplicación', icon: 'health' },
          { title: 'Acceso constante al software', body: 'Priorizar el acceso para poblaciones de riesgo', icon: 'access' }].
          map((p, i) => <PillarCard key={i} {...p} index={i} />)}
        </div>

        {/* three justification blocks */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24
        }} className="pillar-grid">
          {blocks.map((b, i) =>
          <div key={i} className="reveal justi-card" data-reveal={i === 0 ? 'fade-right' : i === 2 ? 'fade-left' : 'fade-up'} data-delay={i * 100} style={{ '--accent': b.color }}>
              <div className="justi-card-top"/>
              <div className="justi-card-eyebrow mono">◇ {b.eyebrow}</div>
              <div className="justi-card-title heading">{b.title}</div>
              <p className="justi-card-body body">{b.body}</p>
            </div>
          )}
        </div>

        <style>{`
          /* shared card hover treatment — natural state to white+violet */
          .pillar-card, .justi-card {
            position: relative;
            padding: 36px;
            border-radius: 24px;
            overflow: hidden;
            cursor: default;
            transition:
              background .35s cubic-bezier(.2,.8,.2,1),
              border-color .35s cubic-bezier(.2,.8,.2,1),
              transform .35s cubic-bezier(.2,.8,.2,1),
              box-shadow .35s;
          }

          .pillar-card {
            background: rgba(35,34,105,0.55);
            border: 2px solid rgba(83,80,204,0.4);
          }
          .pillar-card:hover {
            background: var(--color-white);
            border-color: var(--color-action-violet);
            transform: translateY(-6px);
            box-shadow: 0 24px 48px -24px rgba(83,80,204,0.55);
          }
          .pillar-card-icon {
            width: 52px; height: 52px;
            border-radius: 14px;
            background: color-mix(in srgb, var(--accent) 14%, transparent);
            border: 1px solid color-mix(in srgb, var(--accent) 50%, transparent);
            display: flex; align-items: center; justify-content: center;
            color: var(--accent);
            margin-bottom: 24px;
            transition: background .35s, border-color .35s, color .35s;
          }
          .pillar-card:hover .pillar-card-icon {
            background: color-mix(in srgb, var(--color-action-violet) 14%, white);
            border-color: var(--color-action-violet);
            color: var(--color-action-violet);
          }
          .pillar-card-title {
            margin-bottom: 10px;
            font-size: 20px;
            line-height: 1.3;
            color: var(--color-white);
            transition: color .35s;
          }
          .pillar-card:hover .pillar-card-title { color: var(--color-action-violet); }
          .pillar-card-body {
            opacity: 0.78;
            line-height: 1.6;
            color: var(--color-ghost-frost);
            transition: color .35s, opacity .35s;
          }
          .pillar-card:hover .pillar-card-body {
            color: var(--color-action-violet);
            opacity: 0.92;
          }
          .pillar-card-num {
            position: absolute;
            top: 24px; right: 24px;
            font-size: 10px; letter-spacing: 0.2em;
            color: var(--color-muted-violet);
            opacity: 0.55;
            transition: color .35s, opacity .35s;
          }
          .pillar-card:hover .pillar-card-num {
            color: var(--color-action-violet);
            opacity: 0.9;
          }

          .justi-card {
            background: rgba(13,13,61,0.55);
            border: 2px solid rgba(83,80,204,0.3);
          }
          .justi-card:hover {
            background: var(--color-white);
            border-color: var(--color-action-violet);
            transform: translateY(-6px);
            box-shadow: 0 24px 48px -24px rgba(83,80,204,0.55);
          }
          .justi-card-top {
            position: absolute;
            top: 0; left: 0; right: 0; height: 2px;
            background: var(--accent);
            opacity: 0.7;
            transition: opacity .35s, background .35s;
          }
          .justi-card:hover .justi-card-top {
            background: var(--color-action-violet);
            opacity: 1;
          }
          .justi-card-eyebrow {
            font-size: 10px;
            letter-spacing: 0.22em;
            color: var(--accent);
            margin-bottom: 16px;
            transition: color .35s;
          }
          .justi-card:hover .justi-card-eyebrow { color: var(--color-action-violet); }
          .justi-card-title {
            margin-bottom: 12px;
            font-size: 22px;
            color: var(--color-white);
            transition: color .35s;
          }
          .justi-card:hover .justi-card-title { color: var(--color-action-violet); }
          .justi-card-body {
            line-height: 1.65;
            opacity: 0.82;
            color: var(--color-ghost-frost);
            transition: color .35s, opacity .35s;
          }
          .justi-card:hover .justi-card-body {
            color: var(--color-action-violet);
            opacity: 0.92;
          }

          @media (max-width: 880px) {
            .pillar-grid { grid-template-columns: 1fr !important; }
            .flow-grid { grid-template-columns: 1fr !important; text-align: center !important; }
            .flow-l, .flow-r { text-align: center !important; }
          }
        `}</style>
      </div>
    </section>);

}

export function PillarCard({ title, body, icon, index }) {
  const icons = {
    code: <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    health: <path d="M12 21s-7-4.5-7-11a4 4 0 018-1 4 4 0 018 1c0 6.5-7 11-7 11h-2zM12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    access: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M12 3a9 9 0 010 18M3 12h18M5 7h14M5 17h14" stroke="currentColor" strokeWidth="1.5" /></>
  };
  const accent = ['#00b1ff', '#00ffaa', '#b1a6f6'][index];

  return (
    <div className="pillar-card reveal" data-reveal="blur-in" data-delay={index * 80} style={{ '--accent': accent }}>
      <div className="pillar-card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{icons[icon]}</svg>
      </div>
      <div className="pillar-card-title heading">{title}</div>
      <p className="pillar-card-body body">{body}</p>
      <div className="pillar-card-num mono">0{index + 1}</div>
    </div>);

}

// ----- PROBLEM -----
export function ProblemSection() {
  const errors = [
  {
    title: 'Vía incorrecta',
    severity: 'CRÍTICO',
    severityColor: '#ff4d6d',
    body: 'La administración IV accidental causa hipoglucemia severa. La vía IM genera variabilidad glucémica impredecible.'
  },
  {
    title: 'No rotar sitios',
    severity: 'ALTO',
    severityColor: '#ff9f43',
    body: '98.3% de quienes reutilizan agujas presentan lipohipertrofia, reduciendo la absorción de insulina hasta en un 25%.'
  },
  {
    title: 'Almacenamiento incorrecto',
    severity: 'ALTO',
    severityColor: '#ff9f43',
    body: 'Congelar, guardar destapada o usar insulina vencida desnaturaliza la molécula y elimina su eficacia terapéutica.'
  },
  {
    title: 'Ansiedad del paciente',
    severity: 'MEDIO',
    severityColor: '#00b1ff',
    body: '36% de pacientes con diabetes reportan ansiedad; 63% teme el desarrollo de complicaciones. El miedo reduce la adherencia.'
  }];


  return (
    <section id="problema">
      <div className="container">
        <SectionHeader
          eyebrow="004 · DIAGNÓSTICO"
          title={<>El problema. <span className="text-blue">Errores</span> que comprometen la salud.</>}
          subtitle="La formación insuficiente en técnica de insulinización genera errores clínicos que comprometen la salud del paciente y su calidad de vida." />
        

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          marginBottom: 64
        }} className="error-grid">
          {errors.map((e, i) =>
          <div key={i} className="reveal err-card" data-delay={i * 80} style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="err-card-stripe" style={{ background: e.severityColor }} />
              <div className="err-card-head">
                <div className="err-card-code mono">ERR/0{i + 1}</div>
                <div className="err-card-sev mono" style={{
                  borderColor: e.severityColor + '66',
                  background: e.severityColor + '11',
                  color: e.severityColor
                }}>
                  {e.severity}
                </div>
              </div>
              <div className="err-card-title heading">{e.title}</div>
              <p className="err-card-body body">{e.body}</p>
            </div>
          )}
        </div>

        {/* citation */}
        <div className="reveal" data-delay="200" style={{
          padding: 40,
          borderRadius: 32,
          background: 'rgba(83,80,204,0.15)',
          border: '1px solid rgba(83,80,204,0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 24, left: 32,
            fontSize: 80, lineHeight: 1,
            color: 'var(--color-bright-blue)',
            opacity: 0.25,
            fontFamily: 'serif'
          }}>"</div>
          <blockquote style={{ paddingLeft: 60, paddingRight: 20 }}>
            <p className="heading" style={{ fontSize: 24, lineHeight: 1.4, fontWeight: 500, marginBottom: 20, fontStyle: 'italic' }}>
              Las estrategias convencionales no garantizan comprensión adecuada
              ni reducción del miedo al procedimiento.
            </p>
          </blockquote>
        </div>

        <style>{`
          .err-card {
            padding: 32px;
            border-radius: 24px;
            background: rgba(13,13,61,0.65);
            border: 1px solid rgba(83,80,204,0.35);
            transition: background .4s cubic-bezier(.2,.8,.2,1),
                        border-color .4s, transform .4s, box-shadow .4s;
            cursor: pointer;
          }
          .err-card:hover {
            background: var(--color-white);
            border-color: var(--color-action-violet);
            transform: translateY(-4px);
            box-shadow: 0 24px 48px -20px rgba(83,80,204,0.45);
          }
          .err-card-stripe {
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 3px;
          }
          .err-card-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }
          .err-card-code {
            font-size: 10px;
            letter-spacing: 0.2em;
            color: var(--color-muted-violet);
            transition: color .4s;
          }
          .err-card:hover .err-card-code { color: var(--color-action-violet); }
          .err-card-sev {
            padding: 4px 12px;
            border-radius: 999px;
            border: 1px solid;
            font-size: 10px;
            letter-spacing: 0.18em;
            font-weight: 600;
            transition: filter .4s;
          }
          .err-card:hover .err-card-sev { filter: brightness(0.85) saturate(1.2); }
          .err-card-title {
            margin-bottom: 12px;
            font-size: 24px;
            color: var(--color-white);
            transition: color .4s;
          }
          .err-card:hover .err-card-title { color: var(--color-midnight-indigo); }
          .err-card-body {
            line-height: 1.6;
            color: var(--color-ghost-frost);
            opacity: 0.78;
            transition: color .4s, opacity .4s;
          }
          .err-card:hover .err-card-body {
            color: var(--color-action-violet);
            opacity: 1;
          }
          @media (max-width: 720px) {
            .error-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>);

}

