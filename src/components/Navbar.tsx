import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Menu, 
  X, 
  Music, 
  Volume2, 
  VolumeX, 
  Palette, 
  Sparkles,
  ChevronDown 
} from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { useAudio } from '../context/AudioContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Through My Eyes', path: '/eyes' },
  { name: 'How You Are', path: '/how-you-are' },
  { name: 'My Motivation', path: '/motivation' },
  { name: 'How Beautiful', path: '/how-beautiful' },
  { name: 'Memories', path: '/memories' },
  { name: 'A Letter', path: '/letter' },
  { name: 'Final Surprise 🎁', path: '/surprise' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { isPlaying, togglePlay } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setThemeMenuOpen(false);
  }, [location.pathname]);

  const themes: { id: ThemeMode; label: string; icon: string; dotClass: string }[] = [
    { id: 'pink', label: 'Romantic Pink', icon: '🌸', dotClass: 'bg-[#F8BBD0]' },
    { id: 'lavender', label: 'Lavender Dreams', icon: '💜', dotClass: 'bg-[#D8C4F1]' },
    { id: 'dark', label: 'Dark Romantic', icon: '🌙', dotClass: 'bg-[#241222]' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled || location.pathname !== '/'
          ? 'glass-panel py-3 shadow-sm border-b border-rose-200/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <Link
            to="/"
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Home"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-romantic-wine dark:text-romantic-pink"
            >
              <Heart className="w-6 h-6 fill-rose-300 text-rose-500 animate-pulse" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-romantic-wine dark:text-romantic-pink">
                Shravani's World
              </span>
              <span className="font-romantic text-xs text-rose-400 dark:text-rose-300 -mt-1 tracking-widest">
                Happy Birthday
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-romantic-wineDark dark:text-white font-semibold'
                      : 'text-romantic-wine/80 dark:text-romantic-pink/80 hover:text-romantic-wineDark dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-romantic-pink/40 dark:bg-rose-900/50 rounded-full -z-10 border border-rose-300/50 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Actions: Audio & Theme */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Music Player Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              title={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                isPlaying
                  ? 'bg-rose-400/20 text-rose-700 dark:text-rose-300 border border-rose-300 shadow-sm'
                  : 'bg-white/40 dark:bg-rose-950/40 text-romantic-wine/70 dark:text-romantic-pink/70 border border-transparent hover:border-rose-300/40'
              }`}
            >
              <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-rose-500' : ''}`} />
              <span className="hidden sm:inline">
                {isPlaying ? 'Music On' : 'Music Off'}
              </span>
              {/* Audio waves animation */}
              {isPlaying && (
                <span className="flex space-x-0.5 items-end h-3 ml-1">
                  <span className="w-0.5 h-2 bg-rose-400 animate-pulse" />
                  <span className="w-0.5 h-3 bg-rose-500 animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-rose-400 animate-pulse delay-150" />
                </span>
              )}
            </motion.button>

            {/* Theme Selector Dropdown */}
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full text-xs font-medium bg-white/40 dark:bg-rose-950/40 border border-rose-200/50 dark:border-rose-800/40 text-romantic-wine dark:text-romantic-pink hover:bg-white/60 transition-colors"
                title="Change romantic theme"
              >
                <Palette className="w-3.5 h-3.5 text-rose-500" />
                <span className="hidden md:inline capitalize">{theme}</span>
                <ChevronDown className="w-3 h-3 text-rose-400" />
              </motion.button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel p-2 shadow-xl border border-rose-200/60 dark:border-rose-900/60 z-50"
                  >
                    <div className="text-[11px] font-semibold text-romantic-wine/60 dark:text-romantic-pink/60 px-3 py-1 uppercase tracking-wider">
                      Select Theme
                    </div>
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          theme === t.id
                            ? 'bg-rose-200/60 dark:bg-rose-900/60 text-romantic-wineDark dark:text-white font-semibold'
                            : 'hover:bg-white/40 dark:hover:bg-rose-900/20 text-romantic-wine dark:text-romantic-pink'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{t.icon}</span>
                          <span>{t.label}</span>
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full border border-white/50 ${t.dotClass}`} />
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="xl:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full glass-pill text-romantic-wine dark:text-romantic-pink hover:bg-white/70 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass-panel border-t border-rose-200/40 overflow-hidden px-4 pt-3 pb-6 space-y-1 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-romantic-pink/40 dark:bg-rose-900/60 text-romantic-wineDark dark:text-white font-semibold border border-rose-300/40 shadow-sm'
                        : 'text-romantic-wine/80 dark:text-romantic-pink/80 hover:bg-white/40 dark:hover:bg-rose-950/40'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-rose-500" />}
                  </Link>
                );
              })}
            </div>
            
            <div className="pt-3 border-t border-rose-200/30 text-center text-xs text-romantic-wine/60 dark:text-romantic-pink/60 font-romantic tracking-widest">
              A Little World of Shravani • With Love by Viraj ❤️
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
