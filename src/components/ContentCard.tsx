
import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
  rating: string;
}

interface ContentCardProps {
  item: ContentItem;
}

export const ContentCard = ({ item }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-64 h-36 cursor-pointer transition-all duration-300 hover:scale-110 hover:z-30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="w-full h-full rounded-md overflow-hidden bg-gray-800">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
      </div>

      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full bg-gray-900 rounded-md shadow-2xl border border-gray-700 animate-scale-in">
          {/* Image */}
          <div className="w-full h-36 rounded-t-md overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-white hover:border-white transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-white hover:border-white transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                </button>
              </div>
              <button className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-white hover:border-white transition-colors">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Title */}
            <h3 className="text-white font-semibold text-sm">{item.title}</h3>

            {/* Metadata */}
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-green-500 font-semibold">97% Match</span>
              <span className="border border-gray-400 px-1 rounded text-gray-400">
                {item.rating}
              </span>
              <span className="text-gray-400">
                {item.type === 'movie' ? '2h 15m' : '3 Seasons'}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-1 text-xs text-gray-400">
              <span>Drama</span>
              <span>•</span>
              <span>Thriller</span>
              <span>•</span>
              <span>Suspense</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
