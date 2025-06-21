import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getPersonaColor, getPersonaGradient } from '@/lib/utils';

interface PersonaCardProps {
  persona: {
    name: string;
    title: string;
    description: string;
    image: string;
    tracks: string[];
  };
}

export function PersonaCard({ persona }: PersonaCardProps) {
  const color = getPersonaColor(persona.name);
  const gradient = getPersonaGradient(persona.name);

  return (
    <Card className={`bg-gradient-to-b ${gradient} border border-${color}/30 rounded-lg overflow-hidden`}>
      <div className="relative h-80">
        <img 
          src={persona.image} 
          alt={`${persona.name} persona`} 
          className={`w-full h-full object-cover ${persona.name === 'The Miner' ? 'object-[center_20%]' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-railway-black via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className={`bg-${color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {persona.name.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`font-bebas text-2xl text-${color} mb-3`}>{persona.title}</h3>
        <p className="text-railway-grey mb-4">{persona.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-white mb-2">Featured Tracks:</h4>
          <ul className="text-sm text-railway-grey space-y-1">
            {persona.tracks.map((track, index) => (
              <li key={index}>• {track}</li>
            ))}
          </ul>
        </div>
        
        <Button className={`w-full bg-${color} hover:bg-tangerine text-white py-2 rounded-lg transition-colors`}>
          Explore {persona.name}'s Music
        </Button>
      </div>
    </Card>
  );
}
