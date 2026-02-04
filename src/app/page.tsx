"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import {
  AppleHelloEnglishEffect,
  AppleHelloSwahiliEffect,
  AppleHelloHindiEffect,
} from "@/components/ui/apple-hello-effect";

// Dynamic import for the 3D gallery to avoid SSR issues
const StellarCardGallery = dynamic(
  () => import("@/components/ui/stellar-gallery"),
  { ssr: false, loading: () => <div className="w-full h-screen bg-black" /> }
);

const languages = ["english", "swahili", "hindi"] as const;
type Language = (typeof languages)[number];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
  const [cycleCount, setCycleCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showRudyZoom, setShowRudyZoom] = useState(false);

  const currentLanguage = languages[currentIndex];

  // Auto-advance to next language on page 1
  useEffect(() => {
    if (currentPage !== 1) return;

    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % languages.length;
      setDirection(1);
      setCurrentIndex(nextIndex);

      if (nextIndex === 0) {
        setCycleCount((prev) => prev + 1);
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [currentIndex, currentPage]);

  // Auto transition to second page after 2 cycles
  useEffect(() => {
    if (cycleCount >= 2 && currentPage === 1) {
      const transitionTimer = setTimeout(() => {
        goToPage2();
      }, 1000);
      return () => clearTimeout(transitionTimer);
    }
  }, [cycleCount, currentPage]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 600 : -600,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 600 : -600,
      opacity: 0,
    }),
  };

  const renderEffect = (lang: Language) => {
    const props = { className: "h-28 md:h-36 lg:h-44", speed: 0.5 };

    switch (lang) {
      case "english":
        return <AppleHelloEnglishEffect {...props} />;
      case "swahili":
        return <AppleHelloSwahiliEffect {...props} />;
      case "hindi":
        return <AppleHelloHindiEffect {...props} />;
    }
  };

  const goToPage2 = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage(2);
    setTimeout(() => setIsTransitioning(false), 1500);
  };

  const goToPage3 = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowRudyZoom(true);
    
    // After the Rudy zoom animation completes, transition to page 3
    setTimeout(() => {
      setCurrentPage(3);
      setShowRudyZoom(false);
    }, 1500);
  };

  return (
    <AnimatePresence mode="wait">
      {currentPage === 1 && (
        <motion.main
          key="hello-page"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer"
          onClick={goToPage2}
        >
          <div className="relative w-full max-w-4xl h-52 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentLanguage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute flex items-center justify-center text-white"
              >
                {renderEffect(currentLanguage)}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.main>
      )}

      {currentPage === 2 && (
        <motion.div
          key="intro-page"
          initial={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="relative cursor-pointer"
          onClick={goToPage3}
        >
          {/* Rudy zoom overlay */}
          <AnimatePresence>
            {showRudyZoom && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                  style={{ textShadow: "0 0 80px rgba(59, 130, 246, 0.5)" }}
                  initial={{ scale: 1, opacity: 1, y: 0 }}
                  animate={{
                    scale: [1, 1.5, 30],
                    opacity: [1, 1, 0],
                    y: [0, 0, -50],
                  }}
                  transition={{
                    duration: 1.4,
                    ease: [0.4, 0, 0.2, 1],
                    times: [0, 0.3, 1],
                  }}
                >
                  Rudy
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>

          <BackgroundPathsWithClick title="My name is Rudra Jassal but you can call me Rudy" />
        </motion.div>
      )}

      {currentPage === 3 && (
        <motion.div
          key="gallery-page"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <StellarCardGallery />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Background with animated text
function BackgroundPathsWithClick({ title }: { title: string }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <FloatingPathsBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            {words.map((word, wordIndex) => {
              const isRudy = word === "Rudy";
              return (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 80, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: wordIndex * 0.08 + letterIndex * 0.025,
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
                      className={`inline-block text-transparent bg-clip-text ${
                        isRudy
                          ? "bg-gradient-to-r from-blue-400 to-blue-600"
                          : "bg-gradient-to-r from-white to-white/80"
                      }`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

// Floating paths background component
function FloatingPathsBackground() {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 12} -${189 + i * 15}C-${380 - i * 12} -${189 + i * 15} -${
      312 - i * 12
    } ${216 - i * 15} ${152 - i * 12} ${343 - i * 15}C${616 - i * 12} ${
      470 - i * 15
    } ${684 - i * 12} ${875 - i * 15} ${684 - i * 12} ${875 - i * 15}`,
    width: 0.8 + i * 0.08,
  }));

  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
          <title>Background Paths</title>
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="#3b82f6"
              strokeWidth={path.width}
              strokeOpacity={0.15 + path.id * 0.04}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
          <title>Background Paths Mirror</title>
          {paths.map((path, i) => (
            <motion.path
              key={`mirror-${path.id}`}
              d={`M-${380 + i * 12} -${189 + i * 15}C-${380 + i * 12} -${
                189 + i * 15
              } -${312 + i * 12} ${216 - i * 15} ${152 + i * 12} ${
                343 - i * 15
              }C${616 + i * 12} ${470 - i * 15} ${684 + i * 12} ${
                875 - i * 15
              } ${684 + i * 12} ${875 - i * 15}`}
              stroke="#3b82f6"
              strokeWidth={path.width}
              strokeOpacity={0.15 + path.id * 0.04}
              initial={{ pathLength: 0.3, opacity: 0.6 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.6, 0.3],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>
    </>
  );
}
