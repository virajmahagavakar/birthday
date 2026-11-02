import React, { useEffect, useState } from 'react';

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const colors = ['#F8BBD0', '#D8C4F1', '#D9A5A5', '#FF85AD', '#FAD2E1'];

export const CursorHearts: React.FC = () => {
  const [particles, setParticles] = useState<HeartParticle[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let idCounter = 0;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 50) return; // throttle to 20fps for silky smooth performance
      lastTime = now;

      const newParticle: HeartParticle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.id < 900));
    }, 150);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (isTouchDevice || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out select-none"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
            fontSize: `${p.size}px`,
            opacity: 0.75,
            animation: 'heartFloat 0.8s forwards',
          }}
        >
          ♥
        </span>
      ))}
      <style>{`
        @keyframes heartFloat {
          0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
          100% { transform: translate(-50%, -120%) scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
