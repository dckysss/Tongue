import React, { ReactNode } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useEye } from '../context/EyeContext';
import { SearchModal } from './SearchModal';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setSearchQuery } = useEye();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-sky-600 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              className="md:hidden rounded-md p-2 hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-semibold text-white">
              Tongue Anatomy Explorer
            </h1>
          </div>
          
          <button 
            className="rounded-md p-2 hover:bg-sky-500 text-white flex items-center gap-2"
            onClick={openSearch}
            aria-label="Search"
          >
            <Search size={20} />
            <span className="hidden md:inline">Search</span>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for mobile - shown only when menu is open */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleMenu}>
            <div 
              className="bg-white w-64 h-full overflow-y-auto p-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Menu</h2>
                <button 
                  className="p-1 rounded hover:bg-gray-100"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="#anatomi" 
                      className="block py-2 px-4 hover:bg-accent-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Anatomi Lidah
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#struktur" 
                      className="block py-2 px-4 hover:bg-accent-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Struktur Lidah
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#sensor" 
                      className="block py-2 px-4 hover:bg-accent-50 rounded-md"
                      onClick={toggleMenu}
                    >
                      Sensor Rasa
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Search Modal */}
      {isSearchOpen && <SearchModal onClose={closeSearch} />}
    </div>
  );
};