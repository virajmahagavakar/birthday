import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles } from 'lucide-react';
import { messagesData } from '../data/messages';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 border-t border-rose-200/50 dark:border-rose-900/40 glass-panel py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Heart Icon Logo */}
        <div className="flex items-center space-x-2 text-rose-500">
          <Sparkles className="w-4 h-4 text-rose-400 animate-spin-slow" />
          <Heart className="w-6 h-6 fill-rose-400 text-rose-500 animate-pulse" />
          <Sparkles className="w-4 h-4 text-rose-400 animate-spin-slow" />
        </div>

        {/* Handwritten Main Signature */}
        <div>
          <h3 className="font-romantic text-3xl sm:text-4xl text-romantic-wine dark:text-romantic-pink">
            {messagesData.home.footerText}
          </h3>
          <p className="text-xs sm:text-sm text-romantic-wine/70 dark:text-romantic-pink/70 font-sans mt-1">
            Every page, every word, and every little detail was crafted to celebrate you.
          </p>
        </div>

        {/* Quick Page Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-romantic-wine/80 dark:text-romantic-pink/80">
          <Link to="/" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            Home
          </Link>
          <span>•</span>
          <Link to="/eyes" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            Through My Eyes
          </Link>
          <span>•</span>
          <Link to="/how-you-are" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            How You Are
          </Link>
          <span>•</span>
          <Link to="/motivation" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            My Motivation
          </Link>
          <span>•</span>
          <Link to="/how-beautiful" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            How Beautiful
          </Link>
          <span>•</span>
          <Link to="/memories" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            Memories
          </Link>
          <span>•</span>
          <Link to="/letter" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            A Letter
          </Link>
          <span>•</span>
          <Link to="/surprise" className="hover:text-rose-600 dark:hover:text-white transition-colors">
            Final Surprise
          </Link>
        </div>

        {/* Bottom Small Signature */}
        <div className="text-[11px] text-romantic-wine/50 dark:text-romantic-pink/50 border-t border-rose-200/30 dark:border-rose-900/30 pt-4 w-full max-w-md">
          A Little World of Shravani • Created by Viraj Mahagavakar with infinite affection ❤️
        </div>
      </div>
    </footer>
  );
};
