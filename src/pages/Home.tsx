import { useQuery } from '@tanstack/react-query';
import { Play, ShoppingCart } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { AudioPlayer } from '@/components/AudioPlayer';
import { MusicCard } from '@/components/MusicCard';
import { PersonaCard } from '@/components/PersonaCard';
import { ProductCard } from '@/components/ProductCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Card } from '@/components/ui/card';
import { EmailSignup } from '@/components/EmailSignup';
import type { Track, Product, Testimonial } from '@shared/schema';
// Real image URLs - hosted on CDN
const erraticPhoto = 'https://i.postimg.cc/ZKvFhZmq/erratic-photo.png';
const undertakerImage = 'https://i.postimg.cc/J0mGcWDf/undertaker-zoomed.png';
const saitPerformanceEdited = 'https://i.postimg.cc/bNgGQVTK/sait-performance.png';
const johnLionTroubadour = 'https://i.postimg.cc/qqvL7mGZ/john-lion-joseph-logo.png';
const cowboysImage = 'https://i.postimg.cc/FKbdHfKb/cowboys.jpg';
const performanceImage = 'https://i.postimg.cc/bNgGQVTK/sait-performance.png';
const theMinerPhoto = 'https://i.postimg.cc/8CMWfVXn/the-miner.png';

export default function Home() {
  const { data: featuredTracks } = useQuery<Track[]>({
    queryKey: ['/api/tracks?featured=true'],
    refetchOnMount: true,
  });

  const { data: featuredProducts } = useQuery<Product[]>({
    queryKey: ['/api/products?featured=true'],
  });

  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials?featured=true'],
  });

  // EPK-style testimonials for homepage
  const vendorTestimonials = [
    {
      quote: "Your talent and dedication brought a magical atmosphere to the event, and we truly appreciate your time and effort. Your performance was a significant highlight, and those who attended were deeply moved and entertained.",
      author: "Jennifer S. James",
      position: "Compassionate Hearts, PM Students' Group, SAIT College"
    },
    {
      quote: "John brought our entire audience to their feet — unforgettable.",
      author: "Blue Prairie Festival Organizer",
      position: "Festival Director"
    },
    {
      quote: "His emotional range and stage presence left us breathless.",
      author: "Echo Ridge Community Theater",
      position: "Program Director"
    }
  ];

  // Performance videos for homepage
  const performanceVideos = [
    {
      title: "Live at Heritage Hall",
      thumbnail: erraticPhoto
    },
    {
      title: "Acoustic Set - The Miner",
      thumbnail: undertakerImage
    },
    {
      title: "Full Band Performance",
      thumbnail: saitPerformanceEdited
    }
  ];

  const personas = [
    {
      name: "The Ranger",
      title: "Frontier Spirit",
      description: "Tales from the open range and frontier life, capturing the spirit of adventure and the vastness of untamed landscapes.",
      image: erraticPhoto,
      tracks: ["Prairie Thunder", "Frontier Tales", "Open Range"]
    },
    {
      name: "The Undertaker",
      title: "Keeper of Final Tales",
      description: "In the shadows of frontier towns, The Undertaker weaves haunting melodies about life, death, and the stories that bind us all.",
      image: undertakerImage,
      tracks: ["Midnight Requiem", "Gravedigger's Lament", "Last Call at Sunset"]
    },
    {
      name: "The Miner",
      title: "Deep Mountain Tales",
      description: "Stories from the depths of mountain mines, capturing the grit, determination, and brotherhood of those who work beneath the earth.",
      image: theMinerPhoto,
      tracks: ["Copper Creek Blues", "Miner's Lament", "Underground"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0 bg-gradient-to-b opacity-10" style={{ background: 'linear-gradient(to bottom, #000080, #954535, #000000)' }}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" 
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-20 pb-8 flex flex-col justify-center h-full">
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img 
              src={johnLionTroubadour} 
              alt="John Lion Joseph Troubadour" 
              className="w-[350px] h-auto sm:w-[450px] md:w-[550px] lg:w-[650px] xl:w-[800px] drop-shadow-2xl max-w-[90vw]"
              style={{ filter: 'contrast(1.3) saturate(1.2) brightness(1.05) drop-shadow(0 0 1px rgba(0,0,0,0.4))' }}
            />
          </div>
          
          <div className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4 font-outfit drop-shadow-lg" style={{ color: '#FFA500' }}>
              Performer • Author • Composer • Designer • Inventor
            </p>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-outfit drop-shadow-md" style={{ color: '#E0E0E0' }}>
              Country rock space fusion for that part of humanity who like to move and desire adventure
            </p>
          </div>
          
          {/* Featured Track Player */}
          {featuredTracks && featuredTracks.length > 0 && (
            <div className="mb-6 sm:mb-8 max-w-md mx-auto">
              <AudioPlayer track={{
                ...featuredTracks[0],
                albumArt: featuredTracks[0].albumArt ?? undefined,
                previewUrl: featuredTracks[0].previewUrl ?? undefined,
                duration: featuredTracks[0].duration ?? undefined
              }} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/music">
              <Button className="text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors font-outfit" style={{ backgroundColor: '#CD5C5C' }}>
                <Play className="mr-2 w-5 h-5" />
                Listen Now
              </Button>
            </Link>
            <Link href="/store">
              <Button variant="outline" className="px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors font-outfit" style={{ borderColor: '#FFA500', color: '#FFA500' }}>
                <ShoppingCart className="mr-2 w-5 h-5" />
                Browse Store
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Music */}
      <section className="py-16" style={{ background: 'linear-gradient(to bottom, #000000, #954535)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space text-4xl md:text-6xl font-bold mb-4" style={{ color: '#FFA500' }}>FEATURED WORKS</h2>
            <p className="text-lg max-w-2xl mx-auto font-outfit" style={{ color: '#E0E0E0' }}>
              Country rock space fusion that transcends traditional boundaries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTracks && featuredTracks.length > 0 ? (
              featuredTracks.map((track) => (
                <MusicCard key={track.id} track={track} useLandscapeArt={true} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-lg font-outfit" style={{ color: '#E0E0E0' }}>Loading featured tracks...</p>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <Link href="/music">
              <Button className="px-8 py-3 rounded-lg font-semibold transition-colors font-outfit" style={{ backgroundColor: '#CD5C5C', color: 'white' }}>
                View All Music
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="py-16" style={{ background: 'linear-gradient(to bottom, #954535, #2F1B14, #000080)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space text-4xl md:text-6xl font-bold mb-4" style={{ color: '#DAA520' }}>ARTISTIC PERSONAS</h2>
            <p className="text-lg max-w-2xl mx-auto font-outfit" style={{ color: '#E0E0E0' }}>
              The Ranger, The Undertaker, and The Miner - three creative expressions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personas.map((persona) => (
              <PersonaCard key={persona.name} persona={persona} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Footage */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom, #000080, #000000)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-western text-4xl md:text-6xl font-bold text-center mb-16" style={{ color: '#FFA500' }}>
            PERFORMANCE FOOTAGE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceVideos.map((video, index) => (
              <Card key={index} className="bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-2 overflow-hidden cursor-pointer hover:border-opacity-80 transition-all duration-300" style={{ borderColor: '#CD5C5C' }}>
                <div className="relative aspect-video overflow-hidden group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${video.title === 'Full Band Performance' ? 'object-top' : ''}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300">
                    <Play className="w-16 h-16" style={{ color: '#FFA500' }} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-outfit text-lg font-semibold" style={{ color: '#E0E0E0' }}>
                    {video.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-western text-4xl md:text-6xl font-bold text-center mb-16" style={{ color: '#FFA500' }}>
            PAST VENDOR TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vendorTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-2" style={{ borderColor: '#CD5C5C' }}>
                <div className="mb-6">
                  <p className="text-base italic leading-relaxed font-outfit" style={{ color: '#E0E0E0' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t pt-4" style={{ borderColor: '#CD5C5C' }}>
                  <p className="font-bold font-outfit" style={{ color: '#FFA500' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm font-outfit" style={{ color: '#CD5C5C' }}>
                    {testimonial.position}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
