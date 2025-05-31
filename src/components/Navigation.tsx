
import { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  onSearchClick: () => void;
}

export const Navigation = ({ onSearchClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-4 md:px-16 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSearchClick}
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button className="text-white hover:text-gray-300 transition-colors duration-200">
            <Bell className="w-5 h-5" />
          </button>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-semibold">U</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-md shadow-lg">
                <div className="py-2">
                  <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors">
                    Manage Profiles
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors">
                    Account
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors">
                    Help Center
                  </button>
                  <hr className="border-gray-700 my-2" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors">
                    Sign out of Netflix
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-md border border-gray-700">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item}>
                <button className="block w-full text-left px-4 py-3 text-white hover:bg-gray-700 transition-colors duration-200">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
