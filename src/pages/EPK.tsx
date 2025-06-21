import { Card } from '@/components/ui/card';
import { Play, Mail, Phone } from 'lucide-react';
import { EPKNavigation } from '@/components/EPKNavigation';
const johnLionTroubadour = '/images/john-lion-joseph-logo.png';
const erraticPhoto = '/images/erratic-photo.jpg';
const undertakerImage = '/images/undertaker.jpg';
const saitPerformanceNewBackground = '/images/epk-header.png';
const starLightHeader = '/images/star-light.png';
const epkMinerPhoto = 'https://i.imgur.com/8QzL9vK.png';
const starLightHeaderImg = 'https://i.imgur.com/9XkR8tN.png';
const undertakerZoomed = 'https://i.imgur.com/5vH8KjD.png';

export default function EPK() {
  const performanceVideos = [
    {
      title: "Out on the Western Plain",
      description: "Full live performance showcasing The Ranger persona",
      thumbnail: erraticPhoto,
      clickUrl: "https://drive.google.com/file/d/1hB9lVaV29SufOuDS-xwzYUXg49-dm-_v/view",
    },
    {
      title: "Shine", 
      description: "Intimate acoustic performance featuring country ballads",
      thumbnail: undertakerZoomed,
      clickUrl: "https://drive.google.com/file/d/1p3J4mkDNOKTbuOC10E7IQzYMo-z0hSXz/view",
    }
  ];

  const testimonials = [
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

  return (
    <div className="min-h-screen bg-railway-black">
      <EPKNavigation />
      {/* Hero Header */}
      <section 
        className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.25)), url(${starLightHeaderImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8 flex flex-col justify-center h-full">
          <div className="mb-6 sm:mb-8">
            <img 
              src={johnLionTroubadour} 
              alt="John Lion Joseph Electronic Press Kit" 
              className="w-[300px] h-auto sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] drop-shadow-2xl max-w-[85vw] mx-auto"
              style={{ filter: 'contrast(1.3) saturate(1.2) brightness(1.05) drop-shadow(0 0 1px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
      </section>

      {/* Clips Section */}
      <section className="py-12 bg-gradient-to-b from-black via-[#2C2C2C] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#DAA520' }}>
            CLIPS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {performanceVideos.map((video, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 overflow-hidden cursor-pointer transition-all duration-300 shadow-xl"
                style={{ borderColor: '#CD5C5C' }} 
                onClick={() => video.clickUrl && window.open(video.clickUrl, '_blank')}
              >
                <div className="relative aspect-video overflow-hidden group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-burnt-orange rounded-full p-4 group-hover:bg-indian-red transition-colors duration-300 shadow-lg">
                      <Play className="w-8 h-8 fill-current text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bebas text-xl font-bold mb-2" style={{ color: '#DAA520' }}>
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {video.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About John Lion Joseph Section */}
      <section className="py-12 bg-gradient-to-b from-black via-[#2C2C2C] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#DAA520' }}>
            ABOUT JOHN LION JOSEPH
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={epkMinerPhoto}
                  alt="John Lion Joseph Live Performance"
                  className="w-full max-w-md rounded-lg shadow-2xl border-2"
                  style={{ borderColor: '#CD5C5C' }}
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-4" style={{ color: '#CD5C5C' }}>ARTISTIC MISSION</h3>
                <p className="text-gray-300 leading-relaxed">
                  JL is a genre-bending showman whose mission is to lift people out of the emotional grind of everyday life. Drawing from a foundation of early vocal mentorship and a lifetime of lived experience, his music is a vehicle for transcendence, joy and spiritual resonance. He blends country rock with Sci-fi space ambience, jazz, and classical influences. His personal aim musically is to become the Pink Floyd of Country, but a little happier.
                </p>
              </div>
              
              <div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-4" style={{ color: '#CD5C5C' }}>UNIQUE VALUE PROPOSITION</h3>
                <p className="text-gray-300 leading-relaxed">
                  "I make country rock space fusion for that part of humanity who like to move, and desire adventure and depth, in their listening experience. I try to deliver through costume, props maximum vocal performance, complex instrumental textures and solid rhythm that creates a transcendent live experience that shifts your consciousness into higher states of awareness."
                </p>
              </div>
              
              <div>
                <h3 className="font-space text-xl md:text-2xl font-bold mb-4" style={{ color: '#CD5C5C' }}>INFLUENCES</h3>
                <p className="text-gray-300 leading-relaxed">
                  Drawing from classical masters (Bach, Rachmaninoff, Mozart), jazz legends (Astrud Gilberto, Herb Alpert, Frank Sinatra), country icons (Billy Joe Shaver, Keith Whitley, Hank Williams Sr.), and rock pioneers (Pink Floyd, Eagles, David Bowie).
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-2 p-8" style={{ borderColor: '#CD5C5C' }}>
              <h3 className="font-space text-2xl font-bold mb-6" style={{ color: '#DAA520' }}>ARTIST BIO</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Trained as a vocalist in a convent's elite music program from age 5, recognized as a singer with perfect pitch. Performed as a soloist in boys choir by age 11, winning multiple vocal competitions. After career derailments from mental illness at seventeen, he made a pivotal decision in fall of '89 to leave the family business and fully pursue music. Relocating to Calgary, he picked up the guitar and never looked back. Active in Calgary's music scene in the 1990s, often busking on Electric Avenue from dusk to 3am, which added depth to his understanding of projection and competitive execution. His return to the music industry in 2023 comes battle-tested and spiritually refined, with new material and a renewed vision for world recognition and humanitarian development.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Vendor Testimonials */}
      <section className="py-12 bg-gradient-to-b from-black via-[#2C2C2C] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#DAA520' }}>
            PAST VENDOR TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 p-6 transition-colors duration-300" style={{ borderColor: '#CD5C5C' }}>
                <blockquote className="text-lg italic mb-6 text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4" style={{ borderColor: '#CD5C5C' }}>
                  <p className="font-bebas text-lg font-bold" style={{ color: '#DAA520' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm" style={{ color: '#CD5C5C' }}>
                    {testimonial.position}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 bg-gradient-to-b from-black via-[#2C2C2C] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#DAA520' }}>
            BOOKING INFORMATION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 p-8 transition-colors duration-300" style={{ borderColor: '#CD5C5C' }}>
              <Mail className="w-12 h-12 mx-auto mb-6" style={{ color: '#DAA520' }} />
              <h3 className="font-bebas text-2xl font-bold mb-4 text-burnt-orange">
                EMAIL
              </h3>
              <p className="text-lg" style={{ color: '#CD5C5C' }}>
                hunterburnhill@gmail.com
              </p>
            </Card>
            
            <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 p-8 transition-colors duration-300" style={{ borderColor: '#CD5C5C' }}>
              <Phone className="w-12 h-12 mx-auto mb-6" style={{ color: '#DAA520' }} />
              <h3 className="font-bebas text-2xl font-bold mb-4 text-burnt-orange">
                PHONE
              </h3>
              <p className="text-lg" style={{ color: '#CD5C5C' }}>
                (587) 893-8785
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-400">
              Powered by Hunterburnhill Entertainment
            </p>
          </div>
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
                <li><span className="font-outfit" style={{ color: '#808080' }}>The Ranger</span></li>
                <li><span className="font-outfit" style={{ color: '#808080' }}>The Undertaker</span></li>
                <li><span className="font-outfit" style={{ color: '#808080' }}>The Miner</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Store</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="font-outfit" style={{ color: '#808080' }}>Apparel</span></li>
                <li><span className="font-outfit" style={{ color: '#808080' }}>Accessories</span></li>
                <li><span className="font-outfit" style={{ color: '#808080' }}>Tour Dates</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="font-outfit" style={{ color: '#808080' }}>About</span></li>
                <li><span className="font-outfit" style={{ color: '#808080' }}>Contact</span></li>
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