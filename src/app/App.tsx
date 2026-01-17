import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { IntroScreen } from "./components/intro-screen";
import { MainLanding } from "./components/main-landing";
import { FloatingElements } from "./components/floating-elements";
import { ArchitecturalElements } from "./components/architectural-elements";
import { SponsorsPage } from "./components/SponsorsPage";
import { BecomePartnerForm } from "./components/BecomePartnerForm";
import { AboutPage } from "./components/AboutPage";
import { EventCart } from "./components/EventCart";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentHash, setCurrentHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    function onHash() {
      setCurrentHash(window.location.hash);
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        ) : currentHash === '#sponsors' ? (
          <div key="sponsors" className="relative">
            <ArchitecturalElements />
            <FloatingElements />
            <SponsorsPage />
            <BecomePartnerForm />
          </div>
        ) : currentHash === '#about' ? (
          <div key="about" className="relative">
            <ArchitecturalElements />
            <FloatingElements />
            <AboutPage />
          </div>
        ) : currentHash === '#events' ? (
          <div key="events" className="relative">
            <ArchitecturalElements />
            <FloatingElements />
            <EventCart />
          </div>
        ) : (
          <div key="main" className="relative">
            <ArchitecturalElements />
            <FloatingElements />
            <MainLanding />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}