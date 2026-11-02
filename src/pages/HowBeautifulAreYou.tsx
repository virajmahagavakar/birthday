import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  Calculator, 
  MessageCircleHeart, 
  ArrowRight,
  AlertCircle,
  Stars
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { messagesData } from '../data/messages';

export const HowBeautifulAreYou: React.FC = () => {
  const data = messagesData.howBeautiful;

  // Beauty Calculator State
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationCount, setCalculationCount] = useState<number | null>(null);
  const [showError404, setShowError404] = useState(false);

  // Sweet Compliments State
  const [currentCompliment, setCurrentCompliment] = useState<string>(data.compliments[0]);
  const [complimentIndex, setComplimentIndex] = useState(0);

  // Center Heart Click State
  const [heartBurst, setHeartBurst] = useState(false);

  const handleCenterHeartClick = () => {
    setHeartBurst(true);
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#F8BBD0', '#D8C4F1', '#FF69B4', '#FFF0F5'],
    });
    setTimeout(() => setHeartBurst(false), 1200);
  };

  const handleCalculateBeauty = () => {
    setIsCalculating(true);
    setShowError404(false);
    setCalculationCount(0);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 45) + 15;
      setCalculationCount(current);

      if (current > 500) {
        clearInterval(interval);
        setTimeout(() => {
          setIsCalculating(false);
          setShowError404(true);
          confetti({
            particleCount: 60,
            spread: 90,
            origin: { y: 0.6 },
          });
        }, 500);
      }
    }, 70);
  };

  const handleNextCompliment = () => {
    const nextIdx = (complimentIndex + 1) % data.compliments.length;
    setComplimentIndex(nextIdx);
    setCurrentCompliment(data.compliments[nextIdx]);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#F8BBD0', '#D8C4F1', '#D9A5A5'],
    });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-rose-300/50 shadow-romantic mb-4 text-xs font-semibold text-rose-500 uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{data.title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-romantic-wineDark dark:text-romantic-pink tracking-tight mb-4"
        >
          {data.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-romantic text-2xl sm:text-3xl text-rose-600 dark:text-rose-300"
        >
          "{data.subtitle}"
        </motion.p>
      </div>

      {/* LARGE GLOWING ANIMATED HEART IN CENTER */}
      <div className="flex flex-col items-center justify-center mb-20 select-none">
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCenterHeartClick}
          className="relative cursor-pointer group"
          title="Click to send love & trigger sparkles!"
        >
          {/* Pulsing Backlight */}
          <div className="absolute -inset-6 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

          {/* Heart Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full glass-panel border-4 border-white/60 dark:border-rose-900/60 shadow-glow-pink flex items-center justify-center">
            <Heart
              className={`w-20 h-20 sm:w-24 sm:h-24 text-rose-500 fill-rose-400 transition-transform duration-300 ${
                heartBurst ? 'scale-125' : 'group-hover:scale-110'
              }`}
            />
            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-300 animate-spin-slow" />
          </div>
        </motion.div>
        <span className="text-xs font-sans text-romantic-wine/70 dark:text-rose-300/70 mt-4 tracking-wide font-medium">
          (Click the glowing heart for a burst of affection ✨)
        </span>
      </div>

      {/* TWO INTERACTIVE EXPERIENCES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* INTERACTIVE FEATURE 1: BEAUTY CALCULATOR */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-rose-200/60 dark:border-rose-900/40 shadow-romantic flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-2 text-rose-500 mb-3">
              <Calculator className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                Algorithmic Measurement
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wineDark dark:text-white mb-2">
              The Beauty Calculator
            </h3>
            <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-rose-200/70 mb-6 font-sans">
              Attempting to measure your charm, grace, and smile with modern science.
            </p>

            {/* Calculator Display Screen */}
            <div className="min-h-36 rounded-2xl bg-white/70 dark:bg-black/40 border border-rose-200/50 dark:border-rose-900/50 p-6 flex flex-col items-center justify-center text-center shadow-inner mb-6">
              {isCalculating ? (
                <div className="space-y-2">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-rose-500">
                    {calculationCount} %
                  </div>
                  <span className="text-xs text-rose-400 font-sans animate-pulse">
                    {data.calculatingText}
                  </span>
                </div>
              ) : showError404 ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="inline-flex items-center space-x-1.5 text-rose-600 dark:text-rose-400 font-mono text-lg sm:text-xl font-bold">
                    <AlertCircle className="w-5 h-5" />
                    <span>{data.errorTitle}</span>
                  </div>
                  <p className="font-romantic text-2xl text-romantic-wine dark:text-romantic-pink">
                    "{data.errorSubtitle}"
                  </p>
                </motion.div>
              ) : (
                <div className="text-romantic-wine/60 dark:text-rose-300/60 font-sans text-xs sm:text-sm italic">
                  Press the button below to initiate calculation...
                </div>
              )}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalculateBeauty}
            disabled={isCalculating}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white font-medium text-sm shadow-md hover:shadow-glow-pink transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isCalculating ? 'Computing Radiance...' : data.calculateBtn}</span>
          </motion.button>
        </motion.div>

        {/* INTERACTIVE FEATURE 2: TELL ME SOMETHING SWEET */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-200/60 dark:border-purple-900/40 shadow-romantic flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-2 text-purple-500 mb-3">
              <MessageCircleHeart className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-semibold font-sans">
                Compliment Dispenser
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wineDark dark:text-white mb-2">
              Tell Me Something Sweet
            </h3>
            <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-rose-200/70 mb-6 font-sans">
              Click anytime you need a reminder of how genuinely wonderful you are.
            </p>

            {/* Compliment Reveal Card */}
            <div className="min-h-36 rounded-2xl bg-white/70 dark:bg-black/40 border border-purple-200/50 dark:border-purple-900/50 p-6 flex items-center justify-center text-center shadow-inner mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentCompliment}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-romantic text-2xl sm:text-3xl text-purple-700 dark:text-purple-300 leading-snug"
                >
                  "{currentCompliment}"
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextCompliment}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-medium text-sm shadow-md hover:shadow-glow-lavender transition-all flex items-center justify-center space-x-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{data.complimentBtn}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* FINAL SECTION */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border-2 border-rose-300/60 dark:border-rose-900/50 shadow-romantic-lg">
        <span className="text-xs uppercase tracking-widest font-bold text-rose-500 bg-rose-100/70 dark:bg-rose-950/70 px-4 py-1.5 rounded-full border border-rose-300/40">
          {data.finalHeading}
        </span>

        <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-romantic-wineDark dark:text-white mt-6 mb-4 tracking-tight">
          "{data.finalMessage}"
        </h3>

        <Link
          to="/memories"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all mt-4"
        >
          <span>{data.btnNext}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
