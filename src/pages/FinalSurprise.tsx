import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Heart, Home, ArrowLeft } from 'lucide-react';
import { messagesData } from '../data/messages';
import { GiftBox } from '../components/GiftBox';

export const FinalSurprise: React.FC = () => {
  const surprise = messagesData.finalSurprise;

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden">
      {/* Dynamic Starry Night Romantic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/15 dark:bg-rose-500/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow delay-1000" />

      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-amber-300/50 shadow-romantic mb-3 text-xs font-semibold text-amber-500 dark:text-amber-300 uppercase tracking-widest"
        >
          <Gift className="w-3.5 h-3.5" />
          <span>{surprise.title}</span>
        </motion.div>

        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-romantic-wineDark dark:text-white tracking-tight">
          The Grand Birthday Surprise
        </h1>
      </div>

      {/* 3D Animated Gift Box with Interactive Opening & Fireworks */}
      <div className="relative z-10 my-auto">
        <GiftBox />
      </div>

      {/* Bottom Nav / Return to Beginning */}
      <div className="relative z-10 pt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full glass-panel hover:bg-white/80 dark:hover:bg-rose-950/80 text-romantic-wine dark:text-white text-sm font-medium border border-rose-200/50 shadow-romantic transition-all"
        >
          <Home className="w-4 h-4 text-rose-500" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/letter"
          className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full glass-panel hover:bg-white/80 dark:hover:bg-rose-950/80 text-romantic-wine dark:text-white text-sm font-medium border border-rose-200/50 shadow-romantic transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-rose-500" />
          <span>Re-read The Letter</span>
        </Link>
      </div>

      {/* Final Note Signature */}
      <div className="text-center pt-8 text-xs text-romantic-wine/60 dark:text-rose-300/60 font-romantic text-2xl">
        {surprise.footerText}
      </div>
    </div>
  );
};
