import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { messagesData } from '../data/messages';

export const SecretMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#F8BBD0', '#D8C4F1', '#D9A5A5', '#FF85AD'],
    });
  };

  return (
    <>
      {/* Subtle Floating Secret Heart Trigger at bottom right */}
      <motion.button
        whileHover={{ scale: 1.25, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpen}
        className="fixed bottom-5 right-5 z-30 p-3 rounded-full bg-white/70 dark:bg-rose-950/70 border border-rose-300/50 shadow-romantic text-rose-500 hover:text-rose-600 backdrop-blur-md group transition-all"
        title="Shh... a secret little whisper ❤️"
        aria-label="Secret romantic message"
      >
        <Heart className="w-5 h-5 fill-rose-400/30 group-hover:fill-rose-500 transition-colors animate-pulse" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
      </motion.button>

      {/* Secret Message Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full glass-panel rounded-3xl p-6 sm:p-8 border-2 border-rose-300/60 shadow-romantic-lg z-10 text-center overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-rose-300/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-romantic-wine/60 hover:text-romantic-wine dark:text-romantic-pink/60 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 to-pink-300 flex items-center justify-center shadow-glow-pink mb-4"
              >
                <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
              </motion.div>

              <h3 className="font-serif text-2xl font-bold text-romantic-wine dark:text-romantic-pink mb-2">
                {messagesData.secretMessage.title}
              </h3>

              <div className="my-6 p-4 rounded-2xl bg-white/60 dark:bg-black/30 border border-rose-200/50 dark:border-rose-900/50">
                <p className="font-romantic text-2xl sm:text-3xl text-rose-600 dark:text-rose-300 leading-relaxed">
                  "{messagesData.secretMessage.text}"
                </p>
              </div>

              <p className="text-xs text-romantic-wine/70 dark:text-romantic-pink/70 font-sans mb-6">
                {messagesData.secretMessage.subtext}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
              >
                Keep This in Mind ❤️
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
