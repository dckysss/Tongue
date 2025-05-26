import React from "react";
import { useEye } from "../context/EyeContext";
import { getEyePartsBySection } from "../data/tongueData";
import { EyeSection } from "../types";

interface EyeVisualizationProps {
  section: EyeSection;
  selectedPartId: string | undefined;
  onPartClick: (id: string) => void;
}

export const EyeVisualization: React.FC<EyeVisualizationProps> = ({
  section,
  selectedPartId,
  onPartClick,
}) => {
  const { activeSection } = useEye();
  const parts = getEyePartsBySection(activeSection);

  const getImageUrl = () => {
    switch (activeSection) {
      case "anatomi":
        return "/images/anatomi_lidah.jpg";
      case "struktur":
        return "/images/sensor_lidah.png";
      case "sensor":
        return "/images/sensor_lidah.png";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full h-full bg-white overflow-hidden rounded-lg">
      <img
        src={getImageUrl()}
        alt={`${activeSection} ear`}
        className="w-full h-full object-contain"
      />

      {/* Pin buttons */}
      {parts.map((part) => (
        <button
          key={part.id}
          className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 -translate-y-1/2
            transition-all ${
              selectedPartId === part.id
                ? "bg-accent-500 ring-4 ring-accent-200"
                : "bg-accent-400 hover:bg-accent-500"
            }`}
          style={{
            left: `${part.position?.[0] || 0}%`,
            top: `${part.position?.[1] || 0}%`,
            opacity: 0.75,
          }}
          onClick={() => onPartClick(part.id)}
          title={part.name}
        >
          <span className="sr-only">{part.name}</span>
        </button>
      ))}

      <a
        href="https://linktr.ee/AnatomiTelingaPBL2024?utm_source=linktree_profile_share&ltsid=c740682d-ddeb-477f-b481-0bbcc5f6fe60"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-md p-2 text-xs text-gray-600 hover:underline cursor-pointer"
      >
        Kelompok 25 Responsi Anatomi 2025
      </a>
    </div>
  );
};
