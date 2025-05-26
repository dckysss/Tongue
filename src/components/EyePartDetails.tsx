import React, { useState } from "react";
import { EyePart } from "../types";
import { getEyePartsBySection } from "../data/tongueData";
import { useEye } from "../context/EyeContext";

interface EyePartDetailsProps {
  part: EyePart | null;
}

export const EyePartDetails: React.FC<EyePartDetailsProps> = ({ part }) => {
  const { activeSection, selectPartById } = useEye();
  const rawSectionParts = getEyePartsBySection(activeSection);
  const [showModal, setShowModal] = useState(false);
  const [pinInfo, setPinInfo] = useState<string | null>(null);

  // Only compute unique parts once
  const filterUniqueParts = (parts: EyePart[]) => {
    const seen = new Set();
    return parts.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  };

  const sectionParts = filterUniqueParts(rawSectionParts);

  if (part) {
    return (
      <div className="card p-6 animate-fadeIn rounded-xl shadow bg-white space-y-4">
        <h2 className="text-2xl font-semibold text-accent-700 mb-3">{part.name}</h2>

        {part.description && (
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Fungsi</h3>
            <p className="text-gray-800">{part.description}</p>

            {part.details && (
              <button
                onClick={() => setShowModal(true)}
                className="mt-3 text-sm text-blue-600 hover:underline"
              >
                More Detail
              </button>
            )}
          </div>
        )}

        <h3 className="text-sm font-medium text-gray-500 mb-2">Lokasi</h3>
        <p className="text-gray-800 mb-4">
          {part.section === "anatomi"
            ? "Anatomi Lidah"
            : part.section === "struktur"
            ? "Struktur Mata"
            : "Sensor Rasa"}
        </p>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Bagian Lain pada Lidah</h3>
          <div className="flex flex-wrap gap-2">
            {sectionParts
              .filter((p) => p.id !== part.id)
              .map((otherPart) => (
                <button
                  key={otherPart.id}
                  onClick={() => selectPartById(otherPart.id)}
                  className="text-sm bg-gray-100 px-3 py-1.5 rounded-full hover:bg-accent-50 hover:text-accent-700 transition-colors"
                >
                  {otherPart.name}
                </button>
              ))}
          </div>
        </div>

        {/* MODAL */}
        {showModal && part.details && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg w-full max-w-xl relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-black"
                onClick={() => {
                  setShowModal(false);
                  setPinInfo(null);
                }}
              >
                ✕
              </button>
              <h2 className="text-lg font-semibold mb-4">
                Detail dari {part.name}
              </h2>

              <div className="relative w-full">
                {pinInfo && (
                  <div className="mt-4 p-3 bg-orange-50 border-l-4 border-orange-300 text-sm text-orange-900 rounded">
                    {pinInfo}
                  </div>
                )}
                <div className="relative w-full">
                  <img
                    src="/otot_pada_mata.jpg"
                    alt="Inner Eye Detail"
                    className="w-full rounded"
                  />
                  {part.details.map((detailItem) => (
                    <button
                      key={detailItem.id}
                      title={detailItem.label}
                      onClick={() => setPinInfo(detailItem.info)}
                      className="absolute w-4 h-4 rounded-full bg-[#FF9B45] ring-2 ring-white"
                      style={{
                        top: detailItem.top,
                        left: detailItem.left,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // No part selected — default view
  return (
    <div className="card p-6">
      <h2 className="text-2xl font-semibold text-accent-700 mb-4">
        {activeSection === "anatomi"
          ? "Anatomi Lidah"
          : activeSection === "struktur"
          ? "Struktur Lidah"
          : "Sensor Rasa"}
      </h2>

      <h3 className="text-base font-medium text-gray-700 mb-3">Bagian-bagian:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sectionParts.map((part) => (
          <button
            key={part.id}
            onClick={() => selectPartById(part.id)}
            className="text-left p-3 border border-gray-200 rounded-md hover:bg-accent-50 hover:border-accent-100 transition-all"
          >
            <span className="font-medium">{part.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
