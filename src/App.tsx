import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AudioProvider } from './context/AudioContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingHearts } from './components/FloatingHearts';
import { CursorHearts } from './components/CursorHearts';
import { MusicPlayer } from './components/MusicPlayer';
import { SecretMessage } from './components/SecretMessage';
import { PageTransition } from './components/PageTransition';

// Pages
import { Home } from './pages/Home';
import { LookThroughMyEyes } from './pages/LookThroughMyEyes';
import { HowYouAre } from './pages/HowYouAre';
import { Motivation } from './pages/Motivation';
import { HowBeautifulAreYou } from './pages/HowBeautifulAreYou';
import { Memories } from './pages/Memories';
import { BirthdayLetter } from './pages/BirthdayLetter';
import { FinalSurprise } from './pages/FinalSurprise';
import { NotFound } from './pages/NotFound';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-main)] transition-colors duration-500 overflow-x-hidden">
      {/* Floating Ambient Hearts & Petals */}
      <FloatingHearts count={18} />

      {/* Desktop Mouse Trail of Hearts */}
      <CursorHearts />

      {/* Persistent Glassmorphism Navigation */}
      <Navbar />

      {/* Main Content Router with Transitions */}
      <main className="flex-grow z-10">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/eyes" element={<LookThroughMyEyes />} />
            <Route path="/how-you-are" element={<HowYouAre />} />
            <Route path="/motivation" element={<Motivation />} />
            <Route path="/how-beautiful" element={<HowBeautifulAreYou />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/letter" element={<BirthdayLetter />} />
            <Route path="/surprise" element={<FinalSurprise />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Hidden Secret Heart Message */}
      <SecretMessage />

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AudioProvider>
    </ThemeProvider>
  );
}

export default App;
