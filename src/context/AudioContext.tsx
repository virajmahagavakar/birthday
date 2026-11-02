import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  volume: number;
  setVolume: (v: number) => void;
  hasInteracted: boolean;
  trackName: string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

// YouTube video ID to use as the music source
const YT_VIDEO_ID = 'vDliUg9gGdA';
const YT_TRACK_NAME = 'Shravani\'s Birthday Playlist 🎵❤️';

// Declare YT global injected by the YouTube IFrame API script
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.6);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load the YouTube IFrame API script once
  useEffect(() => {
    if (document.getElementById('yt-iframe-api')) return;

    const tag = document.createElement('script');
    tag.id = 'yt-iframe-api';
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }, []);

  // Create the hidden YouTube player once the API is ready
  useEffect(() => {
    const createPlayer = () => {
      // Create a hidden div to mount the player into
      if (!containerRef.current) {
        const div = document.createElement('div');
        div.id = 'yt-player-hidden';
        div.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;top:-9999px;left:-9999px;';
        document.body.appendChild(div);
        containerRef.current = div;
      }

      playerRef.current = new window.YT.Player('yt-player-hidden', {
        videoId: YT_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          loop: 1,         // loop the video
          playlist: YT_VIDEO_ID, // needed for loop to work
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(Math.round(volume * 100));
            setPlayerReady(true);
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING = 1
            if (event.data === 1) setIsPlaying(true);
            // YT.PlayerState.PAUSED = 2, ENDED = 0
            if (event.data === 2 || event.data === 0) setIsPlaying(false);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      containerRef.current?.remove();
      containerRef.current = null;
    };
  }, []);

  const setVolume = useCallback((v: number) => {
    setVolumeState(v);
    if (playerRef.current && playerReady) {
      playerRef.current.setVolume(Math.round(v * 100));
    }
  }, [playerReady]);

  const startPlaying = useCallback(() => {
    setHasInteracted(true);
    if (playerRef.current && playerReady) {
      playerRef.current.playVideo();
    }
  }, [playerReady]);

  const stopPlaying = useCallback(() => {
    if (playerRef.current && playerReady) {
      playerRef.current.pauseVideo();
    }
    setIsPlaying(false);
  }, [playerReady]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stopPlaying();
    } else {
      startPlaying();
    }
  }, [isPlaying, startPlaying, stopPlaying]);

  // Track first user interaction
  useEffect(() => {
    const handleFirstClick = () => {
      setHasInteracted(true);
      window.removeEventListener('pointerdown', handleFirstClick);
    };
    window.addEventListener('pointerdown', handleFirstClick);
    return () => window.removeEventListener('pointerdown', handleFirstClick);
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        togglePlay,
        volume,
        setVolume,
        hasInteracted,
        trackName: YT_TRACK_NAME,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
