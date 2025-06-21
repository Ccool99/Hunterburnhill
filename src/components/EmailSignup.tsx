import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      toast({
        title: "Welcome to the Frontier Family!",
        description: "Check your email for confirmation.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20" style={{ background: 'linear-gradient(to right, #CD5C5C, #FF8C42, #FFA500)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-space text-4xl md:text-6xl font-bold text-white mb-4">
          JOIN THE CREATIVE COMMUNITY
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto font-outfit">
          Get exclusive access to new music, early merchandise releases, and behind-the-scenes content from John Lyon Joseph
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2"
              style={{ color: '#000000', '--tw-ring-color': '#000000' } as React.CSSProperties}
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 font-outfit"
              style={{ backgroundColor: '#000000', color: 'white' }}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-4 font-outfit">
            No spam, just genuine music updates. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
