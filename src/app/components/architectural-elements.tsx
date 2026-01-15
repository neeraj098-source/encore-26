import { motion } from "motion/react";

export function ArchitecturalElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large Ornate Arch - Top Center */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.08]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.08 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Arch */}
          <path
            d="M50 400 L50 200 Q50 50, 250 50 Q450 50, 450 200 L450 400"
            stroke="url(#archGradient1)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Inner Arch Detail */}
          <path
            d="M80 400 L80 210 Q80 80, 250 80 Q420 80, 420 210 L420 400"
            stroke="url(#archGradient2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          {/* Decorative Crown */}
          <path
            d="M250 30 L240 50 L250 45 L260 50 Z"
            fill="#FFB800"
            opacity="0.5"
          />
          <circle cx="250" cy="35" r="8" fill="#00FFD1" opacity="0.4" />
          
          {/* Islamic Geometric Pattern Inside Arch */}
          <g opacity="0.3">
            <path d="M200 150 L220 170 L200 190 L180 170 Z" fill="#FFB800" />
            <path d="M300 150 L320 170 L300 190 L280 170 Z" fill="#00FFD1" />
            <path d="M250 180 L270 200 L250 220 L230 200 Z" fill="#FFB800" />
            <circle cx="250" cy="120" r="15" stroke="#00FFD1" strokeWidth="2" fill="none" />
            <circle cx="250" cy="120" r="10" stroke="#FFB800" strokeWidth="1" fill="none" />
          </g>
          
          <defs>
            <linearGradient id="archGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00FFD1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="archGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFD1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Dome Silhouette - Top Right */}
      <motion.div
        className="absolute top-10 right-10 opacity-[0.06]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.06 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dome */}
          <path
            d="M40 120 Q40 40, 100 40 Q160 40, 160 120"
            stroke="#FFB800"
            strokeWidth="3"
            fill="url(#domeGradient)"
          />
          {/* Dome Base */}
          <rect x="30" y="120" width="140" height="10" fill="#00FFD1" opacity="0.5" />
          {/* Minaret Top */}
          <circle cx="100" cy="30" r="8" fill="#FFB800" />
          <rect x="95" y="30" width="10" height="15" fill="#00FFD1" />
          {/* Decorative Lines */}
          <path d="M60 80 Q100 60, 140 80" stroke="#00FFD1" strokeWidth="1.5" fill="none" />
          <path d="M70 100 Q100 85, 130 100" stroke="#FFB800" strokeWidth="1.5" fill="none" />
          
          <defs>
            <linearGradient id="domeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00FFD1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Ornate Arch - Left Side */}
      <motion.div
        className="absolute top-1/3 left-5 opacity-[0.05]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.05 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.8 }}
      >
        <svg width="150" height="300" viewBox="0 0 150 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arch Frame */}
          <path
            d="M20 300 L20 120 Q20 20, 75 20 Q130 20, 130 120 L130 300"
            stroke="#00FFD1"
            strokeWidth="2.5"
            fill="none"
          />
          {/* Inner Decorations */}
          <circle cx="75" cy="80" r="20" stroke="#FFB800" strokeWidth="1.5" fill="none" />
          <path d="M55 120 L75 100 L95 120" stroke="#FFB800" strokeWidth="1.5" fill="none" />
          <path d="M50 150 L100 150" stroke="#00FFD1" strokeWidth="1" />
          <path d="M50 180 L100 180" stroke="#FFB800" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Islamic Geometric Pattern - Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-10 opacity-[0.06]"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: 1, rotate: 45, opacity: 0.06 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Star Pattern */}
          <path
            d="M90 10 L95 85 L170 90 L95 95 L90 170 L85 95 L10 90 L85 85 Z"
            fill="url(#starPattern)"
            stroke="#FFB800"
            strokeWidth="1.5"
          />
          {/* Inner Octagon */}
          <path
            d="M90 40 L120 50 L140 80 L140 100 L120 130 L90 140 L60 130 L40 100 L40 80 L60 50 Z"
            fill="none"
            stroke="#00FFD1"
            strokeWidth="2"
          />
          {/* Center */}
          <circle cx="90" cy="90" r="15" fill="none" stroke="#FFB800" strokeWidth="2" />
          <circle cx="90" cy="90" r="8" fill="#00FFD1" opacity="0.3" />
          
          <defs>
            <radialGradient id="starPattern">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00FFD1" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Small Minaret - Bottom Left */}
      <motion.div
        className="absolute bottom-32 left-16 opacity-[0.07]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.07 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 1.2 }}
      >
        <svg width="80" height="200" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Minaret Top */}
          <circle cx="40" cy="20" r="10" fill="#FFB800" />
          <rect x="35" y="20" width="10" height="20" fill="#00FFD1" />
          {/* Balcony */}
          <rect x="25" y="40" width="30" height="8" fill="#FFB800" />
          {/* Tower */}
          <rect x="32" y="48" width="16" height="100" fill="url(#minaretGradient)" />
          {/* Decorative Bands */}
          <rect x="28" y="80" width="24" height="3" fill="#00FFD1" />
          <rect x="28" y="110" width="24" height="3" fill="#FFB800" />
          {/* Base */}
          <rect x="25" y="148" width="30" height="10" fill="#00FFD1" />
          <path d="M20 158 L60 158 L55 180 L25 180 Z" fill="#FFB800" opacity="0.5" />
          
          <defs>
            <linearGradient id="minaretGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB800" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00FFD1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFB800" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Ornate Border Pattern - Right Side */}
      <motion.div
        className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.04]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.04 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
      >
        <svg width="60" height="400" viewBox="0 0 60 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Repeating Islamic Pattern */}
          {[0, 80, 160, 240, 320].map((y, i) => (
            <g key={i} transform={`translate(0, ${y})`}>
              <circle cx="30" cy="30" r="15" stroke={i % 2 === 0 ? "#FFB800" : "#00FFD1"} strokeWidth="2" fill="none" />
              <path
                d="M30 15 L35 25 L30 35 L25 25 Z"
                fill={i % 2 === 0 ? "#00FFD1" : "#FFB800"}
                opacity="0.5"
              />
              <circle cx="30" cy="30" r="8" stroke={i % 2 === 0 ? "#00FFD1" : "#FFB800"} strokeWidth="1" fill="none" />
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
