import React, { useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { useEye } from '../context/EyeContext';

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const { searchQuery, setSearchQuery, searchResults, selectPartById } = useEye();
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus the input when the modal opens
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Close modal on escape key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSelectPart = (id: string) => {
    selectPartById(id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="p-4 border-b flex items-center gap-3">
          <Search size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search tongue parts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-lg"
          />
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search results */}
        <div className="max-h-96 overflow-y-auto">
          {searchQuery.trim() !== '' && (
            searchResults.length > 0 ? (
              <ul className="py-2">
                {[...new Map(searchResults.map(part => [part.name, part])).values()].map((part) => (
                  <li key={part.id}>
                    <button
                      onClick={() => handleSelectPart(part.id)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 flex flex-col"
                    >
                      <span className="font-medium">{part.name}</span>
                      <span className="text-sm text-gray-500 line-clamp-2">{part.description}</span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-8 text-center text-gray-500">
                No results found for "{searchQuery}"
              </div>
            )
          )}

          {searchQuery.trim() === '' && (
            <div className="py-8 text-center text-gray-500">
              Type to search for tongue anatomy parts
            </div>
          )}
        </div>
      </div>
    </div>
  );
};