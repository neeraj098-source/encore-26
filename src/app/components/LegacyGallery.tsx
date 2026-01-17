import { motion } from "motion/react";
import { X, Mic, Music, Laugh, Guitar, Radio, Music2 } from "lucide-react";
import { useState, useEffect } from "react";
import LogoLoop from "./LogoLoop";
import Antigravity from "./Antigravity";
import PixelTransition from "./PixelTransition";

interface LegacyGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Performer {
  id: number;
  name: string;
  year: string;
  icon: React.ReactNode;
}

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

const performerLogos = [
  { node: <Mic style={{ fontSize: '48px', color: '#D4AF37' }} />, title: "Jubin Nautiyal", href: "#" },
  { node: <Music style={{ fontSize: '48px', color: '#FFD700' }} />, title: "Neha Kakkar", href: "#" },
  { node: <Laugh style={{ fontSize: '48px', color: '#D4AF37' }} />, title: "Raju Srivastav", href: "#" },
  { node: <Guitar style={{ fontSize: '48px', color: '#FFD700' }} />, title: "The Local Train", href: "#" },
  { node: <Radio style={{ fontSize: '48px', color: '#D4AF37' }} />, title: "Kanishk Seth", href: "#" },
  { node: <Music2 style={{ fontSize: '48px', color: '#FFD700' }} />, title: "DJ Nucleya", href: "#" },
];

const performers: Performer[] = [
  { id: 1, name: "Jubin Nautiyal", year: "2022", icon: <Mic /> },
  { id: 2, name: "Neha Kakkar", year: "2021", icon: <Music /> },
  { id: 3, name: "Raju Srivastav", year: "2023", icon: <Laugh /> },
  { id: 4, name: "The Local Train", year: "2022", icon: <Guitar /> },
  { id: 5, name: "Kanishk Seth", year: "2023", icon: <Radio /> },
  { id: 6, name: "DJ Nucleya", year: "2021", icon: <Music2 /> },
];

const events: Event[] = [
  {
    id: 1,
    title: "Dandiya Night",
    description: "Traditional celebration in cultural attire",
    image: "💃",
  },
  {
    id: 2,
    title: "EDM Night",
    description: "Iconic DJ performance for massive crowd",
    image: "🎛️",
  },
  {
    id: 3,
    title: "Felicitation Moment",
    description: "Award ceremony on stage",
    image: "🏆",
  },
  {
    id: 4,
    title: "Crowd Energy",
    description: "Massive student celebration",
    image: "🎉",
  },
];

export function LegacyGallery({ isOpen, onClose }: LegacyGalleryProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('[data-scroll-container]') as HTMLElement;
      if (element) {
        setScrollY(element.scrollTop);
      }
    };

    const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
    if (scrollContainer && isOpen) {
      scrollContainer.addEventListener('scroll', handleScroll as EventListener);
      return () => scrollContainer.removeEventListener('scroll', handleScroll as EventListener);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-6xl mx-4 w-full rounded-lg p-8 shadow-2xl text-white group overflow-hidden max-h-[80vh] overflow-y-auto"
            style={{
              backdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(15,15,15,0.95) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 80px rgba(212, 175, 55, 0.2), inset 0 0 40px rgba(212, 175, 55, 0.05)'
            }}
            data-scroll-container
          >
            {/* Close Button */}
            <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
              <motion.h1
                className="text-4xl font-bold tracking-wider flex items-center gap-3"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                🎭 Legacy Gallery
              </motion.h1>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded hover:bg-white/10 flex-shrink-0 transition-all"
                style={{ color: '#D4AF37' }}
              >
                <X size={24} />
              </motion.button>
            </div>

            <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-8" />

            {/* Past Performers Section - LogoLoop Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 mb-12"
            >
              <motion.h2
                className="text-3xl font-bold mb-8 tracking-wider"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ✨ Past Performers
              </motion.h2>

              {/* LogoLoop Carousel */}
              <motion.div
                className="p-8 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0.02) 100%)',
                  border: '2px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.05)',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <LogoLoop
                  logos={performerLogos}
                  speed={40}
                  direction="left"
                  logoHeight={64}
                  gap={60}
                  hoverSpeed={0}
                  scaleOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(26, 26, 26, 0.95)"
                  ariaLabel="Encore '26 Past Performers"
                />
              </motion.div>

              {/* Performers Info Grid */}
              <motion.div
                className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {performers.map((performer, index) => (
                  <motion.div
                    key={performer.id}
                    className="p-4 rounded-lg text-center"
                    style={{
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                    whileHover={{
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                    }}
                  >
                    <p
                      className="text-sm font-bold tracking-wide"
                      style={{
                        fontFamily: 'Cinzel, serif',
                        color: '#FFD700',
                      }}
                    >
                      {performer.name}
                    </p>
                    <p
                      className="text-xs text-gray-400 mt-1"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {performer.year}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent my-12" />

            {/* Past Events Section - Pixel Transition Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="relative z-10"
            >
              <motion.h2
                className="text-3xl font-bold mb-8 tracking-wider"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #FFD700 0%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                🎪 Past Events - Festival Moments
              </motion.h2>

              {/* Pixel Transition Canvas */}
              <motion.div
                className="relative rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0.02) 100%)',
                  border: '2px solid rgba(212, 175, 55, 0.2)',
                  boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.05)',
                  height: '400px',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PixelTransition
                  firstContent={
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        placeItems: 'center',
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(192,57,43,0.1) 100%)',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ fontWeight: 900, fontSize: '4rem', color: '#D4AF37', margin: 0 }}>💃</p>
                        <p style={{ fontWeight: 700, fontSize: '1.5rem', color: '#FFD700', marginTop: '1rem', fontFamily: 'Cinzel, serif' }}>Dandiya Night</p>
                      </div>
                    </div>
                  }
                  secondContent={
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'grid',
                        placeItems: 'center',
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(192,57,43,0.2) 100%)',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ fontWeight: 900, fontSize: '4rem', color: '#D4AF37', margin: 0 }}>🎛️</p>
                        <p style={{ fontWeight: 700, fontSize: '1.5rem', color: '#FFD700', marginTop: '1rem', fontFamily: 'Cinzel, serif' }}>EDM Night</p>
                      </div>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='#D4AF37'
                  once={false}
                  animationStepDuration={0.4}
                  className="pixel-transition-card"
                />
              </motion.div>

              {/* Events Info Cards */}
              <motion.div
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="p-4 rounded-lg"
                    style={{
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.45 + index * 0.05 }}
                    whileHover={{
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                      borderColor: 'rgba(212, 175, 55, 0.5)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl flex-shrink-0">{event.image}</span>
                      <div>
                        <h3
                          className="font-bold tracking-wide text-sm"
                          style={{
                            fontFamily: 'Cinzel, serif',
                            color: '#FFD700',
                          }}
                        >
                          {event.title}
                        </h3>
                        <p
                          className="text-xs text-gray-400 mt-1"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Star Attractions Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-10 mt-12 p-6 rounded-lg text-center"
              style={{
                background: 'rgba(212, 175, 55, 0.05)',
                border: '2px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <p
                className="text-gray-300 text-sm"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                ✨ Scroll down to discover this year's incredible star attractions! ✨
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
}
