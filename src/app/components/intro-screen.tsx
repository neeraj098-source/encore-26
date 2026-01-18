import { motion } from "framer-motion"; // motion/react ki jagah framer-motion standard hai

// Video path - Ensure karo ki ye public folder ya assets me sahi jagah ho
const buildingVideo = "src/assets/ab.mp4"; 

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #1a1d2e 0%, #0A0A0B 100%)",
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 1. Atmospheric Fog Layers (Ambient Background) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 255, 209, 0.15) 0%, transparent 60%)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 2. Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              background: i % 2 === 0 ? "#00FFD1" : "#FFB800",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px currentColor",
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* 3. Main Video Animation Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{
          scale: 0.8,
          opacity: 0,
          filter: "brightness(1)",
        }}
        animate={{
          scale: [1.4, 1.3, 20],      // Initial se normal, fir 12x zoom (portal effect)
          opacity: [0, 1, 1, 0],    // Zoom ke saath hi disappear ho jayega
          filter: ["brightness(1)", "brightness(1.2)", "brightness(2)"], // Glow badhega zoom par
        }}
        transition={{
          delay: 0.5,
          duration: 3.5,            // Poora animation time
          times: [0, 0.3, 0.8, 1],  // Kab kya change hoga
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
        onAnimationComplete={onComplete}
      >
        {/* Soft Glow behind the video */}
        <div className="absolute w-[60%] h-[60%] bg-cyan-500/20 blur-[120px] rounded-full" />

        {/* The Video Element */}
        <video
          src={buildingVideo}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-10 w-full h-full object-contain max-w-[1200px]"
          style={{
            filter: "drop-shadow(0 0 30px rgba(0, 255, 209, 0.3))",
          }}
        />
      </motion.div>

      {/* 4. Portal Rings Effect (Zoom ke waqt active hote hain) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/30 rounded-full"
            initial={{ width: 100, height: 100, scale: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{
              delay: 2.3 + i * 0.2,
              duration: 1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* 5. Final Flash (Jab zoom max ho jaye) */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 0] }}
        transition={{
          delay: 2.8,
          duration: 0.7,
          times: [0, 0.7, 0.9, 1],
        }}
      />
    </motion.div>
  );
}