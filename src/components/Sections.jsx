import { useState } from 'react';
import * as C from '../data/content.js';
import { Icon, SectionHead, Carousel, CountUp } from './ui.jsx';

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
        <div className="grid-4 photo-grid">
          {C.problem.errors.map((e) => (
            <article key={e.title} className="photo-card reveal">
              <img src={e.img} alt={e.alt} loading="lazy" />
              <div className="photo-card-text">
                <span className="tag tag-source">Fuente: {e.source}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
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
        <div className="shift reveal">
          <div><span>Estado actual</span><strong>{j.from}</strong></div>
          <Icon name="arrowR" size={22} />
          <div><span>Resultado esperado</span><strong>{j.to}</strong></div>
        </div>
        <div className="chips reveal">
          {j.goals.map((g) => (
            <div key={g.title} className="chip"><Icon name="check" size={16} /><span><b>{g.title}.</b> {g.body}</span></div>
          ))}
        </div>
        <div className="grid-3">
          {j.pillars.map((p) => (
            <article key={p.title} className="card reveal"><h3>{p.title}</h3><p>{p.body}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Question() {
  return (
    <section id="pregunta" className="section">
      <div className="container narrow reveal">
        <p className="question">{C.question}</p>
      </div>
    </section>
  );
}

export function Objectives() {
  return (
    <section id="objetivos" className="section">
      <div className="container">
        <SectionHead title={['Objetivos', 'del proyecto.']} lead={C.objectives.general} />
        <div className="grid-3">
          {C.objectives.specific.map((o, i) => (
            <article key={o.title} className="card numbered reveal">
              <span className="num">0{i + 1}</span>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Methodology() {
  return (
    <section id="metodologia" className="section">
      <div className="container">
        <SectionHead title={['Cómo se', 'construyó.']} lead="Gestión con PHVA y PMBOK, desarrollo por incrementos cortos y seguimiento en Kanban." />
        <div className="grid-4">
          {C.methodology.map((m) => (
            <article key={m.title} className="card reveal">
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="tag">{m.tag}</span>
            </article>
          ))}
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

export function Legal() {
  return (
    <section id="normas" className="section">
      <div className="container">
        <SectionHead title={['Principios', 'regulatorios.']} lead="Principios éticos y de accesibilidad considerados en el desarrollo del prototipo." />
        <div className="chips chips-grid">
          {C.legal.map((l) => (
            <div key={l.title} className="chip chip-block reveal">
              <Icon name="shield" size={18} />
              <span><b>{l.title}</b> <em className="muted">· {l.tag}</em><br />{l.body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function References() {
  return (
    <section id="referentes" className="section">
      <div className="container">
        <Carousel head={{ title: ['Experiencias que', 'inspiraron la interacción.'] }}>
          {C.references.map((r) => (
            <article key={r.title} className="quote-card">
              <span className="avatar">{r.title.slice(0, 2)}</span>
              <div><p>“{r.body}”</p><span className="muted">{r.title} · {r.studio}</span></div>
            </article>
          ))}
        </Carousel>
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
  return (
    <section id="equipo" className="section">
      <div className="container">
        <SectionHead title={['Equipo', 'de investigación.']} lead="Universidad Autónoma de Bucaramanga · Facultad de Ingeniería, programa de Ingeniería de Sistemas." />
        <div className="grid-3">
          {C.team.members.map((m) => (
            <article key={m.name} className="person reveal">
              <div className="person-photo"><span>{m.init}</span></div>
              <div className="person-info">
                <h3>{m.name}</h3>
                <span className="muted">{m.role}</span>
                <span className="tag">{m.sub}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="chips chips-grid institutions">
          {C.team.institutions.map((i) => (
            <div key={i.name} className="chip chip-block reveal">
              <span><em className="muted">{i.label}</em><br /><b>{i.name}</b> · {i.sub}</span>
            </div>
          ))}
        </div>
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
