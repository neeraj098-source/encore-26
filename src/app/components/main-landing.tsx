import { motion } from "motion/react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "./navbar";
import { HeroSection } from "./hero-section";
import { EventCategories } from "./event-categories";
import { Timeline3D } from "./timeline-3d";
import { Footer } from "./footer";

export function MainLanding() {
  return (
    <motion.div
      className="w-full min-h-screen"
      style={{
        background: "linear-gradient(180deg, #0a0514 0%, #1a0b28 25%, #0f0820 50%, #1a0b28 75%, #0a0514 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Event Categories */}
      <EventCategories />

      {/* Timeline */}
      <Timeline3D />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}