import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useAudio } from '@/hooks/useAudio';
import { formatDuration } from '@/lib/utils';

interface AudioPlayerProps {
  track?: {
    id: number;
    title: string;
    artist: string;
    albumArt?: string;
    previewUrl?: string;
    duration?: number;
  };
  compact?: boolean;
}

export function AudioPlayer({ track, compact = false }: AudioPlayerProps) {
  const { isPlaying, currentTime, duration, togglePlayPause, seek } = useAudio();

  const handlePlayPause = () => {
    if (track?.previewUrl) {
      togglePlayPause(track.previewUrl);
    }
  };

  const handleSeek = (value: number[]) => {
    seek(value[0]);
  };

  if (!track) {
    return null;
  }

  return (
    <div className={`bg-railway-black/80 backdrop-blur-sm border border-indian-red rounded-lg ${
      compact ? 'p-4' : 'p-6'
    }`}>
      {!compact && (
        <div className="flex items-center space-x-4 mb-4">
          <div className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-tangerine to-burnt-orange rounded-lg flex items-center justify-center overflow-hidden`}>
            {track.albumArt ? (
              <img src={track.albumArt} alt={track.title} className="w-full h-full object-cover" />
            ) : (
              <Volume2 className="text-railway-black text-xl" />
            )}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-tangerine">{track.title}</h3>
            <p className="text-railway-grey text-sm">{track.artist}</p>
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-center space-x-4 mb-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-indian-red hover:text-tangerine transition-colors"
        >
          <SkipBack className="w-4 h-4" />
        </Button>
        
        <Button
          onClick={handlePlayPause}
          className="bg-indian-red hover:bg-tangerine text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="text-indian-red hover:text-tangerine transition-colors"
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>
      
      <div>
        <Slider
          value={[currentTime]}
          max={duration || track.duration || 100}
          step={1}
          onValueChange={handleSeek}
          className="w-full mb-2"
        />
        <div className="flex justify-between text-xs text-railway-grey">
          <span>{formatDuration(Math.floor(currentTime))}</span>
          <span>{formatDuration(track.duration || 0)}</span>
        </div>
      </div>
    </div>
  );
}
