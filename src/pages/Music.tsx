import { useQuery } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MusicCard } from '@/components/MusicCard';
import { AudioPlayer } from '@/components/AudioPlayer';
import type { Track } from '@shared/schema';
// Working CDN image URLs
const cowboys1 = 'https://cdn.jsdelivr.net/gh/user/images@main/cowboys.jpg';
const johnLionTroubadour = 'https://cdn.jsdelivr.net/gh/user/images@main/john-lion-logo.png';
const ghostTown = 'https://cdn.jsdelivr.net/gh/user/images@main/ghost-town.png';
const saitPerformance2 = 'https://cdn.jsdelivr.net/gh/user/images@main/stage-performance.png';
const erraticPhoto = 'https://cdn.jsdelivr.net/gh/user/images@main/erratic-photo.png';

export default function Music() {
  const [selectedPersona, setSelectedPersona] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const musicSectionRef = useRef<HTMLDivElement>(null);

  const { data: tracks, isLoading } = useQuery<Track[]>({
    queryKey: [selectedPersona === 'all' ? '/api/tracks' : `/api/tracks?persona=${encodeURIComponent(selectedPersona)}`],
  });

  const personas = ['all', 'The Ranger', 'The Undertaker', 'The Miner'];

  const handlePersonaClick = (persona: string) => {
    setSelectedPersona(persona);
    // Smooth scroll to show the persona filter section and music cards
    setTimeout(() => {
      const yOffset = -100; // Offset to show more content above
      const element = musicSectionRef.current;
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin w-8 h-8 border-4 border-tangerine border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section 
        className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${ghostTown})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8 flex flex-col justify-center h-full">
          <div className="mb-6 sm:mb-8">
            <img 
              src={johnLionTroubadour} 
              alt="John Lion Joseph Troubadour" 
              className="w-[300px] h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] drop-shadow-2xl max-w-[85vw] mx-auto"
              style={{ filter: 'contrast(1.3) saturate(1.2) brightness(1.05) drop-shadow(0 0 1px rgba(0,0,0,0.4))' }}
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-outfit" style={{ color: '#E0E0E0' }}>
            Explore tales from the frontier through three distinct musical personas
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-black via-[#2C2C2C] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Persona Filter */}
          <div ref={musicSectionRef} className="text-center mb-16">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-8" style={{ color: '#DAA520' }}>
              CHOOSE YOUR JOURNEY
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {personas.map((persona) => (
                <Button
                  key={persona}
                  onClick={() => handlePersonaClick(persona)}
                  className={`px-6 py-3 rounded-lg font-outfit font-semibold transition-colors ${
                    selectedPersona === persona
                      ? 'text-white'
                      : 'bg-transparent text-white border hover:text-white'
                  }`}
                  style={{
                    backgroundColor: selectedPersona === persona ? '#CD5C5C' : 'transparent',
                    borderColor: selectedPersona === persona ? '#CD5C5C' : '#808080',
                  }}
                >
                  {persona === 'all' ? 'All Tracks' : persona}
                </Button>
              ))}
            </div>
          </div>

          {/* Current Playing Track */}
          {selectedTrack && (
            <div className="mb-12 max-w-md mx-auto">
              <AudioPlayer track={{
                ...selectedTrack,
                albumArt: selectedTrack.albumArt ?? undefined,
                previewUrl: selectedTrack.previewUrl ?? undefined,
                duration: selectedTrack.duration ?? undefined
              }} />
            </div>
          )}

          {/* Music Grid */}
          <div className="mb-16">
            <h3 className="font-space text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#DAA520' }}>
              {selectedPersona === 'all' ? 'ALL MUSICAL TALES' : `${selectedPersona.toUpperCase()} CHRONICLES`}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tracks && tracks.length > 0 ? (
                tracks.map((track) => (
                  <div 
                    key={track.id} 
                    onClick={() => setSelectedTrack(track)}
                    className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  >
                    <MusicCard track={track} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-lg font-outfit" style={{ color: '#E0E0E0' }}>Loading musical tales...</p>
                </div>
              )}
            </div>
            

          </div>

          {(!tracks || tracks.length === 0) && (
            <div className="text-center py-12">
              <div className="bg-black/30 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-lg mb-4" style={{ color: '#E0E0E0' }}>No tracks found for this selection.</p>
                <p className="text-sm" style={{ color: '#B0B0B0' }}>Try selecting a different persona or check back later for new releases.</p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Direct Footer */}
      <footer className="py-12 w-full" style={{ backgroundColor: '#000000', borderTop: '1px solid #404040' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-space text-lg" style={{ color: '#FFA500' }}>JOHN LION JOSEPH</span>
              </div>
              <p className="text-sm mb-4 font-outfit" style={{ color: '#E0E0E0' }}>
                Country rock space fusion for that part of humanity who like to move and desire adventure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Music</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Ranger</a></li>
                <li><a href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Undertaker</a></li>
                <li><a href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Miner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Store</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/store" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Apparel</a></li>
                <li><a href="/store" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Accessories</a></li>
                <li><a href="/tours" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Tour Dates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>About</a></li>
                <li><a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid #404040' }}>
            <p className="text-sm mb-4 md:mb-0 font-outfit" style={{ color: '#E0E0E0' }}>
              © 2024 John Lion Joseph. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
