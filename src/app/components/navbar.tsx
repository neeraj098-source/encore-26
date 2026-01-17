import { motion } from "motion/react";
import { ArrowRight, X, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import TextType from "./TextType";
import { useAuth } from "../context/AuthContext";
import { AuthModal } from "./AuthModal";
import { CADashboard } from "./CADashboard";
import { TicketsModal } from "./TicketsModal";
import { MerchandiseModal } from "./MerchandiseModal";
import { LegacyGallery } from "./LegacyGallery";

export function Navbar() {
  const { isLoggedIn, user, isCAReg, logout } = useAuth();
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSponsorsModal, setShowSponsorsModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCADashboard, setShowCADashboard] = useState(false);
  const [showTicketsPage, setShowTicketsPage] = useState(false);
  const [showMerchandiseModal, setShowMerchandiseModal] = useState(false);
  const [showLegacyGallery, setShowLegacyGallery] = useState(false);
  const menuItems = ["Home", "About", "Merchandise", "Festival", "Sponsors", "Tickets", "Events", "Contact Us"];

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setShowAboutModal(false);
        setShowSponsorsModal(false);
        setShowAuthModal(false);
        setShowCADashboard(false);
        setShowTicketsPage(false);
        setShowMerchandiseModal(false);
        setShowLegacyGallery(false);
      }
    }
    if (showAboutModal || showSponsorsModal || showAuthModal || showCADashboard || showTicketsPage || showMerchandiseModal || showLegacyGallery) window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showAboutModal, showSponsorsModal, showAuthModal, showCADashboard, showTicketsPage, showMerchandiseModal, showLegacyGallery]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        background: "rgba(10, 5, 20, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 107, 0, 0.1)",
        cursor: "default",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl tracking-wider select-none encore-display encore-logo"
          style={{
            background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
        >
          ENCORE '26
        </motion.div>

        {/* Menu Items - Hidden on mobile */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, index) => {
            const isAbout = item === "About";
            const isMerchandise = item === "Merchandise";
            const isFestival = item === "Festival";
            const isSponsors = item === "Sponsors";
            const isTickets = item === "Tickets";
            const isEvents = item === "Events";
            const element = isMerchandise ? (
              <motion.button
                key={item}
                onClick={() => setShowMerchandiseModal(true)}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ) : isAbout ? (
              <motion.button
                key={item}
                onClick={() => setShowAboutModal(true)}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ) : isFestival ? (
              <motion.button
                key={item}
                onClick={() => setShowLegacyGallery(true)}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ) : isSponsors ? (
              <motion.button
                key={item}
                onClick={() => setShowSponsorsModal(true)}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ) : isTickets ? (
              <motion.button
                key={item}
                onClick={() => setShowTicketsPage(true)}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                  background: 'none',
                  border: 'none',
                  padding: 0
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ) : isEvents ? (
              <motion.a
                key={item}
                href="#events"
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ) : (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative text-sm tracking-wide group select-none"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  cursor: "pointer",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ color: "#FFB800" }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            );
            return element;
          })}
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-orange-500 text-[#1a1a1a] font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                <User size={16} />
                <span className="text-sm">{user?.name || 'User'}</span>
              </motion.div>
              {isCAReg && (
                <motion.button
                  onClick={() => setShowCADashboard(true)}
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#1a1a1a] font-semibold text-sm hover:bg-orange-500 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  CA Dashboard
                </motion.button>
              )}
              <motion.button
                onClick={() => logout()}
                className="px-4 py-2 rounded-lg border-2 border-[#D4AF37] text-[#D4AF37] font-semibold text-sm hover:bg-[#D4AF37] hover:text-[#1a1a1a] transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <motion.button
              onClick={() => setShowAuthModal(true)}
              className="px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 select-none"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                background: "linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)",
                color: "#0a0a0b",
                boxShadow: "0 8px 24px rgba(255, 184, 0, 0.4)",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 32px rgba(255, 184, 0, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Register
              <ArrowRight size={16} />
            </motion.button>
          )}
        </div>
      </div>

      {/* About Modal */}
      {showAboutModal && (
        <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowAboutModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-3xl mx-4 w-full bg-[#071017] border border-orange-800/20 rounded-lg p-8 shadow-2xl text-white"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <h2 className="text-3xl font-bold encore-display" style={{
                background: 'linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.05em'
              }}>About Encore</h2>
              <motion.button
                onClick={() => setShowAboutModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded hover:bg-white/10 flex-shrink-0"
              >
                <X size={20} className="text-orange-300" />
              </motion.button>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-6" />

            <TextType
              text={["Continuing the legacy of our college and growing at an exponential is not a ordinary thing. Encore, the pride of IET Lucknow as well as of the Uttar Pradesh, is going to surpass every expectation of our visitors. Such is an outreach of our startling fest that we are designated as the 'Annual cultural festival of its number 1 state college of Uttar Pradesh. Giving the perfect platform to the budding artist from all over the country, Encore amplifies the vibrancy of the crowd to the new heights and raises it to the heavens."]}
              typingSpeed={25}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                color: 'rgba(255,255,255,0.95)',
                fontWeight: 400,
                letterSpacing: '0.3px',
                fontSize: '1rem',
                lineHeight: '2rem',
                minHeight: '80px'
              }}
            />

            <div className="flex gap-3 pt-6 mt-6 border-t border-orange-800/10">
              <motion.button
                onClick={() => {
                  setShowAboutModal(false);
                  window.location.hash = '#about';
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 32px rgba(255, 184, 0, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded text-sm font-medium transition-all relative overflow-hidden group/btn"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  background: 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)',
                  color: '#0a0a0b',
                  boxShadow: '0 4px 12px rgba(255, 184, 0, 0.3)',
                  letterSpacing: '0.3px',
                  border: '2px solid rgba(255, 184, 0, 0.5)'
                }}
              >
                <span className="relative z-10">Explore Full Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                onClick={() => setShowAboutModal(false)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 24px rgba(255, 107, 0, 0.4)',
                  borderColor: 'rgba(255, 107, 0, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded text-sm font-medium transition-all border hover:bg-orange-500/10"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.3px',
                  borderColor: 'rgba(255, 107, 0, 0.4)',
                  color: '#FFB800'
                }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sponsors Modal */}
      {showSponsorsModal && (
        <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={() => setShowSponsorsModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-3xl mx-4 w-full rounded-lg p-8 shadow-2xl text-white group overflow-hidden"
            style={{
              backdropFilter: 'blur(20px)',
              background: 'linear-gradient(135deg, rgba(15,8,32,0.9) 0%, rgba(7,16,23,0.9) 100%)',
              border: '2px solid rgba(255, 107, 0, 0.3)',
              boxShadow: '0 0 40px rgba(255, 107, 0, 0.2), inset 0 0 20px rgba(255, 184, 0, 0.05)'
            }}
          >
            {/* Neon Glow Effect on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.15), transparent)',
                borderRadius: 'inherit'
              }}
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
              <motion.h2
                className="text-3xl font-bold tracking-wider"
                style={{
                  fontFamily: 'Cinzel, serif',
                  background: 'linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.05em'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                Sponsorship Opportunities
              </motion.h2>
              <motion.button
                onClick={() => setShowSponsorsModal(false)}
                whileHover={{ scale: 1.1, color: '#FF6B00' }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded hover:bg-white/10 flex-shrink-0 transition-all"
                style={{ color: '#FFB800' }}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 space-y-4"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                color: 'rgba(255,255,255,0.95)',
                fontWeight: 400,
                letterSpacing: '0.3px',
                lineHeight: '1.8'
              }}
            >
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="mb-4 hover:text-orange-300 transition-colors"
              >
                Encore '26 presents a unique opportunity to showcase your brand to thousands of vibrant students and professionals. With sponsorship tiers ranging from Title to Associate partners, there's an opportunity that matches your brand's vision.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6 hover:text-cyan-300 transition-colors"
              >
                From main stage branding to exclusive naming rights, our partnerships create lasting impressions and meaningful connections with an engaged and enthusiastic audience.
              </motion.p>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="text-orange-300 font-semibold mb-3"
                style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', letterSpacing: '0.05em' }}
              >
                Why Partner with Encore?
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="space-y-2 text-sm"
              >
                {['20,000+ footfall from top institutions', 'Extensive digital reach across social media', 'Direct engagement with talented youth', 'Premium branding opportunities', 'Customized sponsorship packages'].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                    className="hover:text-magenta-300 transition-colors"
                    style={{
                      background: `linear-gradient(90deg, rgba(255, 107, 0, 0.1), transparent)`,
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      paddingTop: '6px',
                      paddingBottom: '6px',
                      borderRadius: '4px'
                    }}
                  >
                    <span className="text-cyan-300 font-bold mr-2">✓</span>{item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <div className="relative z-10 flex gap-3 pt-6 mt-6 border-t border-orange-500/20">
              <motion.button
                onClick={() => {
                  setShowSponsorsModal(false);
                  window.location.hash = '#sponsors';
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 32px rgba(255, 184, 0, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded text-sm font-medium transition-all relative overflow-hidden group/btn"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  background: 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)',
                  color: '#0a0a0b',
                  boxShadow: '0 4px 12px rgba(255, 184, 0, 0.3)',
                  letterSpacing: '0.3px',
                  border: '2px solid rgba(255, 184, 0, 0.5)'
                }}
              >
                <span className="relative z-10">Explore Full Details</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                onClick={() => setShowSponsorsModal(false)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 24px rgba(255, 107, 0, 0.4)',
                  borderColor: 'rgba(255, 107, 0, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded text-sm font-medium transition-all border hover:bg-orange-500/10"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.3px',
                  borderColor: 'rgba(255, 107, 0, 0.4)',
                  color: '#FFB800'
                }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />

      {/* CA Dashboard */}
      <CADashboard isOpen={showCADashboard} onClose={() => setShowCADashboard(false)} />

      {/* Tickets Modal */}
      <TicketsModal isOpen={showTicketsPage} onClose={() => setShowTicketsPage(false)} />

      {/* Merchandise Modal */}
      <MerchandiseModal isOpen={showMerchandiseModal} onClose={() => setShowMerchandiseModal(false)} />

      {/* Legacy Gallery Modal */}
      <LegacyGallery isOpen={showLegacyGallery} onClose={() => setShowLegacyGallery(false)} />
    </motion.nav>
  );
}