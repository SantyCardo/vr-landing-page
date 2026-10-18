import React from 'react';

// ============================================
// MOTION primitives — Impilo-style cinematic motion
// ============================================

// AnimatedText: splits text into words/chars and reveals with stagger
export function AnimatedText({ children, as: As = 'span', split = 'word', stagger = 60, delay = 0, blur = true, className = '', style = {} }) {
  const ref = React.useRef(null);
  const [played, setPlayed] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !played) {
          setPlayed(true);
          const units = el.querySelectorAll('.at-unit');
          units.forEach((u, i) => {
            const d = delay + i * stagger;
            setTimeout(() => {
              u.style.opacity = '1';
              u.style.transform = 'translateY(0) scale(1)';
              u.style.filter = 'blur(0px)';
            }, d);
          });
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, [played, stagger, delay]);

  const renderChildren = (node) => {
    if (typeof node === 'string') {
      const units = split === 'char' ? Array.from(node) : node.split(/(\s+)/);
      return units.map((u, i) => {
        if (/^\s+$/.test(u)) return <span key={i}>{u}</span>;
        return (
          <span key={i} className="at-unit" style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(28px) scale(0.96)',
            filter: blur ? 'blur(8px)' : 'none',
            transition: 'opacity .9s cubic-bezier(.2,.8,.2,1), transform .9s cubic-bezier(.2,.8,.2,1), filter .9s cubic-bezier(.2,.8,.2,1)',
            willChange: 'transform, opacity, filter',
          }}>{u}</span>
        );
      });
    }
    if (Array.isArray(node)) return node.map((c, i) => <React.Fragment key={i}>{renderChildren(c)}</React.Fragment>);
    if (React.isValidElement(node)) {
      return React.cloneElement(node, { children: renderChildren(node.props.children) });
    }
    return node;
  };

  return <As ref={ref} className={className} style={style}>{renderChildren(children)}</As>;
}

// useScrollY — current scroll position
export function useScrollY() {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const onS = () => setY(window.scrollY);
    window.addEventListener('scroll', onS, { passive: true });
    onS();
    return () => window.removeEventListener('scroll', onS);
  }, []);
  return y;
}

// useParallax — translate based on element's distance from viewport center
export function useParallax(speed = 0.2) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const update = () => {
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const dist = center - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${-dist * speed}px, 0)`;
      raf = null;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [speed]);
  return ref;
}

// useMouseParallax — translate on mouse position within element parent
export function useMouseParallax(strength = 20) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength]);
  return ref;
}

// Magnetic button — hover pulls element toward cursor
export function useMagnetic(strength = 0.3) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return ref;
}

// MagneticButton wrapper
export function MagneticButton({ children, strength = 0.25, className = '', style = {}, ...props }) {
  const ref = useMagnetic(strength);
  return (
    <span style={{ display: 'inline-block', transition: 'transform .35s cubic-bezier(.2,.8,.2,1)' }}>
      <a ref={ref} className={className} style={{ ...style, transition: 'transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .35s, background .35s, color .35s' }} {...props}>
        {children}
      </a>
    </span>
  );
}

// Light streaks — animated SVG lines drifting across viewport
export function LightStreaks() {
  const streaks = React.useMemo(() => Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: 80 + Math.random() * 220,
    duration: 18 + Math.random() * 24,
    delay: -Math.random() * 30,
    color: ['#00b1ff', '#00ffaa', '#5350cc', '#b1a6f6'][i % 4],
    opacity: 0.12 + Math.random() * 0.18,
  })), []);
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0,
      overflow: 'hidden',
    }}>
      {streaks.map((s) => (
        <div key={s.id} style={{
          position: 'absolute',
          top: `${s.top}%`, left: `-${s.width}px`,
          width: s.width, height: 1,
          background: `${s.color}`,
          opacity: s.opacity,
          animation: `streak-drift ${s.duration}s linear infinite`,
          animationDelay: `${s.delay}s`,
          filter: 'blur(0.5px)',
        }}/>
      ))}
      <style>{`
        @keyframes streak-drift {
          from { transform: translateX(0); }
          to { transform: translateX(calc(100vw + 200px)); }
        }
      `}</style>
    </div>
  );
}

// Side rail — vertical section navigator
export function SideRail() {
  const [active, setActive] = React.useState('inicio');
  const sections = [
    { id: 'inicio',        label: '01 · Inicio' },
    { id: 'proyecto',      label: '02 · Proyecto' },
    { id: 'problema',      label: '03 · Problema' },
    { id: 'justificacion', label: '04 · Justificación' },
    { id: 'pregunta',      label: '05 · Pregunta' },
    { id: 'objetivos',     label: '06 · Objetivos' },
    { id: 'alcance',       label: '06.B · Alcance' },
    { id: 'cronograma',    label: '07 · Cronograma' },
    { id: 'normas',        label: '07.B · Normas' },
    { id: 'metodologia',   label: '08 · Metodología' },
    { id: 'tecnologia',    label: '09 · Tecnología' },
    { id: 'estado-arte',   label: '09.B · Estado del arte' },
    { id: 'referentes',    label: '09.C · Referentes' },
    { id: 'resultados',    label: '10 · Resultados' },
    { id: 'faq',           label: '11 · FAQ' },
    { id: 'contacto',      label: '12 · Equipo' },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      let cur = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 200) cur = s.id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="side-rail" style={{
      position: 'fixed',
      right: 24, top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 90,
      display: 'flex', flexDirection: 'column', gap: 14,
      alignItems: 'flex-end',
    }}>
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a key={s.id} href={`#${s.id}`} className="rail-item" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
            color: isActive ? 'var(--color-bright-blue)' : 'var(--color-muted-violet)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            opacity: isActive ? 1 : 0.4,
            transition: 'all .35s',
          }}>
            <span className="rail-label" style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateX(0)' : 'translateX(8px)',
              transition: 'all .35s',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}>{s.label}</span>
            <span style={{
              width: isActive ? 28 : 16,
              height: 2,
              background: isActive
                ? 'var(--color-bright-blue)'
                : 'rgba(180,166,246,0.4)',
              boxShadow: isActive ? '0 0 8px var(--color-bright-blue)' : 'none',
              transition: 'all .35s cubic-bezier(.2,.8,.2,1)',
              borderRadius: 1,
            }}/>
          </a>
        );
      })}
      <style>{`
        .rail-item:hover { opacity: 1 !important; color: var(--color-white) !important; }
        .rail-item:hover .rail-label { opacity: 1 !important; transform: translateX(0) !important; }
        @media (max-width: 1240px) { .side-rail { display: none !important; } }
      `}</style>
    </div>
  );
}

// useEntranceTimeline — sequential entrance using anime.js if available
export function useEntranceTimeline(selectors, options = {}) {
  React.useEffect(() => {
    if (typeof anime === 'undefined') return;
    const tl = anime.timeline({
      easing: 'cubicBezier(.2,.8,.2,1)',
      duration: 900,
      ...options.timeline,
    });
    selectors.forEach((s) => {
      const targets = document.querySelectorAll(s.target);
      if (!targets.length) return;
      tl.add({
        targets,
        ...s.props,
        offset: s.offset,
      });
    });
  }, []);
}

// SectionDivider — horizontal accent line with center marker between sections
export function SectionDivider({ variant = 'dot', label, color = '#00b1ff' }) {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line section-divider-line--l"/>
      <span className="section-divider-mark" style={{ '--mark-color': color }}>
        {variant === 'dot' && <span className="section-divider-dot"/>}
        {variant === 'plus' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        )}
        {variant === 'diamond' && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1l5 5-5 5-5-5 5-5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          </svg>
        )}
        {label && <span className="section-divider-label mono">{label}</span>}
      </span>
      <span className="section-divider-line section-divider-line--r"/>

      <style>{`
        .section-divider {
          position: relative;
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 0 max(24px, calc(50vw - 620px));
          overflow: hidden;
        }
        .section-divider::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            none;
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at center, #000 30%, transparent 75%);
          pointer-events: none;
        }
        .section-divider-line {
          flex: 1;
          height: 1px;
          position: relative;
        }
        .section-divider-line--l {
          background: rgba(83,80,204,0.5);
        }
        .section-divider-line--r {
          background: rgba(83,80,204,0.5);
        }
        .section-divider-mark {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(13,13,61,0.6);
          border: 1px solid color-mix(in srgb, var(--mark-color) 35%, transparent);
          color: var(--mark-color);
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .section-divider-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--mark-color);
          position: relative;
        }
        .section-divider-dot::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid var(--mark-color);
          opacity: 0;
          animation: section-divider-ping 2.4s ease-out infinite;
        }
        @keyframes section-divider-ping {
          0%   { transform: scale(0.6); opacity: 0.7; }
          100% { transform: scale(2);   opacity: 0; }
        }
        .section-divider-label {
          letter-spacing: 0.2em;
        }
      `}</style>
    </div>
  );
}

// section bleed gradient — soft transition between sections
export function SectionBleed({ from = '#0d0d3d', to = '#16165c', height = 200 }) {
  return (
    <div style={{
      position: 'relative',
      height,
      pointerEvents: 'none',
      background: `${to}`,
      marginTop: -height,
    }}/>
  );
}

