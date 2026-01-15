import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  const menuItems = ["Home", "About", "Product", "Festival", "Events", "Contact Us"];

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
          {menuItems.map((item, index) => (
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
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
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
          Explore Events
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.nav>
  );
}