'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    let lenis;
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1, smooth: true });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  return null;
}
