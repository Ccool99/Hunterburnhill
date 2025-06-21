import { Star, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getPersonaColor } from '@/lib/utils';
import type { Testimonial } from '@shared/schema';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const personaColor = testimonial.persona ? getPersonaColor(testimonial.persona) : 'tangerine';

  return (
    <Card className="bg-railway-navy/20 border border-railway-grey/30 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex text-tangerine">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      
      <p className="text-railway-grey mb-4">{testimonial.content}</p>
      
      <div className="flex items-center">
        <div className={`w-10 h-10 bg-${personaColor} rounded-full flex items-center justify-center mr-3`}>
          <User className="text-white w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          {testimonial.location && (
            <p className="text-railway-grey text-sm">{testimonial.location}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
