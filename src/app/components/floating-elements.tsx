import { motion } from "motion/react";
import { Music, Drama, Sparkles, Star } from "lucide-react";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Drama Mask - Top Left */}
      <motion.div
        className="absolute top-[12%] left-[8%]"
        initial={{ y: 0, x: 0, rotate: 0, scale: 1 }}
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: "translateZ(60px)",
          filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))",
        }}
      >
        <div className="relative">
          {/* Glow Layer */}
          <div
            className="absolute inset-0 blur-3xl opacity-40"
            style={{
              background: "radial-gradient(circle, #FFB800 0%, transparent 70%)",
              transform: "scale(1.5)",
            }}
          />
          {/* Icon */}
          <Drama
            size={90}
            className="relative opacity-[0.12]"
            style={{
              color: "#FFB800",
              filter: "drop-shadow(0 0 30px rgba(255, 184, 0, 0.6))",
            }}
          />
        </div>
      </motion.div>

      {/* 3D Musical Note - Top Right */}
      <motion.div
        className="absolute top-[25%] right-[12%]"
        initial={{ y: 0, x: 0, rotate: 0, scale: 1 }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          rotate: [0, -12, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          transform: "translateZ(40px)",
          filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))",
        }}
      >
        <div className="relative">
          {/* Glow Layer */}
          <div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background: "radial-gradient(circle, #00FFD1 0%, transparent 70%)",
              transform: "scale(1.6)",
            }}
          />
          {/* Icon */}
          <Music
            size={85}
            className="relative opacity-[0.15]"
            style={{
              color: "#00FFD1",
              filter: "drop-shadow(0 0 35px rgba(0, 255, 209, 0.7))",
            }}
          />
        </div>
      </motion.div>

      {/* 3D Floating Sphere - Bottom Left */}
      <motion.div
        className="absolute bottom-[20%] left-[15%]"
        initial={{ scale: 1, y: 0, rotateX: 0, rotateY: 0 }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -60, 0],
          rotateX: [0, 360],
          rotateY: [0, 180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div
          className="w-40 h-40 rounded-full opacity-[0.12]"
          style={{
            background: "linear-gradient(135deg, #FFB800 0%, #FF8C00 50%, transparent 100%)",
            boxShadow: "0 40px 100px rgba(255, 184, 0, 0.5), inset 0 10px 30px rgba(255, 255, 255, 0.2)",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* 3D Ring/Torus - Right Side */}
      <motion.div
        className="absolute top-[55%] right-[10%]"
        initial={{ rotate: 0, y: 0, scale: 1 }}
        animate={{
          rotate: [0, 360],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-32 h-32 rounded-full border-[10px] opacity-[0.12]"
          style={{
            borderColor: "#00FFD1",
            boxShadow: "0 30px 80px rgba(0, 255, 209, 0.4), inset 0 0 40px rgba(0, 255, 209, 0.3)",
            filter: "drop-shadow(0 0 50px rgba(0, 255, 209, 0.5))",
          }}
        />
      </motion.div>

      {/* Sparkle Elements - Top Center */}
      <motion.div
        className="absolute top-[18%] left-1/2 -translate-x-1/2"
        initial={{ opacity: 0.08, scale: 1, rotate: 0 }}
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <Sparkles
          size={75}
          style={{
            color: "#F5F5F5",
            filter: "drop-shadow(0 0 30px rgba(245, 245, 245, 0.5))",
          }}
        />
      </motion.div>

      {/* Star Element - Bottom Right */}
      <motion.div
        className="absolute bottom-[30%] right-[28%]"
        initial={{ opacity: 0.1, scale: 1, rotate: 0 }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.3, 1],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      >
        <Star
          size={70}
          fill="#FFB800"
          style={{
            color: "#FFB800",
            filter: "drop-shadow(0 0 25px rgba(255, 184, 0, 0.6))",
          }}
        />
      </motion.div>

      {/* Small Drama Mask - Bottom Center */}
      <motion.div
        className="absolute bottom-[15%] left-1/3"
        initial={{ y: 0, rotate: 0, scale: 1 }}
        animate={{
          y: [0, -45, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
      >
        <Drama
          size={65}
          className="opacity-[0.1]"
          style={{
            color: "#00FFD1",
            filter: "drop-shadow(0 0 20px rgba(0, 255, 209, 0.5))",
          }}
        />
      </motion.div>

      {/* Floating Glass Sphere - Center Left */}
      <motion.div
        className="absolute top-[65%] left-[8%]"
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: [0, 50, 0],
          y: [0, -70, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="w-28 h-28 rounded-full opacity-[0.1]"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 255, 209, 0.2) 50%, transparent 70%)",
            boxShadow: "0 30px 70px rgba(0, 255, 209, 0.4), inset -10px -10px 30px rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        />
      </motion.div>

      {/* Gradient Orb - Top Right Corner */}
      <motion.div
        className="absolute top-[8%] right-[5%]"
        initial={{ scale: 1, opacity: 0.08 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-36 h-36 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(255, 184, 0, 0.25) 0%, rgba(255, 140, 0, 0.15) 40%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
      </motion.div>
    </div>
  );
}
