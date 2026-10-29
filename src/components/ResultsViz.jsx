import { Fragment, useEffect, useRef, useState } from 'react';
import { CountUp } from './ui.jsx';

// Número con coma decimal y los dígitos indicados (es-CO).
export const nf = (v, d = 0) => v.toLocaleString('es-CO', { minimumFractionDigits: d, maximumFractionDigits: d });

// Devuelve true al entrar en pantalla (una sola vez). Con movimiento reducido, true desde el inicio.
export function useInView(ref) {
  const [on, setOn] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const el = ref.current;
    if (on || !el) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, on]);
  return on;
}

// Cifra animada (la lógica de conteo vive en CountUp).
export function Counter({ value, duration = 1200 }) {
  return <CountUp value={value} duration={duration} />;
}

// Altura de la pantalla dentro del viewBox 0 0 40 72: y 66 es cero y y 8 es el máximo.
// Devuelve la posición relativa (0 a 1) de un valor, para colocar las líneas de la fila.
const SCREEN_TOP = 8;
const SCREEN_BOTTOM = 66;
export const phoneLevel = (v, max) => (SCREEN_BOTTOM - (v / max) * (SCREEN_BOTTOM - SCREEN_TOP)) / 72;

// Teléfono con relleno proporcional al FPS. Verde si llega al mínimo, naranja si no.
// El color va acompañado de ✓ o ↓ para que no sea la única señal.
// Las líneas de 30 y 60 se dibujan en la fila (escritorio); en móvil, dentro de cada teléfono (.rx-mline).
export function PhoneFill({ item, max, min, goal, on, delay = 0 }) {
  const ok = item.fps >= min.value;
  const fps = nf(item.fps, 2);
  const yAt = (v) => 72 * phoneLevel(v, max);
  const note = item.note ? `. ${item.note}` : '';
  return (
    <div className="rx-phone" tabIndex={0}>
      <svg className="rx-phone-svg" viewBox="0 0 40 72" role="img"
        aria-label={`${item.model}: ${fps} FPS de media (${item.gpu}, ${item.ram} de RAM, Android ${item.android})${note}`}>
        <rect x="2" y="2" width="36" height="68" rx="6" strokeWidth="1.5" style={{ fill: '#fff', stroke: 'var(--ink-2)' }} />
        <rect x="16" y="5" width="8" height="2" rx="1" style={{ fill: 'var(--ink-2)' }} />
        <rect x="5" y="8" width="30" height="58" style={{ fill: 'var(--surface)' }} />
        <rect x="5" y="8" width="30" height="58" style={{
          fill: ok ? 'var(--ok)' : 'var(--warn)',
          transformBox: 'fill-box',
          transformOrigin: '50% 100%',
          transform: `scaleY(${on ? item.fps / max : 0})`,
          transition: `transform 900ms cubic-bezier(.2,.8,.2,1) ${delay}ms`,
        }} />
        <line className="rx-mline" x1="5" x2="35" y1={yAt(min.value)} y2={yAt(min.value)} strokeWidth="1.5" strokeDasharray="3 2" style={{ stroke: 'var(--ink-2)' }} />
        <line className="rx-mline" x1="5" x2="35" y1={yAt(goal.value)} y2={yAt(goal.value)} strokeWidth="1.5" strokeDasharray="3 2" style={{ stroke: 'var(--ink-2)' }} />
      </svg>
      <span className="rx-phone-model">{item.model}</span>
      <span className="rx-phone-fps">
        <strong>{`${fps} FPS`}</strong> <span aria-hidden="true">{ok ? '✓' : '↓'}</span>
      </span>
      <span className="rx-panel" aria-hidden="true">
        GPU {item.gpu}<br />RAM {item.ram}<br />Android {item.android}
        {item.note && <><br />{item.note}</>}
      </span>
    </div>
  );
}

// Colores según el fondo: claro (texto oscuro) u oscuro (texto y arco blancos).
const GAUGE = {
  light: { track: 'var(--line)', ink: 'var(--ink)', sub: 'var(--ink-2)', halo: '#fff', mark: 'var(--ink)', markRing: '#fff' },
  dark: { track: 'rgba(255, 255, 255, .25)', ink: '#fff', sub: '#fff', halo: 'rgba(17, 17, 17, .6)', mark: '#fff', markRing: '#111' },
};

// Medidor semicircular. La escala va de 0 (izquierda) a max (derecha).
// reference: el tramo desde ahí hasta max se pinta en verde suave; marca con su rótulo.
// marks: evaluadores; van fuera del arco con su número. tick: muesca exterior con su rótulo.
export function Gauge({ value, max, on, size = 220, label, reference, referenceLabel, marks = [], needle = false, tick, tone = 'light', color = 'var(--accent)' }) {
  const c = GAUGE[tone];
  const pt = (v, r) => {
    const a = Math.PI * (1 - v / max);
    return [100 + r * Math.cos(a), 110 - r * Math.sin(a)];
  };
  const arc = (v1, v2) => {
    const [x1, y1] = pt(v1, 80);
    const [x2, y2] = pt(v2, 80);
    return `M${x1} ${y1} A80 80 0 0 1 ${x2} ${y2}`;
  };
  const share = (value / max) * 100;
  const refTick = reference != null && { a: pt(reference, 64), b: pt(reference, 90), t: pt(reference, 116) };
  const tk = tick && { a: pt(tick.value, 90), b: pt(tick.value, 97), t: pt(tick.value, 107) };


  const aria = `${label}: ${nf(value, 1)}, escala de 0 a ${nf(max)}`
    + (reference != null ? `. Referencia: ${referenceLabel} en ${nf(reference)}` : '');

  return (
    <div className="rx-gauge" style={{ width: size }}>
      <svg viewBox="0 0 200 120" role="img" aria-label={aria}>
        <path d={arc(0, max)} fill="none" strokeWidth="14" strokeLinecap="round" style={{ stroke: c.track }} />
        {reference != null && (
          <path d={arc(reference, max)} fill="none" strokeWidth="14" style={{ stroke: 'color-mix(in srgb, var(--ok) 35%, white)' }} />
        )}
        <path d={arc(0, max)} pathLength="100" fill="none" strokeWidth="14" strokeLinecap="round" style={{
          stroke: color,
          strokeDasharray: '100',
          strokeDashoffset: on ? String(100 - share) : '100',
          transition: 'stroke-dashoffset 1200ms ease-out',
        }} />
        {refTick && (
          <g>
            <line x1={refTick.a[0]} y1={refTick.a[1]} x2={refTick.b[0]} y2={refTick.b[1]} strokeWidth="2.5" style={{ stroke: c.ink }} />
            <text x={refTick.t[0]} y={refTick.t[1]} textAnchor="end" fontSize="11" style={{ fill: c.sub }}>{referenceLabel}</text>
          </g>
        )}
        {tk && (
          <g>
            <line x1={tk.a[0]} y1={tk.a[1]} x2={tk.b[0]} y2={tk.b[1]} strokeWidth="2" style={{ stroke: c.ink }} />
            <text x={tk.t[0]} y={tk.t[1]} textAnchor="middle" fontSize="12" style={{ fill: c.sub }}>{tick.label}</text>
          </g>
        )}
        {marks.map((m, i) => {
          const [x, y] = pt(m.value, 94);
          return (
            <circle key={i} cx={x} cy={y} r="3.5" strokeWidth="1.5" style={{ fill: c.mark, stroke: c.markRing }}>
              <title>{`${m.who}: ${nf(m.value, 1)}`}</title>
            </circle>
          );
        })}
        {needle && (
          <g style={{
            transform: `rotate(${on ? (180 * value) / max : 0}deg)`,
            transformOrigin: '100px 110px',
            transformBox: 'view-box',
            transition: 'transform 1200ms ease-out',
          }}>
            <line x1="100" y1="110" x2="34" y2="110" strokeWidth="2.5" strokeLinecap="round" style={{ stroke: c.ink }} />
            <circle cx="100" cy="110" r="5" style={{ fill: c.ink }} />
          </g>
        )}
        {!needle && <text x="100" y="96" textAnchor="middle" style={{
          fill: c.ink, fontSize: '26px', fontWeight: 500, stroke: c.halo, strokeWidth: 5, paintOrder: 'stroke',
        }}>{nf(value, 1)}</text>}
      </svg>
      {/* Con aguja, la cifra va fuera del arco para que la aguja no la tape. */}
      {needle && <strong className="rx-gauge-value" aria-hidden="true">{nf(value, 1)}</strong>}
      <span className="rx-gauge-label" style={{ color: c.sub }}>{label}</span>
    </div>
  );
}

// Termómetro horizontal de 0 a `scale` °C con marcas cada 2 °C y el tramo min-max resaltado.
export function Thermo({ title, min, max, scale, text, on }) {
  const at = (v) => `${(v / scale) * 100}%`;
  const ticks = Array.from({ length: scale / 2 + 1 }, (_, i) => i * 2);
  return (
    <div className="rx-thermo">
      <p className="rx-thermo-title">{title}</p>
      <div className="rx-thermo-labels">
        <span style={{ left: at(min) }}>{`${nf(min, 1)} °C`}</span>
        <span className="is-end" style={{ left: at(max) }}>{`${nf(max, 1)} °C`}</span>
      </div>
      <div className="rx-thermo-track" aria-hidden="true">
        <span className="rx-thermo-fill" style={{
          left: at(min),
          width: `${((max - min) / scale) * 100}%`,
          transform: `scaleX(${on ? 1 : 0})`,
        }} />
        {ticks.map((t) => <span key={t} className="rx-thermo-tick" style={{ left: at(t) }} />)}
      </div>
      <div className="rx-thermo-nums" aria-hidden="true">
        {ticks.map((t) => <span key={t} style={{ left: at(t) }}>{t}</span>)}
      </div>
      <p className="rx-thermo-text">{text}</p>
    </div>
  );
}

const TONE = { ok: 'var(--ok)', warn: 'var(--warn)', no: 'var(--crit)', accent: 'var(--accent)' };

// Barra apilada: un segmento por grupo, ancho según cantidad de ítems. La leyenda da el texto.
export function Stacked({ groups, on }) {
  const total = groups.reduce((s, g) => s + g.items.length, 0);
  const summary = groups.map((g) => `${g.items.length} ${g.state}`).join(', ');
  return (
    <div className="rx-stacked">
      <div className="rx-stack-bar" role="img" aria-label={`Requerimientos: ${summary}`}>
        {groups.map((g, i) => (
          <span key={g.state} aria-hidden="true" className="rx-seg" style={{
            width: `${(g.items.length / total) * 100}%`,
            background: TONE[g.tone],
            transform: `scaleX(${on ? 1 : 0})`,
            transitionDelay: `${i * 120}ms`,
          }} />
        ))}
      </div>
      <div className="rx-legend-items">
        {groups.map((g) => (
          <div key={g.state}>
            <span className="rx-swatch" aria-hidden="true" style={{ background: TONE[g.tone] }} />
            {`${g.items.length} ${g.state}`}
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- Gráficos técnicos (SVG animado) ----------

// true en ≤860 px: los gráficos usan un viewBox más estrecho, con texto más grande.
export function useNarrow() {
  const q = '(max-width: 860px)';
  const [narrow, setNarrow] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const onChange = () => setNarrow(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return narrow;
}

const range = (a, b, step) => Array.from({ length: Math.floor((b - a) / step) + 1 }, (_, i) => a + i * step);

// Tarjeta del carrusel: anima su gráfico una vez, cuando la tarjeta entra en pantalla.
export function ChartCard({ title, caption, source, render }) {
  const ref = useRef(null);
  const on = useInView(ref);
  return (
    <article ref={ref} className="rx-chart">
      <h4 className="rx-chart-title">{title}</h4>
      {render(on)}
      <p className="rx-chart-caption">{caption}</p>
      <small className="rx-chart-source">{`Fuente: ${source}`}</small>
    </article>
  );
}

// Barras horizontales de FPS medio por dispositivo (escala 0 a 70).
export function DevicesBarChart({ items, min, goal, max = 70, on, label }) {
  const narrow = useNarrow();
  const { W, fs, x0, x1 } = narrow ? { W: 420, fs: 16, x0: 16, x1: 404 } : { W: 640, fs: 13, x0: 176, x1: 600 };
  const rowH = narrow ? 52 : 34;
  const top = narrow ? 58 : 44;
  const bottom = top + items.length * rowH;
  const H = bottom + fs * 2.6 + 12;
  const sx = (v) => x0 + (v / max) * (x1 - x0);
  const pat = 'rx-stripes';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      <defs>
        <pattern id={pat} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" style={{ fill: 'var(--warn)' }} />
          <rect width="3" height="6" style={{ fill: '#fff', opacity: 0.5 }} />
        </pattern>
      </defs>
      {[min, goal].map((ref) => (
        <g key={ref.value}>
          <line x1={sx(ref.value)} x2={sx(ref.value)} y1={top - 8} y2={bottom} strokeWidth="1" strokeDasharray="4 4" style={{ stroke: 'var(--ink-2)' }} />
          <text x={sx(ref.value)} y={top - 14} textAnchor="middle" fontSize={fs - 1} style={{ fill: 'var(--ink-2)' }}>
            {`${ref.value === min.value ? 'Mínimo' : 'Diseño'}: ${ref.value}`}
          </text>
        </g>
      ))}
      {items.map((it, i) => {
        const y = top + i * rowH;
        const by = narrow ? y + 22 : y + 8;
        const ok = it.fps >= min.value;
        const w = sx(it.fps) - x0;
        return (
          <g key={it.model}>
            <text x={narrow ? x0 : x0 - 12} y={narrow ? y + 16 : y + rowH / 2 + 4} textAnchor={narrow ? 'start' : 'end'} fontSize={fs} style={{ fill: 'var(--ink)' }}>{it.model}</text>
            <rect x={x0} y={by} width={w} height="18" style={{
              fill: ok ? 'var(--ok)' : `url(#${pat})`,
              transformBox: 'fill-box',
              transformOrigin: 'left center',
              transform: `scaleX(${on ? 1 : 0})`,
              transition: `transform 900ms ease-out ${i * 60}ms`,
            }} />
            <text x={x0 + w + 6} y={by + 14} fontSize={fs} style={{ fill: 'var(--ink)' }}>{`${nf(it.fps, 2)}${ok ? '' : ' ↓'}`}</text>
          </g>
        );
      })}
      <line x1={x0} x2={x1} y1={bottom + 2} y2={bottom + 2} strokeWidth="1" style={{ stroke: 'var(--ink-2)' }} />
      {range(0, max, 10).map((v) => (
        <text key={v} x={sx(v)} y={bottom + fs + 6} textAnchor="middle" fontSize={narrow ? fs : fs - 2} style={{ fill: 'var(--ink-2)' }}>{v}</text>
      ))}
    </svg>
  );
}

const SCENES = [
  { key: 'intro', name: 'Intro', shape: 'circle', color: 'var(--accent)' },
  { key: 'tutorial', name: 'Tutorial', shape: 'square', color: 'var(--ink-2)' },
  { key: 'cocina', name: 'Cocina', shape: 'triangle', color: 'var(--warn)' },
];

// Forma de cada escena: círculo, cuadrado o triángulo (el color no va solo).
function Mark({ shape, x, y, color }) {
  if (shape === 'circle') return <circle cx={x} cy={y} r="5" style={{ fill: color }} />;
  if (shape === 'square') return <rect x={x - 5} y={y - 5} width="10" height="10" style={{ fill: color }} />;
  return <polygon points={`${x},${y - 6} ${x + 6},${y + 5} ${x - 6},${y + 5}`} style={{ fill: color }} />;
}

// Por dispositivo: una línea del mínimo al máximo y un marcador por escena (escala 0 a 90).
export function SceneDotChart({ rows, on, label }) {
  const narrow = useNarrow();
  const { W, fs, x0, x1 } = narrow ? { W: 420, fs: 16, x0: 16, x1: 404 } : { W: 640, fs: 13, x0: 176, x1: 600 };
  const rowH = narrow ? 58 : 34;
  const top = narrow ? 84 : 72;
  const bottom = top + rows.length * rowH;
  const H = bottom + fs * 2.6 + 12;
  const max = 90;
  const sx = (v) => x0 + (v / max) * (x1 - x0);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      {SCENES.map((s, k) => (
        <g key={s.key} transform={`translate(${x0 + k * (narrow ? 120 : 150)}, 18)`}>
          <Mark shape={s.shape} x={0} y={0} color={s.color} />
          <text x="12" y={fs * 0.35} fontSize={fs} style={{ fill: 'var(--ink)' }}>{s.name}</text>
        </g>
      ))}
      {[30, 60].map((v) => (
        <g key={v}>
          <line x1={sx(v)} x2={sx(v)} y1={top - 8} y2={bottom} strokeWidth="1" strokeDasharray="4 4" style={{ stroke: 'var(--ink-2)' }} />
          <text x={sx(v)} y={top - 14} textAnchor="middle" fontSize={fs - 1} style={{ fill: 'var(--ink-2)' }}>{`${v === 30 ? 'Mínimo' : 'Diseño'}: ${v}`}</text>
        </g>
      ))}
      {rows.map((row, i) => {
        const y = top + i * rowH;
        const ly = narrow ? y + 34 : y + rowH / 2;
        const vals = SCENES.map((s) => ({ ...s, v: row[s.key] }));
        const lo = Math.min(...vals.map((x) => x.v));
        const hi = Math.max(...vals.map((x) => x.v));
        return (
          <g key={row.model}>
            <text x={narrow ? x0 : x0 - 12} y={narrow ? y + 18 : ly + 4} textAnchor={narrow ? 'start' : 'end'} fontSize={fs} style={{ fill: 'var(--ink)' }}>{row.model}</text>
            <line x1={sx(lo)} x2={sx(hi)} y1={ly} y2={ly} strokeWidth="3" strokeLinecap="round" style={{ stroke: 'var(--line)' }} />
            {vals.map((s) => (
              <g key={s.key} style={{
                transform: `translateX(${on ? 0 : -(sx(s.v) - x0)}px)`,
                transition: `transform 800ms ease-out ${i * 50}ms`,
              }}>
                <Mark shape={s.shape} x={sx(s.v)} y={ly} color={s.color} />
                <title>{`${row.model} · ${s.name}: ${nf(s.v, 2)} FPS`}</title>
              </g>
            ))}
          </g>
        );
      })}
      <line x1={x0} x2={x1} y1={bottom + 2} y2={bottom + 2} strokeWidth="1" style={{ stroke: 'var(--ink-2)' }} />
      {range(0, max, 10).map((v) => (
        <text key={v} x={sx(v)} y={bottom + fs + 6} textAnchor="middle" fontSize={narrow ? fs : fs - 2} style={{ fill: 'var(--ink-2)' }}>{v}</text>
      ))}
    </svg>
  );
}

// Trazos por sesión: continuo, discontinuo y punteado (además del color).
const SERIES_STYLE = [
  { color: 'var(--ok)', dash: undefined },
  { color: 'var(--accent)', dash: '6 3' },
  { color: 'var(--warn)', dash: '2 3' },
];

// FPS a lo largo de tres sesiones: eje X en minutos, eje Y de 0 a 70. Cada línea se revela con un clip que crece.
export function SeriesChart({ series, on, label }) {
  const narrow = useNarrow();
  const W = narrow ? 420 : 640;
  const fs = narrow ? 16 : 13;
  const H = 330;
  const x0 = narrow ? 42 : 52;
  const x1 = W - 12;
  const y0 = 22;
  const y1 = H - 44;
  const xMax = Math.max(...series.map((s) => s.minutes));
  const sxT = (m) => x0 + (m / xMax) * (x1 - x0);
  const syF = (f) => y1 - (f / 70) * (y1 - y0);
  return (
    <>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
        <defs>
          {series.map((s, i) => (
            <clipPath key={s.label} id={`rx-clip-${i}`}>
              <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} style={{
                transformBox: 'fill-box',
                transformOrigin: 'left center',
                transform: `scaleX(${on ? 1 : 0})`,
                transition: `transform 1200ms ease-out ${i * 200}ms`,
              }} />
            </clipPath>
          ))}
        </defs>
        {range(0, 70, 10).map((v) => (
          <g key={v}>
            <line x1={x0} x2={x1} y1={syF(v)} y2={syF(v)} strokeWidth="1" style={{ stroke: 'var(--line)' }} />
            <text x={x0 - 8} y={syF(v) + fs * 0.35} textAnchor="end" fontSize={fs} style={{ fill: 'var(--ink-2)' }}>{v}</text>
          </g>
        ))}
        {[30, 60].map((v) => (
          <g key={v}>
            <line x1={x0} x2={x1} y1={syF(v)} y2={syF(v)} strokeWidth="1" strokeDasharray="4 4" style={{ stroke: 'var(--ink-2)' }} />
            <text x={x0 + 6} y={syF(v) - 6} fontSize={fs - 1} style={{ fill: 'var(--ink-2)' }}>{`${v === 30 ? 'Mínimo' : 'Diseño'}: ${v}`}</text>
          </g>
        ))}
        {range(0, xMax, 5).map((t) => (
          <text key={t} x={sxT(t)} y={y1 + fs + 6} textAnchor="middle" fontSize={fs} style={{ fill: 'var(--ink-2)' }}>{t}</text>
        ))}
        <text x={x0 + 6} y={y0 - 6} textAnchor="start" fontSize={fs} style={{ fill: 'var(--ink-2)' }}>FPS</text>
        <text x={x1} y={H - 6} textAnchor="end" fontSize={fs} style={{ fill: 'var(--ink-2)' }}>Minutos</text>
        {series.map((s, i) => (
          <polyline key={s.label} clipPath={`url(#rx-clip-${i})`}
            points={s.points.map(([m, f]) => `${sxT(m)},${syF(f)}`).join(' ')}
            fill="none" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
            strokeDasharray={SERIES_STYLE[i].dash}
            style={{ stroke: SERIES_STYLE[i].color }} />
        ))}
      </svg>
      <ul className="rx-series-legend">
        {series.map((s, i) => (
          <li key={s.label}>
            <svg viewBox="0 0 34 8" aria-hidden="true">
              <line x1="0" x2="34" y1="4" y2="4" strokeWidth="2.5" strokeDasharray={SERIES_STYLE[i].dash} style={{ stroke: SERIES_STYLE[i].color }} />
            </svg>
            {`${s.label} · ${s.model} (${nf(s.fps, 2)} FPS de media)`}
          </li>
        ))}
      </ul>
    </>
  );
}

// ---------- Recorrido entre escenas (Arquitectura) ----------

// Posiciones de las tarjetas y trazos en el viewBox. Escritorio: 900×360. Móvil: 360×470 (vertical).
const FLOW_LAYOUT = {
  desk: {
    W: 900, H: 360, card: { w: 220, h: 84 },
    pos: { intro: { x: 40, y: 138 }, tutorial: { x: 340, y: 24 }, cocina: { x: 640, y: 138 } },
    paths: {
      'intro>tutorial': 'M260,158 C300,158 300,66 340,66',
      'tutorial>cocina': 'M560,66 C600,66 600,158 640,158',
      'intro>cocina': 'M260,200 L640,200',
      'cocina>intro': 'M750,222 C750,320 150,320 150,222',
    },
    labels: {
      'intro>tutorial': { x: 300, y: 112 },
      'tutorial>cocina': { x: 600, y: 112 },
      'intro>cocina': { x: 450, y: 200 },
      'cocina>intro': { x: 450, y: 296 },
    },
    rotate: [],
  },
  mobile: {
    W: 360, H: 470, card: { w: 230, h: 84 },
    pos: { intro: { x: 80, y: 20 }, tutorial: { x: 120, y: 190 }, cocina: { x: 80, y: 360 } },
    paths: {
      'intro>tutorial': 'M200,104 C200,150 270,140 270,190',
      'tutorial>cocina': 'M200,274 L200,360',
      'intro>cocina': 'M110,104 L110,360',
      'cocina>intro': 'M80,402 C30,402 30,62 80,62',
    },
    labels: {
      'intro>tutorial': { x: 240, y: 146 },
      'tutorial>cocina': { x: 232, y: 317 },
      'intro>cocina': { x: 98, y: 232 },
      'cocina>intro': { x: 42, y: 232 },
    },
    rotate: ['intro>cocina', 'cocina>intro'],
  },
};

const FLOW_COLOR = { intro: 'var(--accent)', tutorial: 'var(--ink-2)', cocina: 'var(--ok)' };

// Diagrama del recorrido: tarjetas por escena, flechas con rótulo y un punto que recorre el camino del usuario.
export function SceneFlow({ nodes, edges, alt, caption }) {
  const narrow = useNarrow();
  const L = narrow ? FLOW_LAYOUT.mobile : FLOW_LAYOUT.desk;
  const rootRef = useRef(null);
  const on = useInView(rootRef);
  const [hi, setHi] = useState(null);
  const edgeRefs = useRef([]);
  const dotRef = useRef(null);
  const haloRef = useRef(null);
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const key = (e) => `${e.from}>${e.to}`;
  const { w: cw, h: ch } = L.card;
  const tw = (s) => s.length * 7.4 + 16;

  // Camino del usuario: Intro → Tutorial → Cocina → (teletransporte) Intro.
  const loopIdx = [
    edges.findIndex((e) => e.from === 'intro' && e.to === 'tutorial'),
    edges.findIndex((e) => e.from === 'tutorial' && e.to === 'cocina'),
    edges.findIndex((e) => e.from === 'cocina' && e.to === 'intro'),
  ];

  useEffect(() => {
    if (!on || reduced) return undefined;
    const paths = loopIdx.map((k) => edgeRefs.current[k]).filter(Boolean);
    const dot = dotRef.current;
    const halo = haloRef.current;
    if (paths.length !== 3 || !dot || !halo) return undefined;
    const lens = paths.map((p) => p.getTotalLength());
    const total = lens.reduce((a, b) => a + b, 0);
    let visible = true;
    let t0 = null;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    if (rootRef.current) io.observe(rootRef.current);
    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!visible) { t0 = null; return; }
      if (t0 === null) t0 = now;
      let s = (((now - t0) % 6000) / 6000) * total;
      let i = 0;
      while (i < 2 && s > lens[i]) { s -= lens[i]; i += 1; }
      const p = paths[i].getPointAtLength(s);
      dot.setAttribute('cx', p.x); dot.setAttribute('cy', p.y);
      halo.setAttribute('cx', p.x); halo.setAttribute('cy', p.y);
    };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [on, reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  const connected = (id) => (e) => e.from === id || e.to === id;
  const arrowFor = (e) => (hi && connected(hi)(e) ? 'url(#rx-arw-hi)' : 'url(#rx-arw)');

  return (
    <div ref={rootRef} className={`rx-flow${on ? ' is-on' : ''}`}>
      <svg viewBox={`0 0 ${L.W} ${L.H}`} role="img" aria-label={`${alt}. ${caption}`}>
        <defs>
          <marker id="rx-arw" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: 'var(--ink-2)' }} />
          </marker>
          <marker id="rx-arw-hi" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: 'var(--ink)' }} />
          </marker>
        </defs>

        {edges.map((e, i) => {
          const k = key(e);
          const isHi = hi && connected(hi)(e);
          const cls = `rx-flow-edge${isHi ? ' is-hi' : ''}${hi && !isHi ? ' is-dim' : ''}`;
          return (
            <path key={k} ref={(el) => { edgeRefs.current[i] = el; }} className={cls}
              d={L.paths[k]} pathLength="1" fill="none" markerEnd={arrowFor(e)}
              style={{ animationDelay: `${900 + i * 250}ms` }} />
          );
        })}

        {edges.map((e, i) => {
          const k = key(e);
          const pt = L.labels[k];
          const text = e.label;
          const w = tw(text);
          const h = 22;
          const isHi = hi && connected(hi)(e);
          const dim = hi && !isHi;
          const rot = L.rotate.includes(k);
          return (
            <g key={`l-${k}`} className="rx-flow-label" style={{ animationDelay: `${900 + i * 250 + 600}ms` }}>
              <g transform={rot ? `rotate(-90 ${pt.x} ${pt.y})` : undefined} opacity={dim ? 0.35 : 1} style={{ transition: 'opacity .25s' }}>
                <rect x={pt.x - w / 2} y={pt.y - h / 2} width={w} height={h} rx="6" style={{ fill: '#fff' }} />
                <text x={pt.x} y={pt.y + 4.5} textAnchor="middle" fontSize="13" style={{ fill: 'var(--ink-2)' }}>{text}</text>
              </g>
            </g>
          );
        })}

        {nodes.map((n, i) => {
          const p = L.pos[n.id];
          const dim = hi && hi !== n.id;
          return (
            <g key={n.id} className="rx-flow-card" tabIndex={0}
              style={{ animationDelay: `${i * 250}ms` }}
              onMouseEnter={() => setHi(n.id)} onMouseLeave={() => setHi(null)}
              onFocus={() => setHi(n.id)} onBlur={() => setHi(null)}>
              <rect x={p.x} y={p.y} width={cw} height={ch} rx="16" strokeWidth="2"
                style={{ fill: '#fff', stroke: FLOW_COLOR[n.id], opacity: dim ? 0.6 : 1, transition: 'opacity .25s' }} />
              <circle cx={p.x + 24} cy={p.y + 30} r="7" style={{ fill: FLOW_COLOR[n.id] }} />
              <text x={p.x + 40} y={p.y + 36} fontSize="22" fontWeight="600" style={{ fill: 'var(--ink)' }}>{n.name}</text>
              <text x={p.x + 24} y={p.y + 62} fontSize="14" style={{ fill: 'var(--ink-2)' }}>{n.detail}</text>
            </g>
          );
        })}

        <circle ref={haloRef} className="rx-flow-halo" r="14" cx={L.pos.intro.x + cw / 2} cy={L.pos.intro.y + ch} />
        <circle ref={dotRef} className="rx-flow-dot" r="7" cx={L.pos.intro.x + cw / 2} cy={L.pos.intro.y + ch} />
      </svg>
    </div>
  );
}
