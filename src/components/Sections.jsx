import { useState, useRef, useEffect, lazy, Suspense, Fragment } from 'react';
import * as C from '../data/content.js';
import { Icon, SectionHead, Carousel } from './ui.jsx';
import { Scrolly } from './Scrolly.jsx';
import { Solution } from './Solution.jsx';
import Lightbox from './Lightbox.jsx';
import { useInView, PhoneFill, Counter, Gauge, Thermo, Stacked, nf, phoneLevel, ChartCard, DevicesBarChart, SceneDotChart, SeriesChart, SceneFlow } from './ResultsViz.jsx';
import { sceneFps, fpsSeries } from '../data/charts.js';

const PenModel = lazy(() => import('./PenModel.jsx'));

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
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${C.demo.youtubeId}`}
            title={C.demo.title}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
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
        <div className="arch-flow-card reveal">
          <SceneFlow nodes={C.diagrams.nodes} edges={C.diagrams.edges} alt={C.diagrams.alt} caption={C.diagrams.caption} />
          <p className="arch-flow-caption">{C.diagrams.caption}</p>
          <small>{`Fuente: ${C.diagrams.source}`}</small>
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
  const trackRef = useRef(null);
  // Desplaza la pista el ancho de una tarjeta (sin animación con movimiento reducido).
  const step = (dir) => {
    const track = trackRef.current;
    const card = track && track.querySelector('.rx-chart');
    if (!card) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: reduced ? 'auto' : 'smooth' });
  };
  const worst = Math.min(...r.scenes.items.map((s) => s.median));
  const dev = r.devices;
  // Tooltip de requerimientos: si se sale por la derecha de la pantalla, se alinea a la derecha del chip.
  const placeTip = (e) => {
    const tip = e.currentTarget.querySelector('.rx-tip');
    if (!tip) return;
    tip.classList.remove('is-right');
    if (tip.getBoundingClientRect().right > window.innerWidth - 8) tip.classList.add('is-right');
  };

  const refDevices = useRef(null);
  const refScenes = useRef(null);
  const refTests = useRef(null);
  const refExperts = useRef(null);
  const refPending = useRef(null);
  const onDevices = useInView(refDevices);
  const onScenes = useInView(refScenes);
  const onTests = useInView(refTests);
  const onExperts = useInView(refExperts);
  const onPending = useInView(refPending);

  return (
    <section id="resultados" className="section">
      <div className="container">
        <SectionHead title={['Resultados', 'del prototipo.']} lead={r.lead} />

        <div className="rx-block rx-impact reveal" data-block="impact">
          <div className="rx-impact-grid">
            {r.impact.items.map((it) => (
              <div key={it.label} className="rx-impact-item">
                <strong><Counter value={it.value} duration={1200} /></strong>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
          <p className="rx-impact-ctx">{r.impact.context}</p>
        </div>

        <div ref={refDevices} className="rx-block reveal" data-block="devices">
          <div className="rx-head">
            <div>
              <p className="rx-tag">{dev.tag}</p>
              <h3 className="rx-h3">{dev.question}</h3>
            </div>
            <p className="rx-a">{dev.answer}</p>
          </div>
          <div className="rx-keys-m" aria-hidden="true">
            <span className="rx-key"><span className="rx-dash" />{`${dev.min.value} ${dev.min.label}`}</span>
            <span className="rx-key"><span className="rx-dash" />{`${dev.goal.value} ${dev.goal.label}`}</span>
          </div>
          <div className="rx-phones-wrap">
            <div className="rx-levels" aria-hidden="true">
              {[dev.min, dev.goal].map((lv) => (
                <div key={lv.value} className="rx-level" style={{ top: `calc(var(--phone-h) * ${phoneLevel(lv.value, dev.max)})` }}>
                  <span className="rx-level-label">{`${lv.value} · ${lv.label}`}</span>
                </div>
              ))}
            </div>
            <div className="rx-phones">
              {dev.items.map((it, i) => (
                <PhoneFill key={it.model} item={it} max={dev.max} min={dev.min} goal={dev.goal} on={onDevices} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>

        <div ref={refScenes} className="rx-block reveal" data-block="scenes">
          <div className="rx-head">
            <div>
              <p className="rx-tag">{r.scenes.tag}</p>
              <h3 className="rx-h3">{r.scenes.question}</h3>
            </div>
            <p className="rx-a">{r.scenes.answer}</p>
          </div>
          <div className="rx-scenes">
            {r.scenes.items.map((it) => (
              <article key={it.name} className={`rx-scene${it.median === worst ? ' is-worst' : ''}`}>
                {it.img && <img className="rx-scene-img" src={it.img} alt="" loading="lazy" decoding="async" />}
                {it.img && <span className="rx-scene-shade" aria-hidden="true" />}
                <h4 className="rx-scene-name">{it.name}</h4>
                <Gauge
                  value={it.median}
                  max={r.scenes.max}
                  on={onScenes}
                  size={200}
                  label={r.scenes.unit}
                  tone="dark"
                  color={it.median >= r.scenes.min.value ? 'var(--ok)' : 'var(--warn)'}
                  tick={r.scenes.min}
                />
              </article>
            ))}
          </div>
        </div>

        <div ref={refTests} className="rx-block reveal" data-block="tests">
          <p className="rx-tag">{r.tests.tag}</p>
          <h3 className="rx-h3">{r.tests.question}</h3>
          <div className="rx-tests">
            <div className="rx-tests-main">
              {/* Una barra: aprobados frente a la meta. */}
              <div className="rx-pass" role="img" aria-label={`${r.tests.pass.value} ${r.tests.pass.label} (${r.tests.pass.pct}). ${r.tests.honest}`}>
                <p className="rx-pass-head">
                  <strong className="rx-pass-num"><Counter value={r.tests.pass.value} duration={1200} /></strong>
                  <span>{r.tests.pass.label}</span>
                  <span className="rx-pass-pct">{r.tests.pass.pct}</span>
                </p>
                <div className="rx-pass-bar" aria-hidden="true">
                  <span className={`rx-pass-fill${onTests ? ' is-in' : ''}`} style={{ '--p': r.tests.passed / r.tests.total }} />
                  <span className="rx-pass-goal" style={{ left: `${r.tests.pass.goal}%` }}><i>{r.tests.pass.goalLabel}</i></span>
                </div>
              </div>
              <h4 className="rx-fail-title">{r.tests.failuresTitle}</h4>
              <ul className="rx-fail">
                {r.tests.failures.map((f) => (
                  <li key={f.n}><strong>{f.n}</strong><span>{f.text}</span></li>
                ))}
              </ul>
            </div>
            <div className="rx-tests-side">
              <div className="rx-badges">
                {r.tests.badges.map((b) => (
                  <div key={b.label} className="rx-badge"><strong>{b.value}</strong><span>{b.label}</span></div>
                ))}
              </div>
              <p className="rx-honest"><span aria-hidden="true">⚠ </span>{r.tests.honest}</p>
              <Thermo
                title={r.tests.temperature.title}
                min={r.tests.temperature.min}
                max={r.tests.temperature.max}
                scale={r.tests.temperature.scale}
                text={r.tests.temperature.text}
                on={onTests}
              />
            </div>
          </div>
        </div>

        <div ref={refExperts} className="rx-block reveal" data-block="experts">
          <p className="rx-tag">{r.experts.tag}</p>
          <h3 className="rx-h3">{r.experts.question}</h3>
          <div className="rx-ecards">
            <div className="rx-ecard">
              <Gauge
                value={r.experts.sus.value}
                max={100}
                on={onExperts}
                size={260}
                label={r.experts.sus.label}
                reference={r.experts.sus.reference}
                referenceLabel={r.experts.sus.referenceLabel}
                marks={r.experts.sus.evaluators}
                needle
              />
              <ul className="rx-evals">
                {r.experts.sus.evaluators.map((e, i) => <li key={i}>{`${e.who}: ${nf(e.value, 1)}`}</li>)}
              </ul>
            </div>
            <div className="rx-ecard">
              <div className="rx-cvi" aria-hidden="true">
                {r.experts.cvi.labels.map((l, i) => (
                  <div key={l} className="rx-cvi-cell">
                    <span className={`rx-box${onExperts ? ' is-on' : ''}`}>
                      <span className="rx-tick" style={{ transitionDelay: `${i * 90}ms` }}>✓</span>
                    </span>
                    <span className="rx-cvi-label">{l}</span>
                  </div>
                ))}
              </div>
              <p className="rx-a">{r.experts.cvi.text}</p>
              <p className="rx-legend-small">{r.experts.cvi.legend}</p>
            </div>
          </div>
          <p className="rx-note">{r.experts.note}</p>
        </div>

        <div ref={refPending} className="rx-block reveal" data-block="pending">
          <p className="rx-tag">{r.pending.tag}</p>
          <h3 className="rx-h3">{r.pending.question}</h3>
          <div className="rx-pending">
            {r.pending.items.map((it) => (
              <div key={it.title} className="rx-pcard">
                <Icon name={it.icon} size={24} />
                <span>{it.title}</span>
              </div>
            ))}
          </div>
          <h4 className="rx-h4">{r.pending.reqsTitle}</h4>
          <Stacked groups={r.pending.reqs} on={onPending} />
          <details className="rx-details">
            <summary>{r.pending.reqsToggle}</summary>
            <div className="rx-reqs">
              {r.pending.reqs.map((g) => (
                <div key={g.state} className="rx-req">
                  <span className="rx-req-state">{g.state}</span>
                  <div className="rx-chips">
                    {g.items.map((code) => {
                      const key = code.split(' ')[0];
                      const info = r.pending.reqInfo[key];
                      return (
                        <span key={code} className="rx-chip-wrap" onMouseEnter={placeTip} onFocus={placeTip}>
                          <span className="rx-chip" tabIndex={0} aria-describedby={info ? `tip-${key}` : undefined}>{code}</span>
                          {info && (
                            <span role="tooltip" id={`tip-${key}`} className="rx-tip">
                              <strong>{info[0]}</strong>
                              <span>{info[1]}</span>
                            </span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </details>
        </div>

        <div className="rx-block reveal" data-block="charts">
          <div className="rx-chart-head">
            <div>
              <p className="rx-tag">Anexo</p>
              <h3 className="rx-h3">{r.chartsTitle}</h3>
            </div>
            <div className="arrows">
              <button type="button" className="arrow" onClick={() => step(-1)} aria-label="Gráfico anterior"><Icon name="arrowL" size={20} /></button>
              <button type="button" className="arrow" onClick={() => step(1)} aria-label="Gráfico siguiente"><Icon name="arrowR" size={20} /></button>
            </div>
          </div>
          <div className="rx-track" ref={trackRef} tabIndex={0} role="region" aria-label="Gráficos técnicos">
            {r.charts.map((c) => {
              const label = `${c.alt}. ${c.caption}`;
              const render = {
                devices: (on) => <DevicesBarChart items={dev.items} min={dev.min} goal={dev.goal} on={on} label={label} />,
                scenes: (on) => <SceneDotChart rows={sceneFps} on={on} label={label} />,
                series: (on) => <SeriesChart series={fpsSeries} on={on} label={label} />,
              }[c.id];
              return <ChartCard key={c.id} title={c.title} caption={c.caption} source={r.source} render={render} />;
            })}
          </div>
        </div>
      </div>
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
  // En móvil se oculta cuando la portada ya no está en pantalla, para no tapar el contenido.
  const [narrow, setNarrow] = useState(() => window.matchMedia('(max-width: 860px)').matches);
  const [hero, setHero] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)');
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener('change', onChange);
    const el = document.getElementById('inicio');
    const io = el ? new IntersectionObserver(([e]) => setHero(e.isIntersecting), { threshold: 0 }) : null;
    if (io) io.observe(el);
    return () => { mq.removeEventListener('change', onChange); if (io) io.disconnect(); };
  }, []);
  return (
    <div className={`unab-badge${narrow && !hero ? ' is-hidden' : ''}`}>
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
