
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentCard } from './ContentCard';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
  rating: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  delay?: number;
}

export const ContentRow = ({ title, items, delay = 0 }: ContentRowProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;
      
      rowRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div 
      className="px-4 md:px-16 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 hover:text-gray-300 transition-colors duration-200">
        {title}
      </h2>
      
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-gray-900/80 to-transparent flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-gray-900"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Content Container */}
        <div
          ref={rowRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-gray-900/80 to-transparent flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:from-gray-900"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
