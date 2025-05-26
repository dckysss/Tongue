import React, { useState, useEffect } from "react";
import { useEye } from "../context/EyeContext";
import { getEyePartsBySection } from "../data/tongueData";
import { EyePart } from "../types";

const useBreakpoint = (): "default" | "sm" | "md" | "lg" => {
  const [breakpoint, setBreakpoint] = useState<"default" | "sm" | "md" | "lg">("default");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 320) setBreakpoint("sm");
      else setBreakpoint("default");
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

const getResponsivePosition = (
  position: EyePart["position"],
  breakpoint: "default" | "sm" | "md" | "lg"
): [number, number] => {
  if (Array.isArray(position)) return position;
  return position[breakpoint] || position.default;
};

export const EarModel: React.FC = () => {
  const { activeSection, selectedPart, selectPartById } = useEye();
  const [loading, setLoading] = useState(true);
  const breakpoint = useBreakpoint();
  const activeParts = getEyePartsBySection(activeSection);
  const [activeImagePart, setActiveImagePart] = useState<EyePart | null>(null);
  const isAnatomi = activeSection === "anatomi";
  const anatomiImages = ["/anatomi_lidah_a.png", "/anatomi_lidah_b.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
    setActiveImagePart(null);
    setLoading(true);
  }, [activeSection]);

  useEffect(() => {
    if (isAnatomi) {
      setLoading(true);
    }
  }, [currentSlide, isAnatomi]);

  const getImageUrl = () => {
    if (isAnatomi) return anatomiImages[currentSlide];
    switch (activeSection) {
      case "struktur":
        return "/sensor_lidah.png";
      case "sensor":
        return "/sensor_lidah.png";
      default:
        return "";
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % anatomiImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + anatomiImages.length) % anatomiImages.length);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const imageUrl = getImageUrl();

  return (
    <div className="h-full relative bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-md">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-accent-400 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-gray-500">Loading {activeSection} tongue anatomy...</p>
          </div>
        </div>
      )}

      <div className="relative w-full h-full">
        <img
          key={`${activeSection}-${currentSlide}`}
          src={imageUrl}
          alt={`${activeSection} tongue anatomy`}
          className="w-full h-full object-contain"
          onLoad={handleImageLoad}
        />

        {isAnatomi && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 z-20"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 z-20"
            >
              ▶
            </button>
          </>
        )}

        <div className="absolute inset-0">
          {activeParts.map((part) => {
            const [left, top] = getResponsivePosition(part.position, breakpoint);
            const isOnCurrentSlide =
              part.slide === undefined || part.slide === currentSlide;

            if (!isOnCurrentSlide) return null;

            return (
              <button
                key={`${part.uid || part.id}-${currentSlide}`}
                className={`absolute rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                  selectedPart?.id === part.id
                    ? "bg-accent-500 ring-4 ring-accent-200"
                    : "bg-accent-400 hover:bg-accent-500"
                }`}
                style={{ left: `${left}%`, top: `${top}%`, opacity: 0.8 }}
                onClick={() => {
                  if (activeSection === "struktur" && part.image) {
                    setActiveImagePart(part);
                  }
                  selectPartById(part.id);
                }}
                title={`${part.name} (Gambar ${currentSlide + 1})`}
              >
                <span className="sr-only">{part.name}</span>
              </button>
            );
          })}
        </div>

        {activeImagePart && activeSection === "struktur" && (
          <div className="absolute top-4 right-4 z-40 bg-white rounded-lg shadow-lg p-1 w-32 sm:w-40 md:w-48 lg:w-54 border">
            <div className="flex justify-end">
              <button
                onClick={() => setActiveImagePart(null)}
                className="text-gray-400 hover:text-black text-xs"
              >
                ✕
              </button>
            </div>
            <img
              src={activeImagePart.image}
              alt="Struktur detail"
              className="w-full h-auto rounded"
            />
          </div>
        )}
      </div>

      {!loading && (
        <a
          href="https://linktr.ee/AnatomiTelingaPBL2024?utm_source=linktree_profile_share&ltsid=c740682d-ddeb-477f-b481-0bbcc5f6fe60"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-md p-2 text-xs text-gray-600 hover:text-blue-500 hover:underline cursor-pointer"
        >
          Kelompok 25 Responsi Anatomi 2024
        </a>
      )}
    </div>
  );
};
