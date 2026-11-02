import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Mail } from 'lucide-react';
import { messagesData } from '../data/messages';
import { Envelope } from '../components/Envelope';

export const BirthdayLetter: React.FC = () => {
  const data = messagesData.letter;

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-rose-300/50 shadow-romantic mb-4 text-xs font-semibold text-rose-500 uppercase tracking-widest"
        >
          <Mail className="w-3.5 h-3.5" />
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

      {/* Interactive Envelope with Unfolding Letter */}
      <div className="mb-20">
        <Envelope />
      </div>

      {/* Navigation to Final Surprise */}
      <div className="text-center pt-8">
        <Link
          to="/surprise"
          className="inline-flex items-center space-x-3 px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-bold text-lg shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all"
        >
          <span>{data.btnNext}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};
