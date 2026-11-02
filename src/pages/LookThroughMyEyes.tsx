import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Eye, Camera, Maximize2 } from 'lucide-react';
import { messagesData } from '../data/messages';
import { photosData, PhotoItem } from '../data/photos';
import { PolaroidCard } from '../components/PolaroidCard';
import { PhotoLightbox } from '../components/PhotoLightbox';

export const LookThroughMyEyes: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const eyesData = messagesData.eyes;
  const gallery = photosData.gallery;

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Lightbox Modal */}
      <PhotoLightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill border border-rose-300/50 shadow-romantic mb-4 text-xs font-semibold text-rose-500 uppercase tracking-widest"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>{eyesData.title}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-romantic-wineDark dark:text-romantic-pink tracking-tight mb-4"
        >
          {eyesData.heroHeading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-romantic text-2xl sm:text-3xl text-rose-600 dark:text-rose-300"
        >
          "{eyesData.subtitle}"
        </motion.p>
      </div>

      {/* FEATURED CINEMATIC SPOTLIGHT: Large Portrait Showcase */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-panel rounded-3xl p-4 sm:p-8 border border-rose-200/70 dark:border-rose-900/40 shadow-romantic-lg overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Spotlight Image with Zoom & Lightbox */}
            <div
              onClick={() => setSelectedPhoto(gallery[1])}
              className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-rose-50 dark:bg-rose-950/40 cursor-pointer shadow-lg"
            >
              <img
                src={gallery[1].src}
                alt={gallery[1].alt}
                style={{ objectPosition: gallery[1].objectPosition || 'center' }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                <span className="text-xs font-sans text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                  Click to view full portrait
                </span>
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Spotlight Romantic Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5 text-left">
              <span className="text-xs uppercase tracking-widest font-semibold text-rose-500 bg-rose-100/60 dark:bg-rose-950/60 px-3 py-1 rounded-full w-max border border-rose-300/40">
                A Glimpse Through My Lens
              </span>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-romantic-wineDark dark:text-white leading-snug">
                {gallery[1].caption}
              </h2>

              <p className="font-sans text-sm sm:text-base text-romantic-wine/80 dark:text-rose-100/90 leading-relaxed">
                {gallery[1].subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-white/50 dark:bg-black/30 border border-rose-200/50 dark:border-rose-900/50">
                <p className="font-romantic text-xl text-rose-600 dark:text-rose-300">
                  "You never have to try to look graceful or radiant—it's simply who you are, in every single breath and candid moment."
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-romantic-wine/60 dark:text-rose-300/60 pt-2 font-sans">
                <Camera className="w-4 h-4 text-rose-400" />
                <span>Captured with love & genuine admiration</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PINTEREST SCRAPBOOK MASONRY GALLERY */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <span className="font-romantic text-2xl text-rose-500">
            A Scrapbook of Special Moments
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wineDark dark:text-white mt-1">
            Every Angle Tells a Beautiful Story
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((photo) => (
            <PolaroidCard
              key={photo.id}
              photo={photo}
              onOpenLightbox={(p) => setSelectedPhoto(p)}
            />
          ))}
        </div>
      </div>

      {/* CIRCULAR & OVERLAPPING PHOTO ARTWORK SECTION */}
      <div className="mb-20 glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto border border-rose-200/60 dark:border-rose-900/50 shadow-romantic">
        <div className="flex items-center justify-center -space-x-4 mb-6">
          <div
            onClick={() => setSelectedPhoto(gallery[0])}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer hover:scale-110 hover:z-20 transition-all duration-300"
          >
            <img
              src={gallery[0].src}
              alt={gallery[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={() => setSelectedPhoto(gallery[2])}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-rose-300 shadow-xl overflow-hidden cursor-pointer hover:scale-110 hover:z-20 transition-all duration-300 z-10"
          >
            <img
              src={gallery[2].src}
              alt={gallery[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            onClick={() => setSelectedPhoto(gallery[4])}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg overflow-hidden cursor-pointer hover:scale-110 hover:z-20 transition-all duration-300"
          >
            <img
              src={gallery[4].src}
              alt={gallery[4].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h4 className="font-serif text-xl sm:text-2xl font-bold text-romantic-wineDark dark:text-white mb-2">
          "If happiness had a photograph, it would look something like this."
        </h4>
        <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-rose-200/80 max-w-lg mx-auto font-sans">
          Click any portrait above or throughout the scrapbook to experience it in full clarity.
        </p>
      </div>

      {/* BOTTOM SECTION NAVIGATION */}
      <div className="text-center max-w-2xl mx-auto pt-6">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wineDark dark:text-romantic-pink mb-3">
          {eyesData.bottomHeading}
        </h3>
        <p className="text-sm sm:text-base text-romantic-wine/80 dark:text-rose-100 font-sans leading-relaxed mb-8">
          {eyesData.bottomText}
        </p>

        <Link
          to="/how-you-are"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all"
        >
          <span>{eyesData.btnNext}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
