import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Guitar, Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navItems = [
    { href: '/music', label: 'Music' },
    { href: '/tours', label: 'Tours' },
    { href: '/store', label: 'Store' },
    { href: '/about', label: 'About' },
  ];

  const isActive = (href: string) => location === href;

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm border-b z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)', borderColor: '#CD5C5C' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left-justified brand */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Guitar className="text-2xl" style={{ color: '#FFA500' }} />
                <span className="font-space text-lg sm:text-xl font-bold" style={{ color: '#FFA500' }}>JOHN LION JOSEPH</span>
              </div>
            </Link>
          </div>
          
          {/* Right-justified navigation */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <span 
                    className="transition-colors font-medium cursor-pointer" 
                    style={{ 
                      color: isActive(href) ? '#FFA500' : '#E0E0E0' 
                    }}
                    onClick={handleNavClick}
                  >
                    {label}
                  </span>
                </Link>
              ))}
              <Link href="/cart">
                <Button variant="ghost" size="sm" className="relative ml-2" style={{ color: '#E0E0E0' }}>
                  <ShoppingCart className="w-5 h-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ backgroundColor: '#CD5C5C' }}>
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden ml-2"
              style={{ color: '#FFA500' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4" style={{ borderColor: '#CD5C5C' }}>
            <div className="flex flex-col space-y-4">
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href}>
                  <span
                    className="block px-4 py-2 transition-colors font-medium cursor-pointer"
                    style={{ 
                      color: isActive(href) ? '#FFA500' : '#E0E0E0' 
                    }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick();
                    }}
                  >
                    {label}
                  </span>
                </Link>
              ))}
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start mx-4"
                  style={{ color: '#E0E0E0' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart ({itemCount})
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
