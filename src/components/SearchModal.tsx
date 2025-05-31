
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
  type: 'movie' | 'series';
  rating: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allContent: ContentItem[];
}

export const SearchModal = ({ isOpen, onClose, allContent }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.trim()) {
      const filtered = allContent.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContent(filtered);
    } else {
      setFilteredContent([]);
    }
  }, [searchTerm, allContent]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4 flex-1 max-w-2xl">
            <Search className="text-gray-400 w-6 h-6" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for movies, TV shows, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-white text-xl placeholder-gray-400 border-b border-gray-600 pb-2 focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors ml-4"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Search Results */}
        {searchTerm.trim() && (
          <div className="space-y-4">
            <h2 className="text-white text-xl font-semibold">
              {filteredContent.length > 0 
                ? `Found ${filteredContent.length} result${filteredContent.length !== 1 ? 's' : ''}`
                : 'No results found'
              }
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredContent.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer transform transition-transform duration-200 hover:scale-105"
                >
                  <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden bg-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="mt-2 space-y-1">
                    <h3 className="text-white text-sm font-medium group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-gray-400">
                      <span className="border border-gray-600 px-1 rounded">
                        {item.rating}
                      </span>
                      <span>{item.type === 'movie' ? 'Movie' : 'TV Show'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular Searches */}
        {!searchTerm.trim() && (
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-semibold">Popular Searches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allContent.slice(0, 9).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 bg-gray-800 rounded-md p-3 cursor-pointer hover:bg-gray-700 transition-colors"
                  onClick={() => setSearchTerm(item.title)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-10 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {item.type === 'movie' ? 'Movie' : 'TV Show'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
