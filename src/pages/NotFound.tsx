import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel max-w-lg w-full rounded-3xl p-8 sm:p-12 border-2 border-rose-300/60 shadow-romantic-lg relative overflow-hidden"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-100 dark:bg-rose-950/60 flex items-center justify-center text-rose-500 shadow-inner">
          <Sparkles className="w-8 h-8 animate-spin-slow" />
        </div>

        <h1 className="font-serif text-5xl font-black text-rose-500 mb-2">
          404
        </h1>

        <h2 className="font-serif text-2xl font-bold text-romantic-wineDark dark:text-white mb-3">
          A Hidden Secret Corner
        </h2>

        <p className="font-romantic text-2xl text-rose-600 dark:text-rose-300 mb-4">
          "Looks like you wandered into a secret garden..."
        </p>

        <p className="font-sans text-sm text-romantic-wine/75 dark:text-rose-100/80 mb-8 leading-relaxed">
          Don't worry, in this little world, every path always leads back to celebrating you, Shravani.
        </p>

        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-medium text-sm shadow-romantic hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
};
