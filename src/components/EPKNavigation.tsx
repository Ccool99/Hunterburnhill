import { useState } from 'react';
import { Guitar, Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EPKNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#', label: 'Music' },
    { href: '#', label: 'Tours' },
    { href: '#', label: 'Store' },
    { href: '#', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm border-b z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', borderColor: '#CD5C5C' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left-justified brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Guitar className="text-2xl" style={{ color: '#FFA500' }} />
              <span className="font-space text-lg sm:text-xl font-bold" style={{ color: '#FFA500' }}>JOHN LION JOSEPH</span>
            </div>
          </div>
          
          {/* Right-justified navigation */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map(({ href, label }) => (
                <span 
                  key={label}
                  className="transition-colors font-medium cursor-not-allowed opacity-50" 
                  style={{ color: '#808080' }}
                  title="Navigation disabled in EPK mode"
                >
                  {label}
                </span>
              ))}
              
              {/* Cart Icon - Disabled */}
              <div className="relative opacity-50" title="Cart disabled in EPK mode">
                <ShoppingCart 
                  className="w-6 h-6 cursor-not-allowed" 
                  style={{ color: '#808080' }}
                />
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? 
                  <X className="w-6 h-6" style={{ color: '#FFA500' }} /> : 
                  <Menu className="w-6 h-6" style={{ color: '#FFA500' }} />
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', borderColor: '#CD5C5C' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ href, label }) => (
              <div key={label} className="block px-3 py-2">
                <span 
                  className="transition-colors font-medium cursor-not-allowed opacity-50" 
                  style={{ color: '#808080' }}
                >
                  {label}
                </span>
              </div>
            ))}
            
            {/* Mobile Cart - Disabled */}
            <div className="flex items-center px-3 py-2 opacity-50" title="Cart disabled in EPK mode">
              <ShoppingCart 
                className="w-6 h-6 mr-2 cursor-not-allowed" 
                style={{ color: '#808080' }}
              />
              <span className="font-medium" style={{ color: '#808080' }}>Cart</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}