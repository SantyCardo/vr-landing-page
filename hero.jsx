// ============================================
// HERO — cinematic AI-OS command center (v2)
// ============================================

function Hero() {
  const [time, setTime] = React.useState(() => new Date());
  const [frame, setFrame] = React.useState(0);
  const [penProgress, setPenProgress] = React.useState(0);
  const heroRef = React.useRef(null);
  const dashRef = React.useRef(null);
  const orb1 = React.useRef(null);
  const orb2 = React.useRef(null);

  // GSAP ScrollTrigger PIN — assemble pen progressively, block scroll past hero until complete.
  React.useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger || !heroRef.current) return;
    const ST = window.ScrollTrigger;
    window.gsap.registerPlugin(ST);

    const st = ST.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.4,
      onUpdate: (self) => setPenProgress(self.progress)
    });

    return () => { st.kill(); };
  }, []);

  React.useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    let f = 0;
    const r = setInterval(() => {f++;setFrame(f);}, 33);
    return () => {clearInterval(t);clearInterval(r);};
  }, []);

  // Mouse-driven parallax across hero (gentle)
  React.useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let raf;
    const onMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        const dx = (e.clientX - r.left) / r.width - 0.5;
        const dy = (e.clientY - r.top) / r.height - 0.5;
        if (dashRef.current) dashRef.current.style.transform = `translate3d(${dx * -18}px, ${dy * -18}px, 0)`;
        if (orb1.current) orb1.current.style.transform = `translate3d(${dx * 30}px, ${dy * 30}px, 0)`;
        if (orb2.current) orb2.current.style.transform = `translate3d(${dx * -40}px, ${dy * -25}px, 0)`;
        raf = null;
      });
    };
    hero.addEventListener('mousemove', onMove);
    return () => {hero.removeEventListener('mousemove', onMove);if (raf) cancelAnimationFrame(raf);};
  }, []);

  // Scroll-linked parallax on dashboard
  React.useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (dashRef.current && y < 1200) {
          dashRef.current.style.setProperty('--scroll-y', `${y * 0.08}px`);
        }
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {window.removeEventListener('scroll', onScroll);if (raf) cancelAnimationFrame(raf);};
  }, []);

  const hhmmss = time.toTimeString().slice(0, 8);

  return (
    <section ref={heroRef} id="inicio" style={{ paddingTop: 96, paddingBottom: 96, minHeight: '100dvh', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient orbs removed (no highlights) */}
      <div ref={orb1} style={{ display: 'none' }} />
      <div ref={orb2} style={{ display: 'none' }} />

      {/* HUD strip */}
      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-hud" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          color: 'var(--color-muted-violet)',
          marginBottom: 32,
          textTransform: 'uppercase',
          flexWrap: 'wrap',
          gap: 16,
          opacity: 0, transform: 'translateY(-10px)',
          animation: 'hud-in .9s cubic-bezier(.2,.8,.2,1) .2s forwards'
        }}>
          <span>◐ ID/PGI · 56521</span>
          <span className="text-blue">SYS.ACTIVE · V1.0.0</span>
          <span>FRAME {String(frame).padStart(6, '0')}</span>
          <span>{hhmmss} · UTC-5 BGA</span>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 0.9fr)',
          gap: 72,
          alignItems: 'center'
        }}>
          {/* LEFT — copy */}
          <div>
            <div className="hero-chip">
              <span className="dot"></span>
              <span>001 · Anteproyecto de Grado</span>
            </div>

            <h1 className="display-xl hero-title" style={{ marginTop: 28, color: 'var(--color-white)' }}>
              <span className="hl-line">
                <AnimatedText as="span" stagger={70} delay={300}>Insulinización</AnimatedText>
              </span>
              <span className="hl-line hero-gradient-line">
                <AnimatedText as="span" stagger={80} delay={700}>con Realidad</AnimatedText>
              </span>
              <span className="hl-line">
                <AnimatedText as="span" stagger={70} delay={1100}>Virtual.</AnimatedText>
              </span>
            </h1>

            <p className="subheading hero-sub" style={{
              marginTop: 28,
              maxWidth: 520,
              color: 'var(--color-ghost-frost)',
              opacity: 0,
              animation: 'hud-in .9s cubic-bezier(.2,.8,.2,1) 1.4s forwards'
            }}>
              Prototipo educativo inmersivo para el fortalecimiento de la técnica de
              aplicación de insulina en pacientes adultos con diabetes tipo II.
            </p>

            <div className="hero-ctas" style={{
              display: 'flex', gap: 14, marginTop: 40, flexWrap: 'wrap',
              opacity: 0, animation: 'hud-in .9s cubic-bezier(.2,.8,.2,1) 1.7s forwards'
            }}>
              <MagneticButton href="#proyecto" className="btn btn-primary" strength={0.2}>
                Explorar proyecto
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </MagneticButton>
            </div>

            <div className="hero-credits" data-parallax="0.06" style={{
              marginTop: 56,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              maxWidth: 480,
              opacity: 0,
              animation: 'hud-in .9s cubic-bezier(.2,.8,.2,1) 1.9s forwards'
            }}>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-bright-blue)', marginBottom: 10 }}>AUTORES</div>
                <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>Brayan Steven León Martínez</div>
                <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5, color: 'var(--color-ghost-frost)' }}>Santiago Cardona Prada</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.22em', color: 'var(--color-vivid-green)', marginBottom: 10 }}>DIRECTOR</div>
                <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}>Leonardo Stiven Pardo Niño</div>
                <div style={{ fontSize: 12, color: 'var(--color-muted-violet)' }}>Proyecto de Grado · UNAB</div>
              </div>
            </div>
          </div>

          {/* RIGHT — floating dashboard */}
          <div ref={dashRef} style={{
            transition: 'transform .9s cubic-bezier(.2,.8,.2,1)',
            opacity: 0,
            animation: 'hud-in 1s cubic-bezier(.2,.8,.2,1) .6s forwards',
            willChange: 'transform'
          }}>
            <div style={{ transform: 'translateY(var(--scroll-y, 0))', transition: 'transform .3s linear' }}>
              <HeroDashboard frame={frame} progress={penProgress} />
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: 32, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        letterSpacing: '0.3em',
        color: 'var(--color-muted-violet)',
        zIndex: 3,
        opacity: 0,
        animation: 'hud-in .9s cubic-bezier(.2,.8,.2,1) 2.2s forwards'
      }}>
        <span>BAJA</span>
        <div style={{ width: 1, height: 48, background: 'var(--color-bright-blue)',
          position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            width: '100%', height: 16,
            background: 'var(--color-bright-blue)',
            animation: 'scrollPing 2.4s ease-in-out infinite',
            boxShadow: '0 0 12px var(--color-bright-blue)'
          }} />
        </div>
      </div>

      <style>{`
        @keyframes hud-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid var(--color-outline-violet);
          background: var(--color-deep-violet-surface);
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--color-ghost-frost);
          opacity: 0;
          animation: hud-in .9s cubic-bezier(.2,.8,.2,1) .15s forwards;
        }
        .hero-chip .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--color-vivid-green);
          box-shadow: 0 0 12px var(--color-vivid-green);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes scrollPing {
          0% { top: -16px; opacity: 0; }
          30% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .hero-title {
          line-height: 0.95;
          font-size: clamp(44px, 6.2vw, 88px) !important;
          letter-spacing: -0.04em !important;
        }
        .hero-title .hl-line {
          display: block;
          line-height: 0.95;
          white-space: normal;
        }
        .hero-title .hl-line .at-unit { line-height: 0.95; }
        .hero-grid > * { min-width: 0; }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-title { font-size: clamp(40px, 9vw, 64px) !important; }
        }
      `}</style>
    </section>);

}

function HeroDashboard({ frame, progress = 0 }) {
  return (
    <div style={{ position: 'relative', minHeight: 560 }}>
      {/* main panel — chrome stripped (no bg/border/HUD) */}
      <div style={{
        padding: 0,
        position: 'relative',
        animation: 'panel-float 8s ease-in-out infinite',
        willChange: 'transform'
      }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--color-bright-blue)' }}>
            ◐ ENSAMBLANDO · LÁPIZ_INSULINA
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--color-muted-violet)', letterSpacing: '0.15em' }}>
              {Math.round(progress * 100)}%
            </span>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-vivid-green)' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-bright-blue)', opacity: 0.5 }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-muted-violet)', opacity: 0.3 }} />
            </div>
          </div>
        </div>

        <div style={{
          height: 560,
          borderRadius: 0,
          background: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'visible'
        }}>
          {/* rotating rings */}
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
            <g style={{ transformOrigin: '50% 50%', animation: 'ring-spin 22s linear infinite' }}>
              <circle cx="50%" cy="50%" r="60" fill="none" stroke="#00b1ff" strokeWidth="0.5" strokeDasharray="2 6" />
            </g>
            <g style={{ transformOrigin: '50% 50%', animation: 'ring-spin-rev 36s linear infinite' }}>
              <circle cx="50%" cy="50%" r="105" fill="none" stroke="#5350cc" strokeWidth="0.5" />
              <circle cx="50%" cy="50%" r="105" fill="none" stroke="#00ffaa" strokeWidth="0.5" strokeDasharray="0 30 4 30" />
            </g>
            <g style={{ transformOrigin: '50% 50%', animation: 'ring-spin 60s linear infinite' }}>
              <circle cx="50%" cy="50%" r="150" fill="none" stroke="#5350cc" strokeWidth="0.5" strokeDasharray="4 8" />
            </g>
          </svg>

          {/* INSULIN PEN — parallax assembly */}
          <InsulinPenAssembly progress={progress} frame={frame} />

          {/* annotations */}
          <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--color-data-teal)', letterSpacing: '0.1em' }}>
            806753402713
          </div>
          <div style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--color-bright-blue)', letterSpacing: '0.1em', textAlign: 'right' }}>
            PEN_03ML · 100 U/mL<br />
            <span style={{ color: progress > 0.95 ? 'var(--color-vivid-green)' : 'var(--color-muted-violet)' }}>
              ● {progress > 0.95 ? 'LISTO' : 'ARMANDO'}
            </span>
          </div>
          {/* assembly progress bar */}
          <div style={{
            position: 'absolute', bottom: 16, left: 16, right: 110,
            display: 'flex', alignItems: 'center', gap: 8
          }}>
            <span className="mono" style={{ fontSize: 9, color: 'var(--color-muted-violet)', letterSpacing: '0.18em' }}>PROGRESO</span>
            <div style={{
              flex: 1, height: 2,
              background: 'rgba(83,80,204,0.25)',
              borderRadius: 1,
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${progress * 100}%`,
                background: '#00b1ff',
                transition: 'width .2s linear'
              }}/>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
          {[
          { label: 'AGUJA', val: '31G · 5mm', color: '#00b1ff' },
          { label: 'DOSIS MÁX.', val: '80 U', color: '#00ffaa' }].
          map((s, i) =>
          <div key={i} style={{
            padding: '12px 14px',
            borderRadius: 14,
            background: 'rgba(35,34,105,0.6)',
            border: '1px solid rgba(83,80,204,0.3)'
          }}>
              <div className="mono" style={{ fontSize: 9, letterSpacing: '0.18em', color: 'var(--color-muted-violet)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: s.color, fontFamily: 'var(--font-mono)' }}>{s.val}</div>
            </div>
          )}
        </div>
      </div>

      {/* FOSUNAB validation panel removed per request */}

      {/* EVIDENCE BASE panel removed — was overlapping pen anatomy */}

      <style>{`
        @keyframes panel-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ring-spin-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pen-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes bar-pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.3); }
        }
      `}</style>
    </div>);

}

// Insulin pen — pieces fly into assembled positions as scroll progresses (pin-driven).
// Reference: clinical "insulin pen parts" diagram with leader lines.
function InsulinPenAssembly({ progress, frame }) {
  const t = progress; // 0 → 1

  // Eased phase helper
  const phase = (start, end) => {
    const v = (t - start) / (end - start);
    const c = Math.max(0, Math.min(1, v));
    return 1 - Math.pow(1 - c, 3); // ease-out cubic
  };

  // Pen starts FULLY ASSEMBLED. As scroll progresses, pen morphs into Google Cardboard.
  // Phase mapping:
  //   0.00 – 0.20  → pen visible, callouts revealing (no transform)
  //   0.20 – 0.55  → pen fades + lifts upward, cardboard descends + fades in
  //   0.55 – 1.00  → cardboard fully visible, gentle isometric float
  const calloutT     = phase(0.00, 0.18);
  const morphT       = phase(0.20, 0.55);
  const cardboardT   = phase(0.30, 0.65);
  const penAlpha     = 1 - morphT;
  const penLift      = morphT * -120; // pen drifts up as it fades
  const cardEntry    = 1 - cardboardT;

  // Pen pieces always assembled — no transform offsets
  const off = () => 0;
  const op  = () => penAlpha;
  const pBody = 1, pCart = 1, pNeedle = 1, pDose = 1, pButton = 1;

  const snap = t > 0.95;

  // callout reusable
  const Callout = ({ side, y, anchorX, anchorY, label, sub, opacity }) => {
    const isLeft = side === 'left';
    const labelX = isLeft ? 30 : 290;
    const lineX1 = isLeft ? 90 : 230;
    const dotR = 2.4;
    return (
      <g style={{ opacity, transition: 'opacity .35s ease-out' }}>
        {/* dotted leader */}
        <line x1={anchorX} y1={anchorY} x2={lineX1} y2={y}
          stroke="#00b1ff" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7"/>
        {/* horizontal cross to label */}
        <line x1={lineX1} y1={y} x2={isLeft ? labelX + 60 : labelX - 60} y2={y}
          stroke="#00b1ff" strokeWidth="0.6" opacity="0.7"/>
        {/* anchor dot on pen */}
        <circle cx={anchorX} cy={anchorY} r="1.5" fill="#00b1ff"/>
        <circle cx={anchorX} cy={anchorY} r="3" fill="none" stroke="#00b1ff" strokeWidth="0.5" opacity="0.5">
          <animate attributeName="r" from="1.5" to="5" dur="1.6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.6" to="0" dur="1.6s" repeatCount="indefinite"/>
        </circle>
        {/* label dot near text */}
        <circle cx={isLeft ? labelX + 64 : labelX - 64} cy={y} r={dotR} fill="#00b1ff"/>
        {/* label text */}
        <text x={labelX} y={y - 2} textAnchor={isLeft ? 'start' : 'start'}
          fill="#7fd9ff" fontSize="11" fontFamily="Space Grotesk" fontWeight="500" letterSpacing="0.5"
          dominantBaseline="middle">
          {label}
        </text>
        {sub && (
          <text x={labelX} y={y + 12} textAnchor="start"
            fill="#b1a6f6" fontSize="7" fontFamily="JetBrains Mono" letterSpacing="0.8" opacity="0.75">
            {sub}
          </text>
        )}
      </g>
    );
  };

  return (
    <svg
      width="320" height="540" viewBox="0 0 320 700"
      style={{
        position: 'relative', zIndex: 1,
        animation: snap ? 'pen-bob 6s ease-in-out infinite' : 'none',
        filter: 'none',
        overflow: 'visible',
        maxWidth: '100%', height: 'auto'
      }}
    >
      {/* center guide while assembling */}
      <line x1="160" y1="40" x2="160" y2="680"
        stroke="#5350cc" strokeWidth="0.5" strokeDasharray="2 4"
        opacity={0.4 * (1 - t)}/>

      {/* === PEN ANATOMY (vertical, centered at x=160) — each piece in its own <g> with phase-driven transform === */}

      {/* ===========================================================
           SoloStar-style insulin pen — vertical, centered at x=160
           Layout (top → bottom):
             40–60   needle tip protruding
             60–148  needle outer cap (clear cone) + purple ring
             148–164 coupling neck
             164–200 cartridge segment (glass + insulin partial)
             200–600 main pen body (light gray) + SoloStar label + dose window
             600–660 dose knob ring (dark gray)
             660–700 knob end cap (action-violet)
         =========================================================== */}

      {/* PEN WRAPPER — applies lift+fade as scroll morphs into Cardboard */}
      <g style={{
        transform: `translateY(${penLift}px)`,
        opacity: penAlpha,
        transformOrigin: '160px 350px',
        animation: 'pen-bob-svg 5s ease-in-out infinite'
      }}>

      {/* === PIECE 3: MAIN PEN BODY (light gray barrel + clip) === */}
      <g style={{
        transform: `translateY(${off(pBody, 380)}px)`,
        opacity: op(pBody)
      }}>
        {/* main barrel */}
        <rect x="126" y="200" width="68" height="400" rx="10" fill="#dcdce4"/>
        {/* bottom edge shadow strip */}
        <rect x="126" y="590" width="68" height="10" fill="#b8b8c8"/>
        {/* clip on left side */}
        <rect x="116" y="240" width="14" height="200" rx="7" fill="#a8a8c0"/>
        <rect x="118" y="245" width="10" height="180" rx="5" fill="#9494a9"/>
        {/* right body highlight edge */}
        <rect x="190" y="206" width="3" height="388" rx="1.5" fill="#c0c0d0"/>
      </g>

      {/* === PIECE 2: SoloStar LABEL + UPPER COUPLING + CARTRIDGE (apply from left) === */}
      <g style={{
        transform: `translateX(${off(pCart, -260)}px)`,
        opacity: op(pCart),
        transformOrigin: '160px 280px'
      }}>
        {/* coupling neck (narrower) */}
        <rect x="138" y="148" width="44" height="16" rx="2" fill="#c8c8d4"/>
        {/* coupling threading lines */}
        <line x1="138" y1="152" x2="182" y2="152" stroke="#9494a9" strokeWidth="0.5"/>
        <line x1="138" y1="156" x2="182" y2="156" stroke="#9494a9" strokeWidth="0.5"/>
        <line x1="138" y1="160" x2="182" y2="160" stroke="#9494a9" strokeWidth="0.5"/>
        {/* cartridge glass segment */}
        <rect x="136" y="164" width="48" height="38" rx="2" fill="#e8e8f0" stroke="#9494a9" strokeWidth="0.6"/>
        {/* insulin partial visible */}
        <rect x="138" y="166" width="44" height="34" fill="#7fd9ff" opacity="0.65"/>
        {/* black rubber plunger stopper */}
        <rect x="138" y="194" width="44" height="6" fill="#16165c"/>

        {/* SoloStar LABEL — white pill with violet curve, centered y=290-440 */}
        <rect x="132" y="290" width="56" height="155" rx="14" fill="#ffffff"/>
        {/* violet swoosh band on label (right side curve) */}
        <path d="M132 305 Q160 295 188 305 L188 332 Q160 322 132 332 Z" fill="#b1a6f6"/>
        {/* label text */}
        <text x="160" y="318" textAnchor="middle" fill="#16165c" fontSize="9"
          fontFamily="Space Grotesk" fontWeight="700" letterSpacing="0.2">SoloStar®</text>
        <text x="160" y="345" textAnchor="middle" fill="#5350cc" fontSize="6.5"
          fontFamily="Space Grotesk" fontWeight="600">Insulina Glargina</text>
        <text x="160" y="358" textAnchor="middle" fill="#16165c" fontSize="5.5"
          fontFamily="Space Grotesk" fontWeight="500">100 unidades/mL</text>
        <text x="160" y="378" textAnchor="middle" fill="#16165c" fontSize="5"
          fontFamily="Space Grotesk" fontWeight="500">Solución Inyectable</text>
        <text x="160" y="388" textAnchor="middle" fill="#16165c" fontSize="5"
          fontFamily="Space Grotesk" fontWeight="500">Vía Subcutánea</text>
      </g>

      {/* === PIECE 1: NEEDLE (BD-style clear conical cap + tip, drops from top) === */}
      <g style={{
        transform: `translateY(${off(pNeedle, -260)}px)`,
        opacity: op(pNeedle),
        transformOrigin: '160px 90px'
      }}>
        {/* needle tip protruding from top */}
        <rect x="159" y="40" width="2" height="20" fill="#9494a9"/>
        {/* outer cap (clear conical) */}
        <polygon points="148,60 172,60 178,140 142,140" fill="#e8e8f0" stroke="#9494a9" strokeWidth="0.6"/>
        {/* cap highlight stripe */}
        <line x1="152" y1="68" x2="155" y2="135" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
        {/* purple ring at cap base (BD ferrule) */}
        <rect x="140" y="138" width="40" height="8" rx="1" fill="#5350cc"/>
        {/* "5mm" label small */}
        <text x="160" y="105" textAnchor="middle" fill="#9494a9" fontSize="5"
          fontFamily="JetBrains Mono" fontWeight="600">5mm</text>
        <text x="160" y="115" textAnchor="middle" fill="#9494a9" fontSize="3.5"
          fontFamily="JetBrains Mono" letterSpacing="0.3">BD MICRO</text>
      </g>

      {/* === PIECE 4: DOSE WINDOW (frame + "0" indicator, slides from right) === */}
      <g style={{
        transform: `translateX(${off(pDose, 260)}px)`,
        opacity: op(pDose),
        transformOrigin: '160px 478px'
      }}>
        {/* window outer frame on body right side */}
        <rect x="148" y="465" width="36" height="28" rx="3" fill="#c0c0d0"/>
        <rect x="151" y="468" width="30" height="22" rx="2" fill="#ffffff"/>
        {/* arrow indicator (left of number) */}
        <polygon points="155,479 159,475 159,483" fill="#16165c"/>
        {/* dose number */}
        <text x="167" y="485" textAnchor="middle" fill="#16165c" fontSize="13"
          fontFamily="JetBrains Mono" fontWeight="700">0</text>
        {/* dashes above/below for adjacent numbers */}
        <line x1="170" y1="471" x2="178" y2="471" stroke="#9494a9" strokeWidth="0.6"/>
        <line x1="170" y1="489" x2="178" y2="489" stroke="#9494a9" strokeWidth="0.6"/>
      </g>

      {/* === PIECE 5: DOSE KNOB (gray ring + violet end cap, from below) === */}
      <g style={{
        transform: `translateY(${off(pButton, 320)}px)`,
        opacity: op(pButton),
        transformOrigin: '160px 640px'
      }}>
        {/* gray knob ring with knurl */}
        <rect x="122" y="600" width="76" height="40" rx="6" fill="#6a6a82"/>
        {[...Array(10)].map((_, i) => (
          <rect key={i} x={126 + i * 7.2} y="608" width="2.5" height="24" rx="0.5"
            fill="#4a4a62"/>
        ))}
        {/* violet end cap */}
        <rect x="128" y="640" width="64" height="40" rx="8" fill="#5350cc"/>
        <rect x="128" y="640" width="64" height="6" rx="3" fill="#6b67e6"/>
        {/* end-cap knurl rings */}
        {[...Array(6)].map((_, i) => (
          <rect key={i} x={134 + i * 9} y="652" width="2" height="22" rx="0.5"
            fill="#403cd5"/>
        ))}
      </g>

      </g>{/* /pen-wrap */}

      {/* === GOOGLE CARDBOARD (descends and fades in as pen fades out) === */}
      <g style={{
        transform: `translateY(${80 * cardEntry}px) scale(${0.75 + 0.25 * cardboardT})`,
        opacity: cardboardT,
        transformOrigin: '160px 360px',
        animation: 'cardboard-tilt 6s ease-in-out infinite'
      }}>
        <CardboardSVG />
      </g>

      {/* === CALLOUTS (reveal only AFTER pen is fully assembled) === */}
      <Callout
        side="left"
        y={100}
        anchorX={142}
        anchorY={100}
        label="31G x 5mm"
        sub="BD MICRO-FINE"
        opacity={calloutT * penAlpha}
      />
      <Callout
        side="right"
        y={184}
        anchorX={184}
        anchorY={184}
        label="Cartucho"
        sub="100 U/mL · 3mL"
        opacity={calloutT * penAlpha}
      />
      <Callout
        side="left"
        y={360}
        anchorX={132}
        anchorY={360}
        label="SoloStar®"
        sub="GLARGINA"
        opacity={calloutT * penAlpha}
      />
      <Callout
        side="right"
        y={479}
        anchorX={184}
        anchorY={479}
        label="Selector dosis"
        sub="0 U"
        opacity={calloutT * penAlpha}
      />
      <Callout
        side="left"
        y={660}
        anchorX={126}
        anchorY={660}
        label="Knob inyección"
        sub="PUSH"
        opacity={calloutT * penAlpha}
      />

      {/* === phase progress indicator (left rail) === */}
      <g opacity="0.85">
        {['PEN','LABEL','MORPH','CARD','VR'].map((lbl, i) => {
          const phases = [penAlpha, calloutT, morphT, cardboardT, cardboardT];
          const active = phases[i] > 0.5;
          const lit = phases[i] > 0.05;
          return (
            <g key={i} transform={`translate(20, ${130 + i * 130})`}>
              <circle cx="0" cy="0" r="4"
                fill={lit ? '#00b1ff' : 'none'}
                stroke={lit ? '#00b1ff' : '#5350cc'}
                strokeWidth="1"/>
              {active && <circle cx="0" cy="0" r="7" fill="none" stroke="#00b1ff" strokeWidth="0.5" opacity="0.5"/>}
              <text x="10" y="3" fill={lit ? '#7fd9ff' : '#5350cc'}
                fontSize="7" fontFamily="JetBrains Mono" letterSpacing="0.8">
                {lbl}
              </text>
            </g>
          );
        })}
      </g>

      <style>{`
        @keyframes pen-particle {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(2px, -3px); }
        }
        @keyframes pen-bob-svg {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes cardboard-tilt {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%      { transform: translateY(-6px) rotate(-1.5deg); }
          75%      { transform: translateY(4px) rotate(1.5deg); }
        }
        @keyframes cardboard-lens-pulse {
          0%, 100% { opacity: 0.95; }
          50%      { opacity: 0.6; }
        }
      `}</style>
    </svg>
  );
}

// Google Cardboard isometric outline SVG (matches site palette)
function CardboardSVG() {
  // Centered around (160, 360). Approx 230 wide × 160 tall.
  const stroke = '#00b1ff';
  const lightStroke = '#5350cc';
  const fill = 'rgba(0,177,255,0.08)';
  return (
    <g>
      {/* drop shadow line on ground */}
      <ellipse cx="160" cy="470" rx="120" ry="10" fill="#0d0d3d" opacity="0.45"/>

      {/* === LEFT FOLD / SIDE FLAP (isometric) === */}
      <path d="M 50 360 L 110 320 L 110 420 L 50 460 Z"
        fill="rgba(83,80,204,0.15)" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"/>
      <rect x="62" y="365" width="20" height="20" fill="none" stroke={stroke} strokeWidth="1.2"
        transform="skewY(-30) translate(0,30)"/>

      {/* === TOP PLATE === */}
      <path d="M 110 320 L 270 310 L 270 350 L 110 360 Z"
        fill="rgba(83,80,204,0.18)" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round"/>
      {/* top button (NFC/magnet) */}
      <rect x="220" y="318" width="22" height="14" rx="2"
        fill="rgba(0,177,255,0.2)" stroke={stroke} strokeWidth="1.2"/>

      {/* === FRONT FACE with lenses === */}
      <path d="M 110 360 L 270 350 L 270 460 L 110 470 Z"
        fill={fill} stroke={stroke} strokeWidth="1.8" strokeLinejoin="round"/>
      {/* center divider line */}
      <line x1="190" y1="355" x2="190" y2="465" stroke={lightStroke} strokeWidth="1" strokeDasharray="3 3" opacity="0.6"/>
      {/* left lens */}
      <ellipse cx="150" cy="410" rx="22" ry="22" fill="#08082a" stroke={stroke} strokeWidth="1.8"
        style={{ animation: 'cardboard-lens-pulse 3s ease-in-out infinite' }}/>
      <circle cx="150" cy="410" r="6" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.7"/>
      <circle cx="146" cy="406" r="2" fill={stroke} opacity="0.6"/>
      {/* right lens */}
      <ellipse cx="230" cy="406" rx="22" ry="22" fill="#08082a" stroke={stroke} strokeWidth="1.8"
        style={{ animation: 'cardboard-lens-pulse 3s ease-in-out infinite .7s' }}/>
      <circle cx="230" cy="406" r="6" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.7"/>
      <circle cx="226" cy="402" r="2" fill={stroke} opacity="0.6"/>

      {/* nose cut on bottom */}
      <path d="M 178 470 L 190 458 L 202 470" fill="#08082a" stroke={stroke} strokeWidth="1.4"/>

      {/* === RIGHT EDGE PANEL (depth) === */}
      <path d="M 270 350 L 290 340 L 290 450 L 270 460 Z"
        fill="rgba(83,80,204,0.12)" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round"/>

      {/* === LABEL === */}
      <text x="190" y="498" textAnchor="middle" fill="#7fd9ff" fontSize="9"
        fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="2">GOOGLE · CARDBOARD</text>
      <text x="190" y="510" textAnchor="middle" fill="#b1a6f6" fontSize="6"
        fontFamily="JetBrains Mono" letterSpacing="1.2">VR · LOW-COST · 3DOF</text>

      {/* === floating data tags === */}
      <g style={{ animation: 'pen-bob-svg 4s ease-in-out infinite' }}>
        <rect x="40" y="280" width="50" height="14" rx="7" fill="rgba(0,255,170,0.12)" stroke="#00ffaa" strokeWidth="0.8"/>
        <text x="65" y="290" textAnchor="middle" fill="#00ffaa" fontSize="6" fontFamily="JetBrains Mono" letterSpacing="0.8">VR · ON</text>
      </g>
      <g style={{ animation: 'pen-bob-svg 4.5s ease-in-out infinite -1.5s' }}>
        <rect x="240" y="490" width="56" height="14" rx="7" fill="rgba(0,177,255,0.1)" stroke="#00b1ff" strokeWidth="0.8"/>
        <text x="268" y="500" textAnchor="middle" fill="#00b1ff" fontSize="6" fontFamily="JetBrains Mono" letterSpacing="0.8">360° SCENE</text>
      </g>
    </g>
  );
}

window.Hero = Hero;