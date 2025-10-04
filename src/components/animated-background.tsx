"use client";

import { useEffect, useRef } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  horizontalMovement: number;
}

const BUBBLE_COUNT = 50;

export function AnimatedBackground() {
  const bubblesRef = useRef<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles with randomized properties
    bubblesRef.current = Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 13 + 3, // 3px to 16px
      left: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 100 + 125, // 125s to 225s - extremely slow
      delay: Math.random() * 50, // 0s to 50s delay for staggered start
      horizontalMovement: (Math.random() - 0.5) * 40, // -20px to 20px drift
    }));
  }, []);

  if (bubblesRef.current.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubblesRef.current.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-30 animate-bubble-rise"
          style={
            {
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: `-${bubble.size}px`,
              backgroundColor: "#1F5C73", // Translucent Aqua Blue
              filter: "blur(1px)",
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              "--horizontal-movement": `${bubble.horizontalMovement}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
