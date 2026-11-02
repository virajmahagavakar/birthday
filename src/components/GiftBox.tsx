import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart, RotateCcw, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { messagesData } from '../data/messages';
import { photosData } from '../data/photos';

export const GiftBox: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const surprise = messagesData.finalSurprise;

  const triggerSurpriseExplosion = () => {
    setIsOpened(true);

    // Multi-stage grand celebration fireworks & confetti
    const duration = 3.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 40, spread: 360, ticks: 70, zIndex: 100 };

    const interval: number = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 60 * (timeLeft / duration);

      // Launch fireworks from both sides
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.15, y: Math.random() - 0.2 },
        colors: ['#FF69B4', '#DA70D6', '#FFD700', '#F8BBD0', '#FFFFFF'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.85, y: Math.random() - 0.2 },
        colors: ['#FF1493', '#BA55D3', '#D9A5A5', '#FFF0F5', '#E6E6FA'],
      });
    }, 250);
  };

  const handleReset = () => {
    setIsOpened(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          /* Closed 3D Animated Gift Box */
          <motion.div
            key="closed-gift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, rotateY: 90 }}
            className="flex flex-col items-center text-center select-none py-8"
          >
            {/* The 3D Gift Box Graphic */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-56 sm:w-64 h-56 sm:h-64 cursor-pointer group"
              onClick={triggerSurpriseExplosion}
              title="Click to unwrap your birthday gift"
            >
              {/* Box Lid Ribbon Bow */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-16 h-10 rounded-full border-4 border-amber-300 bg-amber-400/90 shadow-lg -rotate-20" />
                <div className="w-16 h-10 rounded-full border-4 border-amber-300 bg-amber-400/90 shadow-lg rotate-20 -ml-6" />
                <div className="absolute w-8 h-8 rounded-full bg-amber-500 border-2 border-amber-200 shadow-md" />
              </div>

              {/* Box Lid */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 rounded-2xl shadow-xl z-10 border border-white/30 flex items-center justify-center overflow-hidden">
                {/* Horizontal Gold Ribbon on Lid */}
                <div className="w-full h-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 shadow-inner" />
                {/* Vertical Gold Ribbon on Lid */}
                <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-b from-amber-300 via-yellow-200 to-amber-300 shadow-md" />
              </div>

              {/* Box Body */}
              <div className="absolute top-10 left-3 right-3 bottom-0 bg-gradient-to-b from-rose-600 via-pink-600 to-purple-800 rounded-2xl shadow-glow-wine border border-white/20 flex items-center justify-center overflow-hidden">
                {/* Vertical Gold Ribbon on Body */}
                <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-b from-amber-300 via-yellow-100 to-amber-400 shadow-md" />
                {/* Horizontal Gold Ribbon on Body */}
                <div className="absolute left-0 right-0 h-8 bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-400 shadow-md" />

                <div className="relative z-10 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/40">
                  <Heart className="w-8 h-8 text-white fill-white/80 animate-pulse" />
                </div>
              </div>

              {/* Floating Sparkles around box */}
              <Sparkles className="absolute -top-3 -left-3 w-6 h-6 text-yellow-300 animate-spin-slow" />
              <Sparkles className="absolute -bottom-2 -right-2 w-7 h-7 text-pink-300 animate-bounce" />
            </motion.div>

            {/* Heading and Action Button */}
            <div className="mt-10 space-y-2">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white drop-shadow-md">
                {surprise.heading}
              </h3>
              <p className="text-sm sm:text-base text-rose-200/90 max-w-md mx-auto">
                {surprise.subtitle}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 0 35px rgba(255, 105, 180, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              onClick={triggerSurpriseExplosion}
              className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-white font-bold text-lg shadow-2xl transition-all flex items-center space-x-3 border border-white/40"
            >
              <PartyPopper className="w-6 h-6 text-yellow-200" />
              <span>{surprise.btnOpen}</span>
              <Sparkles className="w-5 h-5 text-yellow-200" />
            </motion.button>
          </motion.div>
        ) : (
          /* Opened Surprise Grand Celebration Reveal */
          <motion.div
            key="opened-surprise"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 220 }}
            className="w-full flex flex-col items-center text-center py-4"
          >
            {/* Glowing Photo Frame */}
            <div className="relative group mb-8">
              {/* Animated glowing halos behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-400 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              <div className="relative w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden border-4 border-white/60 shadow-2xl bg-black">
                <img
                  src={photosData.final.src}
                  alt={photosData.final.alt}
                  style={{ objectPosition: photosData.final.objectPosition || 'center' }}
                  className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-4">
                  <span className="font-romantic text-2xl sm:text-3xl text-white drop-shadow-md">
                    To Shravani, With Love ❤️
                  </span>
                </div>
              </div>
            </div>

            {/* Grand Birthday Message Card */}
            <div className="max-w-2xl w-full glass-panel rounded-3xl p-6 sm:p-10 border-2 border-rose-300/60 shadow-glow-wine text-white backdrop-blur-xl">
              <h2 className="font-serif text-3xl sm:text-5xl font-black bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 bg-clip-text text-transparent drop-shadow-sm mb-4">
                {surprise.birthdayWishes[0]}
              </h2>

              <div className="space-y-4 font-sans text-base sm:text-lg text-rose-100/90 leading-relaxed max-w-xl mx-auto">
                <p>{surprise.birthdayWishes[1]}</p>
                <p>{surprise.birthdayWishes[2]}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-rose-300/80 mb-1">
                  {surprise.birthdayWishes[3]}
                </span>
                <span className="font-romantic text-3xl sm:text-4xl text-amber-200">
                  {surprise.signature}
                </span>
              </div>
            </div>

            {/* Replay Button */}
            <div className="mt-8 flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full glass-pill text-sm font-medium text-white hover:bg-white/20 transition-all flex items-center space-x-2 border border-white/30"
              >
                <RotateCcw className="w-4 h-4 text-rose-300" />
                <span>{surprise.btnReplay}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
