import { Card } from '@/components/ui/card';
import { Music, Award, Heart, Mic } from 'lucide-react';
const aboutHeaderPhoto = '/images/about-header.jpg';

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          paddingTop: '8rem',
          paddingBottom: 'calc(10rem + 280px)',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${aboutHeaderPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ marginTop: '250px' }}>
          <h1 className="font-western text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFA500' }}>
            ABOUT JOHN LION JOSEPH
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-outfit" style={{ color: '#E0E0E0' }}>
            Performer • Author • Composer • Designer • Inventor
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 
              className="font-western text-3xl md:text-4xl font-bold mb-4 cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ color: '#FFA500' }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              THE JOURNEY
            </h2>
            <p className="text-lg font-outfit max-w-3xl mx-auto" style={{ color: '#E0E0E0' }}>
              From a convent's elite music program to Calgary's street corners, John's path has been one of triumph, 
              setback, and spiritual refinement—emerging battle-tested with a renewed vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Early Years */}
            <Card className="p-8" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
              <div className="flex items-center mb-6">
                <Music className="w-8 h-8 mr-3" style={{ color: '#FFA500' }} />
                <h3 className="font-western text-2xl font-bold" style={{ color: '#FFA500' }}>Early Foundations</h3>
              </div>
              <div className="space-y-4">
                <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                  Trained as a vocalist in a convent's elite music program from age 5, John was recognized as a singer with perfect pitch. 
                  By age 11, he was performing as a soloist in boys choir and winning vocal competitions.
                </p>
                <p className="font-outfit" style={{ color: '#808080' }}>
                  His early classical training under religious mentorship laid the foundation for his later theatrical 
                  and spiritual approach to performance.
                </p>
              </div>
            </Card>

            {/* The Turning Point */}
            <Card className="p-8" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 mr-3" style={{ color: '#FFA500' }} />
                <h3 className="font-western text-2xl font-bold" style={{ color: '#FFA500' }}>The Decision</h3>
              </div>
              <div className="space-y-4">
                <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                  In fall 1989, a moment of emotional crisis and clarity led John to leave the family business behind. 
                  Within days, he relocated to Calgary, picked up the guitar, and never looked back.
                </p>
                <p className="font-outfit" style={{ color: '#808080' }}>
                  This pivotal moment marked the beginning of his transformation from classically trained vocalist 
                  to genre-bending country rock space fusion artist.
                </p>
              </div>
            </Card>
          </div>

          {/* Calgary Street Years */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
              <div className="flex items-center mb-6">
                <Mic className="w-8 h-8 mr-3" style={{ color: '#FFA500' }} />
                <h3 className="font-western text-2xl font-bold" style={{ color: '#FFA500' }}>Street Performance</h3>
              </div>
              <div className="space-y-4">
                <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                  Active in Calgary's 1990s music scene, John was often seen busking on Electric Avenue from dusk to 3am. 
                  The street taught him projection and competitive execution—there's no venue more critical than the street.
                </p>
                <p className="font-outfit" style={{ color: '#808080' }}>
                  "If you don't put your whole heart into it, you make nothing." This period shaped his understanding 
                  of authentic performance and audience connection.
                </p>
              </div>
            </Card>

            <Card className="p-8" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 mr-3" style={{ color: '#FFA500' }} />
                <h3 className="font-western text-2xl font-bold" style={{ color: '#FFA500' }}>Recognition</h3>
              </div>
              <div className="space-y-4">
                <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                  In 1995, John received two industry awards: a FACTOR Grant that produced a four-song demo and made 
                  the Alberta "A" List, resulting in three songs broadcast on CKUA Radio.
                </p>
                <p className="font-outfit" style={{ color: '#808080' }}>
                  His talent was recognized through TV appearances and as a "Breakfast Show" regular, 
                  building a foundation for his artistic career.
                </p>
              </div>
            </Card>
          </div>

          {/* The Three Personas */}
          <div className="text-center mb-12">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
              THE THREE PERSONAS
            </h2>
            <p className="text-lg font-outfit max-w-3xl mx-auto" style={{ color: '#E0E0E0' }}>
              John embodies three distinct archetypes, each representing different energies and musical styles that give him 
              creative flexibility across performances, album art, and merchandise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6" style={{ backgroundColor: 'rgba(128, 128, 0, 0.1)', borderColor: '#808000' }}>
              <h3 className="font-space text-2xl font-bold mb-4" style={{ color: '#808000' }}>THE RANGER</h3>
              <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                The wanderer, the rover. Rooted in John's upbringing on Saskatchewan ranches, representing grit, tradition, 
                freedom, and connection to life's cycles. Classic Americana and country rock anthems.
              </p>
            </Card>

            <Card className="p-6" style={{ backgroundColor: 'rgba(0, 0, 128, 0.1)', borderColor: '#000080' }}>
              <h3 className="font-space text-2xl font-bold mb-4" style={{ color: '#000080' }}>THE UNDERTAKER</h3>
              <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                The custodian of death and metamorphosis. Channels grief into grace, performing elevated classical and 
                reverent pieces that invite audiences to feel the full weight and healing power of music.
              </p>
            </Card>

            <Card className="p-6" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#954535' }}>
              <h3 className="font-space text-2xl font-bold mb-4" style={{ color: '#954535' }}>THE MINER</h3>
              <p className="font-outfit" style={{ color: '#E0E0E0' }}>
                The solitary prospector of sound, uncovering gold in melody. The romantic balladeer who makes hearts weep with joy 
                and pulls listeners from the depths through experimental and adventurous compositions.
              </p>
            </Card>
          </div>

          {/* Musical Vision */}
          <div className="text-center mb-12">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
              MUSICAL VISION
            </h2>
            <p className="text-lg font-outfit max-w-3xl mx-auto mb-8" style={{ color: '#E0E0E0' }}>
              "I make country rock space fusion for that part of humanity who like to move, and desire adventure and depth 
              in their listening experience."
            </p>
          </div>

          <Card className="p-8 mb-16" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-space text-xl font-bold mb-4" style={{ color: '#FFA500' }}>Core Influences</h4>
                <div className="space-y-3 font-outfit" style={{ color: '#E0E0E0' }}>
                  <p><strong style={{ color: '#CD5C5C' }}>Classical:</strong> Strauss, Bach, Rachmaninoff, Mozart</p>
                  <p><strong style={{ color: '#CD5C5C' }}>Country:</strong> Billy Joe Shaver, Keith Whitley, Hank Williams Sr.</p>
                  <p><strong style={{ color: '#CD5C5C' }}>Rock:</strong> Pink Floyd, Eagles, Lynyrd Skynyrd, David Bowie</p>
                  <p><strong style={{ color: '#CD5C5C' }}>Jazz:</strong> Nat King Cole, Frank Sinatra, Herb Alpert</p>
                </div>
              </div>
              <div>
                <h4 className="font-space text-xl font-bold mb-4" style={{ color: '#FFA500' }}>Performance Goal</h4>
                <p className="font-outfit mb-4" style={{ color: '#E0E0E0' }}>
                  To become "the Pink Floyd of Country, but a little happier." John delivers transcendent live experiences 
                  through costume, props, maximum vocal performance, and complex instrumental textures.
                </p>
                <p className="font-outfit" style={{ color: '#808080' }}>
                  His aim is to shift consciousness into higher states of awareness while building to ACDC/Bad Company 
                  level stage energy.
                </p>
              </div>
            </div>
          </Card>

          {/* The Return */}
          <div className="text-center mb-12">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
              THE RETURN
            </h2>
          </div>

          <Card className="p-8 mb-16" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)', borderColor: '#CD5C5C' }}>
            <div className="space-y-6">
              <p className="font-outfit text-lg" style={{ color: '#E0E0E0' }}>
                After career interruptions from injuries and life's demands—a construction accident in 1997 and spinal brain injury 
                from a vehicle accident in 2003—John spent years disabled but never lost his musical spirit.
              </p>
              <p className="font-outfit text-lg" style={{ color: '#E0E0E0' }}>
                2023 marked his return to the music industry, battle-tested and spiritually refined, with new material 
                and a renewed vision. His goal: achieve world recognition and use this platform for humanitarian development.
              </p>
              <blockquote className="border-l-4 pl-6 py-4" style={{ borderColor: '#CD5C5C' }}>
                <p className="font-outfit text-lg italic" style={{ color: '#CD5C5C' }}>
                  "Music as frequency, intention, and emotional transmission—to lift people out of the emotional grind 
                  of everyday life and remind them of beauty, hope, and connection."
                </p>
              </blockquote>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 pb-32" style={{ background: 'linear-gradient(to top, #954535, #000000)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
            JOIN THE JOURNEY
          </h2>
          <p className="text-lg mb-8 font-outfit" style={{ color: '#808080' }}>
            Stay connected with John's musical evolution and upcoming performances
          </p>
          <div className="mb-8">
            <p className="font-outfit" style={{ color: '#E0E0E0' }}>
              For booking inquiries: <a href="mailto:hunterburnhill@gmail.com" className="underline" style={{ color: '#CD5C5C' }}>hunterburnhill@gmail.com</a>
            </p>
            <p className="font-outfit" style={{ color: '#E0E0E0' }}>
              Phone: <span style={{ color: '#CD5C5C' }}>(587) 893-8785</span>
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
