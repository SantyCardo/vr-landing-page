import React from 'react';

// ============================================
// NAV — floating translucent command bar
// ============================================

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('inicio');
  const [open, setOpen] = React.useState(false);

  const links = [
    { id: 'proyecto', label: 'Proyecto' },
    { id: 'problema', label: 'Problema' },
    { id: 'objetivos', label: 'Objetivos' },
    { id: 'alcance', label: 'Alcance' },
    { id: 'cronograma', label: 'Cronograma' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'tecnologia', label: 'Tecnología' },
    { id: 'contacto', label: 'Equipo' },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // find current section
      const ids = ['inicio', ...links.map(l => l.id)];
      let cur = 'inicio';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: scrolled ? 16 : 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 100,
      width: 'calc(100% - 32px)',
      maxWidth: 1240,
      transition: 'top .4s cubic-bezier(.2,.8,.2,1)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: scrolled ? '12px 20px' : '16px 24px',
        background: 'var(--color-deep-violet-surface)',
        border: '1px solid var(--color-outline-violet)',
        borderRadius: 999,
        boxShadow: scrolled
          ? '0 20px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,177,255,0.08) inset'
          : '0 10px 40px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset',
        transition: 'all .4s cubic-bezier(.2,.8,.2,1)',
      }}>
        <a href="#inicio" style={{
          display: 'flex', alignItems: 'center', gap: 10,
          textDecoration: 'none', color: 'var(--color-white)',
        }}>
          <div style={{
            width: 32, height: 32,
            borderRadius: 9,
            background: 'var(--color-action-violet)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* UNAB campanile silhouette */}
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-label="UNAB">
              {/* triangular roof */}
              <path d="M16 4 L9 11 L23 11 Z" fill="#ffffff"/>
              {/* roof underline (overhang) */}
              <path d="M8 11 L24 11 L23 13 L9 13 Z" fill="#ffffff"/>
              {/* central pillar */}
              <rect x="15" y="13" width="2" height="2" fill="#ffffff"/>
              {/* window block */}
              <rect x="10" y="15" width="12" height="9" fill="#ffffff"/>
              {/* left circular window */}
              <circle cx="13" cy="19.5" r="1.6" fill="var(--color-action-violet)"/>
              <rect x="12.4" y="19" width="1.2" height="1" fill="#ffffff"/>
              {/* right circular window */}
              <circle cx="19" cy="19.5" r="1.6" fill="var(--color-action-violet)"/>
              <rect x="18.4" y="19" width="1.2" height="1" fill="#ffffff"/>
              {/* base columns */}
              <rect x="10" y="24" width="4" height="5" fill="#ffffff"/>
              <rect x="18" y="24" width="4" height="5" fill="#ffffff"/>
              {/* central divider */}
              <rect x="15.4" y="15" width="1.2" height="14" fill="var(--color-action-violet)"/>
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Insulin·VR</span>
            <span style={{ fontSize: 9, letterSpacing: '0.22em', color: 'var(--color-bright-blue)', fontFamily: 'var(--font-mono)' }}>2026 · UNAB</span>
          </div>
        </a>

        <nav className="nav-links" style={{
          display: 'flex', gap: 4, alignItems: 'center',
        }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} style={{
              padding: '8px 14px',
              fontSize: 13, fontWeight: 500,
              color: active === l.id ? 'var(--color-bright-blue)' : 'var(--color-ghost-frost)',
              textDecoration: 'none',
              borderRadius: 999,
              background: active === l.id ? 'rgba(0,177,255,0.1)' : 'transparent',
              transition: 'all .25s',
              position: 'relative',
            }}
            onMouseEnter={(e) => { if (active !== l.id) e.currentTarget.style.color = 'var(--color-white)'; }}
            onMouseLeave={(e) => { if (active !== l.id) e.currentTarget.style.color = 'var(--color-ghost-frost)'; }}
            >
              {l.label}
            </a>
          ))}
        </nav>


        <button onClick={() => setOpen(!open)} className="nav-burger" style={{
          display: 'none',
          background: 'transparent',
          border: '1px solid var(--color-outline-violet)',
          color: 'var(--color-white)',
          width: 40, height: 40,
          borderRadius: 999,
          cursor: 'pointer',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div style={{
          marginTop: 12,
          padding: 20,
          background: 'var(--color-deep-violet-surface)',
          border: '1px solid var(--color-outline-violet)',
          borderRadius: 24,
        }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '10px 12px',
                fontSize: 14,
                color: active === l.id ? 'var(--color-bright-blue)' : 'var(--color-white)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(83,80,204,0.15)',
              }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1100px) {
          .nav-links a:nth-child(n+6) { display: none; }
        }
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .nav-burger { display: inline-flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}

window.Nav = Nav;
