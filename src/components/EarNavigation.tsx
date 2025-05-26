import React from 'react';
import { useEye } from '../context/EyeContext';
import { EyeSection } from '../types';

export const EarNavigation: React.FC = () => {
  const { activeSection, setActiveSection } = useEye();

  const sections: { id: EyeSection; label: string }[] = [
    { id: 'anatomi', label: 'Anatomi Lidah' },
    { id: 'struktur', label: 'Struktur Lidah' },
    { id: 'sensor', label: 'Sensor Rasa' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-1 inline-flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeSection === section.id
              ? 'bg-accent-100 text-accent-800 font-medium'
              : 'hover:bg-gray-100'
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};