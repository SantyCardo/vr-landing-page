// ============================================
// SECTIONS PART 2: Question, Objectives, Timeline
// ============================================

// ----- RESEARCH QUESTION -----
function QuestionSection() {
  return (
    <section id="pregunta">
      <div className="container">
        <div className="reveal" style={{
          position: 'relative',
          padding: '80px 48px',
          borderRadius: 32,
          background: 'rgba(35,34,105,0.5)',
          border: '1px solid rgba(83,80,204,0.5)',
          textAlign: 'center',
          overflow: 'hidden',
        }}>

          {/* "??" marker */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96, height: 96,
            borderRadius: '50%',
            background: 'rgba(35,34,105,0.7)',
            border: '1px solid rgba(0,177,255,0.5)',
            marginBottom: 32,
            position: 'relative',
          }}>
            <span style={{
              fontSize: 48, fontWeight: 600,
              color: 'var(--color-bright-blue)',
              letterSpacing: '-0.05em', lineHeight: 1,
            }}>?</span>
            {/* orbiting dot */}
            <span style={{
              position: 'absolute',
              width: 8, height: 8, borderRadius: '50%',
              background: 'var(--color-vivid-green)',
              boxShadow: '0 0 16px var(--color-vivid-green)',
              top: '50%', left: '50%',
              transformOrigin: '0 0',
              animation: 'orbit 4s linear infinite',
            }}/>
          </div>

          <div className="mono" style={{ fontSize: 12, letterSpacing: '0.28em', color: 'var(--color-bright-blue)', marginBottom: 14 }}>
            005
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5.2vw, 60px)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            fontWeight: 600,
            color: 'var(--color-white)',
            margin: '0 auto 36px',
            maxWidth: 880,
            textWrap: 'balance',
          }}>
            Pregunta problema
          </h3>

          <h2 style={{
            fontSize: 'clamp(24px, 3.4vw, 38px)',
            lineHeight: 1.32,
            letterSpacing: '-0.025em',
            fontWeight: 500,
            maxWidth: 920,
            margin: '0 auto',
            color: 'var(--color-ghost-frost)',
            opacity: 0.92,
            textWrap: 'pretty',
          }}>
            ¿Cómo se puede desarrollar una herramienta educativa{' '}
            <span style={{ color: 'var(--color-bright-blue)' }}>inmersiva e interactiva</span> que ayude a fortalecer la correcta
            técnica de insulinización y el adecuado almacenamiento de la insulina
            en pacientes con diabetes?
          </h2>
        </div>

        <style>{`
          @keyframes q-pulse {
            0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
            50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
          }
          @keyframes orbit {
            from { transform: rotate(0deg) translate(56px) rotate(0deg); }
            to { transform: rotate(360deg) translate(56px) rotate(-360deg); }
          }
        `}</style>
      </div>
    </section>
  );
}

// ----- OBJECTIVES -----
function ObjectivesSection() {
  const specifics = [
    {
      title: 'Identificar Requerimientos',
      body: 'Identificar los requerimientos clínicos, educativos, funcionales y no funcionales del procedimiento de insulinización, mediante revisión documental y consulta a profesionales de salud, para asegurar su adecuada representación y adaptación a las características de la población objetivo en el prototipo.',
      step: '01',
      color: '#00b1ff',
    },
    {
      title: 'Diseñar el Prototipo',
      body: 'Diseñar el prototipo educativo, mediante la integración de componentes interactivos de las etapas del procedimiento, con orientación al entrenamiento práctico y seguro del usuario.',
      step: '02',
      color: '#00ffaa',
    },
    {
      title: 'Validar con Expertos',
      body: 'Validar el prototipo a través de expertos en el área, como médicos de la fundación clínica, para la verificación del procedimiento esté correctamente explicado para su comprensión y aplicación.',
      step: '03',
      color: '#b1a6f6',
    },
  ];

  return (
    <section id="objetivos">
      <div className="container">
        <SectionHeader
          eyebrow="006 · OBJETIVOS"
          title={<>Objetivos del <span className="text-blue">proyecto</span></>}
        />

        {/* general objective — featured */}
        <div className="reveal" style={{
          padding: 40,
          borderRadius: 32,
          background: 'rgba(83,80,204,0.28)',
          border: '1px solid rgba(83,80,204,0.6)',
          marginBottom: 56,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div className="hud-corner tl"/>
          <div className="hud-corner tr"/>
          <div className="hud-corner bl"/>
          <div className="hud-corner br"/>

          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'start' }} className="og-grid">
            <div>
              <div style={{
                width: 72, height: 72,
                borderRadius: 18,
                background: '#5350cc',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 32px rgba(0,177,255,0.4)',
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="1.5" fill="#fff"/>
                </svg>
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 16, letterSpacing: '0.22em', color: 'var(--color-bright-blue)', marginBottom: 18, fontWeight: 600 }}>
                ◇ OBJETIVO GENERAL
              </div>
              <p className="heading" style={{ fontSize: 22, lineHeight: 1.45, fontWeight: 500 }}>
                Desarrollar un prototipo de herramienta educativa inmersiva e interactiva,
                basada en requerimientos clínicos, procedimientos y almacenamiento de la
                insulinización, para el fortalecimiento de la técnica de aplicación en
                pacientes adultos con diabetes tipo II.
              </p>
            </div>
          </div>
        </div>

        {/* specifics */}
        <div className="reveal" style={{ marginBottom: 32 }}>
          <div className="mono" style={{ fontSize: 16, letterSpacing: '0.22em', color: 'var(--color-vivid-green)', fontWeight: 600 }}>
            ◇ OBJETIVOS ESPECÍFICOS
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="objectives-grid">
          {specifics.map((s, i) => (
            <div key={i} className="reveal spotlight-card" data-reveal={i === 0 ? 'fade-right' : i === 2 ? 'fade-left' : 'scale-in'} data-delay={i * 100} style={{
              padding: 36,
              borderRadius: 24,
              background: 'rgba(35,34,105,0.55)',
              border: '1px solid rgba(83,80,204,0.4)',
              position: 'relative',
              transition: 'transform .4s, border-color .4s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = s.color + '88';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.borderColor = 'rgba(83,80,204,0.4)';
            }}>
              {/* connector dots */}
              {i < 2 && (
                <div style={{
                  position: 'absolute',
                  right: -22, top: '50%', transform: 'translateY(-50%)',
                  width: 24, height: 1,
                  background: `${s.color}`,
                  zIndex: 2,
                }} className="hide-on-mobile"/>
              )}
              <div style={{
                fontSize: 56,
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: s.color,
                opacity: 0.3,
                marginBottom: 20,
                fontFamily: 'var(--font-mono)',
              }}>{s.step}</div>
              <div className="heading" style={{ marginBottom: 14, fontSize: 22, color: s.color }}>{s.title}</div>
              <p className="body text-dim" style={{ lineHeight: 1.6, opacity: 0.78 }}>{s.body}</p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 880px) {
            .objectives-grid { grid-template-columns: 1fr !important; }
            .og-grid { grid-template-columns: 1fr !important; }
            .hide-on-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ----- TIMELINE / CRONOGRAMA -----
function TimelineSection() {
  const [activePhase, setActivePhase] = React.useState(0);

  const phases = [
    {
      name: 'Requerimientos',
      label: 'FASE 1',
      weeks: [1, 5],
      activities: 4,
      desc: 'Levantamiento de requerimientos clínicos, educativos, funcionales y no funcionales.',
      items: [
        { title: 'Revisión sistemática de literatura clínica y pedagógica sobre insulinización y sus errores.', span: 'S1–2' },
        { title: 'Entrevistas con profesionales de la Fundación Clínica para confirmación de requerimientos.', span: 'S2–3' },
        { title: 'Construcción de la propuesta final a desarrollar.', span: 'S3–4' },
        { title: 'Definición de controles del prototipo a través de los alcances del Gaze.', span: 'S4–5' },
      ],
      deliverable: 'Documento formal de requerimientos clínicos, educativos, funcionales y no funcionales.',
      color: '#00b1ff',
    },
    {
      name: 'Desarrollo',
      label: 'FASE 2',
      weeks: [4, 15],
      activities: 13,
      desc: 'Construcción técnica del prototipo en Unity con Google Cardboard.',
      items: [
        { title: 'Construcción del Game Design Document (GDD).', span: 'S4–6' },
        { title: 'Modelado 3D de escenarios y elementos clínicos.', span: 'S6–9' },
        { title: 'Implementación del sistema gaze + temporizador visual.', span: 'S7–10' },
        { title: 'Integración de animaciones, audio guiado y subtítulos.', span: 'S10–13' },
        { title: 'Sistema de evaluación por módulos.', span: 'S13–15' },
      ],
      deliverable: 'APK Android funcional con escenas inmersivas y evaluación integrada.',
      color: '#00ffaa',
    },
    {
      name: 'Validación',
      label: 'FASE 3',
      weeks: [15, 18],
      activities: 3,
      desc: 'Validación clínica y técnica con expertos de la FOSUNAB.',
      items: [
        { title: 'Pruebas técnicas y QA del prototipo en dispositivo objetivo.', span: 'S15–16' },
        { title: 'Validación clínica mediante SUS, Likert e IVC (≥ 0.80).', span: 'S16–17' },
        { title: 'Iteración final y entrega del prototipo validado.', span: 'S17–18' },
      ],
      deliverable: 'Informe de validación clínica y prototipo final aprobado.',
      color: '#b1a6f6',
    },
  ];

  return (
    <section id="cronograma">
      <div className="container">
        <SectionHeader
          eyebrow="007 · CRONOGRAMA"
          title={<>Plan de trabajo en <span className="text-blue">18 semanas</span></>}
          subtitle="Organizado en tres fases secuenciales con entregables verificables al cierre de cada etapa."
        />

        {/* gantt grid */}
        <div className="reveal" style={{
          padding: 32,
          borderRadius: 32,
          background: 'rgba(13,13,61,0.55)',
          border: '1px solid rgba(83,80,204,0.4)',
          marginBottom: 48,
          overflowX: 'auto',
        }}>
          <div style={{ minWidth: 720 }}>
            {/* week labels */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '120px repeat(18, 1fr)',
              gap: 4,
              marginBottom: 16,
            }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--color-muted-violet)', alignSelf: 'center' }}>
                FASE / SEMANA
              </div>
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="mono" style={{
                  fontSize: 10,
                  textAlign: 'center',
                  color: 'var(--color-ghost-frost)',
                  opacity: 0.5,
                  letterSpacing: '0.1em',
                }}>S{i+1}</div>
              ))}
            </div>

            {phases.map((p, idx) => (
              <div key={idx} style={{
                display: 'grid',
                gridTemplateColumns: '120px repeat(18, 1fr)',
                gap: 4,
                marginBottom: 14,
                cursor: 'pointer',
              }}
              onClick={() => setActivePhase(idx)}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', color: p.color }}>{p.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: activePhase === idx ? p.color : 'var(--color-white)' }}>{p.name}</div>
                </div>
                {Array.from({ length: 18 }).map((_, i) => {
                  const week = i + 1;
                  const inRange = week >= p.weeks[0] && week <= p.weeks[1];
                  return (
                    <div key={i} style={{
                      height: 32,
                      borderRadius: 6,
                      background: inRange
                        ? (activePhase === idx
                            ? `${p.color}88`
                            : `${p.color}33`)
                        : 'rgba(83,80,204,0.08)',
                      border: inRange ? `1px solid ${p.color}66` : '1px solid rgba(83,80,204,0.15)',
                      boxShadow: inRange && activePhase === idx ? `0 0 16px ${p.color}88` : 'none',
                      transition: 'all .3s',
                      position: 'relative',
                    }}>
                      {inRange && week === p.weeks[0] && (
                        <span style={{
                          position: 'absolute', left: 4, top: '50%', transform: 'translateY(-50%)',
                          width: 6, height: 6, borderRadius: '50%',
                          background: p.color, boxShadow: `0 0 8px ${p.color}`,
                        }}/>
                      )}
                      {inRange && week === p.weeks[1] && (
                        <span style={{
                          position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)',
                          width: 6, height: 6, borderRadius: '50%',
                          background: p.color, boxShadow: `0 0 8px ${p.color}`,
                        }}/>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* phase selector tabs */}
        <div className="reveal" style={{ display: 'flex', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          {phases.map((p, i) => (
            <button key={i} onClick={() => setActivePhase(i)}
              style={{
                padding: '10px 20px',
                borderRadius: 999,
                background: activePhase === i ? `${p.color}22` : 'rgba(35,34,105,0.4)',
                border: `1px solid ${activePhase === i ? p.color : 'rgba(83,80,204,0.4)'}`,
                color: activePhase === i ? p.color : 'var(--color-ghost-frost)',
                fontFamily: 'var(--font-display)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'all .25s',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
              <span className="mono" style={{ fontSize: 9, opacity: 0.7, letterSpacing: '0.2em' }}>{p.label}</span>
              <span>{p.name}</span>
              <span style={{
                padding: '2px 8px',
                borderRadius: 999,
                background: activePhase === i ? p.color + '33' : 'rgba(83,80,204,0.2)',
                fontSize: 11,
                fontFamily: 'var(--font-mono)',
              }}>{p.activities}</span>
            </button>
          ))}
        </div>

        {/* active phase detail */}
        <div key={activePhase} className="phase-detail" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)',
          gap: 24,
          animation: 'phaseFade .5s cubic-bezier(.2,.8,.2,1)',
        }}>
          <div style={{
            padding: 32,
            borderRadius: 24,
            background: 'rgba(35,34,105,0.5)',
            border: '1px solid rgba(83,80,204,0.4)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: phases[activePhase].color, marginBottom: 8 }}>
                  {phases[activePhase].label} · SEMANAS {phases[activePhase].weeks[0]}–{phases[activePhase].weeks[1]}
                </div>
                <div className="heading-lg" style={{ fontSize: 36 }}>{phases[activePhase].name}</div>
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--color-muted-violet)', letterSpacing: '0.15em' }}>
                {phases[activePhase].activities} actividades
              </div>
            </div>

            <p className="body text-dim" style={{ marginBottom: 28, opacity: 0.8 }}>{phases[activePhase].desc}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {phases[activePhase].items.map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: 16,
                  alignItems: 'center',
                  padding: '14px 18px',
                  borderRadius: 14,
                  background: 'rgba(13,13,61,0.45)',
                  border: '1px solid rgba(83,80,204,0.2)',
                }}>
                  <div style={{
                    width: 24, height: 24,
                    borderRadius: 6,
                    background: `${phases[activePhase].color}22`,
                    border: `1px solid ${phases[activePhase].color}66`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: phases[activePhase].color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                  }}>{i+1}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-ghost-frost)' }}>{item.title}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: phases[activePhase].color, opacity: 0.8 }}>{item.span}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: 32,
            borderRadius: 24,
            background: `rgba(13,13,61,0.55)`,
            border: `1px solid ${phases[activePhase].color}66`,
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="hud-corner tl"/>
            <div className="hud-corner br"/>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: phases[activePhase].color, marginBottom: 14 }}>
              ◇ ENTREGABLE
            </div>
            <div className="heading" style={{ fontSize: 22, lineHeight: 1.35, marginBottom: 24 }}>
              {phases[activePhase].deliverable}
            </div>

            <div className="entregable-svg" key={`svg-${activePhase}`} style={{ '--accent': phases[activePhase].color }}>
              <PhaseSVG phase={activePhase} color={phases[activePhase].color}/>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${phases[activePhase].color}33`,
                border: `1px solid ${phases[activePhase].color}88`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: phases[activePhase].color,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', color: 'var(--color-muted-violet)' }}>STATUS</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: phases[activePhase].color }}>EN VALIDACIÓN</div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes phaseFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* entregable SVG illustration */
          .entregable-svg {
            margin: 16px -8px 28px;
            padding: 12px 4px;
            border-radius: 16px;
            background: color-mix(in srgb, var(--accent) 6%, transparent);
            opacity: 0;
            animation: entregable-in .65s cubic-bezier(.2,.8,.2,1) .15s both;
          }
          @keyframes entregable-in {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          /* shared phase SVG animations */
          .phs-float       { animation: phs-float 5.6s ease-in-out infinite; transform-origin: center; }
          .phs-float-slow  { animation: phs-float 7.4s ease-in-out infinite -1.2s; transform-origin: center; }
          .phs-spin        { animation: phs-spin 26s linear infinite; }
          .phs-spin-rev    { animation: phs-spin 32s linear infinite reverse; }
          .phs-orbit-c     { animation: phs-spin 14s linear infinite; }
          .phs-mag         { animation: phs-mag-scan 5s ease-in-out infinite; transform-origin: 230px 90px; }
          .phs-pulse       { animation: phs-pulse 2s ease-in-out infinite; transform-origin: center; }
          .phs-blink       { animation: phs-blink 1.1s steps(2) infinite; }
          .phs-progress    { animation: phs-progress 3.4s cubic-bezier(.2,.8,.2,1) infinite; transform-origin: left center; }
          .phs-draw {
            stroke-dasharray: 60;
            stroke-dashoffset: 60;
            animation: phs-draw 1.8s cubic-bezier(.2,.8,.2,1) .3s forwards;
          }

          @keyframes phs-float {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes phs-spin { to { transform: rotate(360deg); } }
          @keyframes phs-mag-scan {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33%      { transform: translate(-22px, 4px) rotate(-6deg); }
            66%      { transform: translate(10px, -8px) rotate(4deg); }
          }
          @keyframes phs-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%      { opacity: 0.35; transform: scale(1.5); }
          }
          @keyframes phs-blink {
            0%, 100% { opacity: 1; }
            50%      { opacity: 0; }
          }
          @keyframes phs-progress {
            0%   { transform: scaleX(0.2); }
            70%  { transform: scaleX(1); }
            100% { transform: scaleX(1); }
          }
          @keyframes phs-draw {
            to { stroke-dashoffset: 0; }
          }

          @media (max-width: 880px) {
            .phase-detail { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ===== PHASE SVG ILLUSTRATIONS (entregable cards) =====
function PhaseSVG({ phase, color }) {
  if (phase === 0) return <RequirementsSVG color={color}/>;
  if (phase === 1) return <DevelopmentSVG color={color}/>;
  return <ValidationSVG color={color}/>;
}

function RequirementsSVG({ color }) {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="req-doc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.18"/>
          <stop offset="1" stopColor={color} stopOpacity="0.05"/>
        </linearGradient>
      </defs>

      {/* faint grid */}
      <g opacity="0.18">
        {Array.from({length: 8}).map((_, i) => (
          <line key={i} x1={i*40} y1="0" x2={i*40} y2="200" stroke={color} strokeWidth="0.5"/>
        ))}
      </g>

      {/* back doc */}
      <g className="phs-float-slow" style={{ transformOrigin: '100px 100px' }}>
        <rect x="68" y="38" width="100" height="124" rx="6" fill="url(#req-doc)" stroke={color} strokeWidth="1" opacity="0.55"/>
        <line x1="80" y1="58" x2="148" y2="58" stroke={color} strokeWidth="0.8" opacity="0.55"/>
        <line x1="80" y1="70" x2="138" y2="70" stroke={color} strokeWidth="0.8" opacity="0.55"/>
        <line x1="80" y1="82" x2="145" y2="82" stroke={color} strokeWidth="0.8" opacity="0.55"/>
      </g>

      {/* front doc */}
      <g className="phs-float">
        <rect x="92" y="50" width="110" height="138" rx="8" fill="rgba(13,13,61,0.92)" stroke={color} strokeWidth="1.4"/>
        <rect x="92" y="50" width="110" height="24" rx="8" fill={color} fillOpacity="0.18"/>
        <circle cx="104" cy="62" r="2.4" fill={color}/>
        <circle cx="113" cy="62" r="2.4" fill={color} fillOpacity="0.5"/>
        <circle cx="122" cy="62" r="2.4" fill={color} fillOpacity="0.3"/>
        <text x="148" y="65" fontFamily="JetBrains Mono" fontSize="7" fill={color} letterSpacing="1.5">REQ-001</text>

        {/* checklist items */}
        {[0,1,2,3].map(i => (
          <g key={i} transform={`translate(104 ${92 + i*22})`}>
            <rect x="0" y="0" width="12" height="12" rx="3" stroke={color} strokeWidth="1.2" fill={i < 2 ? color : 'none'} fillOpacity={i < 2 ? 0.25 : 0}/>
            {i < 2 && <path d="M2.5 6 L5 8.5 L9.5 4" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>}
            <rect x="20" y="2" width={i === 1 ? 58 : i === 3 ? 50 : 70} height="2.5" rx="1" fill={color} fillOpacity={i < 2 ? 0.7 : 0.3}/>
            <rect x="20" y="7.5" width={i === 0 ? 44 : 36} height="1.6" rx="0.8" fill={color} fillOpacity="0.25"/>
          </g>
        ))}
      </g>

      {/* magnifying glass */}
      <g className="phs-mag" style={{ transformOrigin: '230px 90px' }}>
        <circle cx="230" cy="90" r="22" fill="rgba(13,13,61,0.8)" stroke={color} strokeWidth="1.6"/>
        <circle cx="230" cy="90" r="14" fill="none" stroke={color} strokeWidth="0.6" opacity="0.5"/>
        <line x1="246" y1="106" x2="262" y2="122" stroke={color} strokeWidth="3" strokeLinecap="round"/>
        <line x1="246" y1="106" x2="262" y2="122" stroke="rgba(13,13,61,0.6)" strokeWidth="1" strokeLinecap="round"/>
        {/* scan dot inside */}
        <circle cx="230" cy="90" r="2" fill={color} className="phs-pulse"/>
      </g>

      {/* corner ticks */}
      <g opacity="0.55">
        <path d="M8 8 L8 20 M8 8 L20 8" stroke={color} strokeWidth="1.2" fill="none"/>
        <path d="M312 192 L312 180 M312 192 L300 192" stroke={color} strokeWidth="1.2" fill="none"/>
      </g>
    </svg>
  );
}

function DevelopmentSVG({ color }) {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <linearGradient id="dev-cube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.3"/>
          <stop offset="1" stopColor={color} stopOpacity="0.05"/>
        </linearGradient>
      </defs>

      {/* faint grid */}
      <g opacity="0.18">
        {Array.from({length: 8}).map((_, i) => (
          <line key={i} x1="0" y1={i*25} x2="320" y2={i*25} stroke={color} strokeWidth="0.5"/>
        ))}
      </g>

      {/* code window left */}
      <g className="phs-float-slow">
        <rect x="14" y="40" width="148" height="120" rx="8" fill="rgba(13,13,61,0.85)" stroke={color} strokeWidth="1.3"/>
        <rect x="14" y="40" width="148" height="22" rx="8" fill={color} fillOpacity="0.1"/>
        <circle cx="26" cy="51" r="2.4" fill="#ff5f57" opacity="0.7"/>
        <circle cx="36" cy="51" r="2.4" fill="#febc2e" opacity="0.7"/>
        <circle cx="46" cy="51" r="2.4" fill="#28c840" opacity="0.7"/>
        <text x="60" y="54" fontFamily="JetBrains Mono" fontSize="7" fill={color} fillOpacity="0.7" letterSpacing="1.2">main.cs</text>

        {/* code lines */}
        <text x="22" y="80" fontFamily="JetBrains Mono" fontSize="7.5" fill={color} fillOpacity="0.85">function</text>
        <text x="60" y="80" fontFamily="JetBrains Mono" fontSize="7.5" fill="#7fd9ff">build</text>
        <text x="82" y="80" fontFamily="JetBrains Mono" fontSize="7.5" fill="#b1a6f6">() {`{`}</text>

        <text x="30" y="94" fontFamily="JetBrains Mono" fontSize="7" fill="#9494a9" fillOpacity="0.8">const</text>
        <text x="55" y="94" fontFamily="JetBrains Mono" fontSize="7" fill="#00ffaa">scene</text>
        <text x="80" y="94" fontFamily="JetBrains Mono" fontSize="7" fill="#9494a9">=</text>
        <text x="88" y="94" fontFamily="JetBrains Mono" fontSize="7" fill="#7fd9ff">load</text>
        <text x="106" y="94" fontFamily="JetBrains Mono" fontSize="7" fill="#9494a9">(...)</text>

        <text x="30" y="108" fontFamily="JetBrains Mono" fontSize="7" fill="#9494a9">scene.</text>
        <text x="56" y="108" fontFamily="JetBrains Mono" fontSize="7" fill="#7fd9ff">render</text>
        <text x="82" y="108" fontFamily="JetBrains Mono" fontSize="7" fill="#9494a9">()</text>

        <text x="30" y="122" fontFamily="JetBrains Mono" fontSize="7" fill={color}>return</text>
        <text x="58" y="122" fontFamily="JetBrains Mono" fontSize="7" fill="#00ffaa">APK</text>

        <text x="22" y="136" fontFamily="JetBrains Mono" fontSize="7" fill="#b1a6f6">{`}`}</text>

        {/* cursor */}
        <rect x="74" y="115" width="1.5" height="9" fill={color} className="phs-blink"/>
      </g>

      {/* isometric cube right */}
      <g className="phs-float" style={{ transformOrigin: '244px 100px' }}>
        {/* shadow */}
        <ellipse cx="244" cy="158" rx="36" ry="5" fill={color} opacity="0.2"/>
        {/* top face */}
        <path d="M244 56 L284 76 L244 96 L204 76 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="1.3"/>
        {/* right face */}
        <path d="M284 76 L284 136 L244 156 L244 96 Z" fill="url(#dev-cube)" stroke={color} strokeWidth="1.3"/>
        {/* left face */}
        <path d="M204 76 L204 136 L244 156 L244 96 Z" fill="rgba(13,13,61,0.6)" stroke={color} strokeWidth="1.3"/>

        {/* inner detail */}
        <path d="M218 100 L218 130 L244 144" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.6"/>
        <path d="M270 100 L270 130 L244 144" stroke={color} strokeWidth="0.8" strokeDasharray="2 3" fill="none" opacity="0.6"/>
        <circle cx="244" cy="120" r="3" fill={color} className="phs-pulse"/>
      </g>

      {/* orbiting bracket */}
      <g className="phs-orbit-c" style={{ transformOrigin: '244px 100px' }}>
        <g transform="translate(244 36)">
          <path d="M-8 -6 L-12 0 L-8 6" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <path d="M8 -6 L12 0 L8 6" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <line x1="3" y1="-8" x2="-3" y2="8" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
        </g>
      </g>

      {/* progress bar */}
      <g transform="translate(14 174)">
        <rect x="0" y="0" width="148" height="3" rx="1.5" fill={color} fillOpacity="0.18"/>
        <rect x="0" y="0" width="92" height="3" rx="1.5" fill={color} className="phs-progress"/>
        <text x="0" y="-4" fontFamily="JetBrains Mono" fontSize="6" fill={color} fillOpacity="0.7" letterSpacing="1">BUILD 62%</text>
      </g>
    </svg>
  );
}

function ValidationSVG({ color }) {
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <defs>
        <radialGradient id="val-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={color} stopOpacity="0.45"/>
          <stop offset="1" stopColor="transparent"/>
        </radialGradient>
      </defs>

      {/* faint grid */}
      <g opacity="0.18">
        {Array.from({length: 8}).map((_, i) => (
          <line key={i} x1={i*40} y1="0" x2={i*40} y2="200" stroke={color} strokeWidth="0.5"/>
        ))}
      </g>

      {/* orbit rings */}
      <g className="phs-spin" style={{ transformOrigin: '160px 100px' }}>
        <circle cx="160" cy="100" r="86" fill="none" stroke={color} strokeWidth="0.6" strokeDasharray="2 8" opacity="0.6"/>
      </g>
      <g className="phs-spin-rev" style={{ transformOrigin: '160px 100px' }}>
        <circle cx="160" cy="100" r="68" fill="none" stroke={color} strokeWidth="0.6" strokeDasharray="0 12 4 12" opacity="0.7"/>
      </g>

      {/* central glow */}
      <circle cx="160" cy="100" r="50" fill="url(#val-glow)"/>

      {/* shield */}
      <g className="phs-float" style={{ transformOrigin: '160px 100px' }}>
        <path d="M160 56 L194 70 V102 C 194 122 178 138 160 144 C 142 138 126 122 126 102 V70 Z"
          fill="rgba(13,13,61,0.92)" stroke={color} strokeWidth="1.6"/>
        <path d="M160 64 L186 74 V102 C 186 118 174 130 160 134 C 146 130 134 118 134 102 V74 Z"
          fill="none" stroke={color} strokeWidth="0.6" opacity="0.5"/>
        {/* check */}
        <path d="M146 100 L156 112 L174 90" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" className="phs-draw"/>
      </g>

      {/* expert avatars left */}
      <g className="phs-float-slow">
        <g transform="translate(36 72)">
          <circle cx="0" cy="0" r="14" fill="rgba(13,13,61,0.9)" stroke={color} strokeWidth="1.2"/>
          <circle cx="0" cy="-3" r="4" fill={color} fillOpacity="0.6"/>
          <path d="M-8 8 Q-8 2 0 2 Q8 2 8 8" fill={color} fillOpacity="0.4"/>
          <text x="20" y="-5" fontFamily="JetBrains Mono" fontSize="6" fill={color} fillOpacity="0.8" letterSpacing="0.8">EXP · 01</text>
          <rect x="20" y="0" width="42" height="2" rx="1" fill={color} fillOpacity="0.7"/>
          <rect x="20" y="5" width="32" height="1.5" rx="0.7" fill={color} fillOpacity="0.3"/>
        </g>
        <g transform="translate(36 124)">
          <circle cx="0" cy="0" r="14" fill="rgba(13,13,61,0.9)" stroke={color} strokeWidth="1.2"/>
          <circle cx="0" cy="-3" r="4" fill={color} fillOpacity="0.6"/>
          <path d="M-8 8 Q-8 2 0 2 Q8 2 8 8" fill={color} fillOpacity="0.4"/>
          <text x="20" y="-5" fontFamily="JetBrains Mono" fontSize="6" fill={color} fillOpacity="0.8" letterSpacing="0.8">EXP · 02</text>
          <rect x="20" y="0" width="38" height="2" rx="1" fill={color} fillOpacity="0.7"/>
          <rect x="20" y="5" width="28" height="1.5" rx="0.7" fill={color} fillOpacity="0.3"/>
        </g>
      </g>

      {/* metrics right */}
      <g className="phs-float">
        <g transform="translate(244 60)">
          <rect x="0" y="0" width="62" height="34" rx="6" fill="rgba(13,13,61,0.9)" stroke={color} strokeWidth="1"/>
          <text x="8" y="13" fontFamily="JetBrains Mono" fontSize="6.5" fill={color} fillOpacity="0.7" letterSpacing="1">SUS</text>
          <text x="8" y="28" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill={color} letterSpacing="-0.5">82.5</text>
          <text x="44" y="28" fontFamily="JetBrains Mono" fontSize="6" fill={color} fillOpacity="0.6">/100</text>
        </g>
        <g transform="translate(244 104)">
          <rect x="0" y="0" width="62" height="34" rx="6" fill="rgba(13,13,61,0.9)" stroke={color} strokeWidth="1"/>
          <text x="8" y="13" fontFamily="JetBrains Mono" fontSize="6.5" fill={color} fillOpacity="0.7" letterSpacing="1">IVC</text>
          <text x="8" y="28" fontFamily="Space Grotesk" fontSize="14" fontWeight="600" fill={color} letterSpacing="-0.5">0.86</text>
          <text x="44" y="28" fontFamily="JetBrains Mono" fontSize="6" fill={color} fillOpacity="0.6">≥0.80</text>
        </g>
      </g>

      {/* connection lines */}
      <g opacity="0.4">
        <line x1="64" y1="78" x2="118" y2="92" stroke={color} strokeWidth="0.6" strokeDasharray="2 3"/>
        <line x1="64" y1="124" x2="118" y2="112" stroke={color} strokeWidth="0.6" strokeDasharray="2 3"/>
        <line x1="202" y1="92" x2="244" y2="76" stroke={color} strokeWidth="0.6" strokeDasharray="2 3"/>
        <line x1="202" y1="112" x2="244" y2="120" stroke={color} strokeWidth="0.6" strokeDasharray="2 3"/>
      </g>
    </svg>
  );
}

Object.assign(window, { QuestionSection, ObjectivesSection, TimelineSection });
