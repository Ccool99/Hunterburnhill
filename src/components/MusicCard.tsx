import { useState } from 'react';
import { Play, Pause, Heart, Share, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAudio } from '@/hooks/useAudio';
import { useCart } from '@/hooks/useCart';
import { formatPrice, getPersonaColor } from '@/lib/utils';
import type { Track } from '@shared/schema';
const cowboys1 = '/images/cowboys.jpg';
const undertakerImage = '/images/undertaker.jpg';
const saitPerformance2 = '/images/performance.jpg';
const saitPerformanceEdited = '/images/stage.png';
const alleyway = '/images/alleyway.png';
const mountainStream = '/images/mountain.png';
const prairie = '/images/prairie.png';
const erraticPhoto = '/images/erratic-photo.jpg';

interface MusicCardProps {
  track: Track;
  useLandscapeArt?: boolean; // For featured works section
}

export function MusicCard({ track, useLandscapeArt = false }: MusicCardProps) {
  // Handle null to undefined conversion for TypeScript compatibility
  const safeTrack = {
    ...track,
    albumArt: track.albumArt ?? undefined,
    previewUrl: track.previewUrl ?? undefined,
    duration: track.duration ?? undefined,
  };
  const [isLiked, setIsLiked] = useState(false);
  const { isPlaying, currentTrack, togglePlayPause } = useAudio();
  const { addItem } = useCart();
  
  const isCurrentTrack = currentTrack === safeTrack.previewUrl;
  const isCurrentlyPlaying = isCurrentTrack && isPlaying;
  const personaColor = getPersonaColor(track.persona);

  // Use database albumArt field or fallback to persona mapping
  const getAlbumArt = () => {
    // If track has albumArt from database, use it
    if (safeTrack.albumArt && !useLandscapeArt) {
      return safeTrack.albumArt;
    }
    
    if (useLandscapeArt) {
      // Use landscape artwork for featured works section
      switch (track.persona) {
        case 'The Ranger':
          return prairie;
        case 'The Undertaker':
          return alleyway;
        case 'The Miner':
          return mountainStream;
        default:
          return prairie;
      }
    } else {
      // Fallback to persona performance images for music pages
      switch (track.persona) {
        case 'The Ranger':
          return erraticPhoto;
        case 'The Undertaker':
          return undertakerImage;
        case 'The Miner':
          return saitPerformance2;
        default:
          return erraticPhoto;
      }
    }
  };

  const handlePlayPause = () => {
    if (track.previewUrl) {
      togglePlayPause(track.previewUrl);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: `track-${track.id}`,
      type: 'track',
      name: track.title,
      price: parseFloat(track.price),
      image: getAlbumArt(),
      trackId: track.id,
    });
  };

  return (
    <Card className="bg-railway-black/60 border-2 rounded-lg overflow-hidden hover:border-tangerine transition-colors group h-full flex flex-col" style={{ borderColor: '#CD5C5C' }}>
      <div className="relative">
        <img 
          src={getAlbumArt()} 
          alt={`${track.title} album artwork`} 
          className={`w-full h-48 object-cover ${track.title === 'Copper Creek Blues' ? 'object-top' : ''}`}

        />
        <div className="absolute inset-0 bg-gradient-to-t from-railway-black/20 to-transparent opacity-20"></div>
        
        <Button
          onClick={handlePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indian-red/80 hover:bg-tangerine text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {isCurrentlyPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        
        <span className={`absolute top-3 right-3 ${useLandscapeArt ? 'bg-black/70' : `bg-${personaColor}`} text-white px-2 py-1 rounded text-xs`}>
          {track.persona}
        </span>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2" style={{ color: '#E0E0E0' }}>{track.title}</h3>
        <p className="text-railway-grey text-sm mb-4 flex-1">{track.description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-tangerine font-semibold">{formatPrice(track.price)}</span>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className={`transition-colors ${isLiked ? 'text-indian-red' : 'text-railway-grey hover:text-tangerine'}`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-railway-grey hover:text-tangerine transition-colors"
            >
              <Share className="w-4 h-4" />
            </Button>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-indian-red hover:bg-tangerine text-white transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
