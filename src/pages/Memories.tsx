import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Film, 
  Calendar, 
  MapPin, 
  Maximize2,
  Video,
  Smile,
  Users,
  Crown,
  Camera
} from 'lucide-react';
import { memoriesData, MemoryItem } from '../data/memories';
import { PhotoLightbox } from '../components/PhotoLightbox';
import { PhotoItem, photosData } from '../data/photos';

export const Memories: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showVideo, setShowVideo] = useState(false);
  const data = memoriesData;

  const categories = [
    { id: 'all', label: 'All Photos (37)', icon: Camera },
    { id: 'smiles', label: 'Smiles & Joy', icon: Smile },
    { id: 'together', label: 'Together Moments', icon: Users },
    { id: 'elegance', label: 'Elegance & Grace', icon: Crown },
    { id: 'candid', label: 'Candid & Natural', icon: Sparkles },
    { id: 'memories', label: 'Cherished Memories', icon: Heart },
  ];

  const filteredMemories = useMemo(() => {
    if (activeCategory === 'all') return data.memories;
    return data.memories.filter((m) => m.category === activeCategory);
  }, [activeCategory, data.memories]);

  const handleOpenPhoto = (mem: MemoryItem) => {
    setSelectedPhoto({
      id: mem.id,
      src: mem.image,
      alt: mem.title,
      caption: mem.title,
      subtitle: mem.caption,
      tag: mem.sticker,
      date: mem.date,
      note: mem.personalNote,
    });
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Lightbox */}
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
          <Film className="w-3.5 h-3.5" />
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

      {/* HORIZONTAL FILM-STRIP GALLERY (15 Highlights) */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center space-x-2 text-rose-500">
            <Film className="w-5 h-5" />
            <span className="font-serif text-lg font-bold text-romantic-wineDark dark:text-white">
              Cinematic Reel
            </span>
          </div>
          <span className="text-xs text-romantic-wine/60 dark:text-rose-300/60 font-sans">
            Scroll sideways to explore highlights →
          </span>
        </div>

        {/* Film Strip Container */}
        <div className="relative rounded-3xl bg-neutral-900 p-4 sm:p-6 shadow-2xl border-4 border-neutral-800 overflow-x-auto scrollbar-none flex space-x-5 items-center">
          {/* Top Film Sprocket Holes */}
          <div className="absolute top-2 left-0 right-0 flex justify-between px-3 pointer-events-none opacity-40">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2.5 h-3 rounded-xs bg-white/70" />
            ))}
          </div>

          {data.filmStrip.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, y: -4 }}
              onClick={() => {
                setSelectedPhoto({
                  id: item.id,
                  src: item.image,
                  alt: item.title,
                  caption: item.title,
                  date: item.date,
                });
              }}
              className="flex-shrink-0 w-56 sm:w-64 bg-neutral-800/90 rounded-xl p-2.5 border border-white/10 cursor-pointer shadow-lg group select-none"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-black mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="px-1">
                <span className="text-[10px] text-amber-300 font-mono tracking-wider">
                  #{idx + 1} • {item.date}
                </span>
                <h5 className="font-serif text-xs font-semibold text-white truncate">
                  {item.title}
                </h5>
              </div>
            </motion.div>
          ))}

          {/* Bottom Film Sprocket Holes */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-3 pointer-events-none opacity-40">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2.5 h-3 rounded-xs bg-white/70" />
            ))}
          </div>
        </div>
      </div>

      {/* OPTIONAL MEMORY VIDEO PLAYER */}
      {photosData.video && (
        <div className="mb-20 glass-panel rounded-3xl p-6 sm:p-10 border border-rose-200/60 dark:border-rose-900/40 text-center shadow-romantic max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-rose-500 mb-3">
            <Video className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-widest font-sans">
              Special Video Memory
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-romantic-wineDark dark:text-white mb-2">
            A Live Glimpse of Joy 🎥
          </h3>
          <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-rose-200/70 font-sans mb-6">
            A cherished moving snapshot from Viraj's camera reel.
          </p>

          <div className="relative max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-rose-300/50">
            <video
              src={photosData.video}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ALL 37 PHOTOS: INTERACTIVE SCRAPBOOK ALBUM */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <span className="font-romantic text-2xl text-rose-500">
            {data.sectionSubtitle}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-romantic-wineDark dark:text-white mt-1">
            {data.sectionTitle}
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-md scale-105'
                    : 'glass-pill text-romantic-wine/80 dark:text-rose-200 hover:bg-white/70'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid of Photos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredMemories.map((mem) => (
              <motion.div
                key={mem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, rotate: 0 }}
                style={{ rotate: `${mem.tilt}deg` }}
                className="bg-white dark:bg-[#281525] rounded-3xl p-5 shadow-romantic hover:shadow-romantic-lg border border-rose-200/60 dark:border-rose-900/40 relative overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                {/* Scrapbook Tape */}
                <div className="polaroid-tape" />

                <div>
                  {/* Photo Frame */}
                  <div
                    onClick={() => handleOpenPhoto(mem)}
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-rose-50 dark:bg-rose-950/40 mb-4 cursor-pointer group shadow-inner"
                  >
                    <img
                      src={mem.image}
                      alt={mem.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Sticker Badge */}
                    {mem.sticker && (
                      <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-black/80 text-rose-600 dark:text-rose-300 backdrop-blur-sm border border-rose-200/50 shadow-sm">
                        {mem.sticker}
                      </span>
                    )}

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-romantic-wine/60 dark:text-rose-300/60 font-sans">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-rose-400" />
                        <span>{mem.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        <span>{mem.location}</span>
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-romantic-wineDark dark:text-white truncate">
                      {mem.title}
                    </h4>

                    <p className="font-romantic text-lg text-rose-600 dark:text-rose-300 leading-snug">
                      "{mem.caption}"
                    </p>
                  </div>
                </div>

                {mem.personalNote && (
                  <div className="mt-3 pt-2 border-t border-rose-100 dark:border-rose-900/40 text-[11px] text-romantic-wine/75 dark:text-rose-200/80 italic font-sans">
                    {mem.personalNote}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* BOTTOM MESSAGE & NAVIGATION */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-rose-200/60 dark:border-rose-900/40 shadow-romantic">
        <div className="flex justify-center mb-3 text-rose-500">
          <Heart className="w-6 h-6 fill-current animate-pulse" />
        </div>

        <h3 className="font-serif text-2xl sm:text-4xl font-bold text-romantic-wineDark dark:text-romantic-pink mb-4">
          "{data.bottomMessage}"
        </h3>

        <Link
          to="/letter"
          className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-semibold text-base shadow-romantic-lg hover:shadow-glow-pink hover:scale-105 active:scale-95 transition-all mt-4"
        >
          <span>{data.btnNext}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
