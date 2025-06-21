import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@shared/schema';
// Using placeholder gradient background for header

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const queryClient = useQueryClient();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: [selectedCategory === 'all' ? '/api/products' : `/api/products?category=${selectedCategory}`],
  });

  const categories = [
    { key: 'all', label: 'All Items' },
    { key: 'apparel', label: 'Apparel' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'collectibles', label: 'Collectibles' },
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // Scroll to products section with navigation bar offset
    setTimeout(() => {
      const element = document.getElementById('products-section');
      if (element) {
        const navHeight = 64; // Navigation bar height
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="animate-spin w-8 h-8 border-4 border-t-transparent rounded-full" style={{ borderColor: '#FFA500' }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Header */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          paddingTop: '8rem',
          paddingBottom: 'calc(15rem + 250px)',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/store-header.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ marginTop: '250px' }}>
          <h1 className="font-western text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFA500' }}>
            FRONTIER STORE
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-outfit" style={{ color: '#E0E0E0' }}>
            Authentic merchandise inspired by the frontier spirit
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(({ key, label }) => (
              <Button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className={`px-6 py-3 rounded-lg font-outfit font-semibold transition-colors ${
                  selectedCategory === key
                    ? 'text-white'
                    : 'bg-transparent text-white border hover:text-white'
                }`}
                style={{
                  backgroundColor: selectedCategory === key ? '#CD5C5C' : 'transparent',
                  borderColor: selectedCategory === key ? '#CD5C5C' : '#808080',
                }}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {(!products || products.length === 0) && (
            <div className="text-center py-12">
              <p className="text-lg font-outfit" style={{ color: '#808080' }}>No products found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 pb-32" style={{ background: 'linear-gradient(to top, #954535, #000000)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
            NEW ARRIVALS FIRST
          </h2>
          <p className="text-lg mb-8 font-outfit" style={{ color: '#808080' }}>
            Get notified when new merchandise hits the frontier store
          </p>
          <Button 
            className="px-8 py-3 font-outfit text-lg"
            style={{ backgroundColor: '#CD5C5C' }}
          >
            Subscribe to Store Updates
          </Button>
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
