
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroBanner } from '../components/HeroBanner';
import { ContentRow } from '../components/ContentRow';
import { SearchModal } from '../components/SearchModal';

const Index = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const contentCategories = [
    {
      title: "Trending Now",
      items: [
        { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop", type: "series", rating: "TV-14" },
        { id: 2, title: "The Crown", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 3, title: "Ozark", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 4, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 5, title: "The Witcher", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 6, title: "Dark", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", type: "series", rating: "TV-14" }
      ]
    },
    {
      title: "Popular Movies",
      items: [
        { id: 7, title: "The Matrix", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop", type: "movie", rating: "R" },
        { id: 8, title: "Inception", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" },
        { id: 9, title: "Interstellar", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" },
        { id: 10, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" },
        { id: 11, title: "Pulp Fiction", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop", type: "movie", rating: "R" },
        { id: 12, title: "Fight Club", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", type: "movie", rating: "R" }
      ]
    },
    {
      title: "Netflix Originals",
      items: [
        { id: 13, title: "House of Cards", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 14, title: "Orange is the New Black", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 15, title: "Narcos", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 16, title: "The Umbrella Academy", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop", type: "series", rating: "TV-14" },
        { id: 17, title: "Money Heist", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" },
        { id: 18, title: "Black Mirror", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop", type: "series", rating: "TV-MA" }
      ]
    },
    {
      title: "Action & Adventure",
      items: [
        { id: 19, title: "John Wick", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop", type: "movie", rating: "R" },
        { id: 20, title: "Mad Max: Fury Road", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop", type: "movie", rating: "R" },
        { id: 21, title: "Mission Impossible", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" },
        { id: 22, title: "Fast & Furious", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" },
        { id: 23, title: "Deadpool", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop", type: "movie", rating: "R" },
        { id: 24, title: "Wonder Woman", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", type: "movie", rating: "PG-13" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation onSearchClick={() => setIsSearchOpen(true)} />
      <HeroBanner />
      
      <div className="relative z-10 -mt-32 space-y-8 pb-20">
        {contentCategories.map((category, index) => (
          <ContentRow
            key={category.title}
            title={category.title}
            items={category.items}
            delay={index * 0.1}
          />
        ))}
      </div>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        allContent={contentCategories.flatMap(cat => cat.items)}
      />
    </div>
  );
};

export default Index;
