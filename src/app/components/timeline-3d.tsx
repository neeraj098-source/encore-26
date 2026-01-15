import { motion } from "motion/react";
import { Calendar } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
  color: string;
}

const events: TimelineEvent[] = [
  {
    date: "19th February",
    title: "Opening Ceremony",
    description: "Grand inauguration with cultural performances and guest speakers",
    side: "left",
    color: "#FF6B00",
  },
  {
    date: "19th February",
    title: "Day 1 Events",
    description: "Dramatics, Music competitions, and Evening cultural programs",
    side: "right",
    color: "#FF00FF",
  },
  {
    date: "20th February",
    title: "Day 2 Highlights",
    description: "Dance competitions, Entrepreneurship events, and Media showcases",
    side: "left",
    color: "#00FFD1",
  },
  {
    date: "21st February",
    title: "Grand Finale",
    description: "Special events, Prize distribution, and Closing ceremony",
    side: "right",
    color: "#FFB800",
  },
];

export function Timeline3D() {
  return (
    <div className="py-32 px-4 md:px-8 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0514 0%, #1a0b28 50%, #0a0514 100%)" }}>
      {/* Ambient Lighting */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-15"
        style={{ background: "radial-gradient(circle, #FF6B00 0%, #FF00FF 50%, transparent 70%)" }}
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-24"
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
              Event Timeline
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
              Event Timeline
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "rgba(255, 255, 255, 0.7)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Three days of unforgettable celebrations
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{
              background: "linear-gradient(180deg, transparent 0%, #FFB800 10%, #00FFD1 50%, #FFB800 90%, transparent 100%)",
              boxShadow: "0 0 20px rgba(255, 184, 0, 0.5)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  event.side === "left" ? "md:justify-start" : "md:justify-end"
                } justify-center`}
                initial={{ opacity: 0, x: event.side === "left" ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Center Dot */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full relative z-10"
                    style={{
                      background: event.color,
                      boxShadow: `0 0 30px ${event.color}`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div
                    className="absolute w-12 h-12 rounded-full blur-lg opacity-50"
                    style={{
                      background: event.color,
                    }}
                  />
                </motion.div>

                {/* Event Card */}
                <motion.div
                  className="w-full md:w-5/12 group"
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    perspective: "1500px",
                  }}
                >
                  <div
                    className="p-8 rounded-3xl backdrop-blur-xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                      border: `1px solid ${event.color}30`,
                      boxShadow: `0 25px 70px rgba(0, 0, 0, 0.4), 0 0 40px ${event.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Date Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                      style={{
                        background: `${event.color}20`,
                        border: `1px solid ${event.color}40`,
                      }}
                    >
                      <Calendar size={18} style={{ color: event.color }} />
                      <span
                        className="text-sm tracking-wide"
                        style={{
                          fontFamily: "Plus Jakarta Sans, sans-serif",
                          color: event.color,
                        }}
                      >
                        {event.date}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-2xl md:text-3xl mb-3 tracking-wide"
                      style={{
                        fontFamily: "Cinzel, serif",
                        color: "#ffffff",
                        textShadow: `0 4px 20px ${event.color}40`,
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-base md:text-lg leading-relaxed"
                      style={{
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        color: "rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at top right, ${event.color}20 0%, transparent 70%)`,
                        borderTopRightRadius: "1.5rem",
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Bottom Glow */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${event.color} 50%, transparent 100%)`,
                        boxShadow: `0 0 20px ${event.color}`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Card Shadow */}
                  <div
                    className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 -z-10 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${event.color}40 0%, transparent 70%)`,
                      transform: "translateY(20px) scale(0.95)",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}