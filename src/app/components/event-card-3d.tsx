import { motion, AnimatePresence } from "motion/react";
import { ReactNode, useState } from "react";

interface EventCard3DProps {
  title: string;
  events: string[];
  icon: ReactNode;
  color: string;
  delay: number;
}

export function EventCard3D({ title, events, icon, color, delay }: EventCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      style={{
        perspective: "1500px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full p-8 rounded-3xl backdrop-blur-xl cursor-pointer overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(26, 11, 40, 0.6) 0%, rgba(10, 5, 20, 0.7) 100%)",
          border: "1px solid rgba(255, 107, 0, 0.15)",
          boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 107, 0, 0.1)",
          transformStyle: "preserve-3d",
          minHeight: "400px",
        }}
        animate={{
          y: isHovered ? -16 : 0,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          boxShadow: isHovered
            ? `0 40px 100px rgba(0, 0, 0, 0.6), 0 0 80px ${color}50, inset 0 1px 0 rgba(255, 107, 0, 0.2)`
            : "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 107, 0, 0.1)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Islamic Corner Ornaments */}
        <svg
          className="absolute top-0 left-0 w-16 h-16 opacity-30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 L0 32 Q0 0, 32 0 L0 0 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="20" cy="20" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M8 8 L16 16" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>

        <svg
          className="absolute top-0 right-0 w-16 h-16 opacity-30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 0 L32 0 Q64 0, 64 32 L64 0 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="44" cy="20" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M56 8 L48 16" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-16 h-16 opacity-30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64 L0 32 Q0 64, 32 64 L0 64 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="20" cy="44" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M8 56 L16 48" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>

        <svg
          className="absolute bottom-0 right-0 w-16 h-16 opacity-30"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 64 L32 64 Q64 64, 64 32 L64 64 Z"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="44" cy="44" r="8" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M56 56 L48 48" stroke={color} strokeWidth="1" opacity="0.6" />
        </svg>

        {/* Gradient Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />

        {/* Main Content Container - Default State */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              className="relative h-full flex flex-col items-center justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Floating Icon Container */}
              <motion.div
                className="relative mb-6 flex items-center justify-center"
                style={{
                  transform: "translateZ(50px)",
                }}
              >
                <motion.div
                  className="absolute w-24 h-24 rounded-full blur-2xl opacity-30"
                  style={{
                    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="relative z-10 p-4 rounded-2xl backdrop-blur-sm"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    boxShadow: `0 8px 32px ${color}20`,
                  }}
                >
                  {icon}
                </motion.div>
              </motion.div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl mb-4 tracking-wide text-center"
                style={{
                  fontFamily: "Cinzel, serif",
                  color: "#ffffff",
                  textShadow: `0 4px 20px ${color}60`,
                }}
              >
                {title}
              </h3>

              {/* Divider */}
              <div
                className="h-px mx-auto mb-6"
                style={{
                  width: "60%",
                  background: `linear-gradient(90deg, transparent 0%, ${color}60 50%, transparent 100%)`,
                }}
              />

              {/* Hover Text */}
              <p
                className="text-sm tracking-widest uppercase"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: `${color}`,
                  opacity: 0.7,
                }}
              >
                Hover to explore
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Events List - Professional Glassmorphism Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(10, 14, 39, 0.92) 0%, 
                  rgba(15, 20, 45, 0.88) 50%,
                  rgba(10, 14, 39, 0.92) 100%)`,
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: `1px solid ${color}40`,
                boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.1), 
                           0 20px 60px rgba(0, 0, 0, 0.5)`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Decorative Glass Border Effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${color}15 0%, transparent 50%)`,
                }}
              />

              {/* Top Decorative Arc */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
                  boxShadow: `0 0 20px ${color}80`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              {/* Islamic Geometric Pattern Overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 30 L50 50 L40 30 Z M50 50 L60 70 L50 90 L40 70 Z M10 50 L30 40 L50 50 L30 60 Z M50 50 L70 40 L90 50 L70 60 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  backgroundSize: "100px 100px",
                }}
              />

              {/* Title in Expanded View */}
              <motion.h3
                className="text-2xl md:text-3xl mb-6 tracking-wide text-center relative z-10"
                style={{
                  fontFamily: "Cinzel, serif",
                  color: "#ffffff",
                  textShadow: `0 4px 20px ${color}60, 0 0 40px ${color}30`,
                }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {title}
              </motion.h3>

              {/* Decorative Divider with Ornament */}
              <motion.div
                className="relative mb-6 flex items-center gap-3"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div
                  className="h-px w-16"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, ${color} 100%)`,
                    boxShadow: `0 0 10px ${color}60`,
                  }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: color,
                    boxShadow: `0 0 15px ${color}`,
                  }}
                />
                <div
                  className="h-px w-16"
                  style={{
                    background: `linear-gradient(90deg, ${color} 0%, transparent 100%)`,
                    boxShadow: `0 0 10px ${color}60`,
                  }}
                />
              </motion.div>

              {/* Events List with Enhanced Styling */}
              <div className="space-y-4 w-full max-w-xs relative z-10">
                {events.map((event, index) => (
                  <motion.div
                    key={event}
                    className="group/item relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                  >
                    {/* Item Background on Hover */}
                    <motion.div
                      className="absolute inset-0 -left-2 -right-2 rounded-lg"
                      style={{
                        background: `linear-gradient(90deg, ${color}10 0%, transparent 100%)`,
                      }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileHover={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    <div className="relative flex items-center gap-3 py-1">
                      <motion.div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          background: color,
                          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                      <span
                        className="text-base md:text-lg"
                        style={{
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          color: "rgba(255, 255, 255, 0.95)",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {event}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Decorative Element */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: color,
                        boxShadow: `0 0 10px ${color}`,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Glass Shimmer Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${color}08 50%, transparent 100%)`,
                  }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Glow Effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
            boxShadow: `0 0 20px ${color}`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* 3D Depth Layers */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </motion.div>

      {/* Card Shadow Layer */}
      <div
        className="absolute inset-0 rounded-3xl blur-xl -z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}30 0%, transparent 70%)`,
          transform: "translateY(20px) scale(0.95)",
          opacity: isHovered ? 0.5 : 0,
        }}
      />
    </motion.div>
  );
}