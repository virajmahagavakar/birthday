import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Stars, ChevronDown } from 'lucide-react';
import { messagesData } from '../data/messages';
import { photosData } from '../data/photos';
import { BirthdayCake } from '../components/BirthdayCake';

export const Home: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const homeData = messagesData.home;

  const scrollToIntroduction = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* FULL-PAGE FIXED BACKGROUND PHOTO */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <motion.img
          src={photosData.hero.src}
          alt={photosData.hero.alt}
          initial={{ scale: 1.06 }}
          animate={{ scale: [1.06, 1.01, 1.06] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{ objectPosition: photosData.hero.objectPosition || 'center 20%' }}
          className="w-full h-full object-cover"
        />
        {/* Soft romantic overlay so text stays readable throughout the whole page */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0F5]/70 via-[#FFF0F5]/60 to-[#FFF0F5]/80 dark:from-[#120814]/75 dark:via-[#120814]/65 dark:to-[#120814]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 via-transparent to-purple-300/10 mix-blend-overlay" />
      </div>

      {/* FULL-SCREEN CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
        <div className="absolute inset-0 z-0" />

        {/* Hero Content Card */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtle Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-rose-300/60 shadow-romantic mb-6 text-xs sm:text-sm font-medium text-romantic-wine dark:text-rose-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin-slow" />
            <span>{homeData.badge}</span>
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin-slow" />
          </motion.div>

          {/* Main Birthday Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-romantic-wineDark dark:text-white drop-shadow-sm leading-tight sm:leading-none mb-6"
          >
            <span className="block text-rose-600 dark:text-rose-400 font-normal text-2xl sm:text-4xl md:text-5xl font-romantic mb-1">
              Happy Birthday,
            </span>
            SHRAVANI!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-base sm:text-xl text-romantic-wine/85 dark:text-rose-100 font-sans font-light leading-relaxed mb-6"
          >
            "{homeData.subtitle}"
          </motion.p>

          {/* Display Sign-off */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-romantic text-2xl sm:text-3xl text-rose-600 dark:text-rose-300 mb-8"
          >
            {homeData.signatureDisplay}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link
              to="/eyes"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-medium text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>{homeData.btnEnter}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={scrollToIntroduction}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel hover:bg-white/80 dark:hover:bg-rose-950/80 text-romantic-wine dark:text-white font-medium text-base border border-rose-300/50 shadow-romantic hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>{homeData.btnSurpriseIntro}</span>
              <ChevronDown className="w-4 h-4 text-rose-500 animate-bounce" />
            </button>
          </motion.div>
        </div>

        {/* Floating Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-400 dark:text-rose-300 z-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center space-y-1"
          >
            <span className="text-[10px] font-sans uppercase tracking-widest opacity-75">
              Scroll to explore
            </span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </section>

      {/* BIRTHDAY INTRODUCTION SECTION */}
      <section
        ref={introRef}
        className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-1 text-rose-500 font-romantic text-xl mb-2"
          >
            <Heart className="w-4 h-4 fill-rose-500" />
            <span>A Celebration for Someone Special</span>
            <Heart className="w-4 h-4 fill-rose-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-romantic-wineDark dark:text-romantic-pink tracking-tight mb-4"
          >
            {homeData.introHeading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-romantic-wine/80 dark:text-rose-100 leading-relaxed"
          >
            {homeData.introText}
          </motion.p>
        </div>

        {/* 3 Animated Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {homeData.introCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-rose-200/60 dark:border-rose-900/40 relative overflow-hidden group shadow-romantic hover:shadow-romantic-lg transition-all"
            >
              {/* Card top badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-rose-500 bg-rose-100/70 dark:bg-rose-950/70 px-3 py-1 rounded-full border border-rose-300/40">
                  {card.highlight}
                </span>
                <div className="w-10 h-10 rounded-full bg-rose-400/20 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  {index === 0 && <Sparkles className="w-5 h-5" />}
                  {index === 1 && <Heart className="w-5 h-5 fill-current" />}
                  {index === 2 && <Stars className="w-5 h-5" />}
                </div>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-romantic-wineDark dark:text-white mb-2">
                {card.title}
              </h3>

              <p className="font-sans text-sm text-romantic-wine/75 dark:text-rose-100/80 leading-relaxed">
                {card.desc}
              </p>

              {/* Bottom heart accent on hover */}
              <div className="mt-4 pt-3 border-t border-rose-200/40 dark:border-rose-900/40 flex justify-end">
                <Heart className="w-4 h-4 text-rose-300 group-hover:text-rose-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Birthday Cake with Blowable Candles */}
        <div className="mb-20">
          <BirthdayCake />
        </div>

        {/* Final Homepage Message / Personal Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border-2 border-rose-300/50 dark:border-rose-900/50 shadow-romantic-lg relative overflow-hidden"
        >
          <div className="font-romantic text-3xl sm:text-4xl text-rose-600 dark:text-rose-300 mb-4">
            Hey Shravani, this little world is yours...
          </div>

          <p className="font-serif text-base sm:text-xl text-romantic-wineDark dark:text-rose-100 leading-relaxed mb-8">
            "I could have simply wished you a happy birthday, but some people deserve more than just a message. So, I made you a little something. Take your time, explore every corner, and don't forget to smile."
          </p>

          <Link
            to="/eyes"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all"
          >
            <span>ENTER YOUR LITTLE WORLD ❤️</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="mt-6 text-xs text-romantic-wine/60 dark:text-rose-300/60 font-sans tracking-wide">
            Created with love by Viraj Mahagavakar
          </div>
        </motion.div>
      </section>
    </div>
  );
};
