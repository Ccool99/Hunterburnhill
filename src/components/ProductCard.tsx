import { useState } from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@shared/schema';

// Direct image mapping using proper Unsplash URLs for actual merchandise
const getProductImage = (productName: string): string => {
  switch (productName) {
    case 'Old Cat Vintage Tee':
      return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
    case 'Frontier Hat':
      return "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
    case 'Limited Edition Poster':
      return "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
    case 'Sticker Pack':
      return "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
    case 'Ranger Keychain':
      return "/images/keychain.png";
    case 'Country Fusion Hoodie':
      return "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
    default:
      return "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
  }
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: `product-${product.id}`,
      type: 'product',
      name: product.name,
      price: parseFloat(product.price),
      image: product.imageUrl || getProductImage(product.name),
      productId: product.id,
    });
  };

  return (
    <Card className="bg-railway-black/40 border border-railway-grey/30 rounded-lg overflow-hidden hover:border-tangerine transition-colors group">
      <div className="relative">
        <img 
          src={getProductImage(product.name)} 
          alt={product.name} 
          className="w-full h-64 object-cover"
          onLoad={() => setImageLoading(false)}

        />
        
        {product.featured && (
          <div className="absolute top-3 right-3 bg-indian-red text-white px-2 py-1 rounded text-xs">
            Featured
          </div>
        )}
        
        <Button
          variant="ghost"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tangerine text-railway-black px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="w-4 h-4 mr-2" />
          Quick View
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold mb-2 text-white">{product.name}</h3>
        <p className="text-railway-grey text-sm mb-3">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-semibold text-tangerine">{formatPrice(product.price)}</span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-indian-red hover:bg-tangerine text-white transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add to Cart
          </Button>
        </div>
        
        {product.stock !== null && product.stock !== undefined && product.stock < 10 && (
          <p className="text-xs text-indian-red mt-2">Only {product.stock} left in stock!</p>
        )}
      </div>
    </Card>
  );
}
