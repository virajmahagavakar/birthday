import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MailOpen, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { messagesData } from '../data/messages';
import { photosData } from '../data/photos';

export const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedParagraphs, setRevealedParagraphs] = useState<number>(0);

  const letter = messagesData.letter;

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F8BBD0', '#D8C4F1', '#D9A5A5', '#FFF0F5'],
    });

    // Stagger paragraph typewriter reveals
    letter.paragraphs.forEach((_, idx) => {
      setTimeout(() => {
        setRevealedParagraphs((prev) => Math.max(prev, idx + 1));
      }, (idx + 1) * 500);
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Closed 3D Animated Envelope */
          <motion.div
            key="closed-envelope"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="flex flex-col items-center select-none"
          >
            {/* The Envelope Graphic */}
            <div className="relative w-80 sm:w-96 h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-rose-200 via-[#FFF9F3] to-rose-300 dark:from-rose-900 dark:via-[#261225] dark:to-purple-950 p-2 shadow-romantic-lg border-2 border-rose-300/60 dark:border-rose-800/60 flex items-center justify-center overflow-hidden">
              {/* Envelope Flap Triangles */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-rose-300/60 to-transparent clip-path-triangle pointer-events-none" />

              {/* Wax Seal in Center */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-500 shadow-glow-wine flex flex-col items-center justify-center text-white border-2 border-amber-200/60 cursor-pointer group"
                title="Click to break seal and open letter"
              >
                <Heart className="w-8 h-8 fill-white/90 text-white animate-pulse" />
                <span className="text-[9px] uppercase tracking-wider font-semibold font-sans mt-0.5 opacity-90">
                  Open
                </span>
              </motion.button>

              {/* Envelope Letter Preview Peek */}
              <div className="absolute top-4 left-6 right-6 h-6 bg-cream/70 rounded-t-md border border-rose-200/40 opacity-70" />

              {/* Address / To */}
              <div className="absolute bottom-4 left-6 text-left">
                <span className="text-[10px] uppercase tracking-widest text-romantic-wine/60 dark:text-rose-300/60 block font-sans">
                  For:
                </span>
                <span className="font-romantic text-2xl text-romantic-wine dark:text-romantic-pink">
                  Shravani ❤️
                </span>
              </div>

              {/* Stamp in Top Right */}
              <div className="absolute top-4 right-4 w-12 h-14 rounded-md border-2 border-dashed border-rose-400/50 bg-white/40 dark:bg-black/30 flex flex-col items-center justify-center text-[10px] text-rose-500">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span className="font-sans text-[8px] font-bold">LOVE</span>
              </div>
            </div>

            {/* Prompt Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white font-medium text-base shadow-romantic-lg hover:shadow-glow-pink transition-all flex items-center space-x-2"
            >
              <MailOpen className="w-5 h-5" />
              <span>{letter.btnOpen}</span>
            </motion.button>
          </motion.div>
        ) : (
          /* Unfolded Handwritten Letter with Typewriter Reveal & Photo Keepsake */
          <motion.div
            key="opened-letter"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            className="w-full relative bg-[#FFFDF9] dark:bg-[#1f1121] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-rose-300/50 dark:border-rose-900/40 text-romantic-wine dark:text-rose-100 selection:bg-rose-200"
          >
            {/* Paper Texture Lines */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#632B45_1px,transparent_1px)] [background-size:16px_16px] rounded-3xl pointer-events-none" />

            {/* Letter Header */}
            <div className="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-900/60 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-300" />
                <span className="font-serif italic text-sm text-romantic-wine/70 dark:text-rose-300/70">
                  {letter.date}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs text-rose-500 hover:text-rose-600 flex items-center space-x-1 font-medium px-3 py-1 rounded-full bg-rose-100/50 dark:bg-rose-950/50 border border-rose-200/40"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Fold Envelope</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Letter Text */}
              <div className="lg:col-span-8">
                {/* Salutation */}
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-romantic text-4xl sm:text-5xl text-rose-600 dark:text-rose-300 mb-6"
                >
                  {letter.salutation}
                </motion.h3>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-romantic-wineDark dark:text-rose-100/90">
                  {letter.paragraphs.map((p, idx) => {
                    const isRevealed = revealedParagraphs >= idx + 1;
                    return (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: isRevealed ? 1 : 0.25,
                          y: isRevealed ? 0 : 5,
                        }}
                        transition={{ duration: 0.4 }}
                        className={`${idx === 0 ? 'first-letter:text-3xl first-letter:font-bold first-letter:text-rose-500' : ''}`}
                      >
                        {p}
                      </motion.p>
                    );
                  })}
                </div>

                {/* Sign-off & Handwritten Signature */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: revealedParagraphs >= letter.paragraphs.length ? 1 : 0.4 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-6 border-t border-rose-200/40 dark:border-rose-900/40 text-right"
                >
                  <p className="font-serif italic text-sm sm:text-base text-romantic-wine/70 dark:text-rose-300/70">
                    {letter.signoff}
                  </p>
                  <p className="font-romantic text-3xl sm:text-4xl text-rose-600 dark:text-rose-300 mt-1">
                    {letter.signature}
                  </p>
                </motion.div>
              </div>

              {/* Keepsake Polaroid Clipped to Letter */}
              <div className="lg:col-span-4 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 3, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="bg-white dark:bg-[#2b1728] p-3 rounded-2xl shadow-xl border border-rose-200/60 dark:border-rose-800/60 max-w-[240px] select-none text-center transform hover:rotate-0 transition-transform duration-300"
                >
                  <div className="polaroid-tape" />
                  <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-rose-50 dark:bg-black/40 mb-2">
                    <img
                      src="/images/shravani/shravani_06.jpeg"
                      alt="Viraj & Shravani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-romantic text-xl text-rose-600 dark:text-rose-300">
                    Forever Cherished ❤️
                  </p>
                  <span className="text-[10px] text-romantic-wine/60 dark:text-rose-300/60 font-sans block">
                    Viraj & Shravani
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
