
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export const HeroBanner = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-16">
        <div className="max-w-lg space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Stranger Things
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          
          <div className="flex items-center space-x-2 text-sm">
            <span className="bg-red-600 px-2 py-1 rounded text-white font-semibold">
              97% Match
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-300">
              2016
            </span>
            <span className="border border-gray-400 px-2 py-1 rounded text-gray-300">
              TV-14
            </span>
            <span className="text-gray-300">4 Seasons</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-colors duration-200">
              <Play className="w-5 h-5 fill-current" />
              <span>Play</span>
            </button>
            
            <button className="bg-gray-600/70 text-white px-6 py-3 rounded-md font-semibold flex items-center space-x-2 hover:bg-gray-600/90 transition-colors duration-200 backdrop-blur-sm">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>

      {/* Volume Control */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-32 right-4 md:right-16 z-10 w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      {/* Age Rating */}
      <div className="absolute bottom-32 left-4 md:left-16 z-10 border border-gray-400 px-3 py-1 rounded text-gray-300 text-sm">
        TV-14
      </div>
    </div>
  );
};
