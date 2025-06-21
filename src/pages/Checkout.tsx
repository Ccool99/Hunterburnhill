import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { formatPrice } from '@/lib/utils';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order Received",
        description: "Your order has been received and will be processed soon. Payment integration coming soon!",
      });
      clearCart();
      setIsProcessing(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Card className="bg-railway-black/60 border border-railway-grey/30 p-8 text-center">
          <h2 className="font-outfit text-3xl font-bold text-tangerine mb-4">Your Cart is Empty</h2>
          <p className="text-railway-grey mb-6">Add some items to your cart before checking out.</p>
          <Button 
            onClick={() => window.history.back()}
            className="bg-indian-red hover:bg-tangerine text-white px-6 py-2 rounded-lg transition-colors"
          >
            Continue Shopping
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-railway-black to-railway-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-space text-4xl md:text-6xl font-bold text-tangerine mb-4">CHECKOUT</h1>
            <p className="text-railway-grey text-lg font-outfit">Complete your order</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <Card className="bg-railway-black/60 border border-railway-grey/30 p-6 mb-6">
                <h3 className="font-space text-2xl font-bold text-tangerine mb-4">Order Summary</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium font-outfit">{item.name}</p>
                        <p className="text-railway-grey text-sm font-outfit">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-tangerine font-semibold font-outfit">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                  <div className="border-t border-railway-grey/30 pt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-white font-outfit">Total</p>
                      <p className="font-semibold text-tangerine text-xl font-space">{formatPrice(total)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-railway-black/60 border border-railway-grey/30 p-6">
                <h3 className="font-space text-2xl font-bold text-tangerine mb-4">Contact Information</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-white font-outfit">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-railway-grey/20 border-railway-grey text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-white font-outfit">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-railway-grey/20 border-railway-grey text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="address" className="text-white font-outfit">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="bg-railway-grey/20 border-railway-grey text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-white font-outfit">City</Label>
                      <Input
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="bg-railway-grey/20 border-railway-grey text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-white font-outfit">ZIP Code</Label>
                      <Input
                        id="zip"
                        name="zip"
                        required
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="bg-railway-grey/20 border-railway-grey text-white"
                      />
                    </div>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-400/50 rounded-lg p-4 mt-6">
                    <p className="text-blue-200 text-sm font-outfit">
                      Payment processing will be available soon. Your order information will be saved for when payment is ready.
                    </p>
                  </div>
                  <Button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-indian-red hover:bg-tangerine text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 font-outfit"
                  >
                    {isProcessing ? 'Processing...' : 'Submit Order'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}