import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown, Heart } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const MusicPlayer: React.FC = () => {
  const { isPlaying, togglePlay, volume, setVolume, trackName } = useAudio();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-40 select-none">
      <AnimatePresence>
        {isExpanded ? (
          /* Expanded Player */
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="glass-panel rounded-2xl p-4 shadow-romantic-lg border border-rose-300/60 dark:border-rose-900/60 w-64 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-rose-200/40 dark:border-rose-900/40">
              <div className="flex items-center space-x-1.5 text-xs font-semibold text-rose-500">
                <Music className="w-3.5 h-3.5" />
                <span>Romantic Melody</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-romantic-wine/60 hover:text-romantic-wine dark:text-rose-300/60 p-0.5 rounded-full"
                aria-label="Collapse player"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Track Info */}
            <div className="mb-3">
              <p className="font-serif text-xs font-bold text-romantic-wineDark dark:text-white truncate">
                {trackName}
              </p>
              <span className="text-[10px] text-rose-400 font-sans block">
                {isPlaying ? 'Now Playing • YouTube ▶' : 'Paused • Tap play to listen'}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between space-x-3">
              <button
                onClick={togglePlay}
                className="w-9 h-9 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
              </button>

              {/* Volume Slider */}
              <div className="flex items-center space-x-2 flex-1">
                <button
                  onClick={() => setVolume(volume > 0 ? 0 : 0.6)}
                  className="text-rose-500 hover:text-rose-600"
                  aria-label={volume === 0 ? 'Unmute' : 'Mute'}
                >
                  {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-rose-200 dark:bg-rose-900 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* Minimized Floating Pill */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center space-x-2 px-3 py-2 rounded-full glass-panel border border-rose-300/60 dark:border-rose-900/60 shadow-romantic text-xs font-medium cursor-pointer text-romantic-wine dark:text-rose-200 hover:bg-white/80 transition-all backdrop-blur-md"
            title="Open music player"
          >
            <div className="relative">
              <Music className={`w-4 h-4 text-rose-500 ${isPlaying ? 'animate-bounce' : ''}`} />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              )}
            </div>

            <span className="hidden sm:inline font-serif text-[11px] max-w-[120px] truncate">
              {isPlaying ? 'Playing Melody...' : 'Soft Music'}
            </span>

            {/* Equalizer animation */}
            {isPlaying && (
              <div className="flex items-end space-x-0.5 h-3">
                <span className="w-0.5 h-2 bg-rose-400 animate-pulse" />
                <span className="w-0.5 h-3 bg-rose-500 animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-rose-400 animate-pulse delay-150" />
              </div>
            )}

            <ChevronUp className="w-3 h-3 text-rose-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
