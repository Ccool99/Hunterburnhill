import { useState, useRef, useCallback, useEffect } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = useCallback((src: string) => {
    if (audioRef.current) {
      if (currentTrack !== src) {
        audioRef.current.src = src;
        setCurrentTrack(src);
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayPause = useCallback((src?: string) => {
    if (src && currentTrack !== src) {
      play(src);
    } else if (isPlaying) {
      pause();
    } else if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying, currentTrack, play, pause]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleDurationChange = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    currentTrack,
    play,
    pause,
    togglePlayPause,
    seek,
  };
}
