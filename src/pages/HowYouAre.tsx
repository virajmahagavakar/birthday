import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  Smile, 
  HeartHandshake, 
  Zap, 
  Compass, 
  Crown, 
  ArrowRight,
  Info,
  Maximize2
} from 'lucide-react';
import { messagesData, HowYouAreCard } from '../data/messages';
import { photosData, PhotoItem } from '../data/photos';
import { PhotoLightbox } from '../components/PhotoLightbox';

export const HowYouAre: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoItem | null>(null);
  const data = messagesData.howYouAre;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smile':
        return <Smile className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Crown':
        return <Crown className="w-6 h-6" />;
      default:
        return <Heart className="w-6 h-6" />;
    }
  };

  const getTraitPhoto = (cardId: string) => {
    switch (cardId) {
      case 'smile':
        return photosData.traitPhotos.smile;
      case 'kindness':
        return photosData.traitPhotos.kindness;
      case 'personality':
        return photosData.traitPhotos.personality;
      case 'energy':
        return photosData.traitPhotos.energy;
      case 'dreams':
        return photosData.traitPhotos.dreams;
      case 'simply-you':
        return photosData.traitPhotos.simplyYou;
      default:
        return photosData.traitPhotos.smile;
    }
  };

  const toggleCard = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Lightbox */}
      <PhotoLightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
      />

      {/* Header */}
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

      {/* Six Interactive 3D Reveal Cards with Real Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {data.cards.map((card, index) => {
          const isRevealed = activeCardId === card.id;
          const photoSrc = getTraitPhoto(card.id);

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => toggleCard(card.id)}
              className={`glass-panel rounded-3xl p-5 sm:p-6 border cursor-pointer relative overflow-hidden transition-all duration-300 select-none flex flex-col justify-between ${
                isRevealed
                  ? 'border-rose-400 dark:border-rose-600 shadow-glow-pink bg-white/95 dark:bg-[#281326]'
                  : 'border-rose-200/60 dark:border-rose-900/40 shadow-romantic hover:shadow-romantic-lg'
              }`}
            >
              <div>
                {/* Photo Header Preview */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-rose-50 dark:bg-black/40 group">
                  <img
                    src={photoSrc}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-between p-3">
                    <span className="font-serif text-white font-bold text-lg drop-shadow-sm">
                      {card.title}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxPhoto({
                          id: card.id,
                          src: photoSrc,
                          alt: card.title,
                          caption: card.title,
                          subtitle: card.description,
                        });
                      }}
                      className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
                      title="View Photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Number and Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-xl font-bold text-rose-400 dark:text-rose-300/80">
                    {card.number}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isRevealed
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-rose-100/70 dark:bg-rose-900/50 text-rose-500 dark:text-rose-300'
                    }`}
                  >
                    {getIcon(card.iconName)}
                  </div>
                </div>

                {/* Main Description */}
                <p className="font-sans text-sm text-romantic-wine/80 dark:text-rose-100/80 leading-relaxed mb-4">
                  "{card.description}"
                </p>

                {/* Revealed Detailed Personal Note */}
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pt-3 border-t border-rose-200/50 dark:border-rose-800/50"
                    >
                      <div className="p-3.5 rounded-2xl bg-rose-50/90 dark:bg-black/50 text-xs sm:text-sm text-romantic-wineDark dark:text-rose-100 font-sans leading-relaxed border border-rose-200/40">
                        <p className="italic">Viraj's Note: {card.revealedMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Hint */}
              <div className="mt-4 flex items-center justify-between text-xs text-rose-500/80 pt-2 border-t border-rose-100/50 dark:border-rose-900/30">
                <span className="font-medium">
                  {isRevealed ? 'Tap to close' : 'Tap to read Viraj\'s note'}
                </span>
                <Info className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-rose-200/60 dark:border-rose-900/40 shadow-romantic">
        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-romantic-wineDark dark:text-romantic-pink mb-3">
          {data.bottomHeading}
        </h3>
        <p className="text-sm sm:text-base text-romantic-wine/80 dark:text-rose-100 font-sans leading-relaxed mb-8">
          {data.bottomText}
        </p>

        <Link
          to="/motivation"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all"
        >
          <span>{data.btnNext}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
