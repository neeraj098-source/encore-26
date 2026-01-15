import { motion } from "motion/react";
import { EventCard3D } from "./event-card-3d";
import { Drama, Music, Mic, TrendingUp, Film, Trophy } from "lucide-react";

export function EventCategories() {
  return (
    <div
      className="py-32 px-4 md:px-8 relative"
      style={{
        background: "linear-gradient(180deg, #0a0514 0%, #1a0b28 50%, #0a0514 100%)",
      }}
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
            stroke="url(#categoryArchGradient)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="600" cy="15" r="8" fill="#FF00FF" opacity="0.8" />
          <defs>
            <linearGradient id="categoryArchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="50%" stopColor="#FF00FF" />
              <stop offset="100%" stopColor="#00FFD1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
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
              Event Categories
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
              Event Categories
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "rgba(255, 184, 230, 0.8)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Immerse yourself in a celebration where tradition meets modernity
          </motion.p>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Dramatics */}
          <EventCard3D
            title="Dramatics"
            events={["Bawaal", "Ekanki", "Tamasha", "Mime", "Kirdaar", "Cosplay"]}
            icon={<Drama size={40} style={{ color: "#FF6B00" }} />}
            color="#FF6B00"
            delay={0.1}
          />

          {/* Music */}
          <EventCard3D
            title="Music"
            events={["Sargam", "Swarsangam", "Raftaar"]}
            icon={<Music size={40} style={{ color: "#00FFD1" }} />}
            color="#00FFD1"
            delay={0.2}
          />

          {/* Dance */}
          <EventCard3D
            title="Dance"
            events={["Natraj", "Raqs"]}
            icon={<Mic size={40} style={{ color: "#FF00FF" }} />}
            color="#FF00FF"
            delay={0.3}
          />

          {/* Entrepreneurship */}
          <EventCard3D
            title="Entrepreneurship"
            events={["Marketing Mania", "Brand Wars"]}
            icon={<TrendingUp size={40} style={{ color: "#FFB800" }} />}
            color="#FFB800"
            delay={0.4}
          />

          {/* Media & Film */}
          <EventCard3D
            title="Media & Film"
            events={["Safarnama (Short Film)", "Reel Making"]}
            icon={<Film size={40} style={{ color: "#FF6B00" }} />}
            color="#FF6B00"
            delay={0.5}
          />

          {/* Special Events */}
          <EventCard3D
            title="Special Events"
            events={["Mr & Miss Encore", "Roadies", "Human Ludo"]}
            icon={<Trophy size={40} style={{ color: "#00FFD1" }} />}
            color="#00FFD1"
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
}