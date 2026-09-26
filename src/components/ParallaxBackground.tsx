import React, { useEffect, useRef } from 'react';

interface Shape {
  el: HTMLDivElement;
  baseY: number;
  rotation: number;
  speed: number;
}

export const ParallaxBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Palette from v1 dark olive theme
    const colors = ['#1a1a12', '#22231b', '#2d2e24', '#383a2d', '#1e2018'];
    const shapeCount = 28;
    const shapes: Shape[] = [];

    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      4000
    );

    // Clear any previous shapes
    container.innerHTML = '';

    for (let i = 0; i < shapeCount; i++) {
      const el = document.createElement('div');
      const width = Math.floor(Math.random() * (1200 - 450) + 450);
      const height = Math.floor(Math.random() * (700 - 250) + 250);
      const left = Math.floor(Math.random() * (window.innerWidth + 200) - 100);
      const top = Math.floor(Math.random() * docHeight);
      const rotation = Math.floor(Math.random() * 30 - 15);
      const speed = Math.random() * 0.25 + 0.15;
      const color = colors[Math.floor(Math.random() * colors.length)];

      el.style.position = 'absolute';
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
      el.style.backgroundColor = color;
      el.style.opacity = '0.55';
      el.style.borderRadius = '6px';
      el.style.pointerEvents = 'none';
      el.style.willChange = 'transform';
      el.style.transform = `translate3d(0, 0, 0) rotate(${rotation}deg)`;

      container.appendChild(el);
      shapes.push({ el, baseY: top, rotation, speed });
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i];
            const translateY = -scrollY * shape.speed;
            shape.el.style.transform = `translate3d(0, ${translateY}px, 0) rotate(${shape.rotation}deg)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="parallax-bg-root"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#0d0e0b]"
    />
  );
};
