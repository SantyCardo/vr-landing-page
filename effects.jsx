// ============================================
// EFFECTS — backgrounds, reveals, scroll progress
// ============================================

function BackgroundFX({ showOrbs = true, showGrid = true }) {
  return (
    <div className="bg-fx">
      {showGrid && <div className="bg-grid" />}
      {showOrbs && <>
        <div className="bg-orb" style={{ width: 600, height: 600, left: '-150px', top: '-100px',
          background: '#5350cc' }} />
        <div className="bg-orb" style={{ width: 700, height: 700, right: '-200px', top: '20%',
          background: '#00b1ff',
          opacity: 0.35, animationDelay: '-6s' }} />
        <div className="bg-orb" style={{ width: 500, height: 500, left: '30%', top: '60%',
          background: '#00ffaa',
          opacity: 0.18, animationDelay: '-12s' }} />
      </>}
      <div className="bg-noise" />
    </div>
  );
}

function ScrollProgress() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = Math.min(1, Math.max(0, h.scrollTop / max));
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" ref={ref} />;
}

function useReveal() {
  React.useEffect(() => {
    // assign --idx to each child of stagger-children groups for CSS cascade
    document.querySelectorAll('.stagger-children').forEach((parent) => {
      Array.from(parent.children).forEach((c, i) => c.style.setProperty('--idx', i));
    });

    const observe = () => {
      const els = document.querySelectorAll('.reveal:not(.in)');
      if (!els.length) return null;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.dataset.delay || '0', 10);
            setTimeout(() => e.target.classList.add('in'), delay);
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
      els.forEach((el) => io.observe(el));
      return io;
    };

    let io = observe();

    // rescan when DOM mutates (sections that mount async, tweaks, etc.)
    const mo = new MutationObserver(() => {
      if (io) io.disconnect();
      io = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { if (io) io.disconnect(); mo.disconnect(); };
  }, []);
}

// useScrollTriggers — global binder for [data-parallax], [data-scroll-stick], [data-draw]
function useScrollTriggers() {
  React.useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const ST = window.ScrollTrigger;
    window.gsap.registerPlugin(ST);
    const triggers = [];

    // 1. Parallax — data-parallax="0.2"  → element translates Y as section scrolls
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      const t = window.gsap.to(el, {
        yPercent: -speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
      triggers.push(t);
    });

    // 2. Sticky stack — data-scroll-stick → element pins for its container duration
    document.querySelectorAll('[data-scroll-stick]').forEach((el) => {
      const t = ST.create({
        trigger: el,
        start: 'top 100px',
        end: 'bottom 50%',
        pin: false,
        toggleClass: { targets: el, className: 'stuck' }
      });
      triggers.push(t);
    });

    // 3. Draw — data-draw="line"  →  underline grows as element enters viewport
    document.querySelectorAll('[data-draw]').forEach((el) => {
      const t = window.gsap.to(el, {
        '--draw': '100%',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 50%',
          scrub: true
        }
      });
      triggers.push(t);
    });

    // 4. Scrub-fade — data-scrub-fade → opacity 0→1 across entry, 1→.4 across exit
    document.querySelectorAll('[data-scrub-fade]').forEach((el) => {
      const t = window.gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'top 60%',
            scrub: 1
          }
        }
      );
      triggers.push(t);
    });

    // refresh after fonts/images settle
    const t = setTimeout(() => ST.refresh(), 600);

    return () => {
      clearTimeout(t);
      triggers.forEach((tr) => tr && tr.kill && tr.kill());
      ST.getAll().forEach((s) => s.kill());
    };
  }, []);
}

// SpotlightHost — attaches mouse listener for cursor-driven CSS vars on .spotlight-card descendants
function useSpotlightCards() {
  React.useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest('.spotlight-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
}

// Marquee — kinetic infinite scroll band (CSS-driven, GPU-only)
function Marquee({ children, duration = 38, reverse = false, pad = 32 }) {
  const items = React.Children.toArray(children);
  return (
    <div className="marquee" style={{ '--marquee-duration': `${duration}s` }}>
      <div className="marquee-track" style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
        {[0, 1].map((dup) => (
          <div key={dup} style={{ display: 'inline-flex', gap: pad, paddingRight: pad }} aria-hidden={dup === 1}>
            {items.map((it, i) => <React.Fragment key={i}>{it}</React.Fragment>)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Animated counter (counts up to target on view)
function Counter({ to, prefix = '', suffix = '', duration = 1800, decimals = 0 }) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf, started = null;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - started) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}

// HUD-style cursor blip that follows mouse on parent
function MouseGlow({ color = '#00b1ff', size = 400 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    parent.addEventListener('mousemove', onMove);
    return () => parent.removeEventListener('mousemove', onMove);
  }, []);
  return (
    <div ref={ref} style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: `transparent`,
      opacity: 0.9,
      transition: 'background .15s',
    }} />
  );
}

Object.assign(window, { BackgroundFX, ScrollProgress, useReveal, useScrollTriggers, useSpotlightCards, Counter, MouseGlow, Marquee });
