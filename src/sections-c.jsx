import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from './sections-a.jsx';

// ============================================
// SECTIONS PART 3: Methodology, Mechanics, Tech Stack
// ============================================

// ----- METHODOLOGY -----
export function MethodologySection() {
  const phases = [
  {
    n: 'Fase 1',
    title: 'Planeación Clínica',
    desc: 'Levantamiento de requerimientos médicos, educativos y UX junto a profesionales de salud especializados en insulinoterapia.',
    deliverable: 'Investigación Clínica',
    detail: 'Revisión de literatura y entrevistas con profesionales de la FOSUNAB para definir requerimientos del prototipo educativo.',
    icon: 'clipboard',
    color: '#00b1ff'
  },
  {
    n: 'Fase 2',
    title: 'Diseño GDD + UX',
    desc: 'Construcción del Game Design Document, definición de navegación gaze, arquitectura de interacción y flujo inmersivo.',
    deliverable: 'Game Design Document',
    detail: 'Arquitectura de interacción, mecánicas gaze, flujo educativo y wireframes de la experiencia VR inmersiva.',
    icon: 'sketch',
    color: '#00ffaa'
  },
  {
    n: 'Fase 3',
    title: 'Desarrollo en Unity',
    desc: 'Implementación técnica del prototipo utilizando Unity, Google Cardboard, audio guiado, escenas 3D y sistema gaze.',
    deliverable: 'Prototipo Unity',
    detail: 'Modelado 3D, animaciones, audio guiado y sistema de evaluación interactiva integrados en el entorno inmersivo.',
    icon: 'cube',
    color: '#b1a6f6'
  },
  {
    n: 'Fase 4',
    title: 'Validación y Testing',
    desc: 'Pruebas técnicas, evaluación clínica mediante escala Likert, SUS e Índice de Validez de Contenido (IVC ≥ 0.80).',
    deliverable: 'Evaluación Clínica',
    detail: 'Validación con expertos de la FOSUNAB mediante instrumentos SUS, Likert e IVC para garantizar calidad educativa.',
    icon: 'shield',
    color: '#2ee9ff'
  }];


  const icons = {
    clipboard: <><rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M9 4V2h6v2M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>,
    sketch: <><path d="M3 6l9-4 9 4-9 4-9-4zM3 6v10l9 4 9-4V6M12 10v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></>,
    cube: <><path d="M12 2l9 5v10l-9 5-9-5V7l9-5zM3 7l9 5 9-5M12 12v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></>,
    shield: <><path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></>
  };

  return (
    <section id="metodologia">
      <div className="container">
        <SectionHeader
          eyebrow="008 · METODOLOGÍA"
          title={<>Arquitectura de <span className="text-blue">trabajo</span>.</>}
          subtitle="Basada en metodología Kanban, validación clínica y prototipado inmersivo en Unity." />


        {/* timeline rail */}
        <div style={{ position: 'relative' }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%', top: 0, bottom: 0,
            width: 2,
            transform: 'translateX(-50%)',
            background: 'var(--color-action-violet)',
            opacity: 0.5
          }} className="method-rail" />

          {phases.map((p, i) =>
            <MethodRow key={i} phase={p} icon={icons[p.icon]} index={i} />
          )}
        </div>

        {/* footer quote */}
        <div className="reveal" style={{
          marginTop: 32,
          padding: 32,
          borderRadius: 24,
          background: 'rgba(35,34,105,0.4)',
          border: '1px solid rgba(83,80,204,0.3)',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          <p className="heading" style={{ fontSize: 22, fontWeight: 500, lineHeight: 1.45, maxWidth: 800, margin: '0 auto', color: 'var(--color-ghost-frost)' }}>
            <span style={{ color: 'var(--color-bright-blue)' }}>"</span>
            La eficacia del aprendizaje inmersivo depende de la accesibilidad,
            claridad clínica y mejora iterativa constante.
            <span style={{ color: 'var(--color-bright-blue)' }}>"</span>
          </p>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .method-row { grid-template-columns: 48px 1fr !important; gap: 24px !important; }
            .method-row > *:nth-child(1) { grid-column: 2; order: 2; text-align: left !important; }
            .method-row > *:nth-child(2) { grid-row: 1 / span 2; }
            .method-row > *:nth-child(3) { grid-column: 2; order: 3; text-align: left !important; }
            .method-rail { left: 24px !important; }
          }
        `}</style>
      </div>
    </section>);

}

// row wraps card + node + deliverable; hover on card expands deliverable
export function MethodRow({ phase, icon, index }) {
  const [hovered, setHovered] = React.useState(false);
  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false)
  };
  return (
    <div className="reveal method-row" data-delay={index * 100} style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 48,
      alignItems: 'center',
      marginBottom: 32,
      position: 'relative'
    }}>
      {index % 2 === 0 ?
        <>
          <MethodCard phase={phase} icon={icon} align="right" hovered={hovered} handlers={handlers} />
          <MethodNode phase={phase} index={index} hovered={hovered} />
          <MethodDeliverable phase={phase} expanded={hovered} />
        </> :
        <>
          <MethodDeliverable phase={phase} align="right" expanded={hovered} />
          <MethodNode phase={phase} index={index} hovered={hovered} />
          <MethodCard phase={phase} icon={icon} hovered={hovered} handlers={handlers} />
        </>
      }
    </div>);
}

export function MethodCard({ phase, icon, align = 'left', hovered = false, handlers = {} }) {
  return (
    <div {...handlers} tabIndex={0} className="spotlight-card" style={{
      padding: 32,
      borderRadius: 24,
      background: hovered ? 'rgba(35,34,105,0.85)' : 'rgba(35,34,105,0.55)',
      border: `1px solid ${hovered ? phase.color + '99' : 'rgba(83,80,204,0.4)'}`,
      textAlign: align === 'right' ? 'right' : 'left',
      transition: 'background .35s cubic-bezier(.2,.8,.2,1), border-color .35s, transform .35s',
      transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      cursor: 'pointer',
      outline: 'none'
    }}>
      <div style={{ display: 'flex', justifyContent: align === 'right' ? 'flex-end' : 'flex-start', marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48,
          borderRadius: 14,
          background: `${phase.color}22`,
          border: `1px solid ${phase.color}66`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: phase.color
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{icon}</svg>
        </div>
      </div>
      <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: phase.color, marginBottom: 8 }}>{phase.n}</div>
      <div className="heading" style={{ marginBottom: 12, fontSize: 22 }}>{phase.title}</div>
      <p className="body text-dim" style={{ lineHeight: 1.6, opacity: 0.78 }}>{phase.desc}</p>
    </div>);

}

export function MethodNode({ phase, index, hovered = false }) {
  return (
    <div style={{
      position: 'relative',
      width: 56, height: 56,
      borderRadius: '50%',
      background: 'rgba(13,13,61,0.9)',
      border: `2px solid ${phase.color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2,
      transform: hovered ? 'scale(1.12)' : 'scale(1)',
      transition: 'transform .35s cubic-bezier(.2,.8,.2,1)'
    }}>
      <span className="mono" style={{ fontSize: 16, fontWeight: 600, color: phase.color, letterSpacing: '-0.02em' }}>
        0{index + 1}
      </span>
      {hovered && <div style={{
        position: 'absolute',
        inset: -10,
        borderRadius: '50%',
        border: `1px solid ${phase.color}`,
        opacity: 0.55,
        animation: `pulse-ring 1.8s ease-out infinite`
      }} />}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </div>);

}

export function MethodDeliverable({ phase, align = 'left', expanded = false }) {
  // Expanded state: white card, violet text scale (design.md palette).
  // Collapsed: dark surface with phase-color accent.
  return (
    <div style={{
      padding: expanded ? 24 : '14px 20px',
      borderRadius: 20,
      background: expanded
        ? 'var(--color-white)'
        : `rgba(13,13,61,0.5)`,
      border: expanded
        ? '1px solid var(--color-action-violet)'
        : `1px solid ${phase.color}33`,
      boxShadow: expanded
        ? '0 18px 48px -24px rgba(83,80,204,0.55)'
        : 'none',
      textAlign: align === 'right' ? 'right' : 'left',
      transition: 'padding .45s cubic-bezier(.2,.8,.2,1), background .45s, border-color .45s, transform .45s, box-shadow .45s',
      transform: expanded ? 'scale(1)' : 'scale(0.96)',
      transformOrigin: align === 'right' ? 'right center' : 'left center',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="mono" style={{
        fontSize: 10,
        letterSpacing: '0.2em',
        color: expanded ? 'var(--color-action-violet)' : phase.color,
        marginBottom: expanded ? 8 : 4,
        opacity: expanded ? 1 : 0.7,
        transition: 'opacity .35s, margin-bottom .35s, color .35s'
      }}>
        ◇ ENTREGABLE
      </div>
      <div className="subheading" style={{
        fontWeight: 600,
        marginBottom: expanded ? 8 : 0,
        fontSize: expanded ? 18 : 15,
        opacity: expanded ? 1 : 0.6,
        color: expanded ? 'var(--color-midnight-indigo)' : 'inherit',
        transition: 'opacity .35s, font-size .35s, margin-bottom .35s, color .35s'
      }}>
        {phase.deliverable}
      </div>
      <div style={{
        maxHeight: expanded ? 200 : 0,
        opacity: expanded ? 1 : 0,
        transition: 'max-height .5s cubic-bezier(.2,.8,.2,1), opacity .4s cubic-bezier(.2,.8,.2,1)',
        overflow: 'hidden'
      }}>
        <p className="body" style={{
          lineHeight: 1.55,
          fontSize: 13,
          marginTop: 4,
          color: expanded ? 'var(--color-rich-violet)' : 'var(--color-ghost-frost)',
          opacity: expanded ? 1 : 0.8,
          transition: 'color .35s'
        }}>
          {phase.detail}
        </p>
      </div>
    </div>);

}

// ----- MECH ILLUSTRATIONS (outline only) -----
export const MechIllustrations = {
  // 1. Core Loop — 5 numbered nodes on dashed orbit, rotating arrows, central hub
  loop: (
    <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <radialGradient id="ml-hub" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.18"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* dot grid background */}
      <g opacity="0.16">
        {Array.from({ length: 8 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={20 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* glow + dashed orbit */}
      <circle cx="160" cy="120" r="90" fill="url(#ml-hub)"/>
      <g className="ml-spin">
        <circle cx="160" cy="120" r="78" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" opacity="0.55"/>
      </g>
      {/* center hub */}
      <circle cx="160" cy="120" r="28" fill="white" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="160" cy="120" r="22" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.45"/>
      <text x="160" y="118" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.5">CICLO</text>
      <text x="160" y="129" textAnchor="middle" fontSize="6.5" fontFamily="JetBrains Mono" fill="currentColor" opacity="0.6" letterSpacing="1">CORE</text>
      {/* 5 nodes */}
      {[0,1,2,3,4].map(i => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(a) * 78;
        const y = 120 + Math.sin(a) * 78;
        const labels = ['Observar','Ensamblar aguja','Inyectar','Desechar aguja','Almacenar'];
        const lx = x + Math.cos(a) * 30;
        const ly = y + Math.sin(a) * 30;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="14" fill="white" stroke="currentColor" strokeWidth="1.6"/>
            <text x={x} y={y+3.5} textAnchor="middle" fontSize="10" fontWeight="600" fontFamily="Space Grotesk" fill="currentColor">{i+1}</text>
            <text x={lx} y={ly+2} textAnchor="middle" fontSize="7.5" fontFamily="JetBrains Mono" fill="currentColor" opacity="0.78" letterSpacing="0.6">{labels[i]}</text>
          </g>
        );
      })}
      {/* moving pulse dot on orbit */}
      <g className="ml-orbit-dot" style={{ transformOrigin: '160px 120px' }}>
        <circle cx="160" cy="42" r="3.6" fill="currentColor"/>
        <circle cx="160" cy="42" r="3.6" fill="currentColor" opacity="0.4" className="ml-ping"/>
      </g>
    </svg>
  ),

  // 2. Gaze — eye/lens with dwell timer ring
  eye: (
    <svg viewBox="0 0 320 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <radialGradient id="ml-iris" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.4"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* dot grid */}
      <g opacity="0.14">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={30 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* outer eye shape */}
      <path d="M40 120 Q160 30 280 120 Q160 210 40 120 Z" fill="white" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* glow inside */}
      <ellipse cx="160" cy="120" rx="110" ry="70" fill="url(#ml-iris)"/>
      {/* dwell timer ring */}
      <circle cx="160" cy="120" r="58" fill="white" stroke="currentColor" strokeWidth="1.4" opacity="0.5"/>
      <g className="ml-dwell" style={{ transformOrigin: '160px 120px' }}>
        <circle cx="160" cy="120" r="58" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="240 360"/>
      </g>
      {/* iris */}
      <circle cx="160" cy="120" r="36" fill="white" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="160" cy="120" r="36" fill="currentColor" opacity="0.08"/>
      <circle cx="160" cy="120" r="22" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.6"/>
      {/* pupil */}
      <circle cx="160" cy="120" r="10" fill="currentColor"/>
      <circle cx="154" cy="114" r="3" fill="white" opacity="0.85"/>
      {/* crosshair */}
      <line x1="160" y1="50" x2="160" y2="70" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="160" y1="170" x2="160" y2="190" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="78" y1="120" x2="98" y2="120" stroke="currentColor" strokeWidth="1.4"/>
      <line x1="222" y1="120" x2="242" y2="120" stroke="currentColor" strokeWidth="1.4"/>
      {/* dwell label */}
      <g transform="translate(232 196)">
        <rect x="0" y="0" width="64" height="20" rx="10" fill="white" stroke="currentColor" strokeWidth="1"/>
        <circle cx="9" cy="10" r="3" fill="currentColor"/>
        <text x="18" y="13.5" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.2">DWELL 1.2s</text>
      </g>
    </svg>
  ),

  // 3. Flujo Educativo — stacked module cards with progress + duration badge
  book: (
    <svg viewBox="0 0 320 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      {/* dot grid */}
      <g opacity="0.14">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={20 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* module 3 back */}
      <rect x="56" y="44" width="186" height="132" rx="12" fill="white" stroke="currentColor" strokeWidth="1.2" opacity="0.45"/>
      {/* module 2 mid */}
      <rect x="76" y="60" width="186" height="132" rx="12" fill="white" stroke="currentColor" strokeWidth="1.3" opacity="0.75"/>
      {/* module 1 front */}
      <g className="ml-card-front">
        <rect x="96" y="76" width="186" height="132" rx="12" fill="white" stroke="currentColor" strokeWidth="1.7"/>
        {/* top bar */}
        <rect x="96" y="76" width="186" height="28" rx="12" fill="currentColor" opacity="0.08"/>
        <circle cx="112" cy="90" r="2.8" fill="currentColor"/>
        <text x="124" y="93.5" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.2">MÓDULO · 01</text>
        <text x="266" y="93.5" textAnchor="end" fontSize="8" fontFamily="JetBrains Mono" fill="currentColor" opacity="0.7" letterSpacing="1">1/6</text>

        {/* title lines */}
        <rect x="110" y="118" width="100" height="3" rx="1.5" fill="currentColor"/>
        <rect x="110" y="128" width="148" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="110" y="135" width="132" height="2" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="110" y="142" width="140" height="2" rx="1" fill="currentColor" opacity="0.5"/>

        {/* progress bar */}
        <rect x="110" y="160" width="140" height="6" rx="3" fill="currentColor" opacity="0.18"/>
        <rect x="110" y="160" width="86" height="6" rx="3" fill="currentColor" className="ml-progress"/>
        <text x="252" y="165" textAnchor="end" fontSize="7.5" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1">62%</text>

        {/* footer pill */}
        <rect x="110" y="180" width="62" height="16" rx="8" fill="currentColor" opacity="0.12"/>
        <circle cx="120" cy="188" r="3" fill="currentColor"/>
        <text x="128" y="191" fontSize="7.5" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1">PRÁCTICA</text>
      </g>
      {/* clock badge */}
      <g className="ml-float-a">
        <circle cx="40" cy="200" r="22" fill="white" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M40 184 L40 200 L52 206" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
        <text x="40" y="232" textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="0.8">15–20 MIN</text>
      </g>
    </svg>
  ),

  // 4. Arquitectura técnica — isometric stack of tech layers
  chip: (
    <svg viewBox="0 0 320 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <linearGradient id="ml-layer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.25"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      {/* dot grid */}
      <g opacity="0.14">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={20 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* ground shadow */}
      <ellipse cx="160" cy="216" rx="96" ry="6" fill="currentColor" opacity="0.18"/>
      {/* 4 stacked layers */}
      <g className="ml-stack">
        {[0,1,2,3].map((i) => {
          const y = 180 - i * 34;
          const labels = ['UNITY ENGINE','GAZE INPUT','ANDROID APK','GOOGLE CARDBOARD'];
          return (
            <g key={i}>
              <path d={`M88 ${y} L232 ${y} L260 ${y - 14} L116 ${y - 14} Z`} fill="white" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              <path d={`M88 ${y} L116 ${y - 14} L116 ${y - 14 + 22} L88 ${y + 22} Z`} fill="url(#ml-layer)" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              <path d={`M88 ${y + 22} L232 ${y + 22} L260 ${y - 14 + 22} L232 ${y} L88 ${y}`} fill="none" stroke="currentColor" strokeWidth="0" />
              <path d={`M232 ${y} L260 ${y - 14} L260 ${y - 14 + 22} L232 ${y + 22} Z`} fill="white" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity="0.85"/>
              <text x={130 + 16} y={y - 2} fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1">{labels[i]}</text>
            </g>
          );
        })}
      </g>
      {/* connection nodes on right */}
      <g className="ml-float-b">
        <g transform="translate(282 80)">
          <rect x="-4" y="-4" width="22" height="22" rx="5" fill="white" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M3 6 L8 11 L15 4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <text x="280" y="118" fontSize="7.5" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="0.8">60 FPS</text>
      </g>
      {/* APK label */}
      <text x="22" y="38" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.6">STACK · 04 CAPAS</text>
    </svg>
  ),

  // 5. Feedback clínico — clipboard with pulse line + metric tags
  pulse: (
    <svg viewBox="0 0 320 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      {/* dot grid */}
      <g opacity="0.14">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={20 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* clipboard back */}
      <rect x="68" y="52" width="184" height="152" rx="12" fill="white" stroke="currentColor" strokeWidth="1.7"/>
      {/* clip */}
      <rect x="132" y="42" width="56" height="22" rx="6" fill="white" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="160" cy="53" r="3" fill="currentColor"/>
      {/* header */}
      <text x="84" y="84" fontSize="8.5" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.4">VALIDACIÓN · CLÍNICA</text>
      <line x1="84" y1="92" x2="236" y2="92" stroke="currentColor" strokeWidth="0.8" opacity="0.35"/>

      {/* heartbeat */}
      <path d="M84 122 L108 122 L122 100 L138 146 L156 108 L172 122 L236 122"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        className="ml-pulse-draw"/>
      <circle cx="84" cy="122" r="2.4" fill="currentColor"/>
      <circle cx="236" cy="122" r="2.4" fill="currentColor"/>

      {/* metric chips */}
      {['SUS','Likert','IVC'].map((m, i) => (
        <g key={m} transform={`translate(${84 + i*52} 156)`}>
          <rect x="0" y="0" width="46" height="34" rx="6" fill="white" stroke="currentColor" strokeWidth="1.3"/>
          <text x="6" y="12" fontSize="7" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1" opacity="0.7">{m.toUpperCase()}</text>
          <text x="6" y="28" fontSize="13" fontFamily="Space Grotesk" fontWeight="600" fill="currentColor" letterSpacing="-0.5">
            {i === 0 ? '82' : i === 1 ? '4.6' : '0.86'}
          </text>
        </g>
      ))}

      {/* status badge */}
      <g className="ml-float-a">
        <rect x="244" y="60" width="60" height="22" rx="11" fill="white" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="256" cy="71" r="3" fill="currentColor" className="ml-ping"/>
        <text x="266" y="74" fontSize="8" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.2">EN QA</text>
      </g>
    </svg>
  ),

  // 6. Accesibilidad — universal access symbol + reachable dashed ring + a11y tags
  access: (
    <svg viewBox="0 0 320 240" fill="none" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
      <defs>
        <radialGradient id="ml-access-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.18"/>
          <stop offset="1" stopColor="currentColor" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* dot grid */}
      <g opacity="0.14">
        {Array.from({ length: 7 }).map((_, r) => Array.from({ length: 11 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={20 + c * 28} cy={20 + r * 28} r="0.8" fill="currentColor"/>
        )))}
      </g>
      {/* outer reach glow */}
      <circle cx="160" cy="124" r="100" fill="url(#ml-access-glow)"/>
      <g className="ml-spin-slow">
        <circle cx="160" cy="124" r="92" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.45"/>
      </g>
      {/* inner soft disc */}
      <circle cx="160" cy="124" r="60" fill="white" stroke="currentColor" strokeWidth="1.5"/>

      {/* person glyph (universal accessibility) */}
      <circle cx="160" cy="80" r="11" fill="currentColor"/>
      <path d="M160 92 L160 132 M124 108 L160 100 L196 108 M160 132 L142 178 M160 132 L178 178"
        stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* surrounding a11y tags (badges) */}
      {[
        { x: 32, y: 64, label: 'WCAG · AA' },
        { x: 226, y: 64, label: 'VOZ · OFF' },
        { x: 14, y: 196, label: 'TEXTO XL' },
        { x: 220, y: 196, label: 'OFFLINE' }
      ].map((b, i) => (
        <g key={i} className={`ml-float-${i % 2 ? 'b' : 'a'}`}>
          <rect x={b.x} y={b.y} width="76" height="22" rx="11" fill="white" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx={b.x + 12} cy={b.y + 11} r="3" fill="currentColor"/>
          <text x={b.x + 22} y={b.y + 14.5} fontSize="8" fontFamily="JetBrains Mono" fontWeight="600" fill="currentColor" letterSpacing="1.2">{b.label}</text>
        </g>
      ))}

      {/* connection lines */}
      <g opacity="0.4">
        <line x1="70" y1="75" x2="120" y2="100" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4"/>
        <line x1="264" y1="75" x2="208" y2="100" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4"/>
        <line x1="52" y1="207" x2="120" y2="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4"/>
        <line x1="258" y1="207" x2="200" y2="160" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4"/>
      </g>
    </svg>
  )
};

// ----- MECH CARD (GSAP ScrollTrigger reveal) -----
export function MechCard({ mech, index }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const eyebrow = el.querySelector('.mech-eyebrow');
    const title = el.querySelector('.mech-title');
    const body = el.querySelector('.mech-body');
    const illu = el.querySelector('.mech-illu');

    const reverse = index % 2 === 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        toggleClass: { targets: el, className: 'is-in' }
      },
      defaults: { ease: 'power3.out' }
    });

    tl.fromTo(illu,
      { clipPath: reverse ? 'inset(0 100% 0 0)' : 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 0.9 }
    )
    .fromTo(eyebrow,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      '-=0.7'
    )
    .fromTo(title,
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65 },
      '-=0.4'
    )
    .fromTo(body,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.45'
    );

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [index]);

  const reverse = index % 2 === 1;
  const accent = mech.color;
  const hexSoft = (h) => { const x=h.replace('#',''); return `rgba(${parseInt(x.slice(0,2),16)},${parseInt(x.slice(2,4),16)},${parseInt(x.slice(4,6),16)},0.12)`; };
  const hexBorder = (h) => { const x=h.replace('#',''); return `rgba(${parseInt(x.slice(0,2),16)},${parseInt(x.slice(2,4),16)},${parseInt(x.slice(4,6),16)},0.4)`; };

  return (
    <div ref={ref} id={`mech-${index}`} className={`mech-snap ${reverse ? 'mech-snap--reverse' : ''}`}
      style={{ '--accent': accent, '--accent-soft': hexSoft(accent), '--accent-border': hexBorder(accent) }}>
      <span className="mech-rail" aria-hidden="true"/>
      <div className="mech-snap-inner">
        <div className="mech-content">
          <div className="mech-eyebrow mono">
            <span className="mech-eyebrow-num">{`0${index + 1}`} / 06</span>
            <span className="mech-eyebrow-dot" aria-hidden="true"/>
            <span className="mech-eyebrow-role">{mech.role || 'MECANICA'}</span>
          </div>
          <h3 className="mech-title">{mech.title}</h3>
          <p className="mech-body">{mech.body}</p>

          <div className="mech-actions">
            <span className="mech-tag">{mech.tag || mech.role}</span>
          </div>
        </div>
        <div className="mech-illu" style={{ color: mech.color }}>
          <div className="mech-illu-bg" aria-hidden="true"/>
          <div className="mech-illu-float">
            {MechIllustrations[mech.icon]}
          </div>
          <div className="mech-illu-corner mech-illu-corner--tl"><span/><span/></div>
          <div className="mech-illu-corner mech-illu-corner--br"><span/><span/></div>
        </div>
      </div>
      <div className="mech-progress">
        <span className="mech-progress-num mono">{String(index + 1).padStart(2, '0')}</span>
        <span className="mech-progress-divider"/>
        <span className="mech-progress-total mono">06</span>
      </div>
    </div>
  );
}

// ----- MECHANICS / FLOW + TECH STACK -----
export function MechanicsSection() {
  const mechanics = [
  {
    title: 'Core Loop',
    body: 'Ciclo cerrado de aprendizaje clínico: observar la técnica correcta, ensamblar la aguja en el dispositivo, inyectar siguiendo el procedimiento seguro, desechar la aguja en contenedor adecuado y almacenar la insulina respetando la cadena de frío.',
    icon: 'loop',
    color: '#00b1ff',
    role: 'Mecánica nuclear',
    tag: 'Loop',
    metrics: [{ k: 'Pasos', v: '5' }, { k: 'Iter', v: 'Inf' }, { k: 'Repeticion', v: 'Libre' }]
  },
  {
    title: 'Mecánica Gaze',
    body: 'Sistema de selección por mirada con dwell-timer visual circular. Optimizado para Google Cardboard sin controles externos. Confirma intencion sin clicks y reduce fatiga cognitiva en adultos mayores.',
    icon: 'eye',
    color: '#00ffaa',
    role: 'Input',
    tag: 'Gaze',
    metrics: [{ k: 'Dwell', v: '1.2s' }, { k: 'Error', v: '<4%' }, { k: 'Hardware', v: '0' }]
  },
  {
    title: 'Flujo Educativo',
    body: 'Lecciones modulares de 15 a 20 minutos basadas en microaprendizaje. Cada módulo cubre una sub-técnica (preparación, sitio, angulo, pliegue, retiro) con narrativa clínica adaptada al adulto con DM2.',
    icon: 'book',
    color: '#b1a6f6',
    role: 'Pedagogia',
    tag: 'Modular',
    metrics: [{ k: 'Módulos', v: '6' }, { k: 'Duración', v: '15-20m' }, { k: 'Idioma', v: 'ES' }]
  },
  {
    title: 'Arquitectura Técnica',
    body: 'Unity 2022.3 LTS + Android APK nativo + interacción 3DOF + ejecucion 100% offline. Stack optimizado para smartphones de gama media usando URP y LOD por distancia para mantener 60 FPS estables.',
    icon: 'chip',
    color: '#2ee9ff',
    role: 'Plataforma',
    tag: 'Stack',
    metrics: [{ k: 'FPS', v: '60' }, { k: 'APK', v: '~120MB' }, { k: 'Online', v: 'No' }]
  },
  {
    title: 'Feedback Clínico',
    body: 'Validación mediante panel de médicos expertos usando instrumentos estándar: SUS para usabilidad, escala Likert para experiencia educativa e IVC (Índice de Validez de Contenido) por jueces expertos.',
    icon: 'pulse',
    color: '#5350cc',
    role: 'Validación',
    tag: 'Clínico',
    metrics: [{ k: 'SUS', v: '>=70' }, { k: 'Likert', v: '1-5' }, { k: 'IVC', v: '>=0.8' }]
  },
  {
    title: 'Accesibilidad',
    body: 'Diseño pensado para pacientes con baja alfabetizacion digital y contextos de bajos recursos. Texto sobredimensionado, contraste WCAG AA, voz-off opcional y nula dependencia de internet o equipo costoso.',
    icon: 'access',
    color: '#00b1ff',
    role: 'Inclusión',
    tag: 'A11y',
    metrics: [{ k: 'WCAG', v: 'AA' }, { k: 'Costo', v: '$8' }, { k: 'Offline', v: 'Si' }]
  }];


  const stack = [
  {
    name: 'Unity',
    tag: 'Motor 3D inmersivo',
    desc: 'Engine cross-platform usado para construir la escena VR, la física de la jeringa y el sistema de gaze. Pipeline URP optimizado para mobile.',
    version: '2022.3 LTS',
    role: 'Engine',
    metrics: [{ k: 'FPS', v: '60' }, { k: 'Build', v: 'APK' }],
    accent: '#00b1ff',
    icon: 'unity',
    preview: 'refs/stack/unity.webp'
  },
  {
    name: 'Google Cardboard',
    tag: 'Visor VR low-cost',
    desc: 'Hardware accesible (~USD 8) compatible con cualquier smartphone Android. Lentes biconvexas 45mm, FOV ~80°. Permite escalabilidad a paciente real.',
    version: 'SDK 1.24',
    role: 'Hardware',
    metrics: [{ k: 'FOV', v: '80°' }, { k: 'DOF', v: '3' }],
    accent: '#00ffaa',
    icon: 'cardboard',
    preview: 'refs/stack/google-cardboard-vr.png'
  },
  {
    name: 'Android APK Offline',
    tag: 'Distribución sin red',
    desc: 'Build nativa que corre sin conexión. Sideload directo en clínicas rurales sin Play Store. Tamaño objetivo: <120MB para descarga rápida.',
    version: 'API 26+',
    role: 'Runtime',
    metrics: [{ k: 'Min SDK', v: '8.0' }, { k: 'Size', v: '~120MB' }],
    accent: '#b1a6f6',
    icon: 'android',
    preview: 'refs/stack/apk.jpg'
  },
  {
    name: 'Gaze Interaction',
    tag: 'Control sin mandos',
    desc: 'Selección por mirada con dwell-timer de 1.2s y feedback radial. Cero hardware adicional. Curva de aprendizaje mínima para pacientes adultos.',
    version: 'Dwell 1.2s',
    role: 'Input',
    metrics: [{ k: 'Dwell', v: '1.2s' }, { k: 'Error', v: '<4%' }],
    accent: '#2ee9ff',
    icon: 'gaze',
    preview: 'refs/stack/VrGaze.png'
  },
  {
    name: 'Blender',
    tag: 'Modelado 3D & rigging',
    desc: 'Pipeline open-source para modelar la pluma SoloStar, el sitio anatómico y las animaciones de la técnica de inyección. Alternativa: ZBrush para sculpting de alta densidad y detalle orgánico. Export FBX a Unity.',
    version: '4.2 LTS',
    role: 'Assets 3D',
    metrics: [{ k: 'Polys', v: '<25K' }, { k: 'Alt', v: 'ZBrush' }],
    accent: '#ff8a4c',
    icon: 'blender',
    preview: 'refs/stack/Blender.jpg'
  },
  {
    name: 'C# Scripting',
    tag: 'Lógica de simulación',
    desc: 'State machines para el core loop, validación de pasos clínicos y captura de telemetria educativa. Arquitectura modular SOLID.',
    version: '.NET 4.x',
    role: 'Codigo',
    metrics: [{ k: 'LoC', v: '~6K' }, { k: 'Tests', v: 'NUnit' }],
    accent: '#7fd9ff',
    icon: 'code',
    preview: 'refs/stack/coding.png'
  }];


  const icons = {
    loop: <path d="M4 12a8 8 0 0114-5l2-2v6h-6l2-2a6 6 0 10-2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    eye: <><ellipse cx="12" cy="12" rx="9" ry="6" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="2.5" fill="currentColor" /></>,
    book: <><path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></>,
    chip: <><rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="1.5" /></>,
    pulse: <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    access: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
  };

  return (
    <section id="tecnologia" className="mechanics-section">
      {/* INTRO fullscreen panel */}
      <div className="mech-intro">
        <div className="container">
          <MechIntro mechanics={mechanics} />
        </div>
      </div>

      {/* mechanics full-bleed sections */}
      <div className="mech-list">
        {mechanics.map((m, i) =>
          <MechCard key={i} mech={m} index={i} />
        )}
      </div>

      {/* STACK fullscreen panel */}
      <div className="mech-stack-panel">
        <div className="container">
          <StackHeader />

          <div className="stack-grid">
            {stack.map((s, i) => <StackCard key={i} item={s} index={i} total={stack.length} />)}
          </div>

        </div>
      </div>

      <style>{`
          /* ===== mechanics: full-bleed white sections ===== */
          .mechanics-section {
            background: transparent;
            color: var(--color-midnight-indigo);
            padding: 32px 0 0 !important;
            margin: 0;
            border-radius: 0;
            position: relative;
          }
          .mechanics-section .heading,
          .mechanics-section .heading-lg,
          .mechanics-section .subheading,
          .mechanics-section .display,
          .mechanics-section .display-lg,
          .mechanics-section h2,
          .mechanics-section h3 {
            color: var(--color-midnight-indigo);
          }
          .mechanics-section .text-dim { color: #4a4a6e !important; }
          .mechanics-section .mono { color: var(--color-action-violet); }
          .mechanics-section .section-eyebrow,
          .mechanics-section .section-eyebrow span {
            color: var(--color-action-violet);
          }
          .mechanics-section .section-eyebrow::before {
            background: var(--color-action-violet);
            box-shadow: none;
          }
          .mechanics-section .section-eyebrow::after {
            background: var(--color-vivid-green);
            box-shadow: none;
          }

          /* intro panel — full-bleed, rounded top only, overlapped into bleed */
          .mech-intro {
            min-height: calc(100dvh - 72px);
            display: flex;
            align-items: center;
            margin: 0;
            border-radius: 36px 36px 0 0;
            background: var(--color-white);
            border: 1px solid #ececf5;
            border-bottom: none;
          }
          .mech-intro .container { width: 100%; }
          .mech-intro-scroll {
            display: inline-flex; align-items: center; gap: 12px;
            margin-top: 64px;
            font-size: 11px;
            letter-spacing: 0.3em;
            color: var(--color-action-violet);
          }

          /* mech-list: flush continuous shell, no lateral borders */
          .mech-list {
            display: block;
            margin: 0;
            border-radius: 0;
            overflow: hidden;
            background: var(--color-white);
            border-left: 1px solid #ececf5;
            border-right: 1px solid #ececf5;
          }
          .mech-snap {
            position: relative;
            min-height: calc(100vh - 96px);
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ececf5;
            overflow: hidden;
            padding: 80px 0;
          }
          .mech-list .mech-snap:last-child { border-bottom: none; }
          .mech-snap-inner {
            width: 100%;
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 64px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
          }
          .mech-snap--reverse .mech-snap-inner { grid-template-columns: 1fr 1fr; }
          .mech-snap--reverse .mech-content { order: 2; }
          .mech-snap--reverse .mech-illu { order: 1; }

          .mech-snap .mech-eyebrow {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.28em;
            margin-bottom: 28px;
            opacity: 0;
            transform: translateY(24px);
          }
          .mech-snap .mech-title {
            font-size: clamp(38px, 5.2vw, 72px);
            font-weight: 600;
            letter-spacing: -0.04em;
            line-height: 0.98;
            margin-bottom: 28px;
            color: var(--color-midnight-indigo);
            opacity: 0;
            transform: translateY(40px);
          }
          .mech-snap .mech-body {
            font-size: 18px;
            line-height: 1.55;
            color: #4a4a6e;
            margin-bottom: 40px;
            max-width: 520px;
            opacity: 0;
            transform: translateY(28px);
          }
          .mech-snap .mech-btn {
            display: inline-flex; align-items: center; gap: 10px;
            padding: 14px 28px;
            border-radius: 999px;
            background: var(--color-action-violet);
            color: var(--color-white);
            font-size: 14px;
            font-weight: 600;
            letter-spacing: -0.01em;
            border: none;
            cursor: pointer;
            opacity: 0;
            transform: translateY(18px);
            transition: background .25s, transform .25s, box-shadow .25s;
          }
          .mech-snap .mech-btn:hover {
            background: #403cd5;
            transform: translateY(-2px);
            box-shadow: 0 14px 28px -10px rgba(83,80,204,0.55);
          }
          .mech-snap .mech-btn svg { transition: transform .25s; }
          .mech-snap .mech-btn:hover svg { transform: translateX(3px); }

          /* illustration container — no card chrome, just floating SVG */
          .mech-snap .mech-illu {
            position: relative;
            aspect-ratio: 1 / 1;
            display: flex; align-items: center; justify-content: center;
            background: transparent;
            border: none;
            clip-path: inset(100% 0 0 0);
          }
          .mech-illu-float {
            width: 100%; height: 100%;
            display: flex; align-items: center; justify-content: center;
            animation: mech-float 7.2s cubic-bezier(.45,.05,.55,.95) infinite;
            transform-origin: center center;
            will-change: transform;
            backface-visibility: hidden;
          }
          .mech-illu-float svg {
            width: 78%;
            height: auto;
            max-width: 360px;
            display: block;
          }
          @keyframes mech-float {
            0%   { transform: translate3d(0, 0, 0) scale(1); }
            50%  { transform: translate3d(0, -16px, 0) scale(1.015); }
            100% { transform: translate3d(0, 0, 0) scale(1); }
          }

          /* shared MechIllustration animations (.ml-*) */
          .ml-spin       { transform-origin: 160px 120px; animation: ml-spin 28s linear infinite; }
          .ml-spin-slow  { transform-origin: 160px 124px; animation: ml-spin 56s linear infinite; }
          .ml-orbit-dot  { animation: ml-spin 14s linear infinite; }
          .ml-ping       { transform-origin: center; animation: ml-ping 2s ease-out infinite; }
          .ml-dwell      { animation: ml-dwell 3.6s cubic-bezier(.4,0,.2,1) infinite; }
          .ml-progress   { transform-origin: left center; animation: ml-progress 4s cubic-bezier(.2,.8,.2,1) infinite; }
          .ml-float-a    { animation: ml-float 5s ease-in-out infinite; transform-origin: center; }
          .ml-float-b    { animation: ml-float 6.2s ease-in-out infinite -1.5s; transform-origin: center; }
          .ml-card-front { animation: ml-float 7s ease-in-out infinite; transform-origin: center; }
          .ml-stack      { animation: ml-float 7.4s ease-in-out infinite; transform-origin: center; }
          .ml-pulse-draw {
            stroke-dasharray: 280;
            stroke-dashoffset: 280;
            animation: ml-pulse-draw 3.2s cubic-bezier(.2,.8,.2,1) infinite;
          }

          @keyframes ml-spin { to { transform: rotate(360deg); } }
          @keyframes ml-ping {
            0%   { transform: scale(0.6); opacity: 0.6; }
            100% { transform: scale(3);   opacity: 0; }
          }
          @keyframes ml-dwell {
            0%   { stroke-dasharray: 0 360; }
            70%  { stroke-dasharray: 360 360; }
            100% { stroke-dasharray: 360 360; }
          }
          @keyframes ml-progress {
            0%   { transform: scaleX(0.2); }
            70%  { transform: scaleX(1); }
            100% { transform: scaleX(1); }
          }
          @keyframes ml-float {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes ml-pulse-draw {
            0%   { stroke-dashoffset: 280; }
            60%  { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -280; }
          }

          /* progress indicator per section (bottom-right) */
          .mech-progress {
            position: absolute;
            right: 48px; bottom: 48px;
            display: inline-flex; align-items: center; gap: 12px;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.18em;
          }
          .mech-progress-num {
            font-size: 22px;
            font-weight: 600;
            color: var(--color-action-violet);
            letter-spacing: -0.02em;
          }
          .mech-progress-divider {
            width: 56px; height: 1px;
            background: var(--color-action-violet);
          }
          .mech-progress-total { color: #9494a9; }

          /* stack panel — full-bleed, rounded bottom only, overlapped into bleed */
          .mech-stack-panel {
            min-height: calc(100dvh - 72px);
            display: flex;
            align-items: center;
            padding: 120px 0 140px;
            margin: 0;
            border-radius: 0;
            background: var(--color-white);
            border-left: 1px solid #ececf5;
            border-right: 1px solid #ececf5;
            position: relative;
            overflow: hidden;
          }
          .mech-stack-panel .container { width: 100%; position: relative; z-index: 2; }
          .mech-stack-panel::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              transparent;
            pointer-events: none;
            z-index: 1;
          }
          .mech-stack-panel::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              none;
            background-size: 56px 56px;
            mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
            -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
            pointer-events: none;
            z-index: 1;
          }

          @media (max-width: 980px) {
            .mech-snap-inner {
              grid-template-columns: 1fr !important;
              gap: 40px;
              padding: 0 32px;
            }
            .mech-snap--reverse .mech-content { order: 2; }
            .mech-snap--reverse .mech-illu { order: 1; }
            .mech-snap { min-height: auto; padding: 80px 0; }
            .mech-progress { right: 24px; bottom: 24px; }
            .mech-intro { min-height: auto; padding: 120px 0 80px; }
            .stack-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 600px) {
            .stack-grid { grid-template-columns: 1fr !important; }
            .mech-snap .mech-title { font-size: 34px; }
            .mech-snap .mech-body { font-size: 16px; }
            .mech-intro { border-radius: 24px 24px 0 0; }
            .mech-stack-panel { border-radius: 0; padding: 80px 0 96px; }
            #referentes { border-radius: 0 0 24px 24px !important; }
          }

          /* ===== MECH INTRO ===== */
          .mech-intro {
            position: relative;
            overflow: hidden;
          }
          .mech-intro::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              transparent;
            pointer-events: none;
          }
          .mech-intro::after {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              none;
            background-size: 64px 64px;
            mask-image: radial-gradient(ellipse at center, #000 25%, transparent 78%);
            -webkit-mask-image: radial-gradient(ellipse at center, #000 25%, transparent 78%);
            pointer-events: none;
          }
          .mech-intro-inner {
            position: relative;
            z-index: 2;
            width: 100%;
            padding: 96px 0 64px;
          }
          .mech-intro-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap: 88px;
            align-items: start;
          }
          .mech-intro-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.3em;
            color: var(--color-action-violet);
            margin-bottom: 32px;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(-12px);
            transition: opacity .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1);
          }
          .mech-intro-eyebrow-bar {
            width: 48px; height: 1px;
            background: var(--color-action-violet);
          }
          .mech-intro-inner.in .mech-intro-eyebrow { opacity: 1; transform: none; }

          .mech-intro-title {
            font-family: var(--font-display);
            font-size: clamp(44px, 6vw, 84px);
            font-weight: 600;
            line-height: 0.96;
            letter-spacing: -0.045em;
            color: var(--color-midnight-indigo);
            margin: 0 0 32px;
            text-wrap: balance;
            opacity: 0;
            transform: translateY(28px);
            transition: opacity .9s cubic-bezier(.2,.8,.2,1) .1s, transform .9s cubic-bezier(.2,.8,.2,1) .1s;
          }
          .mech-intro-inner.in .mech-intro-title { opacity: 1; transform: none; }
          .mech-intro-accent { color: var(--color-action-violet); }
          .mech-intro-strike {
            position: relative;
            display: inline-block;
          }
          .mech-intro-strike::after {
            content: '';
            position: absolute;
            left: -2%; right: -2%; bottom: 0.1em;
            height: 8px;
            background: var(--color-action-violet);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 1.1s cubic-bezier(.2,.8,.2,1) .6s;
            border-radius: 2px;
            opacity: 0.85;
            z-index: -1;
          }
          .mech-intro-inner.in .mech-intro-strike::after { transform: scaleX(1); }

          .mech-intro-lede {
            font-size: 18px;
            line-height: 1.6;
            color: #4a4a6e;
            max-width: 540px;
            margin: 0 0 40px;
            text-wrap: pretty;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity .8s cubic-bezier(.2,.8,.2,1) .25s, transform .8s cubic-bezier(.2,.8,.2,1) .25s;
          }
          .mech-intro-inner.in .mech-intro-lede { opacity: 1; transform: none; }

          .mech-intro-meta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            padding-top: 28px;
            border-top: 1px solid #ececf5;
            opacity: 0;
            transform: translateY(16px);
            transition: opacity .8s cubic-bezier(.2,.8,.2,1) .4s, transform .8s cubic-bezier(.2,.8,.2,1) .4s;
          }
          .mech-intro-inner.in .mech-intro-meta { opacity: 1; transform: none; }
          .mech-intro-meta-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .mech-intro-meta-item strong {
            font-family: var(--font-display);
            font-size: 34px;
            font-weight: 600;
            color: var(--color-action-violet);
            letter-spacing: -0.03em;
            line-height: 1;
          }
          .mech-intro-meta-item span {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.2em;
            color: #9494a9;
            text-transform: uppercase;
          }

          /* MECH HERO SVG (replaces TOC) */
          .mech-hero-svg {
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
            opacity: 0;
            transform: translateX(28px) scale(0.96);
            transition: opacity 1s cubic-bezier(.2,.8,.2,1) .2s, transform 1s cubic-bezier(.2,.8,.2,1) .2s;
          }
          .mech-intro-inner.in .mech-hero-svg { opacity: 1; transform: none; }
          .mech-hero-svg svg { width: 100%; height: auto; display: block; }

          .mhs-spin-slow { animation: mhs-spin 60s linear infinite; }
          .mhs-spin-mid  { animation: mhs-spin 32s linear infinite reverse; }
          .mhs-spin-rev  { animation: mhs-spin 44s linear infinite reverse; }
          .mhs-orbit     { animation: mhs-orbit 22s linear infinite; }
          .mhs-orbit-rev { animation: mhs-orbit 26s linear infinite reverse; }
          .mhs-bob       { animation: mhs-bob 5.5s ease-in-out infinite; }
          .mhs-float-a   { animation: mhs-float-a 5s ease-in-out infinite; }
          .mhs-float-b   { animation: mhs-float-b 6s ease-in-out infinite; }
          .mhs-lens-blink { animation: mhs-lens 3.2s ease-in-out infinite; }
          .mhs-pulse-paths line {
            animation: mhs-dash 4s linear infinite;
            stroke-dashoffset: 0;
          }

          @keyframes mhs-spin { to { transform: rotate(360deg); } }
          @keyframes mhs-orbit { to { transform: rotate(360deg); } }
          @keyframes mhs-bob {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50%      { transform: translateY(-6px) rotate(-1.2deg); }
          }
          @keyframes mhs-float-a {
            0%, 100% { transform: translate(0,0); }
            50%      { transform: translate(6px,-8px); }
          }
          @keyframes mhs-float-b {
            0%, 100% { transform: translate(0,0); }
            50%      { transform: translate(-8px,6px); }
          }
          @keyframes mhs-lens {
            0%, 100% { opacity: 1; }
            50%      { opacity: 0.45; }
          }
          @keyframes mhs-dash {
            to { stroke-dashoffset: -36; }
          }
          .mhs-chip-ping {
            transform-origin: center;
            animation: mhs-chip-ping 2.2s ease-out infinite;
          }
          @keyframes mhs-chip-ping {
            0%   { transform: scale(0.6); opacity: 0.6; }
            100% { transform: scale(3); opacity: 0; }
          }

          /* ===== MECH SNAP CARD ENRICHMENTS ===== */
          .mech-snap { position: relative; }
          .mech-rail {
            position: absolute;
            left: 50%;
            top: 0; bottom: 0;
            width: 1px;
            background: #ececf5;
            opacity: 0.55;
            pointer-events: none;
          }
          .mech-snap .mech-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: var(--accent) !important;
          }
          .mech-eyebrow-num {
            font-weight: 600;
            color: var(--accent);
          }
          .mech-eyebrow-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: var(--accent);
          }
          .mech-eyebrow-role {
            color: #9494a9;
            letter-spacing: 0.28em;
          }

          .mech-metrics {
            display: flex;
            gap: 28px;
            padding: 22px 0;
            margin: 0 0 32px;
            border-top: 1px dashed #e0e0ec;
            border-bottom: 1px dashed #e0e0ec;
            opacity: 0;
            transform: translateY(18px);
            transition: opacity .7s cubic-bezier(.2,.8,.2,1) .25s, transform .7s cubic-bezier(.2,.8,.2,1) .25s;
            max-width: 520px;
          }
          .mech-snap.is-in .mech-metrics { opacity: 1; transform: none; }
          .mech-metric { display: flex; flex-direction: column; gap: 4px; }
          .mech-metric-k {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.2em;
            color: #9494a9;
            text-transform: uppercase;
          }
          .mech-metric-v {
            font-family: var(--font-display);
            font-size: 22px;
            font-weight: 600;
            color: var(--accent);
            letter-spacing: -0.02em;
            line-height: 1;
          }

          .mech-actions {
            display: flex;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
          }
          .mech-tag {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.18em;
            padding: 7px 13px;
            border-radius: 999px;
            background: var(--accent-soft);
            color: var(--accent);
            text-transform: uppercase;
            border: 1px solid var(--accent-border);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity .6s cubic-bezier(.2,.8,.2,1) .35s, transform .6s cubic-bezier(.2,.8,.2,1) .35s;
          }
          .mech-snap.is-in .mech-tag { opacity: 1; transform: none; }
          .mech-snap .mech-btn {
            background: var(--accent);
            color: var(--color-midnight-indigo);
          }
          .mech-snap .mech-btn:hover {
            background: var(--accent);
            filter: brightness(0.92);
            transform: translateY(-2px);
            box-shadow: 0 14px 28px -10px var(--accent);
          }

          .mech-illu { position: relative; }
          .mech-illu-bg {
            position: absolute;
            inset: 8%;
            border-radius: 28px;
            background: var(--accent-soft);
            opacity: 0;
            transition: opacity .8s cubic-bezier(.2,.8,.2,1) .15s;
            pointer-events: none;
          }
          .mech-snap.is-in .mech-illu-bg { opacity: 1; }
          .mech-illu-corner {
            position: absolute;
            width: 28px;
            height: 28px;
            pointer-events: none;
            opacity: 0;
            transition: opacity .7s cubic-bezier(.2,.8,.2,1) .45s;
          }
          .mech-snap.is-in .mech-illu-corner { opacity: 1; }
          .mech-illu-corner span {
            position: absolute;
            background: var(--accent);
          }
          .mech-illu-corner--tl { top: 8%; left: 6%; }
          .mech-illu-corner--tl span:nth-child(1) { top: 0; left: 0; width: 14px; height: 1px; }
          .mech-illu-corner--tl span:nth-child(2) { top: 0; left: 0; width: 1px; height: 14px; }
          .mech-illu-corner--br { bottom: 8%; right: 6%; }
          .mech-illu-corner--br span:nth-child(1) { bottom: 0; right: 0; width: 14px; height: 1px; }
          .mech-illu-corner--br span:nth-child(2) { bottom: 0; right: 0; width: 1px; height: 14px; }

          @media (max-width: 980px) {
            .mech-intro-grid { grid-template-columns: 1fr; gap: 48px; }
            .mech-intro-meta { grid-template-columns: repeat(2, 1fr); }
            .mech-rail { display: none; }
            .mech-metrics { flex-wrap: wrap; gap: 20px; }
          }
          @media (max-width: 600px) {
            .mech-intro-toc-tag { display: none; }
          }

          /* ===== STACK HEADER ===== */
          .stack-header {
            display: grid;
            grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
            gap: 80px;
            align-items: end;
            margin-bottom: 72px;
            position: relative;
          }
          .stack-eyebrow {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.28em;
            color: var(--color-action-violet);
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 28px;
          }
          .stack-eyebrow::before {
            content: '';
            width: 36px; height: 1px;
            background: var(--color-action-violet);
          }
          .stack-title {
            font-family: var(--font-display);
            font-size: clamp(40px, 5.4vw, 76px);
            font-weight: 600;
            line-height: 0.96;
            letter-spacing: -0.04em;
            color: var(--color-midnight-indigo);
            margin: 0;
            text-wrap: balance;
          }
          .stack-title .accent { color: var(--color-action-violet); }
          .stack-title .strike { position: relative; }
          .stack-title .strike::after {
            content: '';
            position: absolute;
            left: 0; right: 0; bottom: 0.08em;
            height: 6px;
            background: var(--color-action-violet);
            transform-origin: left;
            transform: scaleX(var(--draw-x, 0));
            transition: transform 1.2s cubic-bezier(.2,.8,.2,1) .3s;
            border-radius: 2px;
            opacity: 0.85;
          }
          .stack-header.in .stack-title .strike::after { transform: scaleX(1); }
          .stack-lede {
            font-size: 17px;
            line-height: 1.6;
            color: #4a4a6e;
            max-width: 460px;
            margin: 0;
            text-wrap: pretty;
          }
          .stack-meta {
            display: flex;
            gap: 28px;
            margin-top: 24px;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.16em;
            color: #6a6a82;
            text-transform: uppercase;
          }
          .stack-meta strong {
            display: block;
            font-family: var(--font-display);
            font-size: 28px;
            font-weight: 600;
            color: var(--color-action-violet);
            letter-spacing: -0.02em;
            margin-bottom: 4px;
          }

          /* ===== STACK GRID ===== */
          .stack-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .stack-card {
            position: relative;
            padding: 28px;
            border-radius: 24px;
            background: #fbfbfd;
            border: 1px solid #e8e8f0;
            color: var(--color-midnight-indigo);
            overflow: hidden;
            transition: transform .5s cubic-bezier(.2,.8,.2,1), border-color .35s, background .35s, box-shadow .4s, padding-bottom .45s cubic-bezier(.2,.8,.2,1);
            opacity: 0;
            transform: translateY(40px);
            isolation: isolate;
          }
          .stack-card:hover { padding-bottom: 172px; }
          .stack-card.in {
            opacity: 1;
            transform: translateY(0);
          }
          .stack-card:hover {
            transform: translateY(-6px);
            background: #ffffff;
            border-color: var(--color-action-violet);
            box-shadow: 0 24px 48px -28px rgba(83,80,204,0.45) !important;
          }
          .stack-card::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: var(--color-action-violet);
            opacity: 0;
            transition: opacity .35s;
            z-index: 1;
          }
          .stack-card:hover::after { opacity: 1; }

          /* hover preview panel */
          .stack-card-preview {
            position: absolute;
            inset: auto 18px 18px 18px;
            top: auto;
            height: 0;
            border-radius: 16px;
            overflow: hidden;
            background: rgba(35,34,105,0.5);
            border: 1px solid rgba(83,80,204,0);
            opacity: 0;
            transition:
              height .45s cubic-bezier(.2,.8,.2,1),
              opacity .35s cubic-bezier(.2,.8,.2,1) .05s,
              border-color .35s;
            pointer-events: none;
            z-index: 3;
          }
          .stack-card:hover .stack-card-preview {
            height: 130px;
            opacity: 1;
            border-color: rgba(83,80,204,0.5);
          }
          .stack-card-preview-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            filter: saturate(1.05) contrast(1.02);
          }
          .stack-card-preview-placeholder {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #9494a9;
            background:
              #f0f0f7;
            background-size: 12px 12px;
            background-image:
              none;
            background-position: 0 0, 6px 6px;
          }
          .stack-card-preview-placeholder svg { color: var(--color-action-violet); opacity: 0.6; }
          .stack-card-preview-placeholder span {
            font-family: var(--font-mono);
            font-size: 9px;
            letter-spacing: 0.22em;
            color: #6a6a82;
            text-transform: uppercase;
          }
          .stack-card-preview-tag {
            position: absolute;
            top: 8px; left: 10px;
            font-family: var(--font-mono);
            font-size: 9px;
            letter-spacing: 0.2em;
            padding: 4px 9px;
            border-radius: 999px;
            background: rgba(13,13,61,0.85);
            color: var(--color-bright-blue);
            text-transform: uppercase;
            z-index: 2;
          }

          .stack-card-head {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 22px;
            position: relative;
            z-index: 2;
          }
          .stack-card-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: var(--accent-soft);
            border: 1px solid var(--accent-border);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent);
            position: relative;
            overflow: hidden;
          }
          .stack-card-icon::after {
            content: '';
            position: absolute;
            inset: 0;
            background: var(--accent-soft);
            opacity: 0;
            transition: opacity .4s;
          }
          .stack-card:hover .stack-card-icon::after { opacity: 1; }
          .stack-card:hover .stack-card-icon {
            animation: stack-icon-bob 2.4s ease-in-out infinite;
          }
          @keyframes stack-icon-bob {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50%      { transform: translateY(-4px) rotate(-3deg); }
          }
          .stack-card-num {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.22em;
            color: #9494a9;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 6px;
          }
          .stack-card-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent);
            position: relative;
          }
          .stack-card-dot::after {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 1px solid var(--accent);
            opacity: 0;
            animation: stack-dot-ping 2.2s ease-out infinite;
          }
          @keyframes stack-dot-ping {
            0%   { transform: scale(0.6); opacity: 0.6; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          .stack-card-name {
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.15;
            margin-bottom: 6px;
            position: relative; z-index: 2;
            color: var(--color-midnight-indigo);
          }
          .stack-card-tag {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.14em;
            color: var(--accent);
            text-transform: uppercase;
            margin-bottom: 18px;
            position: relative; z-index: 2;
          }
          .stack-card-desc {
            font-size: 13.5px;
            line-height: 1.6;
            color: #5a5a78;
            margin-bottom: 22px;
            position: relative; z-index: 2;
            text-wrap: pretty;
          }
          .stack-card-foot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 18px;
            border-top: 1px dashed #e0e0ec;
            position: relative; z-index: 2;
          }
          .stack-card-metrics {
            display: flex;
            gap: 16px;
          }
          .stack-card-metric {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.12em;
            color: #9494a9;
            text-transform: uppercase;
          }
          .stack-card-metric strong {
            display: block;
            font-family: var(--font-display);
            font-size: 14px;
            color: var(--color-midnight-indigo);
            letter-spacing: -0.01em;
            margin-top: 2px;
            text-transform: none;
          }
          .stack-card-version {
            font-family: var(--font-mono);
            font-size: 10px;
            letter-spacing: 0.16em;
            padding: 5px 10px;
            border-radius: 999px;
            background: var(--accent-soft);
            color: var(--accent);
            text-transform: uppercase;
          }

          /* ===== STACK FOOTER ===== */
          .stack-footer {
            margin-top: 56px;
            padding-top: 36px;
            border-top: 1px solid #ececf5;
            display: grid;
            grid-template-columns: minmax(0, 0.6fr) minmax(0, 1fr);
            gap: 56px;
            align-items: start;
          }
          .stack-footer-note {
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 0.22em;
            color: #9494a9;
            text-transform: uppercase;
          }
          .stack-flow {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 14px;
            flex-wrap: wrap;
            font-family: var(--font-mono);
            font-size: 12px;
            color: #6a6a82;
            letter-spacing: 0.12em;
          }
          .stack-flow-pill {
            padding: 8px 14px;
            border-radius: 999px;
            background: #f4f4f8;
            border: 1px solid #e8e8f0;
            color: var(--color-midnight-indigo);
            transition: background .3s, transform .3s;
          }
          .stack-flow-pill:hover {
            background: rgba(83,80,204,0.08);
            transform: translateY(-1px);
          }
          .stack-flow-arrow {
            color: var(--color-action-violet);
            opacity: 0.6;
          }

          @media (max-width: 980px) {
            .stack-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .stack-header { grid-template-columns: 1fr !important; gap: 32px; align-items: start; margin-bottom: 56px; }
            .stack-footer { grid-template-columns: 1fr; gap: 28px; }
            .stack-flow { justify-content: flex-start; }
          }
          @media (max-width: 600px) {
            .stack-grid { grid-template-columns: 1fr !important; }
            .stack-meta { flex-wrap: wrap; gap: 16px; }
          }
        `}</style>
    </section>);

}

// ===== Mech Intro Header =====
export function MechIntro({ mechanics }) {
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
    <div ref={ref} className="mech-intro-inner">
      <div className="mech-intro-grid">
        <div className="mech-intro-left">
          <div className="mech-intro-eyebrow">
            <span className="mech-intro-eyebrow-bar"/>
            009 · TECNOLOGIA &amp; FLUJO
          </div>
          <h2 className="mech-intro-title">
            Mecánicas y <span className="mech-intro-accent">flujo</span> del<br/>
            prototipo <span className="mech-intro-strike">inmersivo</span>.
          </h2>
          <p className="mech-intro-lede">
            Seis mecánicas conectadas que estructuran la experiencia educativa.
            Cada una resuelve una restricción clínica concreta y se valida
            con instrumentos estándar antes de pasar a pacientes.
          </p>

        </div>

        <div className="mech-intro-right">
          <MechHeroSVG/>
        </div>
      </div>

      <div className="mech-intro-scroll mono" aria-hidden="true">
        <span>BAJA</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="7" cy="6" r="1.5" fill="currentColor">
            <animate attributeName="cy" values="6;13;6" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </div>
  );
}

// ===== Mech hero SVG — animated tech illustration =====
export function MechHeroSVG() {
  const V = '#16165c';   // midnight indigo (primary on white)
  const A = '#5350cc';   // action violet
  const B = '#00b1ff';   // bright blue
  const G = '#00ffaa';   // vivid green

  return (
    <div className="mech-hero-svg" aria-hidden="true">
      <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mh-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={A}/>
            <stop offset="0.5" stopColor={B}/>
            <stop offset="1" stopColor={G}/>
          </linearGradient>
          <radialGradient id="mh-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={B} stopOpacity="0.22"/>
            <stop offset="0.55" stopColor={A} stopOpacity="0.08"/>
            <stop offset="1" stopColor={A} stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="mh-headset" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={V}/>
            <stop offset="1" stopColor={A}/>
          </linearGradient>
          <linearGradient id="mh-card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff"/>
            <stop offset="1" stopColor="#f4f4f8"/>
          </linearGradient>
        </defs>

        {/* central radial glow */}
        <circle cx="240" cy="240" r="200" fill="url(#mh-glow)"/>

        {/* faint dot grid */}
        <g opacity="0.35">
          {Array.from({ length: 11 }).map((_, r) =>
            Array.from({ length: 11 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={48 + c * 38.4} cy={48 + r * 38.4} r="0.8" fill={A}/>
            ))
          )}
        </g>

        {/* outer ring */}
        <g className="mhs-spin-slow" style={{ transformOrigin: '240px 240px' }}>
          <circle cx="240" cy="240" r="210" fill="none" stroke="url(#mh-ring)" strokeWidth="1" strokeDasharray="1 11" opacity="0.7"/>
        </g>

        {/* HUD tick marks */}
        <g opacity="0.45">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const len = i % 6 === 0 ? 12 : 6;
            const x1 = 240 + Math.cos(a) * 196;
            const y1 = 240 + Math.sin(a) * 196;
            const x2 = 240 + Math.cos(a) * (196 + len);
            const y2 = 240 + Math.sin(a) * (196 + len);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={A} strokeWidth={i % 6 === 0 ? 1.4 : 0.8}/>;
          })}
        </g>

        {/* mid ring */}
        <g className="mhs-spin-rev" style={{ transformOrigin: '240px 240px' }}>
          <circle cx="240" cy="240" r="158" fill="none" stroke={A} strokeWidth="0.8" opacity="0.5"/>
          <circle cx="240" cy="240" r="158" fill="none" stroke={B} strokeWidth="1.6" strokeDasharray="0 60 32 90" strokeLinecap="round" opacity="0.9"/>
        </g>

        {/* inner ring */}
        <g className="mhs-spin-mid" style={{ transformOrigin: '240px 240px' }}>
          <circle cx="240" cy="240" r="118" fill="none" stroke={A} strokeWidth="1" strokeDasharray="6 8" opacity="0.55"/>
        </g>

        {/* central VR headset — isometric */}
        <g className="mhs-bob" style={{ transformOrigin: '240px 250px' }}>
          {/* shadow */}
          <ellipse cx="240" cy="298" rx="76" ry="6" fill={A} opacity="0.18"/>

          {/* head strap */}
          <path d="M178 240 Q150 226 148 250 Q146 268 168 274" fill="none" stroke={A} strokeWidth="2.4" strokeLinecap="round"/>
          <path d="M302 240 Q330 226 332 250 Q334 268 312 274" fill="none" stroke={A} strokeWidth="2.4" strokeLinecap="round"/>

          {/* main body */}
          <rect x="172" y="218" width="136" height="64" rx="14" fill="url(#mh-headset)" stroke={V} strokeWidth="1.8"/>
          {/* top highlight */}
          <rect x="174" y="220" width="132" height="6" rx="3" fill="#ffffff" opacity="0.12"/>

          {/* face cushion */}
          <rect x="178" y="276" width="124" height="10" rx="5" fill={V} opacity="0.7"/>

          {/* left lens */}
          <circle cx="206" cy="250" r="20" fill="#08082a" stroke={B} strokeWidth="2"/>
          <circle cx="206" cy="250" r="14" fill="none" stroke={B} strokeWidth="0.8" opacity="0.5"/>
          <circle cx="206" cy="250" r="6" fill={B} className="mhs-lens-blink"/>
          <circle cx="202" cy="246" r="2" fill="#ffffff" opacity="0.85"/>

          {/* right lens */}
          <circle cx="274" cy="250" r="20" fill="#08082a" stroke={B} strokeWidth="2"/>
          <circle cx="274" cy="250" r="14" fill="none" stroke={B} strokeWidth="0.8" opacity="0.5"/>
          <circle cx="274" cy="250" r="6" fill={B} className="mhs-lens-blink" style={{ animationDelay: '0.6s' }}/>
          <circle cx="270" cy="246" r="2" fill="#ffffff" opacity="0.85"/>

          {/* nose bridge */}
          <path d="M232 286 Q240 296 248 286" fill="#08082a" stroke={V} strokeWidth="1.4"/>

          {/* brand bar */}
          <line x1="226" y1="232" x2="254" y2="232" stroke={B} strokeWidth="2" strokeLinecap="round"/>
        </g>

        {/* orbiting icon: smartphone */}
        <g className="mhs-orbit" style={{ transformOrigin: '240px 240px' }}>
          <g transform="translate(372 240)">
            <rect x="-16" y="-26" width="32" height="52" rx="5" fill="url(#mh-card)" stroke={V} strokeWidth="1.5"/>
            <rect x="-13" y="-22" width="26" height="38" rx="2" fill={B} opacity="0.18"/>
            <circle cx="0" cy="-23" r="1" fill={V}/>
            <rect x="-5" y="20" width="10" height="2" rx="1" fill={V} opacity="0.5"/>
            {/* screen content */}
            <rect x="-10" y="-18" width="14" height="2" rx="1" fill={V} opacity="0.55"/>
            <circle cx="0" cy="-3" r="6" fill="none" stroke={B} strokeWidth="1.4"/>
            <circle cx="0" cy="-3" r="2" fill={B}/>
            <rect x="-8" y="7" width="16" height="1.4" rx="0.7" fill={V} opacity="0.4"/>
            <rect x="-8" y="11" width="12" height="1.4" rx="0.7" fill={V} opacity="0.3"/>
          </g>
        </g>

        {/* orbiting icon: insulin pen */}
        <g className="mhs-orbit" style={{ transformOrigin: '240px 240px', animationDelay: '-7s' }}>
          <g transform="translate(108 240)">
            <rect x="-5" y="-28" width="10" height="56" rx="2.5" fill="#dcdce4" stroke={V} strokeWidth="1.2"/>
            <rect x="-7" y="-32" width="14" height="6" rx="1.5" fill={A} stroke={V} strokeWidth="1"/>
            <circle cx="0" cy="-34" r="1.6" fill={V}/>
            <rect x="-5" y="22" width="10" height="10" rx="2" fill={A} stroke={V} strokeWidth="1"/>
            {/* dose window */}
            <rect x="-3" y="0" width="6" height="4" rx="0.8" fill="#ffffff" stroke={V} strokeWidth="0.6"/>
            <text x="0" y="3.5" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="3.5" fontWeight="700" fill={V}>0</text>
          </g>
        </g>

        {/* orbiting icon: code bracket */}
        <g className="mhs-orbit-rev" style={{ transformOrigin: '240px 240px' }}>
          <g transform="translate(240 88)">
            <circle cx="0" cy="0" r="22" fill="url(#mh-card)" stroke={V} strokeWidth="1.4"/>
            <path d="M-10 -7 L-15 0 L-10 7" stroke={A} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 -7 L15 0 L10 7" stroke={A} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="4" y1="-9" x2="-4" y2="9" stroke={A} strokeWidth="1.6" strokeLinecap="round"/>
          </g>
        </g>

        {/* orbiting icon: heart pulse */}
        <g className="mhs-orbit-rev" style={{ transformOrigin: '240px 240px', animationDelay: '-9s' }}>
          <g transform="translate(240 392)">
            <circle cx="0" cy="0" r="22" fill="url(#mh-card)" stroke={V} strokeWidth="1.4"/>
            <path d="M-13 0 L-7 0 L-4 -7 L0 8 L4 -5 L7 0 L13 0" stroke="#ff5f7e" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </g>

        {/* connection beams (radial dashed) */}
        <g className="mhs-pulse-paths" opacity="0.55">
          <line x1="240" y1="240" x2="372" y2="240" stroke={B} strokeWidth="0.8" strokeDasharray="3 6"/>
          <line x1="240" y1="240" x2="108" y2="240" stroke={A} strokeWidth="0.8" strokeDasharray="3 6"/>
          <line x1="240" y1="240" x2="240" y2="88"  stroke={A} strokeWidth="0.8" strokeDasharray="3 6"/>
          <line x1="240" y1="240" x2="240" y2="392" stroke={V} strokeWidth="0.8" strokeDasharray="3 6"/>
        </g>

        {/* corner data chips */}
        <g className="mhs-float-a">
          <rect x="46" y="74" width="106" height="28" rx="14" fill="#ffffff" stroke={V} strokeWidth="1.2"/>
          <circle cx="60" cy="88" r="3.4" fill={G}/>
          <circle cx="60" cy="88" r="3.4" fill={G} opacity="0.3" className="mhs-chip-ping"/>
          <text x="72" y="92" fill={V} fontSize="10" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.4">SISTEMA OK</text>
        </g>
        <g className="mhs-float-b">
          <rect x="328" y="382" width="112" height="28" rx="14" fill="#ffffff" stroke={V} strokeWidth="1.2"/>
          <circle cx="342" cy="396" r="3.4" fill={B}/>
          <text x="354" y="400" fill={V} fontSize="10" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.4">3DOF · 60FPS</text>
        </g>

        {/* corner brackets */}
        <g opacity="0.5">
          <path d="M14 36 L14 14 L36 14" fill="none" stroke={A} strokeWidth="1.4"/>
          <path d="M466 444 L466 466 L444 466" fill="none" stroke={A} strokeWidth="1.4"/>
          <path d="M466 36 L466 14 L444 14" fill="none" stroke={A} strokeWidth="1.4"/>
          <path d="M14 444 L14 466 L36 466" fill="none" stroke={A} strokeWidth="1.4"/>
        </g>
      </svg>
    </div>
  );
}

// ===== Stack subcomponents =====
export function StackHeader() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } });
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="stack-header">
      <div>
        <div className="stack-eyebrow">009.B · STACK TECNOLOGICO</div>
        <h2 className="stack-title">
          Construido con <span className="strike accent">herramientas accesibles</span>,<br/>
          pensado para escalar.
        </h2>
      </div>
      <div>
        <p className="stack-lede">
          Cada pieza del stack fue elegida bajo dos criterios no negociables:
          accesibilidad economica para clínicas rurales y madurez técnica para uso clínico real.
        </p>
        <div className="stack-meta">
          <span><strong>6</strong>Tecnologías</span>
          <span><strong>100%</strong>Offline</span>
          <span><strong>$8</strong>Costo HW</span>
        </div>
      </div>
    </div>
  );
}

export function StackFooter() {
  const flow = ['Blender', 'Unity', 'C# Scripts', 'APK Build', 'Cardboard', 'Paciente'];
  return (
    <div className="stack-footer">
      <div className="stack-footer-note">
        Pipeline · diseño &gt; implementación &gt; despliegue
      </div>
      <div className="stack-flow">
        {flow.map((step, i) => (
          <React.Fragment key={i}>
            <span className="stack-flow-pill">{step}</span>
            {i < flow.length - 1 && (
              <svg className="stack-flow-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h11M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export const StackIcons = {
  unity: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M13 3 L22 8 L22 18 L13 23 L4 18 L4 8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M13 8 L18 11 L18 15 L13 18 L8 15 L8 11 Z" fill="currentColor" opacity="0.18"/>
      <circle cx="13" cy="13" r="1.4" fill="currentColor"/>
    </svg>
  ),
  cardboard: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="3" y="8" width="20" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="9" cy="13.5" r="2.6" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="17" cy="13.5" r="2.6" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M11.5 19 L13 17 L14.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  android: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M6 14 a7 7 0 0 1 14 0 V20 H6 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <line x1="9" y1="6.5" x2="10.5" y2="9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <line x1="17" y1="6.5" x2="15.5" y2="9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="10" cy="13" r="1" fill="currentColor"/>
      <circle cx="16" cy="13" r="1" fill="currentColor"/>
    </svg>
  ),
  gaze: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <ellipse cx="13" cy="13" rx="10" ry="6" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="13" cy="13" r="3" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="13" cy="13" r="1.2" fill="currentColor"/>
      <line x1="13" y1="3" x2="13" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="13" y1="21" x2="13" y2="23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  blender: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="7" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="13" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <circle cx="13" cy="11.5" r="0.9" fill="currentColor"/>
      <path d="M7 17 L13 11 L19 17" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  ),
  code: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M9 7 L4 13 L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 7 L22 13 L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="14.5" y1="5.5" x2="11.5" y2="20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
};

export function StackCard({ item, index, total }) {
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
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);

    const onMove = (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--my', `${ev.clientY - r.top}px`);
    };
    el.addEventListener('mousemove', onMove);
    return () => { io.disconnect(); el.removeEventListener('mousemove', onMove); };
  }, [index]);

  const hexToSoft = (hex) => {
    const h = hex.replace('#','');
    const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},0.10)`;
  };
  const hexToBorder = (hex) => {
    const h = hex.replace('#','');
    const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},0.35)`;
  };

  return (
    <article
      ref={ref}
      className="stack-card"
      style={{
        '--accent': item.accent,
        '--accent-soft': hexToSoft(item.accent),
        '--accent-border': hexToBorder(item.accent)
      }}
    >
      <header className="stack-card-head">
        <div className="stack-card-icon">{StackIcons[item.icon]}</div>
        <div className="stack-card-num">
          <span>{String(index + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span>
          <span className="stack-card-dot" aria-hidden="true"/>
        </div>
      </header>
      <h3 className="stack-card-name">{item.name}</h3>
      <div className="stack-card-tag">{item.role} · {item.tag}</div>
      <p className="stack-card-desc">{item.desc}</p>
      <footer className="stack-card-foot">
        <div className="stack-card-metrics">
          {item.metrics.map((m, i) => (
            <div key={i} className="stack-card-metric">
              {m.k}<strong>{m.v}</strong>
            </div>
          ))}
        </div>
      </footer>

      <div className="stack-card-preview" aria-hidden="true">
        <span className="stack-card-preview-tag">VISTA · {item.role}</span>
        {item.preview ? (
          <img src={item.preview} alt="" className="stack-card-preview-img"/>
        ) : (
          <div className="stack-card-preview-placeholder">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 16 L8 12 L12 15 L16 11 L21 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="9" cy="9" r="1.4" fill="currentColor"/>
            </svg>
            <span>imagen · pendiente</span>
          </div>
        )}
      </div>
    </article>
  );
}

