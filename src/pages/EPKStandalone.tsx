import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Mail, Phone } from 'lucide-react';
import { VideoPlayer, EmbeddedVideoPlayer } from '@/components/VideoPlayer';
import { NavigationStatic } from '@/components/NavigationStatic';
const johnLionTroubadour = '/images/john-lion-joseph-logo.png';
const erraticPhoto = '/images/erratic-photo.jpg';
const undertakerImage = '/images/undertaker.jpg';
const saitPerformanceEdited = '/images/stage.png';
const stageBackground = '/images/stage-background.png';

export default function EPKStandalone() {

  const personas = [
    {
      name: "The Ranger",
      image: erraticPhoto,
      description: "Embodying the spirit of the open frontier, The Ranger brings tales of adventure, freedom, and the untamed wilderness. His performances capture the essence of exploration and the call of the wild."
    },
    {
      name: "The Undertaker", 
      image: undertakerImage,
      description: "Exploring the darker, more introspective themes of the human experience, The Undertaker delves into stories of loss, redemption, and the mysteries that lie beyond. His haunting melodies resonate with profound emotional depth."
    },
    {
      name: "The Troubadour",
      image: saitPerformanceEdited,
      description: "Weaving tales of love, heartbreak, and human connection, The Troubadour represents the classic storytelling tradition. Through acoustic ballads and heartfelt lyrics, he captures the essence of the human spirit."
    }
  ];

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
      thumbnail: undertakerImage,
      clickUrl: "https://drive.google.com/file/d/1p3J4mkDNOKTbuOC10E7IQzYMo-z0hSXz/view",
    },
    {
      title: "Live at SAIT Performance",
      description: "Professional venue performance highlighting versatility",
      thumbnail: saitPerformanceEdited,
      clickUrl: "https://drive.google.com/file/d/1your-video-id/view",
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
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Static Navigation */}
      <NavigationStatic />
      
      {/* Header Section */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${stageBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center h-full pt-24 pb-16">
          <div className="mb-8">
            <img 
              src={johnLionTroubadour} 
              alt="John Lion Joseph Electronic Press Kit" 
              className="w-[320px] h-auto sm:w-[400px] md:w-[480px] lg:w-[550px] xl:w-[620px] drop-shadow-2xl max-w-[80vw] mx-auto"
              style={{ filter: 'contrast(1.3) saturate(1.2) brightness(1.05) drop-shadow(0 0 1px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
      </section>

      {/* Meet the Personas Section */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-western text-4xl md:text-6xl font-bold text-center mb-16" style={{ color: '#FFA500' }}>
            MEET THE PERSONAS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Card key={index} className="p-6 border-2 bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] hover:shadow-xl transition-all duration-300" style={{ borderColor: '#CD5C5C' }}>
                <div className="relative mb-6">
                  <img
                    src={persona.image}
                    alt={persona.name}
                    className="w-full h-64 object-cover rounded-lg"
                    style={{ border: '2px solid #CD5C5C' }}
                  />
                </div>
                <h3 className="font-western text-2xl font-bold mb-4 text-center" style={{ color: '#FFA500' }}>
                  {persona.name}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {persona.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Footage Section */}
      <section className="py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-western text-4xl md:text-6xl font-bold text-center mb-16" style={{ color: '#FFA500' }}>
            PERFORMANCE FOOTAGE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceVideos.map((video, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C] border-2 overflow-hidden cursor-pointer hover:border-opacity-80 transition-all duration-300" 
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
                    <div className="bg-black bg-opacity-70 rounded-full p-4 group-hover:bg-opacity-90 transition-all duration-300">
                      <Play className="w-8 h-8 fill-current text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-western text-xl font-bold mb-2" style={{ color: '#FFA500' }}>
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

      {/* About the Artist Section */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-western text-4xl md:text-6xl font-bold" style={{ color: '#FFA500' }}>
                ABOUT JOHN LION JOSEPH
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  <strong style={{ color: '#FFA500' }}>Artistic Mission:</strong> John Lion Joseph is dedicated to preserving and evolving the tradition of Western storytelling through music, bringing authentic narratives of the frontier experience to contemporary audiences while honoring the timeless themes of adventure, love, loss, and redemption.
                </p>
                <p>
                  <strong style={{ color: '#FFA500' }}>Unique Value Proposition:</strong> Through his multi-dimensional artistry spanning three distinct personas—The Ranger, The Troubadour, and The Undertaker—John offers a complete emotional journey that captures the full spectrum of the human experience on the frontier.
                </p>
                <p>
                  John Lion Joseph is a compelling Western troubadour whose authentic storytelling and powerful stage presence have captivated audiences across Canada. With deep roots in traditional country and folk music, he brings a unique blend of rugged authenticity and emotional depth to every performance, resonating with both traditional country music enthusiasts and contemporary audiences seeking genuine artistic expression.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={saitPerformanceEdited}
                  alt="John Lion Joseph Live Performance"
                  className="w-full max-w-md rounded-lg shadow-2xl"
                  style={{ border: '3px solid #CD5C5C' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-western text-4xl md:text-6xl font-bold text-center mb-16" style={{ color: '#FFA500' }}>
            WHAT PROMOTERS & FANS ARE SAYING
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-2 bg-gradient-to-b from-[#1C1C1C] to-[#0C0C0C]" style={{ borderColor: '#CD5C5C' }}>
                <blockquote className="text-lg italic mb-6 text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4" style={{ borderColor: '#CD5C5C' }}>
                  <p className="font-bold text-lg" style={{ color: '#FFA500' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-western text-4xl md:text-6xl font-bold mb-16" style={{ color: '#FFA500' }}>
            BOOKING CONTACT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-8 border-2 bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C]" style={{ borderColor: '#CD5C5C' }}>
              <Mail className="w-12 h-12 mx-auto mb-6" style={{ color: '#FFA500' }} />
              <h3 className="font-western text-2xl font-bold mb-4" style={{ color: '#FFA500' }}>
                EMAIL
              </h3>
              <p className="text-gray-300 text-lg">
                hunterburnhill@gmail.com
              </p>
            </Card>
            
            <Card className="p-8 border-2 bg-gradient-to-b from-[#2C2C2C] to-[#1C1C1C]" style={{ borderColor: '#CD5C5C' }}>
              <Phone className="w-12 h-12 mx-auto mb-6" style={{ color: '#FFA500' }} />
              <h3 className="font-western text-2xl font-bold mb-4" style={{ color: '#FFA500' }}>
                PHONE
              </h3>
              <p className="text-gray-300 text-lg">
                (587) 893-8785
              </p>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">
              Professional booking inquiries welcome
            </p>
            <p className="text-lg text-gray-400">
              Powered by Hunterburnhill Entertainment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}