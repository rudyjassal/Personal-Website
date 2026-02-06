"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Floating heart component
function FloatingHeart({ delay, left, size, duration }: { delay: number; left: string; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute bottom-0 text-red-400 pointer-events-none select-none"
      style={{ left, fontSize: size }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 1, 0],
        x: [0, 30, -20, 15, 0],
        rotate: [0, 15, -10, 20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      &#10084;
    </motion.div>
  );
}

// Teddy bear SVG component
function TeddyBear() {
  return (
    <motion.svg
      viewBox="0 0 200 220"
      className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-2xl"
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: [0, 3, -3, 0] }}
      transition={{
        scale: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 },
        rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Left ear */}
      <circle cx="55" cy="45" r="30" fill="#c2956b" />
      <circle cx="55" cy="45" r="18" fill="#f0c8a0" />
      {/* Right ear */}
      <circle cx="145" cy="45" r="30" fill="#c2956b" />
      <circle cx="145" cy="45" r="18" fill="#f0c8a0" />
      {/* Head */}
      <circle cx="100" cy="80" r="55" fill="#d4a574" />
      {/* Body */}
      <ellipse cx="100" cy="165" rx="50" ry="50" fill="#d4a574" />
      {/* Tummy */}
      <ellipse cx="100" cy="170" rx="35" ry="35" fill="#f0c8a0" />
      {/* Left arm */}
      <ellipse cx="45" cy="150" rx="18" ry="30" fill="#c2956b" transform="rotate(-20 45 150)" />
      {/* Right arm */}
      <ellipse cx="155" cy="150" rx="18" ry="30" fill="#c2956b" transform="rotate(20 155 150)" />
      {/* Left foot */}
      <ellipse cx="72" cy="210" rx="22" ry="14" fill="#c2956b" />
      <ellipse cx="72" cy="210" rx="14" ry="9" fill="#f0c8a0" />
      {/* Right foot */}
      <ellipse cx="128" cy="210" rx="22" ry="14" fill="#c2956b" />
      <ellipse cx="128" cy="210" rx="14" ry="9" fill="#f0c8a0" />
      {/* Muzzle */}
      <ellipse cx="100" cy="95" rx="25" ry="18" fill="#f0c8a0" />
      {/* Nose */}
      <ellipse cx="100" cy="88" rx="8" ry="5" fill="#4a3728" />
      {/* Mouth */}
      <path d="M92 96 Q100 106 108 96" fill="none" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" />
      {/* Left eye */}
      <circle cx="82" cy="72" r="6" fill="#4a3728" />
      <circle cx="84" cy="70" r="2" fill="white" />
      {/* Right eye */}
      <circle cx="118" cy="72" r="6" fill="#4a3728" />
      <circle cx="120" cy="70" r="2" fill="white" />
      {/* Heart the bear is holding */}
      <motion.g
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M85 145 C85 135, 70 130, 70 140 C70 150, 85 158, 85 158 C85 158, 100 150, 100 140 C100 130, 85 135, 85 145Z"
          fill="#e74c6f"
          transform="translate(15, -5)"
        />
      </motion.g>
    </motion.svg>
  );
}

// Confetti piece
function ConfettiPiece({ index }: { index: number }) {
  const colors = ["#ff6b8a", "#ff85a1", "#ffd1dc", "#ff1744", "#e91e63", "#f8bbd0", "#ffcdd2", "#ffd700", "#ff69b4"];
  const color = colors[index % colors.length];
  const left = Math.random() * 100;
  const delay = Math.random() * 0.5;
  const duration = 2 + Math.random() * 2;
  const size = 6 + Math.random() * 10;
  const rotation = Math.random() * 360;

  return (
    <motion.div
      className="absolute top-0 pointer-events-none"
      style={{
        left: `${left}%`,
        width: size,
        height: size * 0.6,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
      }}
      initial={{ y: -20, opacity: 1, rotate: rotation }}
      animate={{
        y: "100vh",
        opacity: [1, 1, 0],
        rotate: rotation + 720,
        x: [0, (Math.random() - 0.5) * 200],
      }}
      transition={{ duration, delay, ease: "easeIn" }}
    />
  );
}

export default function ValentinePage() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hasEvaded, setHasEvaded] = useState(false);
  const [saidYes, setSaidYes] = useState(false);
  const [noClickAttempts, setNoClickAttempts] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const evadeButton = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const maxX = container.width - 160;
    const maxY = container.height - 60;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPos({ x: newX, y: newY });
    setHasEvaded(true);
    setNoClickAttempts((prev) => prev + 1);
  }, []);

  // Messages that appear as you try to click no
  const noMessages = [
    "Sofia, will you be my Valentine?",
    "Are you sure about that?",
    "Really? Think again!",
    "The teddy bear is sad now...",
    "Please reconsider!",
    "Come on Sofia!",
    "You know you want to say yes!",
    "Just click yes already!",
    "The No button doesn't want to be clicked!",
    "JUST SAY YES!",
  ];

  const currentMessage = noMessages[Math.min(noClickAttempts, noMessages.length - 1)];

  // Floating hearts data
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    left: `${Math.random() * 100}%`,
    size: 14 + Math.random() * 24,
    duration: 6 + Math.random() * 8,
  }));

  // Yes button grows with each attempt
  const yesScale = 1 + noClickAttempts * 0.12;

  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-gradient-to-b from-pink-950 via-red-950 to-pink-950">
      {/* Floating hearts background */}
      {hearts.map((heart) => (
        <FloatingHeart key={heart.id} {...heart} />
      ))}

      {/* Sparkle overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-pink-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!saidYes ? (
          <motion.div
            key="question"
            ref={containerRef}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {/* Teddy Bear */}
            <TeddyBear />

            {/* Question */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-6 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-pink-300"
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {currentMessage}
            </motion.h1>

            {noClickAttempts === 0 && (
              <motion.p
                className="text-pink-300/70 text-lg md:text-xl mb-8 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                I made this just for you
              </motion.p>
            )}

            {noClickAttempts > 0 && (
              <motion.p
                className="text-pink-300/60 text-sm md:text-base mb-8 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                (Attempts to say no: {noClickAttempts})
              </motion.p>
            )}

            {/* Buttons */}
            <div className="relative flex gap-6 items-center justify-center w-full max-w-lg h-32">
              {/* Yes Button */}
              <motion.button
                onClick={() => setSaidYes(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ fontSize: `${1 + noClickAttempts * 0.08}rem` }}
              >
                Yes!
              </motion.button>

              {/* No Button - runs away */}
              <motion.button
                ref={noButtonRef}
                onMouseEnter={evadeButton}
                onTouchStart={evadeButton}
                onClick={evadeButton}
                className="px-8 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow z-10"
                animate={{
                  x: noButtonPos.x,
                  y: noButtonPos.y,
                  scale: Math.max(0.5, 1 - noClickAttempts * 0.06),
                }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                style={{ fontSize: `${Math.max(0.7, 1 - noClickAttempts * 0.04)}rem` }}
              >
                {noClickAttempts > 6 ? "..." : "No"}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Confetti */}
            {Array.from({ length: 60 }).map((_, i) => (
              <ConfettiPiece key={`confetti-${i}`} index={i} />
            ))}

            {/* Celebration content */}
            <motion.div
              className="text-center"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {/* Big pulsing heart */}
              <motion.div
                className="text-8xl md:text-9xl mb-4"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                &#10084;&#65039;
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-400 to-pink-300 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                YAAAY!
              </motion.h1>

              <motion.p
                className="text-2xl sm:text-3xl md:text-4xl text-pink-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                I knew you&apos;d say yes, Sofia!
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-pink-300/80 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                Happy Valentine&apos;s Day, my love!
              </motion.p>

              {/* Teddy bear with heart */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <TeddyBear />
              </motion.div>

              <motion.p
                className="text-pink-300/50 text-lg mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                See you on Feb 14th!
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
