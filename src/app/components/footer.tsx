import { motion } from "motion/react";
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative py-20 px-4 md:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0514 0%, #050208 100%)",
      }}
    >
      {/* Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L55 30L50 50L45 30L50 10M50 50L55 70L50 90L45 70L50 50M10 50L30 45L50 50L30 55L10 50M50 50L70 45L90 50L70 55L50 50' fill='%23FF6B00'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Ambient Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] opacity-12"
        style={{ background: "radial-gradient(circle, #FF6B00 0%, #FF00FF 50%, #00FFD1 80%, transparent 100%)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-3xl md:text-4xl mb-4 tracking-wide encore-display encore-footer-heading"
              style={{
                background: "linear-gradient(135deg, #FF6B00 0%, #FF00FF 50%, #00FFD1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ENCORE '26
            </h3>
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255, 255, 255, 0.75)",
              }}
            >
              Experience the grandeur of Lucknow's cultural heritage blended with contemporary artistry. Three days of unforgettable performances, competitions, and celebrations.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255, 107, 0, 0.12)",
                border: "1px solid rgba(255, 107, 0, 0.3)",
              }}
            >
              <MapPin size={16} style={{ color: "#FF6B00" }} />
              <span
                className="text-sm"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                IET Lucknow
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-xl md:text-2xl mb-6 tracking-wide encore-display"
              style={{
                color: "#ffffff",
              }}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Events", "Schedule", "Registration", "Gallery", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  whileHover={{ x: 8 }}
                >
                  <span
                    className="text-base flex items-center gap-2"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#FF00FF" }}
                      whileHover={{ scale: 1.5 }}
                    />
                    {link}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-xl md:text-2xl mb-6 tracking-wide encore-display"
              style={{
                color: "#ffffff",
              }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Mail size={20} style={{ color: "#FF6B00", marginTop: "2px" }} />
                <div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:encore@ietlucknow.ac.in"
                    className="text-base"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    encore@ietlucknow.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} style={{ color: "#00FFD1", marginTop: "2px" }} />
                <div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+911234567890"
                    className="text-base"
                    style={{
                      fontFamily: "Plus Jakarta Sans, sans-serif",
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p
                className="text-sm mb-3"
                style={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, color: "#FF00FF" },
                  { icon: Twitter, color: "#00FFD1" },
                  { icon: Facebook, color: "#FF6B00" },
                  { icon: Youtube, color: "#FFB800" },
                ].map(({ icon: Icon, color }, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="p-3 rounded-full backdrop-blur-sm"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}30`,
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: `${color}20`,
                      boxShadow: `0 8px 24px ${color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={18} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px mb-8"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255, 107, 0, 0.3) 20%, rgba(255, 0, 255, 0.3) 50%, rgba(0, 255, 209, 0.3) 80%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p
            className="text-sm text-center md:text-left"
            style={{
              fontFamily: "Plus Jakarta Sans, sans-serif",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            © 2026 Encore - IET Lucknow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm"
              style={{
                fontFamily: "Plus Jakarta Sans, sans-serif",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}