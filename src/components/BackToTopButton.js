import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

// Floating "back to top" control. Stays hidden until the visitor has scrolled
// far enough for it to be useful, then fades in at the bottom-right.
const SHOW_AFTER = 400;

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll(); // account for a page that is already scrolled on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <>
      <button
        type="button"
        className="back-to-top"
        onClick={handleClick}
        aria-label="Back to top"
        title="Back to top"
        // visibility (not just opacity) keeps the button out of the tab order while hidden
        style={{
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        .back-to-top {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 46px;
          height: 46px;
          border: none;
          border-radius: 50%;
          background-color: var(--brand-blue);
          color: #ffffff;
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.28);
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease,
            background-color 0.2s ease;
        }
        .back-to-top:hover {
          background-color: var(--brand-blue-hover);
        }
        .back-to-top:focus-visible {
          outline: 3px solid rgba(149, 52, 107, 0.45);
          outline-offset: 3px;
        }
        @media (max-width: 560px) {
          .back-to-top {
            right: 16px;
            bottom: 16px;
            width: 42px;
            height: 42px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .back-to-top { transition: none; }
        }
      `}</style>
    </>
  );
};

export default BackToTopButton;
