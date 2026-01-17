import { motion } from "motion/react";
import { Download, MapPin, Users, Zap } from "lucide-react";

const whySponsorCards = [
  {
    icon: Users,
    title: "20k+ Footfall",
    description: "Reach thousands of vibrant students and young professionals in a single event."
  },
  {
    icon: Zap,
    title: "Digital Reach",
    description: "Extensive social media coverage and online engagement across all platforms."
  },
  {
    icon: MapPin,
    title: "Youth Engagement",
    description: "Direct interaction with the most energetic and talented youth of the region."
  }
];

const sponsorTiers = [
  {
    tier: "Title",
    count: 1,
    benefits: ["Exclusive naming rights", "Primary stage branding", "Peak hour announcement", "Social media features"],
    icon: "👑",
    color: "#FF6B00"
  },
  {
    tier: "Platinum",
    count: 3,
    benefits: ["Main stage branding", "Logo on all materials", "Dedicated announcement", "Event presence"],
    icon: "💎",
    color: "#00FFD1"
  },
  {
    tier: "Associate",
    count: "5+",
    benefits: ["Event materials", "Social media mention", "Website listing", "Brand visibility"],
    icon: "⭐",
    color: "#FF00FF"
  }
];

export function SponsorsPage() {
  const handleDownloadBrochure = () => {
    alert("Brochure download link will be provided soon!");
  };

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
            stroke="url(#sponsorArchGradient)"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="600" cy="15" r="8" fill="#FF00FF" opacity="0.8" />
          <defs>
            <linearGradient id="sponsorArchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="50%" stopColor="#FF00FF" />
              <stop offset="100%" stopColor="#00FFD1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Lighting */}
      <motion.div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
        style={{ background: "radial-gradient(circle, #FF6B00 0%, #FF00FF 50%, transparent 70%)" }}
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
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
              Our Partners in Excellence
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
              Our Partners in Excellence
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif", color: "rgba(255, 184, 230, 0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in celebrating excellence and amplifying your brand presence at Encore '26
          </motion.p>
        </div>
      </motion.section>

      {/* Why Sponsor Us Section */}
      <motion.section
        className="w-full py-32 px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
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
                Why Sponsor Encore?
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
                Why Sponsor Encore?
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {whySponsorCards.map((card, index) => {
              const Icon = card.icon;
              const colors = ["#FF6B00", "#00FFD1", "#FF00FF"];
              const cardColor = colors[index % colors.length];
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
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                >
                  {/* 3D Card Container with Neon Effects */}
                  <motion.div
                    className="relative h-full p-8 rounded-3xl backdrop-blur-xl cursor-pointer overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, rgba(26, 11, 40, 0.6) 0%, rgba(10, 5, 20, 0.7) 100%)",
                      border: "1px solid rgba(255, 107, 0, 0.15)",
                      boxShadow: "0 30px 80px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 107, 0, 0.1)",
                      transformStyle: "preserve-3d",
                      minHeight: "320px",
                    }}
                    whileHover={{
                      y: -16,
                      rotateX: 5,
                      rotateY: 5,
                      boxShadow: `0 40px 100px rgba(0, 0, 0, 0.6), 0 0 80px ${cardColor}50, inset 0 1px 0 rgba(255, 107, 0, 0.2)`
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
                        stroke={cardColor}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="20" cy="20" r="8" stroke={cardColor} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M8 8 L16 16" stroke={cardColor} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute top-0 right-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64 0 L32 0 Q64 0, 64 32 L64 0 Z"
                        stroke={cardColor}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="44" cy="20" r="8" stroke={cardColor} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M56 8 L48 16" stroke={cardColor} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute bottom-0 left-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 64 L0 32 Q0 64, 32 64 L0 64 Z"
                        stroke={cardColor}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="20" cy="44" r="8" stroke={cardColor} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M8 56 L16 48" stroke={cardColor} strokeWidth="1" opacity="0.6" />
                    </svg>

                    <svg
                      className="absolute bottom-0 right-0 w-16 h-16 opacity-30"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64 64 L32 64 Q64 64, 64 32 L64 64 Z"
                        stroke={cardColor}
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle cx="44" cy="44" r="8" stroke={cardColor} strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M56 56 L48 48" stroke={cardColor} strokeWidth="1" opacity="0.6" />
                    </svg>

                    {/* Gradient Accent Line */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${cardColor} 50%, transparent 100%)`,
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
                            background: `radial-gradient(circle, ${cardColor} 0%, transparent 70%)`,
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
                            background: `${cardColor}15`,
                            border: `1px solid ${cardColor}30`,
                            boxShadow: `0 8px 32px ${cardColor}20`,
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Icon className="w-12 h-12" style={{ color: cardColor }} />
                        </motion.div>
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-2xl md:text-3xl mb-4 tracking-wide"
                        style={{
                          fontFamily: "Cinzel, serif",
                          color: "#ffffff",
                          textShadow: `0 4px 20px ${cardColor}60`,
                        }}
                      >
                        {card.title}
                      </h3>

                      {/* Divider */}
                      <div
                        className="h-px mx-auto mb-4"
                        style={{
                          width: "60%",
                          background: `linear-gradient(90deg, transparent 0%, ${cardColor}60 50%, transparent 100%)`,
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

      {/* Sponsorship Tiers Section */}
      <motion.section
        className="w-full py-32 px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
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
                Sponsorship Tiers
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
                Sponsorship Tiers
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              >
                {/* 3D Card with Shadow */}
                <div className="relative h-full transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
                    style={{ background: `radial-gradient(circle, ${tier.color}40, transparent)` }}
                  />
                  
                  {/* Card Content */}
                  <div
                    className="relative h-full backdrop-blur-sm rounded-lg p-8 border transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(${parseInt(tier.color.slice(1, 3), 16)},${parseInt(tier.color.slice(3, 5), 16)},${parseInt(tier.color.slice(5, 7), 16)},0.1) 0%, rgba(15,8,32,0.8) 100%)`,
                      borderColor: `${tier.color}40`
                    }}
                  >
                    <div className="text-6xl mb-4">{tier.icon}</div>
                    <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "Cinzel, serif", color: tier.color }}>{tier.tier} Sponsor</h3>
                    <p className="text-white/60 mb-6">Up to {tier.count} available</p>

                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-white/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + i * 0.05 }}
                        >
                          <span style={{ color: tier.color }} className="mt-1 font-bold">✓</span>
                          <span style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      className="w-full py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all"
                      style={{
                        background: `linear-gradient(135deg, ${tier.color}, ${tier.color}dd)`,
                        fontFamily: "Plus Jakarta Sans, sans-serif"
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Download Brochure CTA */}
      <motion.section
        className="w-full py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border-2 rounded-lg p-12 hover:border-orange-400/80 transition-all relative group overflow-hidden"
            style={{ borderColor: "rgba(255, 107, 0, 0.5)" }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.h3
              className="text-3xl font-bold text-white mb-4 relative z-10"
              style={{ fontFamily: "Cinzel, serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to Make an Impact?
            </motion.h3>
            <motion.p
              className="text-white/70 mb-8 relative z-10"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              Download our sponsorship brochure to explore all opportunities and partnership details.
            </motion.p>

            <motion.button
              onClick={handleDownloadBrochure}
              className="px-8 py-3 rounded-lg font-semibold text-black flex items-center gap-2 mx-auto hover:shadow-lg transition-all relative z-10"
              style={{
                background: "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                boxShadow: "0 8px 24px rgba(255, 184, 0, 0.3)"
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="w-full py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-6 relative inline-block"
          style={{ fontFamily: "Cinzel, serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
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
            Become a Partner Today
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
            Become a Partner Today
          </span>
        </motion.h2>
        <motion.p
          className="text-white/70 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        >
          Get in touch with our sponsorship team to discuss partnership opportunities that align with your brand goals.
        </motion.p>
        <motion.a
          href="#become-partner"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-black hover:shadow-lg transition-all"
          style={{
            background: "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
            fontFamily: "Plus Jakarta Sans, sans-serif",
            boxShadow: "0 8px 24px rgba(255, 184, 0, 0.3)"
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Our Team
        </motion.a>
      </motion.section>
    </motion.div>
  );
}
