import { Guitar } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="py-12 w-full mt-auto" style={{ backgroundColor: '#000000', borderTop: '1px solid #404040' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Guitar className="text-xl" style={{ color: '#FFA500' }} />
              <span className="font-space text-lg" style={{ color: '#FFA500' }}>JOHN LION JOSEPH</span>
            </div>
            <p className="text-sm mb-4 font-outfit" style={{ color: '#E0E0E0' }}>
              Country rock space fusion for that part of humanity who like to move and desire adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors" style={{ color: '#808080' }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="transition-colors" style={{ color: '#808080' }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="transition-colors" style={{ color: '#808080' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="transition-colors" style={{ color: '#808080' }}>
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Music</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Ranger</Link></li>
              <li><Link href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Undertaker</Link></li>
              <li><Link href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>The Miner</Link></li>
              <li><Link href="/music" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>All Tracks</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Store</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/store" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Apparel</Link></li>
              <li><Link href="/store" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Accessories</Link></li>
              <li><Link href="/store" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Collectibles</Link></li>
              <li><Link href="/tours" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Tour Dates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-space" style={{ color: '#FFA500' }}>Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>About</Link></li>
              <li><a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Contact</a></li>
              <li><a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Newsletter</a></li>
              <li><a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Press Kit</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid #404040' }}>
          <p className="text-sm mb-4 md:mb-0 font-outfit" style={{ color: '#E0E0E0' }}>
            © 2024 John Lion Joseph. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Privacy Policy</a>
            <span style={{ color: '#E0E0E0' }}>•</span>
            <a href="#" className="transition-colors font-outfit" style={{ color: '#E0E0E0' }}>Terms of Service</a>
            <span style={{ color: '#E0E0E0' }}>•</span>
            <span className="font-outfit" style={{ color: '#E0E0E0' }}>Powered by <a href="#" className="transition-colors font-semibold" style={{ color: '#FFA500' }}>Hunterburnhill</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
