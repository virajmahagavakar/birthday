import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart } from 'lucide-react';
import { PhotoItem } from '../data/photos';

interface PhotoLightboxProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (photo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Photo Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-neutral-900/60 max-h-[75vh] flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ objectPosition: photo.objectPosition || 'center' }}
              className="max-h-[72vh] max-w-full object-contain rounded-xl select-none"
            />
          </div>

          {/* Caption Card */}
          <div className="mt-4 w-full max-w-lg glass-panel rounded-2xl p-4 text-center border border-white/20 text-white shadow-xl">
            <div className="flex items-center justify-center space-x-1.5 text-rose-300 font-romantic text-sm mb-1">
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              <span>{photo.tag || 'Cherished Moment'}</span>
            </div>
            <h4 className="font-serif text-lg font-semibold text-white drop-shadow-sm">
              {photo.caption}
            </h4>
            {photo.subtitle && (
              <p className="text-xs text-rose-200/90 font-sans mt-1">
                {photo.subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
