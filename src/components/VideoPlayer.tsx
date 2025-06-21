import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
  description?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  lazy?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster, 
  title, 
  description, 
  autoplay = false, 
  muted = true,
  controls = true,
  lazy = true 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isLoaded, setIsLoaded] = useState(!lazy);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    const videoElement = videoRef.current;
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [lazy]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => {
        console.error('Error playing video:', err);
        setError('Unable to play video. Please try again.');
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen().catch(err => {
        console.error('Error entering fullscreen:', err);
      });
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleError = () => setError('Failed to load video. Please check your connection.');

  return (
    <Card className="bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-2 overflow-hidden" style={{ borderColor: '#CD5C5C' }}>
      <div className="relative aspect-video overflow-hidden group">
        {isLoaded ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={poster}
            muted={isMuted}
            playsInline
            preload="metadata"
            onPlay={handlePlay}
            onPause={handlePause}
            onError={handleError}
            style={{ backgroundColor: '#000' }}
          >
            <source src={src} type="video/mp4" />
            <p style={{ color: '#E0E0E0' }}>
              Your browser does not support the video tag. 
              <a href={src} style={{ color: '#FFA500' }}> Download the video here</a>.
            </p>
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}
        
        {/* Error State */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="text-center p-4">
              <p className="text-red-400 mb-2">{error}</p>
              <button 
                onClick={() => {setError(null); setIsLoaded(true);}}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        {controls && isLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
                aria-label="Fullscreen"
              >
                <Maximize className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        )}
        
        {/* Loading State for Lazy Load */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <Play className="w-16 h-16" style={{ color: '#FFA500' }} />
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-outfit text-lg font-semibold mb-2" style={{ color: '#E0E0E0' }}>
          {title}
        </h3>
        {description && (
          <p className="font-outfit text-sm" style={{ color: '#B0B0B0' }}>
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}

// Alternative embedded player for hosted services
interface EmbeddedVideoPlayerProps {
  embedUrl: string;
  title: string;
  description?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export function EmbeddedVideoPlayer({ 
  embedUrl, 
  title, 
  description, 
  aspectRatio = 'video' 
}: EmbeddedVideoPlayerProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]'
  };

  return (
    <Card className="bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-2 overflow-hidden" style={{ borderColor: '#CD5C5C' }}>
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden`}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          style={{ 
            minHeight: '400px',
            backgroundColor: '#000',
            border: 'none'
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-outfit text-lg font-semibold mb-2" style={{ color: '#E0E0E0' }}>
          {title}
        </h3>
        {description && (
          <p className="font-outfit text-sm" style={{ color: '#B0B0B0' }}>
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}