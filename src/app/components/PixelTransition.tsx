import React, { useState, useEffect, useRef } from 'react';

interface PixelTransitionProps {
  firstContent: React.ReactNode;
  secondContent: React.ReactNode;
  gridSize?: number;
  pixelColor?: string;
  once?: boolean;
  animationStepDuration?: number;
  className?: string;
}

interface Pixel {
  id: number;
  delay: number;
  duration: number;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 12,
  pixelColor = '#ffffff',
  once = false,
  animationStepDuration = 0.4,
  className = '',
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pixels, setPixels] = useState<Pixel[]>([]);

  useEffect(() => {
    // Generate pixels with staggered delays
    const pixelCount = gridSize * gridSize;
    const generatedPixels: Pixel[] = Array.from({ length: pixelCount }, (_, i) => ({
      id: i,
      delay: (i % gridSize) * 0.05 + Math.floor(i / gridSize) * 0.05,
      duration: animationStepDuration,
    }));
    setPixels(generatedPixels);
  }, [gridSize, animationStepDuration]);

  const handleTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowSecond(!showSecond);
      setIsTransitioning(false);
      if (!once) {
        setTimeout(() => {
          setIsTransitioning(true);
          setTimeout(() => {
            setShowSecond(showSecond);
            setIsTransitioning(false);
          }, (gridSize * gridSize * 0.05 + animationStepDuration) * 1000);
        }, 2000);
      }
    }, (gridSize * gridSize * 0.05 + animationStepDuration) * 1000);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleTransition();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [showSecond, once]);

  const pixelSize = 100 / gridSize;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: '300px' }}
    >
      {/* First Content */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: showSecond ? 0 : 1,
          transition: showSecond ? 'opacity 0.3s ease-out' : 'opacity 0.3s ease-in',
          zIndex: showSecond ? 0 : 10,
        }}
      >
        {firstContent}
      </div>

      {/* Second Content */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: showSecond ? 1 : 0,
          transition: showSecond ? 'opacity 0.3s ease-in' : 'opacity 0.3s ease-out',
          zIndex: showSecond ? 10 : 0,
        }}
      >
        {secondContent}
      </div>

      {/* Pixel Overlay */}
      {isTransitioning && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize}, 1fr)`,
            gap: 0,
            top: 0,
            left: 0,
            zIndex: 20,
          }}
        >
          {pixels.map((pixel) => (
            <div
              key={pixel.id}
              style={{
                backgroundColor: pixelColor,
                animation: `pixelFade ${pixel.duration}s ease-out ${pixel.delay}s forwards`,
              }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes pixelFade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default PixelTransition;
