import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import * as C from '../data/content.js';
import { Icon, SectionHead, Carousel, CountUp } from './ui.jsx';

const PenModel = lazy(() => import('./PenModel.jsx'));

export function Prototype() {
  return (
    <section id="prototipo" className="section">
      <div className="container">
        <Carousel head={{ title: C.about.title, lead: C.about.lead }}>
          {C.features.map((m) => (
            <article key={m.title} className="photo-card">
              <img src={m.img} alt="" loading="lazy" />
              <div className="photo-card-text">
                <span className="tag">{m.kicker}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </article>
          ))}
        </Carousel>
        <p className="note reveal">{C.about.note}</p>
      </div>
    </section>
  );
}

export function Modules() {
  const m = C.modules;
  return (
    <section id="modulos" className="section">
      <div className="container">
        <SectionHead title={['Cinco módulos,', 'un examen al final de cada uno.']} lead={m.lead} />
        <div className="modules">
          <img className="modules-map reveal" src="/img/plano_casa.jpg" alt="Vista superior de la vivienda virtual con los puntos de teletransporte" loading="lazy" />
          <ol className="module-list">
            {m.items.map((it) => (
              <li key={it.id} className="reveal">
                <span className="module-id">{it.id}</span>
                <div><h3>{it.title}</h3><p>{it.body}</p></div>
                <span className="muted module-steps">{it.steps} pasos</span>
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
        <dl className="figures reveal">
          {C.stats.map((f) => (
            <div key={f.label} className="figure-row">
              <dt><CountUp value={f.value} /></dt>
              <dd>{f.label}</dd>
              <dd className="figure-source"><a href={f.url} target="_blank" rel="noreferrer">{f.source}</a></dd>
            </div>
          ))}
        </dl>
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

        <div className="transform reveal">
          <figure className="transform-photo">
            <img src={j.fromImg} alt="" loading="lazy" />
            <figcaption><span>Estado actual</span>{j.from}</figcaption>
          </figure>
          <span className="transform-arrow" aria-hidden="true"><Icon name="arrowR" size={18} /></span>
          <div className="transform-pill">{j.bridge}</div>
          <span className="transform-arrow" aria-hidden="true"><Icon name="arrowR" size={18} /></span>
          <figure className="transform-photo">
            <img src={j.toImg} alt="" loading="lazy" />
            <figcaption><span>Resultado esperado</span>{j.to}</figcaption>
          </figure>
        </div>

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
      </div>
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

export function Results() {
  const r = C.results;
  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHead title={['Resultados', 'del prototipo.']} lead="Verificación técnica, rendimiento en dispositivos y validación con médicos expertos." />
        <div className="grid-4">
          {r.verified.map((v) => (
            <article key={v.label} className="card stat reveal">
              <strong><CountUp value={v.metric} /></strong>
              <span className="muted">{v.label}</span>
              <p>{v.body}</p>
            </article>
          ))}
        </div>

        <div className="results-split">
          <article className="card reveal">
            <span className="tag">Rendimiento · {r.performance.device}</span>
            <img className="perf-img" src={r.performance.img} alt="Tiempo de cuadro por segmento del recorrido en el teléfono" loading="lazy" />
            <p>{r.performance.body}</p>
            <h3 className="h3 perf-pending">Rendimiento por dispositivo</h3>
            <table className="pending-table">
              <thead><tr><th>Dispositivo</th><th>FPS medio</th><th>FPS mínimo</th></tr></thead>
              <tbody>{r.performance.devices.map((d, i) => <tr key={i}><td>{d.name}</td><td>{d.avg}</td><td>{d.min}</td></tr>)}</tbody>
            </table>
          </article>
          <article className="card reveal">
            <span className="tag">Validación con expertos</span>
            <h3>{r.validation.title}</h3>
            <p>{r.validation.body}</p>
            <div className="validation">
              {r.validation.items.map((v) => (
                <div key={v.name} className="validation-item">
                  <span className="muted">{v.what}</span>
                  <strong>{v.name}</strong>
                  <span className="validation-value">{v.value}</span>
                  <span className="muted">Meta {v.goal}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <section id="faq" className="section">
      <div className="container faq">
        <h2 className="h2 reveal">Preguntas frecuentes</h2>
        <div className="faq-list reveal">
          {C.faq.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}<Icon name="chevron" size={18} />
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
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
      <img className="closing-bg" src="/img/teleport_cocina.jpg" alt="" loading="lazy" />
      <div className="closing-veil" />
      <div className="container closing-inner">
        <div>
          <h2 className="display">Tu tratamiento<br />merece una<br />técnica<br />segura.</h2>
          <p>Desde la nevera hasta el desecho de la aguja, el prototipo guía cada paso de la insulinización con el teléfono del paciente y un visor de cartón.</p>
        </div>
        <div className="closing-ctas">
          <a href="#prototipo" className="btn btn-light btn-sm"><Icon name="search" size={14} /> Ver el prototipo</a>
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

// Cierre de la página: foto con llamado a la acción y footer negro, pegados en un mismo marco.
export function SiteEnd() {
  return (
    <div className="site-end">
      <Closing />
      <Footer />
    </div>
  );
}
