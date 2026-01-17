import { motion } from "motion/react";
import { Award, Users, Music, Lightbulb } from "lucide-react";

const aboutCards = [
  {
    icon: Award,
    title: "Legacy of Excellence",
    description: "Encore has been the pride of IET Lucknow, recognized as the Annual Cultural Festival of Uttar Pradesh's number 1 state college, setting standards of excellence year after year.",
    color: "#FF6B00"
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description: "Providing the perfect platform to budding artists from across the country, amplifying their talents and creating meaningful connections with an engaged and enthusiastic audience.",
    color: "#00FFD1"
  },
  {
    icon: Music,
    title: "Cultural Celebration",
    description: "A vibrant celebration where tradition meets modernity, bringing together diverse talents in dramatics, music, dance, and more to create unforgettable experiences.",
    color: "#FF00FF"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Vision",
    description: "Continuously evolving to surpass expectations, Encore '26 raises the bar with innovative events, cutting-edge production, and visionary programming.",
    color: "#FFB800"
  }
];

export function AboutPage() {
  return (
    <motion.div
      className="w-full min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0a0514 0%, #1a0b28 25%, #0f0820 50%, #1a0b28 75%, #0a0514 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Chikankari Embroidery Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF6B00' stroke-width='0.8'%3E%3Cpath d='M80 20 C70 20, 60 30, 60 40 C60 50, 70 60, 80 60 C90 60, 100 50, 100 40 C100 30, 90 20, 80 20'/%3E%3Cpath d='M80 100 C70 100, 60 110, 60 120 C60 130, 70 140, 80 140 C90 140, 100 130, 100 120 C100 110, 90 100, 80 100'/%3E%3Cpath d='M20 80 C20 70, 30 60, 40 60 C50 60, 60 70, 60 80 C60 90, 50 100, 40 100 C30 100, 20 90, 20 80'/%3E%3Cpath d='M100 80 C100 70, 110 60, 120 60 C130 60, 140 70, 140 80 C140 90, 130 100, 120 100 C110 100, 100 90, 100 80'/%3E%3Ccircle cx='80' cy='80' r='15'/%3E%3Cpath d='M65 65 L95 95 M95 65 L65 95'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Decorative Arch Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-32 pointer-events-none">
        <svg
          className="w-full h-full opacity-[0.12]"
          viewBox="0 0 1200 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            d="M100 128 L100 80 Q100 20, 600 20 Q1100 20, 1100 80 L1100 128"
            stroke="url(#aboutArchGradient)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="600" cy="15" r="8" fill="#FF00FF" opacity="0.8" />
          <defs>
            <linearGradient id="aboutArchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="50%" stopColor="#FF00FF" />
              <stop offset="100%" stopColor="#00FFD1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Lighting */}
      <motion.div
        className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        style={{ background: "radial-gradient(circle, #FF00FF 0%, #FF6B00 50%, transparent 70%)" }}
        animate={{
          x: [-100, 150, -100],
          y: [0, -100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative w-full min-h-96 flex items-center justify-center py-32 px-6 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative max-w-4xl text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl mb-6 tracking-wider relative inline-block"
            style={{
              fontFamily: "Cinzel, serif",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span
              className="absolute inset-0 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.6,
              }}
            >
              About Encore '26
            </span>
            <span
              className="relative"
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Encore '26
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", color: "rgba(255, 184, 230, 0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Continuing the legacy of our college and growing at an exponential rate is not an ordinary thing
          </motion.p>
        </div>
      </motion.section>

      {/* Main About Text Section */}
      <motion.section
        className="w-full py-32 px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255, 255, 255, 0.95)",
              }}
            >
              Encore, the pride of IET Lucknow as well as of Uttar Pradesh, is going to surpass every expectation of our visitors. Such is the outreach of our startling fest that we are designated as the 'Annual cultural festival of the number 1 state college of Uttar Pradesh'.
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255, 255, 255, 0.90)",
              }}
            >
              Giving the perfect platform to budding artists from all over the country, Encore amplifies the vibrancy of the crowd to new heights and raises it to the heavens. This is more than a festival—it's a movement.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Cards Section */}
      <motion.section
        className="w-full py-32 px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl mb-6 tracking-wider relative inline-block"
              style={{
                fontFamily: "Cinzel, serif",
              }}
            >
              <span
                className="absolute inset-0 blur-2xl"
                style={{
                  background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: 0.6,
                }}
              >
                Our Core Values
              </span>
              <span
                className="relative"
                style={{
                  background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Core Values
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative h-full"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                  style={{
                    perspective: "1500px",
                  }}
                >
                  {/* 3D Card Container with Neon Effects */}
                  <motion.div
                    className="relative h-full p-8 rounded-3xl backdrop-blur-xl cursor-pointer overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(26, 11, 40, 0.6) 0%, rgba(10, 5, 20, 0.7) 100%)",
                      border: "1px solid rgba(255, 107, 0, 0.15)",
                      boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 107, 0, 0.1)",
                      transformStyle: "preserve-3d",
                      minHeight: "360px",
                    }}
                    whileHover={{
                      y: -16,
                      rotateX: 5,
                      rotateY: 5,
                      boxShadow: `0 40px 100px rgba(0, 0, 0, 0.6), 0 0 80px ${card.color}50, inset 0 1px 0 rgba(255, 107, 0, 0.2)`
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Corner Ornaments */}
                    <svg
                      className="absolute top-0 left-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0 L0 32 Q0 0, 32 0 L0 0 Z"
                        stroke={card.color}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="20" cy="20" r="8" stroke={card.color} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M8 8 L16 16" stroke={card.color} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute top-0 right-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64 0 L32 0 Q64 0, 64 32 L64 0 Z"
                        stroke={card.color}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="44" cy="20" r="8" stroke={card.color} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M56 8 L48 16" stroke={card.color} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute bottom-0 left-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 64 L0 32 Q0 64, 32 64 L0 64 Z"
                        stroke={card.color}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="20" cy="44" r="8" stroke={card.color} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M8 56 L16 48" stroke={card.color} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute bottom-0 right-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64 64 L32 64 Q64 64, 64 32 L64 64 Z"
                        stroke={card.color}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="44" cy="44" r="8" stroke={card.color} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M56 56 L48 48" stroke={card.color} strokeWidth="1" opacity="0.6" />
                    </svg>

                    {/* Gradient Accent Line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${card.color} 50%, transparent 100%)`,
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    />

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col items-center justify-center text-center">
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
                            background: `radial-gradient(circle, ${card.color} 0%, transparent 70%)`,
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
                            background: `${card.color}15`,
                            border: `1px solid ${card.color}30`,
                            boxShadow: `0 8px 32px ${card.color}20`,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-12 h-12" style={{ color: card.color }} />
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-xl md:text-2xl mb-4 tracking-wide"
                        style={{
                          fontFamily: "Cinzel, serif",
                          color: "#ffffff",
                          textShadow: `0 4px 20px ${card.color}60`,
                        }}
                      >
                        {card.title}
                      </h3>

                      {/* Divider */}
                      <div
                        className="h-px mx-auto mb-4"
                        style={{
                          width: "60%",
                          background: `linear-gradient(90deg, transparent 0%, ${card.color}60 50%, transparent 100%)`,
                        }}
                      />

                      {/* Description */}
                      <p
                        className="text-sm md:text-base"
                        style={{
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          color: "rgba(255, 255, 255, 0.85)",
                          lineHeight: "1.6",
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="w-full py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-6 relative inline-block"
          style={{ fontFamily: "Cinzel, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span
            className="absolute inset-0 blur-2xl"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.6,
            }}
          >
            Be Part of the Magic
          </span>
          <span
            className="relative"
            style={{
              background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Be Part of the Magic
          </span>
        </motion.h2>
        <motion.p
          className="text-white/70 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Join us in celebrating excellence, tradition, and innovation. Encore '26 awaits you.
        </motion.p>
        <motion.a
          href="#main"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-black hover:shadow-lg transition-all"
          style={{
            background: "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            boxShadow: "0 8px 24px rgba(255, 184, 0, 0.3)"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Events
        </motion.a>
      </motion.section>
    </motion.div>
  );
}
