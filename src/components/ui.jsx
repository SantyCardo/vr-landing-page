import { useEffect, useRef } from 'react';

// Íconos de línea (24×24, trazo 1.5) usados en tarjetas y chips.
const paths = {
  syringe: 'M18 2l4 4M17 7l3-3M19 9L9 19l-4-4L15 5M11 11l2 2M7 17l-5 5',
  rotate: 'M4 12a8 8 0 0 1 14-5.3L20 9M20 4v5h-5M20 12a8 8 0 0 1-14 5.3L4 15M4 20v-5h5',
  fridge: 'M6 2h12v20H6zM6 10h12M9 5v2M9 13v3',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  cube: 'M12 2l9 5v10l-9 5-9-5V7zM12 12l9-5M12 12v10M12 12L3 7',
  cardboard: 'M2 8h20v9h-6l-2-3h-4l-2 3H2zM7 12.5h.01M17 12.5h.01',
  phone: 'M7 2h10v20H7zM11 18h2',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  shape: 'M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 3v18M4 7.5l16 9M20 7.5l-16 9',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  check: 'M4 12l5 5L20 6',
  x: 'M6 6l12 12M18 6L6 18',
  arrowL: 'M15 5l-7 7 7 7',
  arrowR: 'M9 5l7 7-7 7',
  arrowUR: 'M7 17L17 7M8 7h9v9',
  chevron: 'M6 9l6 6 6-6',
  calendar: 'M4 5h16v16H4zM4 10h16M8 3v4M16 3v4',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  doc: 'M6 2h9l5 5v15H6zM14 2v6h6M9 13h6M9 17h6',
};

export function Icon({ name, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

// Activa la animación de entrada (.reveal → .is-in) de todo lo que aparezca en pantalla.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Anima el primer número de un texto ("830M", "8,4 %", "2.186.861", "35/35") desde 0 al entrar en pantalla.
// Formato colombiano: punto de miles y coma decimal.
export function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const m = value.match(/\d{1,3}(?:\.\d{3})+|\d+(?:,\d+)?/);

  useEffect(() => {
    const el = ref.current;
    if (!m || !el) return;
    const raw = m[0];
    const grouped = raw.includes('.');
    const decimals = raw.includes(',') ? raw.split(',')[1].length : 0;
    const target = parseFloat(raw.replace(/\./g, '').replace(',', '.'));
    const fmt = new Intl.NumberFormat('es-CO', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: grouped });
    const before = value.slice(0, m.index);
    const after = value.slice(m.index + raw.length);
    const render = (n) => { el.textContent = before + fmt.format(n) + after; };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    render(0);
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / duration, 1);
        render(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick); else el.textContent = value;
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); el.textContent = value; };
  }, [value]);

  return <span ref={ref} className="count-up" aria-label={value}>{value}</span>;
}

export function SectionHead({ title, lead, children }) {
  return (
    <div className="section-head reveal">
      <div>
        <h2 className="h2">{title[0]}<br />{title[1]}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {children}
    </div>
  );
}

// Carrusel horizontal con scroll-snap y flechas redondas.
export function Carousel({ head, children }) {
  const track = useRef(null);
  const move = (dir) => {
    const el = track.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };
  return (
    <>
      <SectionHead {...head}>
        <div className="arrows">
          <button className="arrow" onClick={() => move(-1)} aria-label="Anterior"><Icon name="arrowL" size={20} /></button>
          <button className="arrow" onClick={() => move(1)} aria-label="Siguiente"><Icon name="arrowR" size={20} /></button>
        </div>
      </SectionHead>
      <div className="carousel reveal" ref={track}>{children}</div>
    </>
  );
}
