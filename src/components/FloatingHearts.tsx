import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingHeartsProps {
  count?: number;
}

export const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count = 20 }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 12,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.4 + 0.2,
      symbol: i % 4 === 0 ? '✨' : i % 3 === 0 ? '🌸' : '❤️',
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: '105vh',
            x: `${heart.left}vw`,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: '-10vh',
            opacity: [0, heart.opacity, heart.opacity, 0],
            scale: [0.5, 1, 1, 0.8],
            x: [
              `${heart.left}vw`,
              `${heart.left + (heart.id % 2 === 0 ? 3 : -3)}vw`,
              `${heart.left}vw`,
            ],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'easeInOut',
          }}
          className="absolute select-none text-rose-300/40 drop-shadow-sm"
          style={{ fontSize: `${heart.size}px` }}
        >
          {heart.symbol}
        </motion.div>
      ))}
    </div>
  );
};
