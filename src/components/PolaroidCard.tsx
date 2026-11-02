import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2 } from 'lucide-react';
import { PhotoItem } from '../data/photos';

interface PolaroidCardProps {
  photo: PhotoItem;
  onOpenLightbox: (photo: PhotoItem) => void;
  className?: string;
}

export const PolaroidCard: React.FC<PolaroidCardProps> = ({
  photo,
  onOpenLightbox,
  className = '',
}) => {
  const tilt = photo.tilt || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        zIndex: 20,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      style={{ rotate: `${tilt}deg` }}
      onClick={() => onOpenLightbox(photo)}
      className={`group relative bg-white dark:bg-[#281525] p-3 sm:p-4 rounded-xl shadow-romantic hover:shadow-romantic-lg transition-all duration-300 cursor-pointer border border-rose-100/60 dark:border-rose-900/40 select-none ${className}`}
    >
      {/* Decorative Washi / Tape on Top */}
      <div className="polaroid-tape opacity-90 group-hover:opacity-100 transition-opacity" />

      {/* Photo Frame Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-rose-50/50 dark:bg-rose-950/30">
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          style={{ objectPosition: photo.objectPosition || 'center' }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover Gradient Overlay & Quick Zoom Icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
          <span className="text-[11px] font-sans text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
            Click to expand
          </span>
          <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Category / Mood Tag */}
        {photo.tag && (
          <span className="absolute top-2.5 left-2.5 text-[10px] font-sans font-medium px-2 py-0.5 rounded-full bg-white/80 dark:bg-black/60 text-romantic-wine dark:text-romantic-pink backdrop-blur-sm border border-white/40 shadow-xs">
            {photo.tag}
          </span>
        )}
      </div>

      {/* Polaroid Caption Area */}
      <div className="pt-3 pb-1 text-center">
        <p className="font-romantic text-xl sm:text-2xl text-romantic-wine dark:text-romantic-pink leading-snug group-hover:text-rose-600 dark:group-hover:text-rose-300 transition-colors">
          "{photo.caption}"
        </p>
        {photo.date && (
          <span className="text-[11px] font-sans text-romantic-wine/60 dark:text-romantic-pink/60 block mt-0.5">
            {photo.date}
          </span>
        )}
      </div>

      {/* Corner Heart Accent */}
      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-300 animate-pulse" />
      </div>
    </motion.div>
  );
};
