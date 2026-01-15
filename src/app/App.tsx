import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { IntroScreen } from "./components/intro-screen";
import { MainLanding } from "./components/main-landing";
import { FloatingElements } from "./components/floating-elements";
import { ArchitecturalElements } from "./components/architectural-elements";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
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