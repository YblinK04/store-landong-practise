'use client';

import { useEffect, RefObject } from 'react';

export const useMagneticButton = (ref: RefObject<HTMLElement | null>, strength = 0.1) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      requestAnimationFrame(() => {
        element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    };

    const onMouseLeave = () => {
      requestAnimationFrame(() => {
        element.style.transform = 'translate(0, 0)';
      });
    };

    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, strength]);
};