import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  className?: string;
}

export default function ScrollFloat({
  children,
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  className = ''
}: ScrollFloatProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const elements = elementRef.current.querySelectorAll('[data-scroll-float]');

    if (elements.length === 0) return;

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: animationDuration,
          ease: ease,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            scrub: 1,
            markers: false
          },
          delay: index * stagger
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  if (typeof children === 'string') {
    return (
      <div ref={elementRef} className={className}>
        <div data-scroll-float>{children}</div>
      </div>
    );
  }

  return (
    <div ref={elementRef} className={className} data-scroll-float>
      {children}
    </div>
  );
}
