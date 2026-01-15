import { motion } from "motion/react";
import { ArrowRight, Mouse } from "lucide-react";
import encoreLogo from "../../assets/Encore Logo.png";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden encore-hero-bg">
      {/* Hero Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Encore Festival"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10, 10, 11, 0.2) 0%, rgba(10, 10, 11, 0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Additional Floating Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              background:
                i % 4 === 0
                  ? "rgba(255, 184, 0, 0.7)"
                  : i % 4 === 1
                  ? "rgba(255, 0, 255, 0.7)"
                  : i % 4 === 2
                  ? "rgba(0, 255, 209, 0.7)"
                  : "rgba(255, 100, 100, 0.7)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${15 + Math.random() * 25}px currentColor`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -40 + Math.random() * 80, 0],
              x: [0, -20 + Math.random() * 40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="relative inline-block select-none">
            <img
              src={encoreLogo}
              alt="ENCORE '26"
              className="mx-auto relative z-20 w-auto h-auto max-w-[680px]"
              style={{
                filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))",
              }}
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl mb-8 select-none encore-display"
          style={{
            color: "#FFD700",
            textShadow: "0 8px 32px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4)",
            letterSpacing: "0.15em",
            cursor: "default",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          IET Lucknow
        </motion.h2>

        {/* Date Badge */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div
            className="inline-block px-8 py-4 rounded-full backdrop-blur-md select-none"
            style={{
              background: "rgba(255, 100, 200, 0.15)",
              border: "1px solid rgba(255, 100, 200, 0.4)",
              boxShadow: "0 8px 32px rgba(255, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              cursor: "default",
            }}
          >
            <p
              className="text-2xl md:text-3xl tracking-widest"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "#FFB8E6",
                textShadow: "0 4px 20px rgba(255, 0, 255, 0.5)",
              }}
            >
              19-21 FEB 2026
            </p>
          </div>
        </motion.div>

        {/* Mouse Scroll Icon - Centered */}
        <motion.div
          className="flex items-center justify-center select-none"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ cursor: "default" }}
        >
          <div
            className="p-3 rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 184, 0, 0.3)",
            }}
          >
            <Mouse size={24} style={{ color: "#FFB800" }} />
          </div>
        </motion.div>
      </div>

      {/* Contact Now Button - Bottom Left */}
      <motion.button
        className="fixed bottom-8 left-8 z-20 px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 group select-none"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          color: "#00FFD1",
          background: "rgba(0, 255, 209, 0.12)",
          border: "2px solid #00FFD1",
          boxShadow: "0 8px 32px rgba(0, 255, 209, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          cursor: "pointer",
        }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{
          scale: 1.05,
          background: "rgba(0, 255, 209, 0.22)",
          boxShadow: "0 12px 40px rgba(0, 255, 209, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Contact now
        <motion.div
          animate={{ x: [-1, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.button>

      {/* Explore Events Button - Bottom Right */}
      <motion.button
        className="fixed bottom-8 right-8 z-20 px-8 py-4 rounded-full text-lg font-medium flex items-center gap-3 select-none"
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #FFB800 100%)",
          color: "#ffffff",
          boxShadow: "0 12px 40px rgba(255, 107, 0, 0.6)",
          cursor: "pointer",
        }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 16px 48px rgba(255, 107, 0, 0.8)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        Explore Events
        <motion.div
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </motion.button>

      {/* Bottom Fade Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #0a0514 100%)",
        }}
      />
    </div>
  );
}