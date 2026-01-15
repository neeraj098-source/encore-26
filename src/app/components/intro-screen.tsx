import { motion } from "motion/react";

// Replaced local Gemini-generated PNG with a remote placeholder image URL
const buildingImage = "https://drive.google.com/file/d/1sc6PlXsbPIiHmH54ecds0H46oO5ndr0S/view?usp=sharing";

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
      transition={{ duration: 0.5 }}
    >
      {/* Soft Atmospheric Fog Layers */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 255, 209, 0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 30% 70%, rgba(255, 184, 0, 0.12) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Soft Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 3 === 0 ? "rgba(255, 184, 0, 0.3)" : i % 3 === 1 ? "rgba(0, 255, 209, 0.3)" : "rgba(255, 255, 255, 0.2)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${15 + Math.random() * 20}px currentColor`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -30 + Math.random() * 60, 0],
              x: [0, -15 + Math.random() * 30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Gentle Light Rays */}
      <motion.div
        className="absolute top-0 left-1/4 w-1 h-full opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255, 184, 0, 0.4) 30%, rgba(255, 184, 0, 0.2) 50%, transparent 100%)",
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-1/3 w-1 h-full opacity-10"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0, 255, 209, 0.3) 40%, rgba(0, 255, 209, 0.15) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          opacity: [0.05, 0.12, 0.05],
          x: [50, -50, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Main Building Image Animation */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{
          x: "40%",
          scale: 0.75,
          opacity: 0,
        }}
        animate={{
          x: ["40%", "0%", "0%"],
          scale: [0.75, 1.05, 22],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          delay: 0.8,
          duration: 2.5,
          times: [0, 0.4, 1],
          ease: [0.6, 0.05, 0.01, 0.9],
        }}
        onAnimationComplete={onComplete}
      >
        {/* Soft Glow Behind Building */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-40"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255, 184, 0, 0.3) 0%, rgba(0, 255, 209, 0.2) 50%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Building Image */}
        <img
          src={buildingImage}
          alt="Encore Building"
          className="relative z-10 w-full h-full object-contain"
          style={{
            maxWidth: "1200px",
            maxHeight: "100vh",
            filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5))",
          }}
        />
      </motion.div>

      {/* Soft Expanding Portal Rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 0] }}
        transition={{
          delay: 1.8,
          duration: 1.2,
          times: [0, 0.3, 0.7, 1],
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              border: `1px solid ${i % 2 === 0 ? "rgba(255, 184, 0, 0.25)" : "rgba(0, 255, 209, 0.25)"}`,
              boxShadow: `0 0 30px ${i % 2 === 0 ? "rgba(255, 184, 0, 0.2)" : "rgba(0, 255, 209, 0.2)"}`,
            }}
            animate={{
              scale: [0.3, 4],
              opacity: [0.6, 0],
            }}
            transition={{
              delay: 1.8 + i * 0.08,
              duration: 1.3,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Gentle Warp Flash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.6, 0] }}
        transition={{
          delay: 2.4,
          duration: 0.9,
          times: [0, 0.5, 0.7, 0.85, 1],
        }}
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.6) 0%, rgba(255, 184, 0, 0.3) 30%, rgba(0, 255, 209, 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Soft Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 20%, rgba(10, 10, 11, 0.5) 70%, rgba(10, 10, 11, 0.9) 100%)",
        }}
      />
    </motion.div>
  );
}
