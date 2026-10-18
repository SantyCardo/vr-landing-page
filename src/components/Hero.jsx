import { useEffect, useState } from 'react';
import { nav, hero } from '../data/content.js';
import { Icon } from './ui.jsx';

export function Hero() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="hero" id="inicio">
      <img className="hero-bg" src="/img/cocina_general.jpg" alt="" />
      <div className="hero-veil" />

      <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Principal">
        <a href="#inicio" className="brand">INSULIN·VR</a>
        <ul className={`nav-links ${open ? 'is-open' : ''}`}>
          {nav.map((l) => <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>)}
        </ul>
        <a href="#equipo" className="btn btn-dark btn-sm nav-cta">Contacto</a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menú" aria-expanded={open}>
          <span /><span />
        </button>
      </nav>

      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">{hero.eyebrow}</p>
          <h1 className="display">
            Insulinización<br />
            <span>
              <img src="/img/m1_paso1.jpg" alt="" className="display-thumb" />
              con realidad
            </span><br />
            virtual
          </h1>
          <div className="hero-ctas">
            <a href="#prototipo" className="btn btn-dark"><Icon name="search" size={15} /> Ver el prototipo</a>
            <a href="#equipo" className="btn btn-light"><Icon name="arrowUR" size={15} /> Ver equipo</a>
          </div>
        </div>

        <dl className="hero-stats">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>

        <p className="hero-lead">{hero.lead}</p>
        <a href="#problema" className="scroll-cue" aria-label="Bajar"><Icon name="chevron" size={16} /></a>
      </div>
    </header>
  );
}
