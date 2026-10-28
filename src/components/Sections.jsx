import { useState, useRef, useEffect, lazy, Suspense, Fragment } from 'react';
import * as C from '../data/content.js';
import { Icon, SectionHead, Carousel, CountUp } from './ui.jsx';
import { Scrolly } from './Scrolly.jsx';
import { Solution } from './Solution.jsx';
import Lightbox from './Lightbox.jsx';

const PenModel = lazy(() => import('./PenModel.jsx'));

// Diagramas agrupados por `group` en el orden de primera aparición; `index` es la posición global para el visor.
const DIAGRAM_GROUPS = [];
C.diagrams.items.forEach((d, index) => {
  let g = DIAGRAM_GROUPS.find((x) => x.name === d.group);
  if (!g) { g = { name: d.group, items: [] }; DIAGRAM_GROUPS.push(g); }
  g.items.push({ ...d, index });
});

// Galería del recorrido guiado: acordeón horizontal con hover (escritorio) o
// fila con scroll-snap (táctil). Cada tarjeta abre el visor de imagen ampliada.
export function Prototype() {
  const [open, setOpen] = useState(-1);
  const track = useRef(null);
  const items = C.features;

  // Las flechas del encabezado mueven el foco entre tarjetas: en escritorio eso
  // amplía la tarjeta enfocada; en táctil desplaza la fila hasta ella.
  const step = (dir) => {
    const cards = track.current ? Array.from(track.current.querySelectorAll('.proto-card')) : [];
    if (!cards.length) return;
    const at = cards.indexOf(document.activeElement);
    const next = at === -1
      ? (dir > 0 ? 0 : cards.length - 1)
      : (at + dir + cards.length) % cards.length;
    cards[next].focus();
  };

  return (
    <section id="prototipo" className="section">
      <div className="container">
        <SectionHead title={C.about.title} lead={C.about.lead}>
          <div className="arrows">
            <button className="arrow" onClick={() => step(-1)} aria-label="Anterior"><Icon name="arrowL" size={20} /></button>
            <button className="arrow" onClick={() => step(1)} aria-label="Siguiente"><Icon name="arrowR" size={20} /></button>
          </div>
        </SectionHead>
        <div className="carousel proto-gallery reveal" ref={track}>
          {items.map((m, i) => (
            <button
              key={m.title}
              type="button"
              className="photo-card proto-card"
              aria-label={`Ampliar imagen: ${m.title}`}
              onClick={() => setOpen(i)}
            >
              <img src={m.img} alt="" loading="lazy" />
              <span className="photo-card-text proto-card-text">
                <span className="tag">{m.kicker}</span>
                <span className="proto-card-title">{m.title}</span>
                <span className="proto-card-body"><span>{m.body}</span></span>
              </span>
            </button>
          ))}
        </div>
        <div className="demo-video reveal" role="region" aria-label={C.demo.title}>
          {/* DEMO: para montar el video, reemplaza el div.demo-placeholder por
              <video src="/video/demo.mp4" controls playsInline poster="/img/capturas/cocina_general.webp" />
              o por un <iframe src="..." title={C.demo.title} allowFullScreen />.
              El contenedor mantiene la proporción 16:9. */}
          <div className="demo-placeholder">
            <Icon name="eye" size={36} />
            <strong>{C.demo.placeholder}</strong>
          </div>
        </div>
        <p className="note reveal">{C.about.note}</p>
      </div>
      {open >= 0 && (
        <Lightbox items={items} index={open} onClose={() => setOpen(-1)} onIndexChange={setOpen} />
      )}
    </section>
  );
}

export function Modules() {
  const m = C.modules;
  return (
    <section id="modulos" className="section">
      <div className="container">
        <SectionHead title={['Cinco módulos,', 'cinco partes en cada uno.']} lead={m.lead} />
        <div className="modules">
          <img className="modules-map reveal" src={m.map.img} alt={m.map.alt} loading="lazy" />
          <ol className="module-list">
            {m.items.map((it) => (
              <li key={it.id} className="reveal">
                <span className="module-id">{it.id}</span>
                <div><h3>{it.title}</h3><p>{it.body}</p></div>
                <span className="muted module-steps">{it.parts} partes</span>
              </li>
            ))}
            <li className="reveal module-pending"><span className="module-id">+</span><div><p>{m.extra}</p></div></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problema" className="section">
      <div className="container">
        <SectionHead title={C.problem.title} lead={C.problem.lead} />
        <div className="grid-4 hover-cards">
          {C.problem.errors.map((e, i) => (
            <article key={e.title} className="photo-card hover-card reveal" tabIndex={0}>
              <img src={e.img} alt={e.alt} loading="lazy" />
              <div className="photo-card-text">
                <span className="tag tag-source">0{i + 1} · Problema</span>
                <h3>{e.title}</h3>
                <div className="hover-more"><p>{e.body}<small className="hover-source">Fuente: {e.source}</small></p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Justification() {
  const j = C.justification;
  return (
    <section id="justificacion" className="section">
      <div className="container">
        <SectionHead title={j.title} lead={j.lead} />

        <h3 className="just-part reveal">{j.part1}</h3>
        <Scrolly />

        <Solution />

        <ol className="goals reveal">
          {j.goals.map((g, i) => (
            <li key={g.title}>
              <span className="goal-num">0{i + 1}</span>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </li>
          ))}
        </ol>

        <div className="grid-specialty pillars">
          {j.pillars.map((p) => (
            <article key={p.title} className="specialty reveal">
              <span className="specialty-icon"><Icon name={p.icon} size={22} /></span>
              <div><span className="pillar-tag">{p.tag}</span><h3>{p.title}</h3><p>{p.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Question() {
  const q = C.question;
  return (
    <section id="pregunta" className="question-block">
      <picture>
        <source media="(max-width: 560px)" srcSet={q.imgMobile} />
        <img className="question-bg" src={q.img} alt="" loading="lazy" />
      </picture>
      <div className="question-veil" />
      <div className="question-inner reveal">
        <div className="question-text">
          <p className="eyebrow eyebrow-light">Pregunta problema</p>
          <p className="question">{q.text}</p>
        </div>
      </div>
    </section>
  );
}

export function Objectives() {
  const o = C.objectives;
  return (
    <section id="objetivos" className="section">
      <div className="container">
        <div className="split-head reveal">
          <h2 className="h2">Objetivos<br />del proyecto.</h2>
          <div className="split-text">
            <span className="split-label">Objetivo general</span>
            <p>{o.general}</p>
          </div>
        </div>
        {/* Solo el título a la vista; el objetivo completo aparece al pasar el cursor o al enfocar la tarjeta (.hover-card). */}
        <div className="grid-3 hover-cards">
          {o.specific.map((s, i) => (
            <article key={s.title} className="photo-card hover-card reveal" tabIndex={0}>
              <img src={s.img} alt={s.alt} loading="lazy" style={s.pos ? { objectPosition: s.pos } : undefined} />
              <div className="photo-card-text">
                <span className="tag tag-source">0{i + 1} · Objetivo específico</span>
                <h3>{s.title}</h3>
                <div className="hover-more"><p>{s.body}</p></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Methodology() {
  const m = C.methodology;
  return (
    <section id="metodologia" className="section">
      <div className="container">
        <div className="split-head reveal">
          <h2 className="h2">Metodología.<br />Así se construyó el prototipo.</h2>
          <div className="split-text"><p>{m.lead}</p></div>
        </div>

        <div className="grid-5 hover-cards">
          {m.phases.map((f, i) => (
            <article key={f.title} className="photo-card hover-card reveal" tabIndex={0}>
              <img src={f.img} alt={f.alt} loading="lazy" />
              <div className="photo-card-text">
                <span className="tag tag-source">Fase {i + 1} · PMBOK</span>
                <h3>{f.title}</h3>
                <div className="hover-more"><p>{f.body}<small className="hover-source">Entregable: {f.deliverable}</small></p></div>
              </div>
            </article>
          ))}
        </div>

        <ol className="goals goals-4 reveal">
          {m.phva.map((p) => (
            <li key={p.title}>
              <span className="goal-num">{p.title[0]} · Ciclo PHVA</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
        <p className="method-note reveal">Cada incremento fue una vuelta completa del ciclo PHVA.</p>
      </div>
    </section>
  );
}

export function Architecture() {
  const [openDiagram, setOpenDiagram] = useState(-1);
  const a = C.architecture;
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const steps = [...list.querySelectorAll('.arch-step')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      list.style.setProperty('--arch-progress', 1);
      steps.forEach((s) => s.classList.add('is-active'));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = list.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
      list.style.setProperty('--arch-progress', p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('is-active'); });
    }, { rootMargin: '0px 0px -45% 0px' });
    steps.forEach((s) => io.observe(s));
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="arquitectura" className="section">
      <div className="container">
        <div className="split-head reveal">
          <h2 className="h2">Arquitectura.<br />Cómo está organizado por dentro.</h2>
          <div className="split-text"><p>{a.lead}</p></div>
        </div>
        <div className="arch-layout">
          <ol className="arch-flow" ref={listRef}>
            <span className="arch-line" aria-hidden="true"><span className="arch-line-fill" /></span>
            {a.layers.map((l, i) => (
              <li key={l.title} className={`arch-step${l.final ? ' arch-step-final' : ''}`}>
                <span className="arch-node" aria-hidden="true">{l.final ? '✓' : i + 1}</span>
                <article className="arch-card">
                  <span className="arch-tag">{l.tag}</span>
                  <h3>{l.title}</h3>
                  <p className="arch-body">{l.body}</p>
                  <p className="arch-parts">{l.items.join(' · ')}</p>
                  {l.practice && (() => {
                    const [name, ...rest] = l.practice.split(':');
                    return <p className="arch-practice"><strong>{name}.</strong>{rest.join(':')}</p>;
                  })()}
                </article>
              </li>
            ))}
          </ol>
          <aside className="arch-3d" aria-label="Modelo 3D del lapicero">
            <Suspense fallback={null}><PenModel progressRef={listRef} /></Suspense>
          </aside>
        </div>

        <h3 className="res-group arch-diagrams-title reveal">{C.diagrams.title}</h3>
        {DIAGRAM_GROUPS.map((g) => (
          <div key={g.name} className="reveal">
            <h4 className="res-subgroup">{g.name}</h4>
            <div className="res-figs">
              {g.items.map((d) => (
                <button key={d.img} type="button" className="res-fig" aria-label={`Ampliar diagrama: ${d.title}`} onClick={() => setOpenDiagram(d.index)}>
                  <img src={d.img} alt={d.alt} loading="lazy" decoding="async" />
                  <strong>{d.title}</strong>
                  <span>{d.caption}</span>
                  <small>Fuente: {C.diagrams.source}</small>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {openDiagram >= 0 && (
        <Lightbox
          items={C.diagrams.items.map((d) => ({ img: d.img, alt: d.alt, kicker: d.group, title: d.title, body: `${d.caption} Fuente: ${C.diagrams.source}.` }))}
          index={openDiagram} onClose={() => setOpenDiagram(-1)} onIndexChange={setOpenDiagram}
        />
      )}
    </section>
  );
}

export function Stack() {
  return (
    <section id="tecnologia" className="section">
      <div className="container">
        <SectionHead title={['Herramientas accesibles,', 'pensadas para escalar.']} lead="Cada pieza del stack se eligió por su bajo costo y su madurez técnica." />
        <div className="grid-specialty">
          {C.stack.map((s) => (
            <article key={s.name} className="specialty reveal">
              <span className="specialty-icon"><Icon name={s.icon} size={22} /></span>
              <div><h3>{s.name}</h3><span className="muted">{s.role}</span><p>{s.body}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Estado de cada indicador: el texto siempre va; el símbolo y el borde dan una segunda señal además del color.
const WB_STATE = {
  'Alcanzado': ['is-ok', '✓'],
  'No alcanzado': ['is-no', '✕'],
  'Parcial': ['is-partial', '◐'],
};
const REQ_STATE = {
  'Cumple': ['is-ok', '✓'],
  'Cumple parcialmente': ['is-partial', '◐'],
  'No cumple': ['is-no', '✕'],
  'Referencia alcanzada': ['is-ok', '✓'],
};

function StateBadge({ map, state }) {
  const [cls, sym] = map[state] ?? ['is-partial', '●'];
  return <span className={`res-state ${cls}`}><span aria-hidden="true">{sym} </span>{state}</span>;
}

// Gráficos agrupados por `group` en el orden de primera aparición; `index` es la posición global para el visor.
const CHART_GROUPS = [];
C.results.charts.forEach((c, index) => {
  let g = CHART_GROUPS.find((x) => x.name === c.group);
  if (!g) { g = { name: c.group, items: [] }; CHART_GROUPS.push(g); }
  g.items.push({ ...c, index });
});

export function Results() {
  const r = C.results;
  const [open, setOpen] = useState(-1);
  const lightbox = r.charts.map((c) => ({ img: c.img, alt: c.alt, kicker: c.group, title: c.title, body: `${c.caption} Fuente: ${r.source}.` }));

  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHead title={['Resultados', 'del prototipo.']} lead={r.lead} />
        <div className="grid-4">
          {r.verified.map((v) => (
            <article key={v.label} className="card stat reveal">
              <strong><CountUp value={v.metric} /></strong>
              <span className="muted">{v.label}</span>
              <p>{v.body}</p>
            </article>
          ))}
        </div>

        <div className="res-stack">
          <article className="card reveal">
            <span className="tag">{r.whitebox.tag}</span>
            <h3>{r.whitebox.title}</h3>
            <p>{r.whitebox.body}</p>
            <div className="res-items">
              {r.whitebox.items.map((v) => (
                <div key={v.name} className="res-item">
                  <span className="muted">{v.what}</span>
                  <strong>{v.name}</strong>
                  <span className="res-value">{v.value}</span>
                  <span className="muted">Umbral {v.target}</span>
                  <StateBadge map={WB_STATE} state={v.state} />
                </div>
              ))}
            </div>
          </article>

          {CHART_GROUPS.map((g) => (
            <div key={g.name} className="reveal">
              <h3 className="res-group">{g.name}</h3>
              <div className="res-figs">
                {g.items.map((c) => (
                  <button key={c.img} type="button" className="res-fig" aria-label={`Ampliar gráfico: ${c.title}`} onClick={() => setOpen(c.index)}>
                    <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
                    <strong>{c.title}</strong>
                    <span>{c.caption}</span>
                    <small>Fuente: {r.source}</small>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <article className="card reveal">
            <span className="tag">{r.validation.tag}</span>
            <h3>{r.validation.title}</h3>
            <p>{r.validation.body}</p>
            <div className="res-items is-two">
              {r.validation.items.map((v) => (
                <div key={v.name} className="res-item">
                  <span className="muted">{v.what}</span>
                  <strong>{v.name}</strong>
                  <span className="res-value">{v.value}</span>
                  <span className="muted">{v.goal}</span>
                </div>
              ))}
            </div>
            <p className="muted">{r.validation.note}</p>
          </article>

          <article className="card reveal">
            <h3>{r.requirements.title}</h3>
            <p>{r.requirements.body}</p>
            {r.requirements.groups.map((g) => (
              <div key={g.state} className="res-req-row">
                <StateBadge map={REQ_STATE} state={g.state} />
                <div className="res-chips">
                  {g.items.map((code) => <span key={code} className="res-chip">{code}</span>)}
                </div>
              </div>
            ))}
            <ul className="res-limits">
              {r.requirements.details.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>

          <article className="card reveal">
            <h3>{r.limitations.title}</h3>
            <ul className="res-limits">
              {r.limitations.items.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        </div>
      </div>
      {open >= 0 && (
        <Lightbox items={lightbox} index={open} onClose={() => setOpen(-1)} onIndexChange={setOpen} />
      )}
    </section>
  );
}

export function Faq() {
  const [active, setActive] = useState(0);
  const f = C.faq;
  const cur = f[active];
  const pad = (n) => String(n).padStart(2, '0');
  const go = (i) => setActive((i + f.length) % f.length);
  return (
    <section id="faq" className="section faq-section">
      <div className="faq-marquee" aria-hidden="true">
        <div className="faq-marquee-track">
          {[0, 1].map((d) => (
            <div key={d} className="faq-marquee-row">
              {Array.from({ length: 6 }).map((_, k) => <span key={k}><i>*</i>PREGUNTAS FRECUENTES</span>)}
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <header className="faq-head reveal">
          <p className="faq-eyebrow"><span />F.A.Q<em>{pad(f.length)} dudas resueltas</em></p>
          <h2 className="faq-title">Lo que más <em>preguntan</em><br />cuando explicamos el proyecto.</h2>
        </header>
        <div className="faq-shell reveal">
          <aside className="faq-aside">
            <p className="faq-aside-label">Índice de dudas</p>
            <ol>
              {f.map((it, i) => (
                <li key={it.q}>
                  <button type="button" className={`faq-aside-item${i === active ? ' is-active' : ''}`} onClick={() => setActive(i)} aria-current={i === active}>
                    <span className="faq-aside-num">{pad(i + 1)}</span>
                    <span className="faq-aside-text"><span className="faq-aside-cat">{it.cat}</span><span className="faq-aside-q">{it.q}</span></span>
                    <Icon name="arrowR" size={14} />
                  </button>
                </li>
              ))}
            </ol>
            <div className="faq-aside-foot">
              <span>¿Tienes otra duda?</span>
              <a href="#equipo" className="faq-aside-cta">Escríbenos <Icon name="arrowUR" size={12} /></a>
            </div>
          </aside>
          <article className="faq-panel" key={active} aria-live="polite">
            <div className="faq-panel-head">
              <span className="faq-panel-tag">{cur.tag}</span>
              <span className="faq-panel-meta"><i />Lectura · {cur.read}</span>
            </div>
            <div className="faq-panel-marker"><span className="faq-panel-q">Q</span><span>{pad(active + 1)} / {pad(f.length)}</span></div>
            <h3 className="faq-panel-question">{cur.q}</h3>
            <div className="faq-panel-answer">
              <span className="faq-panel-mark">A</span>
              <div>
                <p>{cur.a}</p>
                {cur.table && (
                  <div className="faq-panel-table">
                    <span>Plataforma</span><span>Limitación</span>
                    {cur.table.map(([p, l]) => <Fragment key={p}><strong>{p}</strong><span>{l}</span></Fragment>)}
                  </div>
                )}
              </div>
            </div>
            <footer className="faq-panel-foot">
              <div className="faq-panel-related">
                <span>También preguntan</span>
                <div>{cur.related.map((r) => <button key={r} type="button" onClick={() => setActive(r)}>{f[r].q}</button>)}</div>
              </div>
              <div className="faq-panel-nav">
                <button type="button" onClick={() => go(active - 1)} aria-label="Anterior"><Icon name="arrowL" size={14} /></button>
                <button type="button" onClick={() => go(active + 1)} aria-label="Siguiente"><Icon name="arrowR" size={14} /></button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  const t = C.team;
  return (
    <section id="equipo" className="section">
      <div className="container">
        <Carousel head={{ title: ['Equipo.', 'Quiénes lo hicieron posible.'], lead: t.lead }}>
          {[...t.members, ...t.institutions].map((m) => (
            <article key={m.name} className="photo-card hover-card team-card" tabIndex={0}>
              <img src={m.img} alt={m.alt} loading="lazy" style={{ objectPosition: m.pos }} />
              <div className="photo-card-text">
                <span className="tag tag-source">{m.role}</span>
                <h3>{m.name}</h3>
                <div className="hover-more"><p>{m.body}</p></div>
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing">
      <img className="closing-bg" src="/img/capturas/teleport_cocina.webp" alt="" loading="lazy" />
      <div className="closing-veil" />
      <div className="container closing-inner">
        <div>
          <h2 className="display">Tu tratamiento<br />merece una<br />técnica<br />segura.</h2>
          <p>Desde la nevera hasta el desecho de la aguja, el prototipo guía cada paso de la insulinización con el teléfono del paciente y un visor de cartón.</p>
        </div>
        <div className="closing-ctas">
          <a href="#prototipo" className="btn btn-light btn-sm"><Icon name="search" size={14} /> {C.hero.cta}</a>
          <a href="#equipo" className="btn btn-ghost btn-sm"><Icon name="arrowUR" size={14} /> Conocer el equipo</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const f = C.footer;
  return (
    <footer className="footer">
      <svg className="wordmark" viewBox="0 0 1000 158" role="img" aria-label={f.wordmark}>
        <text x="0" y="155" textLength="1000" lengthAdjust="spacing">{f.wordmark}</text>
      </svg>
      <div className="footer-cols">
        <div className="footer-about">
          <p>{f.tagline}</p>
          <p className="footer-copy">{f.copyright[0]}<br />{f.copyright[1]}</p>
        </div>
        {f.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => <li key={l.label}>{l.href ? <a href={l.href}>{l.label}</a> : <span>{l.label}</span>}</li>)}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}

// Logo fijo de la UNAB: al pasar el cursor (o enfocarlo con el teclado) se abre el recuadro con la información.
export function UnabBadge() {
  return (
    <div className="unab-badge">
      <a className="unab-badge-logo" href="https://unab.edu.co" target="_blank" rel="noopener noreferrer" aria-label="Universidad Autónoma de Bucaramanga (se abre en una pestaña nueva)">
        <img src="/img/unab-logo.png" alt="" width="44" height="55" />
      </a>
      <div className="unab-badge-card" role="note">
        <small>Universidad Autónoma de Bucaramanga</small>
        <p>Proyecto desarrollado por estudiantes de la <b>Facultad de Ingeniería de Sistemas</b> · UNAB.</p>
      </div>
    </div>
  );
}

// Cierre de la página: foto con llamado a la acción y footer negro, pegados en un mismo marco.
export function SiteEnd() {
  return (
    <div className="site-end">
      <Closing />
      <Footer />
    </div>
  );
}
