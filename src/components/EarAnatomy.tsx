// EarAnatomy.tsx
import React, { useEffect } from 'react';
import { useEye } from '../context/EyeContext';
import { EarModel } from './EarModel';
import { EyePartDetails } from './EyePartDetails';
import { EarNavigation } from './EarNavigation';

export const EarAnatomy: React.FC = () => {
  const { activeSection, selectedPart, setSelectedPart } = useEye();

  // Reset selected part when section changes
  useEffect(() => {
    setSelectedPart(null);
  }, [activeSection]);

  return (
    <div className="container mx-auto px-4 py-6">
      <EarNavigation />
      
      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* 3D Model Section */}
        <div className="lg:w-1/2 h-[500px] card relative">
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-lg font-medium">
              {activeSection === 'anatomi' ? 'Anatomi Lidah' : 
               activeSection === 'struktur' ? 'Struktur Lidah' : 'Sensor Rasa'}
            </h2>
          </div>
          <EarModel />
        </div>
        
        {/* Information Panel */}
        <div className="lg:w-1/2">
          <EyePartDetails part={selectedPart} />
        </div>
      </div>
    </div>
  );
};
