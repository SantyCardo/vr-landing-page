import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from './ui.jsx';

// Elementos que pueden recibir foco dentro del diálogo (para el focus trap).
const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Visor de imagen ampliada: overlay oscuro, cierre con clic fuera / X / Esc,
// navegación con flechas y teclado. Se monta en <body> con un portal.
export default function Lightbox({ items, index, onClose, onIndexChange }) {
  const dialog = useRef(null);
  const opener = useRef(null);
  const count = items.length;
  const item = items[index];

  const go = useCallback((dir) => {
    if (count < 2) return;
    onIndexChange((index + dir + count) % count);
  }, [count, index, onIndexChange]);

  // Bloquea el scroll del body mientras el visor está abierto y lo restaura al cerrar.
  useEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    const prevBody = body.style.overflow;
    const prevRoot = root.style.overflow;
    const prevPad = body.style.paddingRight;
    const bar = window.innerWidth - root.clientWidth;
    body.style.overflow = 'hidden';
    root.style.overflow = 'hidden';
    if (bar > 0) body.style.paddingRight = `${bar}px`; // evita el salto al desaparecer la barra
    return () => {
      body.style.overflow = prevBody;
      root.style.overflow = prevRoot;
      body.style.paddingRight = prevPad;
    };
  }, []);

  // Lleva el foco al diálogo al abrir y lo devuelve al elemento que lo abrió al cerrar.
  useEffect(() => {
    opener.current = document.activeElement;
    if (dialog.current) dialog.current.focus();
    return () => {
      const el = opener.current;
      if (el && typeof el.focus === 'function' && document.contains(el)) el.focus();
    };
  }, []);

  // Esc cierra, ← → navegan, Tab circula dentro del diálogo.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        go(e.key === 'ArrowRight' ? 1 : -1);
        return;
      }
      if (e.key !== 'Tab') return;
      const nodes = dialog.current ? Array.from(dialog.current.querySelectorAll(FOCUSABLE)) : [];
      if (!nodes.length) return;
      // -1 = el foco está en el contenedor del diálogo o fuera de él.
      const at = nodes.indexOf(document.activeElement);
      if (e.shiftKey && at <= 0) {
        e.preventDefault();
        nodes[nodes.length - 1].focus();
      } else if (!e.shiftKey && (at === -1 || at === nodes.length - 1)) {
        e.preventDefault();
        nodes[0].focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  if (typeof document === 'undefined' || !item) return null;

  // Clic (o toque) en el fondo oscuro: cierra. `preventDefault` evita que el
  // navegador mueva el foco al body antes de devolverlo a la tarjeta de origen.
  const closeOnBackdrop = (e) => {
    if (e.target !== e.currentTarget) return;
    e.preventDefault();
    onClose();
  };


  return createPortal(
    <div className="lightbox-overlay" onMouseDown={closeOnBackdrop}>
      <div
        ref={dialog}
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`Imagen ampliada: ${item.title}`}
        tabIndex={-1}
      >
        <button type="button" className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Cerrar imagen ampliada">
          <Icon name="x" size={22} />
        </button>

        {count > 1 && (
          <button type="button" className="lightbox-btn lightbox-nav is-prev" onClick={() => go(-1)} aria-label="Imagen anterior">
            <Icon name="arrowL" size={22} />
          </button>
        )}

        <figure className={`lightbox-figure${item.light ? ' is-light' : ''}`}>
          <img className="lightbox-img" src={item.img} alt={item.alt || ''} />
        </figure>

        {count > 1 && (
          <button type="button" className="lightbox-btn lightbox-nav is-next" onClick={() => go(1)} aria-label="Imagen siguiente">
            <Icon name="arrowR" size={22} />
          </button>
        )}

        <div className="lightbox-caption">
          <span className="tag">{item.kicker}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
