import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// Static data for deployment
const staticData = {
  tracks: [
    {
      "title": "Prairie Thunder",
      "artist": "John Lion Joseph",
      "persona": "The Ranger",
      "description": "A tale of storms rolling across endless grasslands",
      "price": "1.99",
      "previewUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "fullUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "duration": 165,
      "albumArt": "/images/erratic-photo.jpg",
      "genre": "Country Rock",
      "featured": true,
      "id": 1,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "title": "Midnight Requiem", 
      "artist": "John Lion Joseph",
      "persona": "The Undertaker",
      "description": "Haunting melodies from the edge of town",
      "price": "1.99",
      "previewUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "fullUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "duration": 203,
      "albumArt": "/images/undertaker.jpg",
      "genre": "Dark Folk",
      "featured": true,
      "id": 2,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "title": "Copper Creek Blues",
      "artist": "John Lion Joseph", 
      "persona": "The Miner",
      "description": "Stories from deep in the mountain mines",
      "price": "1.99",
      "previewUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "fullUrl": "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
      "duration": 187,
      "albumArt": "/images/stage.png",
      "genre": "Mountain Folk",
      "featured": true,
      "id": 3,
      "createdAt": "2025-06-21T02:38:55.345Z"
    }
  ],
  products: [
    {
      "name": "Old Cat Vintage Tee",
      "description": "Premium cotton with vintage logo",
      "price": "24.99",
      "category": "apparel", 
      "imageUrl": "/images/cowboys.jpg",
      "stock": 50,
      "featured": true,
      "id": 1,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "name": "Frontier Hat",
      "description": "Authentic western styling",
      "price": "39.99",
      "category": "apparel",
      "imageUrl": "/images/erratic-photo.jpg", 
      "stock": 25,
      "featured": false,
      "id": 2,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "name": "Limited Edition Poster",
      "description": "Hand-numbered art print",
      "price": "19.99",
      "category": "collectibles",
      "imageUrl": "/images/performance.jpg",
      "stock": 100,
      "featured": true,
      "id": 3,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "name": "Sticker Pack",
      "description": "Set of 6 vinyl stickers",
      "price": "8.99",
      "category": "accessories",
      "imageUrl": "/images/stage.png",
      "stock": 200,
      "featured": false,
      "id": 4,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "name": "Ranger Keychain",
      "description": "Durable metal keychain with frontier emblem",
      "price": "12.99",
      "category": "accessories",
      "imageUrl": "/images/undertaker.jpg",
      "stock": 150,
      "featured": true,
      "id": 5,
      "createdAt": "2025-06-21T02:38:55.345Z"
    },
    {
      "name": "Country Fusion Hoodie",
      "description": "Premium cotton blend hoodie with artistic design",
      "price": "49.99",
      "category": "apparel",
      "imageUrl": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      "stock": 35,
      "featured": true,
      "id": 6,
      "createdAt": "2025-06-21T02:38:55.345Z"
    }
  ],
  testimonials: [
    {
      "name": "Sarah M.",
      "location": "Montana",
      "content": "The Ranger's music perfectly captures the spirit of the open plains. Every track tells a story that resonates deep in your soul.",
      "rating": 5,
      "persona": "The Ranger",
      "featured": true,
      "id": 1,
      "createdAt": "2025-06-21T02:38:55.346Z"
    },
    {
      "name": "Marcus R.",
      "location": "Nevada",
      "content": "The Undertaker's haunting melodies are unlike anything I've heard. Dark, beautiful, and completely captivating.",
      "rating": 5,
      "persona": "The Undertaker",
      "featured": true,
      "id": 2,
      "createdAt": "2025-06-21T02:38:55.346Z"
    },
    {
      "name": "Elena T.",
      "location": "Colorado",
      "content": "The Miner's songs remind me of my grandfather's stories. Authentic, powerful, and deeply moving.",
      "rating": 5,
      "persona": "The Miner",
      "featured": true,
      "id": 3,
      "createdAt": "2025-06-21T02:38:55.346Z"
    }
  ]
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        
        // Return your actual data for static deployment
        if (url.includes('/api/tracks')) {
          if (url.includes('featured=true')) {
            return staticData.tracks.filter(track => track.featured);
          }
          return staticData.tracks;
        }
        
        if (url.includes('/api/products')) {
          return staticData.products;
        }
        
        if (url.includes('/api/testimonials')) {
          return staticData.testimonials;
        }
        
        if (url.includes('/api/events')) {
          const events = [
            {
              id: 1,
              title: "Prairie Thunder Live",
              date: "2025-07-15T19:30:00Z",
              venue: "Prairie Wind Amphitheater", 
              city: "Calgary",
              state: "AB",
              price: "45.00",
              capacity: 2500,
              status: "upcoming",
              featured: true,
              description: "Experience The Ranger's most powerful performance under the prairie sky",
              ticketUrl: "#",
              time: "7:30 PM"
            },
            {
              id: 2,
              title: "Mountain Echo Sessions",
              date: "2025-08-03T20:00:00Z", 
              venue: "Mountain Echo Hall",
              city: "Canmore", 
              state: "AB",
              price: "35.00",
              capacity: 300,
              status: "upcoming",
              featured: true,
              description: "Intimate acoustic evening featuring The Miner's mountain tales",
              ticketUrl: "#",
              time: "8:00 PM"
            },
            {
              id: 3,
              title: "Midnight Requiem",
              date: "2025-08-20T21:00:00Z",
              venue: "Sunset Saloon",
              city: "Medicine Hat",
              state: "AB", 
              price: "30.00",
              capacity: 150,
              status: "upcoming",
              featured: false,
              description: "The Undertaker's haunting melodies in an intimate venue",
              ticketUrl: "#",
              time: "9:00 PM"
            }
          ];
          
          if (url.includes('/featured')) {
            return events.filter(event => event.featured);
          }
          return events;
        }
        
        return [];
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
