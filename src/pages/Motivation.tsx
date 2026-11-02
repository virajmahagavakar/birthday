import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Lightbulb, Target, Award, Star } from 'lucide-react';
import { messagesData } from '../data/messages';
import { photosData } from '../data/photos';

export const Motivation: React.FC = () => {
  const data = messagesData.motivation;
  const photo = photosData.motivation;

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-purple-300/50 shadow-romantic mb-4 text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-widest"
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
          className="font-romantic text-2xl sm:text-3xl text-purple-600 dark:text-purple-300"
        >
          "{data.subtitle}"
        </motion.p>
      </div>

      {/* Main Glassmorphism Frame with Portrait & Quote */}
      <div className="glass-panel rounded-3xl p-6 sm:p-12 border-2 border-rose-300/60 dark:border-purple-800/50 shadow-romantic-lg mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Portrait in Elegant Glass Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-300 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/80 dark:border-rose-950/80 shadow-2xl bg-neutral-900">
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ objectPosition: photo.objectPosition || 'center' }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="font-romantic text-2xl text-white drop-shadow-md">
                  Shravani ✨
                </span>
              </div>
            </div>
          </motion.div>

          {/* Emotional Quote Beside It */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-rose-500 bg-rose-100/70 dark:bg-rose-950/70 px-3.5 py-1 rounded-full w-max border border-rose-300/40">
              A Personal Note of Appreciation
            </span>

            <div className="space-y-4 font-serif text-base sm:text-xl text-romantic-wineDark dark:text-rose-100 leading-relaxed italic border-l-4 border-rose-400 pl-4 sm:pl-6 my-2">
              {data.quote.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={idx === data.quote.length - 1 ? 'font-bold text-rose-600 dark:text-rose-300 not-italic font-romantic text-2xl sm:text-3xl' : ''}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-2 text-xs font-sans text-romantic-wine/70 dark:text-rose-300/70">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Dedicated with endless respect & affection</span>
            </div>
          </div>
        </div>
      </div>

      {/* THREE-STAGE ANIMATED TIMELINE */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <span className="font-romantic text-2xl text-rose-500">
            A Journey of Admiration
          </span>
          <h3 className="font-serif text-3xl font-bold text-romantic-wineDark dark:text-white mt-1">
            Three Reasons You Inspire Me
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.timeline.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-200/60 dark:border-purple-900/40 text-center relative overflow-hidden shadow-romantic"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-purple-400 via-pink-400 to-rose-400 flex items-center justify-center text-white shadow-md">
                {idx === 0 && <Lightbulb className="w-7 h-7" />}
                {idx === 1 && <Target className="w-7 h-7" />}
                {idx === 2 && <Award className="w-7 h-7" />}
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-purple-600 dark:text-purple-300 font-bold block mb-1">
                {stage.stage}
              </span>

              <h4 className="font-serif text-lg sm:text-xl font-bold text-romantic-wineDark dark:text-white mb-2">
                {stage.title}
              </h4>

              <p className="font-sans text-xs sm:text-sm text-romantic-wine/80 dark:text-rose-100/80 leading-relaxed">
                "{stage.description}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL INSPIRING MESSAGE & BUTTON */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-rose-200/60 dark:border-rose-900/40 shadow-romantic">
        <div className="flex justify-center mb-4 text-amber-400">
          <Star className="w-6 h-6 fill-current animate-pulse" />
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-romantic-wineDark dark:text-romantic-pink mb-4">
          "{data.finalMessage}"
        </h3>

        <Link
          to="/how-beautiful"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all mt-4"
        >
          <span>{data.btnNext}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
