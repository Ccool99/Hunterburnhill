import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: string | number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numPrice);
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function getPersonaColor(persona: string): string {
  switch (persona) {
    case 'The Ranger':
      return 'olive-green';
    case 'The Undertaker':
      return 'railway-navy';
    case 'The Miner':
      return 'chestnut-brown';
    default:
      return 'tangerine';
  }
}

export function getPersonaGradient(persona: string): string {
  switch (persona) {
    case 'The Ranger':
      return 'from-olive-green/20 to-railway-black';
    case 'The Undertaker':
      return 'from-railway-navy/20 to-railway-black';
    case 'The Miner':
      return 'from-chestnut-brown/20 to-railway-black';
    default:
      return 'from-tangerine/20 to-railway-black';
  }
}
