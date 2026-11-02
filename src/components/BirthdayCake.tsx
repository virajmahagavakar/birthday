import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CandleState {
  id: number;
  isLit: boolean;
  color: string;
}

export const BirthdayCake: React.FC = () => {
  const [candles, setCandles] = useState<CandleState[]>([
    { id: 1, isLit: true, color: 'bg-rose-400' },
    { id: 2, isLit: true, color: 'bg-pink-400' },
    { id: 3, isLit: true, color: 'bg-purple-400' },
    { id: 4, isLit: true, color: 'bg-rose-500' },
    { id: 5, isLit: true, color: 'bg-amber-400' },
  ]);

  const [hasTriggeredWish, setHasTriggeredWish] = useState(false);

  const blowCandle = (id: number) => {
    setCandles((prev) => {
      const updated = prev.map((c) => (c.id === id ? { ...c, isLit: false } : c));
      const allExtinguished = updated.every((c) => !c.isLit);
      if (allExtinguished && !hasTriggeredWish) {
        triggerBirthdayCelebration();
      }
      return updated;
    });
  };

  const blowAllCandles = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, isLit: false })));
    triggerBirthdayCelebration();
  };

  const relightCandles = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, isLit: true })));
    setHasTriggeredWish(false);
  };

  const triggerBirthdayCelebration = () => {
    setHasTriggeredWish(true);
    // Beautiful confetti explosion
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#F8BBD0', '#D8C4F1', '#D9A5A5'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#FF69B4', '#DA70D6', '#FFF0F5'],
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#FFE4E1', '#E6E6FA'],
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const litCount = candles.filter((c) => c.isLit).length;

  return (
    <div className="relative flex flex-col items-center justify-center p-6 sm:p-10 glass-panel rounded-3xl max-w-2xl mx-auto shadow-romantic-lg border border-rose-200/60 dark:border-rose-900/40">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-rose-500 bg-rose-100/60 dark:bg-rose-950/60 px-3 py-1 rounded-full border border-rose-300/40">
          Make a Birthday Wish 🎂
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wine dark:text-romantic-pink mt-2">
          {litCount > 0
            ? 'Blow Out Your Birthday Candles!'
            : '✨ Your Wish Has Been Sent to the Stars! ✨'}
        </h3>
        <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-romantic-pink/70 mt-1">
          {litCount > 0
            ? 'Click each flame or make a wish and blow them all out together.'
            : 'May every quiet prayer and unspoken dream come true for you, Shravani.'}
        </p>
      </div>

      {/* The Digital Cake Structure */}
      <div className="relative w-64 sm:w-72 h-64 flex flex-col items-center justify-end select-none">
        {/* Candles Row */}
        <div className="flex items-end justify-center space-x-4 mb-1 z-20">
          {candles.map((candle) => (
            <div
              key={candle.id}
              onClick={() => candle.isLit && blowCandle(candle.id)}
              className="group flex flex-col items-center cursor-pointer relative"
              title={candle.isLit ? 'Click to blow out' : 'Blown out'}
            >
              {/* Flame / Smoke */}
              <div className="h-8 flex items-center justify-center">
                {candle.isLit ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 0.95, 1.1],
                      rotate: [-2, 3, -3, 2],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Outer Glow */}
                    <div className="w-5 h-7 bg-amber-400 rounded-full blur-xs opacity-90" />
                    {/* Inner Core */}
                    <div className="absolute w-2.5 h-4 bg-yellow-200 rounded-full" />
                    {/* Flame tip */}
                    <div className="absolute -top-1 w-1.5 h-2 bg-white rounded-full opacity-80" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -16, scale: 1.5 }}
                    transition={{ duration: 1 }}
                    className="text-gray-400 text-xs font-mono"
                  >
                    ☁️
                  </motion.div>
                )}
              </div>

              {/* Candle Body */}
              <div
                className={`w-3.5 h-12 rounded-t-sm shadow-sm ${candle.color} border border-white/40 relative overflow-hidden`}
              >
                {/* Candle spiral stripes */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,white_4px,white_8px)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Top Cake Tier */}
        <div className="relative w-44 h-14 bg-gradient-to-r from-rose-200 via-pink-100 to-rose-200 dark:from-rose-900 dark:via-pink-950 dark:to-rose-900 rounded-t-2xl shadow-md border-t-4 border-white/60 flex items-center justify-around px-2 z-10">
          {/* Frosting drips */}
          <div className="absolute -top-1 left-0 right-0 h-3 flex justify-between px-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="w-4 h-3 bg-white/80 rounded-b-full shadow-xs"
              />
            ))}
          </div>
          {/* Strawberries / Flowers */}
          <span className="text-xs">🍓</span>
          <span className="text-xs">🌸</span>
          <span className="text-xs">🍓</span>
          <span className="text-xs">🌸</span>
          <span className="text-xs">🍓</span>
        </div>

        {/* Middle Cake Tier */}
        <div className="relative w-56 h-16 bg-gradient-to-r from-pink-200 via-purple-100 to-pink-200 dark:from-rose-950 dark:via-purple-950 dark:to-rose-950 rounded-t-xl shadow-md border-t-2 border-white/40 flex items-center justify-center z-5">
          <div className="font-romantic text-romantic-wine dark:text-romantic-pink text-lg tracking-wider">
            Shravani ❤️
          </div>
        </div>

        {/* Bottom Cake Tier */}
        <div className="relative w-64 h-16 bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300 dark:from-rose-900 dark:via-pink-900 dark:to-rose-900 rounded-t-xl shadow-lg border-t-2 border-white/50 flex items-center justify-around px-4">
          <span className="text-sm">✨</span>
          <span className="text-sm">🌸</span>
          <span className="text-sm">💖</span>
          <span className="text-sm">🌸</span>
          <span className="text-sm">✨</span>
        </div>

        {/* Cake Stand / Plate */}
        <div className="w-72 h-3 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 rounded-full shadow-lg border border-amber-300/50" />
      </div>

      {/* Action Controls & Wishes */}
      <div className="mt-8 flex flex-col items-center space-y-3">
        {litCount > 0 ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={blowAllCandles}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-white font-medium text-sm shadow-romantic hover:shadow-romantic-lg transition-all flex items-center space-x-2"
          >
            <span>🌬️ Blow All Candles</span>
            <Sparkles className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={relightCandles}
            className="px-5 py-2 rounded-full glass-pill text-xs font-medium text-romantic-wine dark:text-romantic-pink hover:bg-white/80 transition-all flex items-center space-x-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
            <span>Light the Candles Again ✨</span>
          </motion.button>
        )}

        {/* Revealed Wish Box */}
        <AnimatePresence>
          {hasTriggeredWish && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 p-5 rounded-2xl bg-white/70 dark:bg-rose-950/70 border border-rose-300/60 shadow-romantic text-center max-w-md"
            >
              <div className="flex items-center justify-center space-x-1 text-rose-500 mb-2">
                <Heart className="w-4 h-4 fill-rose-500" />
                <span className="font-romantic text-lg">Viraj's Birthday Wish for You</span>
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>
              <p className="font-serif italic text-sm sm:text-base text-romantic-wineDark dark:text-rose-100 leading-relaxed">
                "May your life always have an abundance of laughter, peace that gently settles in your heart, and moments so beautiful they make you smile without even noticing. Happy Birthday!"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
