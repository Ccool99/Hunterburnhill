import { useState } from 'react';
import { Guitar, Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function NavigationStatic() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Music' },
    { label: 'Tours' },
    { label: 'Store' },
    { label: 'About' },
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
              {navItems.map(({ label }) => (
                <span 
                  key={label}
                  className="font-medium opacity-60 cursor-default" 
                  style={{ color: '#E0E0E0' }}
                >
                  {label}
                </span>
              ))}
              <div className="flex items-center space-x-4">
                <div className="relative opacity-60">
                  <ShoppingCart className="w-5 h-5" style={{ color: '#E0E0E0' }} />
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                style={{ color: '#E0E0E0' }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: '#CD5C5C' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ label }) => (
                <span
                  key={label}
                  className="block px-3 py-2 font-medium opacity-60 cursor-default"
                  style={{ color: '#E0E0E0' }}
                >
                  {label}
                </span>
              ))}
              <div className="px-3 py-2 opacity-60">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="w-5 h-5" style={{ color: '#E0E0E0' }} />
                  <span className="font-medium" style={{ color: '#E0E0E0' }}>Cart</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}