import { useState } from 'react';
import * as C from '../data/content.js';
import { Icon, SectionHead, Carousel } from './ui.jsx';

export function About() {
  return (
    <section id="proyecto" className="section">
      <div className="container">
        <Carousel head={{ eyebrow: 'Acerca del proyecto', title: ['Todo lo necesario para aprender', 'la técnica, en un solo lugar.'], lead: C.about.paragraphs[0] }}>
          {C.mechanics.map((m) => (
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
        <p className="note reveal">{C.about.paragraphs[1]}</p>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problema" className="section">
      <div className="container">
        <SectionHead eyebrow="Diagnóstico" title={C.problem.title} lead={C.problem.lead} />
        <div className="grid-4">
          {C.problem.errors.map((e) => (
            <article key={e.title} className="tile reveal">
              <span className="tile-icon"><Icon name={e.icon} size={22} /></span>
              <span className={`level level-${e.level.toLowerCase()}`}>{e.level}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="quote reveal">“{C.problem.quote}”</blockquote>
      </div>
    </section>
  );
}

export function Justification() {
  const j = C.justification;
  return (
    <section id="justificacion" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Justificación" title={j.title} lead={j.lead} />
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
        <p className="eyebrow">Pregunta problema</p>
        <p className="question">{C.question}</p>
      </div>
    </section>
  );
}

export function Objectives() {
  return (
    <section id="objetivos" className="section">
      <div className="container">
        <SectionHead eyebrow="Objetivos" title={['Objetivos', 'del proyecto.']} lead={C.objectives.general} />
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

export function Scope() {
  const s = C.scope;
  return (
    <section id="alcance" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Alcance" title={s.title} lead={s.lead} />
        <ol className="stages reveal">
          {s.stages.map((st, i) => (
            <li key={st.title}>
              <span className="num">{i + 1}</span>
              <div><span className="tag">{st.phase}</span><h3>{st.title}</h3><p>{st.body}</p></div>
            </li>
          ))}
        </ol>
        <div className="scope-lists">
          <div className="reveal">
            <h3 className="h3">Incluye</h3>
            <div className="chips">{s.includes.map((t) => <div key={t} className="chip"><Icon name="check" size={16} />{t}</div>)}</div>
          </div>
          <div className="reveal">
            <h3 className="h3">Trabajo futuro</h3>
            <div className="chips">{s.excludes.map((t) => <div key={t} className="chip chip-muted"><Icon name="x" size={16} />{t}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section id="cronograma" className="section">
      <div className="container">
        <SectionHead eyebrow="Cronograma" title={['Plan de trabajo', 'en 18 semanas.']} lead="Tres fases secuenciales con entregables verificables al cierre de cada etapa." />
        <div className="grid-3">
          {C.timeline.map((p) => (
            <article key={p.label} className="card phase reveal">
              <div className="phase-top"><span className="tag">{p.label}</span><span className="muted">{p.weeks}</span></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>{p.items.map(([t, w]) => <li key={t}><span>{t}</span><span className="muted">{w}</span></li>)}</ul>
              <p className="deliverable"><Icon name="doc" size={16} /> {p.deliverable}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section id="metodologia" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Metodología" title={['Arquitectura', 'de trabajo.']} lead="Basada en Kanban, validación clínica y prototipado inmersivo en Unity." />
        <div className="grid-4">
          {C.methodology.map((m, i) => (
            <article key={m.title} className="card numbered reveal">
              <span className="num">Fase {i + 1}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
              <span className="tag">{m.deliverable}</span>
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
        <SectionHead eyebrow="Tecnología" title={['Herramientas accesibles,', 'pensadas para escalar.']} lead="Cada pieza del stack se eligió por su bajo costo y su madurez técnica." />
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
    <section id="normas" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Normas legales y éticas" title={['Principios', 'regulatorios.']} lead="Principios éticos y de accesibilidad considerados en el desarrollo del prototipo." />
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

export function StateOfArt() {
  const s = C.stateOfArt;
  return (
    <section id="estado-arte" className="section">
      <div className="container">
        <SectionHead eyebrow="Estado del arte" title={['Comparación', 'con soluciones existentes.']} lead={s.note} />
        <div className="table-wrap reveal">
          <table className="compare">
            <thead><tr><th>Solución</th>{s.criteria.map((c) => <th key={c}>{c}</th>)}</tr></thead>
            <tbody>
              {s.rows.map((r) => (
                <tr key={r.name} className={r.highlight ? 'is-highlight' : ''}>
                  <th scope="row">{r.name}<span className="muted">{r.tag}</span></th>
                  {r.values.map((v, i) => <td key={i} data-v={v}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function References() {
  return (
    <section id="referentes" className="section section-soft">
      <div className="container">
        <Carousel head={{ eyebrow: 'Referentes interactivos', title: ['Experiencias que', 'inspiraron la interacción.'] }}>
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
  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHead eyebrow="Resultados esperados" title={['Impactos', 'proyectados.']} lead="Resultados esperados del prototipo inmersivo en la educación para la insulinización." />
        <div className="grid-4">
          {C.results.map((r) => (
            <article key={r.title} className="card stat reveal">
              <strong>{r.metric}</strong>
              <span className="muted">{r.label}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container faq">
        <h2 className="h2 reveal">Preguntas<br />frecuentes</h2>
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
    <section id="equipo" className="section section-soft">
      <div className="container">
        <SectionHead eyebrow="Equipo" title={['Equipo', 'de investigación.']} lead="Universidad Autónoma de Bucaramanga · Facultad de Ingeniería, programa de Ingeniería de Sistemas." />
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

export function Closing() {
  return (
    <footer className="closing">
      <img className="closing-bg" src="/img/teleport_cocina.jpg" alt="" loading="lazy" />
      <div className="closing-veil" />
      <div className="container closing-inner">
        <div>
          <h2 className="display">Aprender la técnica<br />sin riesgo real.</h2>
          <p>Prototipo educativo inmersivo · UNAB · Bucaramanga, Colombia · 2026</p>
        </div>
        <div className="closing-ctas">
          <a href="#inicio" className="btn btn-light btn-sm"><Icon name="arrowUR" size={14} /> Volver arriba</a>
          <a href="#proyecto" className="btn btn-ghost btn-sm"><Icon name="search" size={14} /> Ver proyecto</a>
        </div>
      </div>
    </footer>
  );
}
