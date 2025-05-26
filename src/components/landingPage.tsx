import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LandingPageProps = {
  onStart: () => void;
};

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const [step, setStep] = useState<"initial" | "loading" | "welcome">("initial");
  const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
  const [showPopup, setShopPopup] = useState(false);

  // Step: loading -> welcome
  useEffect(() => {
    let loadingTimeout: NodeJS.Timeout;
    if (step === "loading") {
      loadingTimeout = setTimeout(() => setStep("welcome"), 2000);
    }
    return () => clearTimeout(loadingTimeout);
  }, [step]);

  // Step: welcome -> fade out -> call onStart
  useEffect(() => {
    if (step === "welcome") {
      const timeout = setTimeout(() => setFadeOutWelcome(true), 2500);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-primary">Tongue Anatomy</h1>
        <img
          src="logo-tongue.png"
          alt="Logo Anatomi Telinga"
          className="mx-auto mt-4 w-[8rem] h-[8rem]"
        />
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <AnimatePresence mode="wait">
          {step === "initial" && (
            <motion.div
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">Glukosa</h2>
              <p onClick={() => setShopPopup(true)} className="text-muted-foreground mb-8 text-family:poppins">Made by Kelompok 19 Anatomi ✨</p>
              <button
                onClick={() => setStep("loading")}
                className="px-6 py-3 text-lg bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Start
              </button>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-primary font-medium animate-pulse">
                Initializing Neural Pathways...
              </p>
            </motion.div>
          )}

          {step === "welcome" && !fadeOutWelcome && (
            <motion.h1
              key="welcome"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5 }}
              className="text-3xl font-bold text-primary text-center font-poppins"
            >
              Welcome to the Tongue Anatomy Experience
            </motion.h1>
          )}

          {/* Trigger unmount + transition to homepage */}
          {fadeOutWelcome && (
            <motion.div
              key="fadeOut"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
              onAnimationComplete={onStart}
            />
          )}
        </AnimatePresence>
      </main>

      {showPopup && (
        <div
          onClick={() => setShopPopup(false)}
          className="fixed inset-0 w-full h-full bg-black/50 flex justify-center items-center content-center animate-in fade-in duration-500"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded p-4 sm:w-96 text-center"
          >
            <h3 className="font-bold text-xl mb-4">KELOMPOK RESPONSI 19</h3>

            <div className="grid grid-cols-1 gap-2">
              <p className="font-bold leading-4">
                Andika Toto Imamush Shalih
                <br />
                <span className="text-sm font-normal opacity-80">
                  2418011015
                </span>
              </p>
              <p className="font-bold leading-4">
                Elphynindo Dasfritama Saragih Garingging 
                <br />
                <span className="text-sm font-normal opacity-80">
                  2418011103
                </span>
              </p>
              <p className="font-bold leading-4">
                Ramadhana Syahfitri
                <br />
                <span className="text-sm font-normal opacity-80">
                  2458011009
                </span>
              </p>
              <p className="font-bold leading-4">
                Hamzah Rachmandhani Macan 
                <br />
                <span className="text-sm font-normal opacity-80">
                  2418011096
                </span>
              </p>
              <p className="font-bold leading-4">
                M.Dzaki Rafi Arrayan
                <br />
                <span className="text-sm font-normal opacity-80">
                  2418011154
                </span>
              </p>
              <p className="font-bold leading-4">
                Shifa Tanjia Zahira TS
                <br />
                <span className="text-sm font-normal opacity-80">
                  2458011036
                </span>
              </p>
              <p className="font-bold leading-4">
                Aura Anindita Tiaji
                <br />
                <span className="text-sm font-normal opacity-80">
                  2458011010
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground py-6 border-t mt-12">
        &copy; 2025 Anatomi Lidah. All rights reserved.
      </footer>
    </div>
  );
};
