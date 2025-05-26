import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { EyePart, EyeSection } from '../types';
import { getEyePartById, getAllEyeParts } from '../data/tongueData';

interface EyeContextType {
  activeSection: EyeSection;
  setActiveSection: (section: EyeSection) => void;
  selectedPart: EyePart | null;
  setSelectedPart: (part: EyePart | null) => void;
  selectPartById: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: EyePart[];
}

const EyeContext = createContext<EyeContextType | undefined>(undefined);

export const useEye = () => {
  const context = useContext(EyeContext);
  if (!context) {
    throw new Error('useEye must be used within an EyeProvider');
  }
  return context;
};

interface EyeProviderProps {
  children: ReactNode;
}

export const EyeProvider: React.FC<EyeProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<EyeSection>('anatomi');
  const [selectedPart, setSelectedPart] = useState<EyePart | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const selectPartById = (id: string) => {
    const part = getEyePartById(id);
    if (part) {
      setSelectedPart(part);
      setActiveSection(part.section);
    }
  };

  useEffect(() => {
    setSelectedPart(null); // reset selection on section change
  }, [activeSection]);

  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return getAllEyeParts().filter(part => 
      part.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <EyeContext.Provider
      value={{
        activeSection,
        setActiveSection,
        selectedPart,
        setSelectedPart,
        selectPartById,
        searchQuery,
        setSearchQuery,
        searchResults
      }}
    >
      {children}
    </EyeContext.Provider>
  );
};