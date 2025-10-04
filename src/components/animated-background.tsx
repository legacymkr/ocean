"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  horizontalDrift: number;
}

const BUBBLE_COUNT = 50;

export function AnimatedBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles with randomized properties for natural, non-repetitive flow
    const newBubbles = Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 13 + 3, // 3px to 16px - small and delicate
      left: Math.random() * 100, // 0% to 100% - random starting position
      duration: Math.random() * 100 + 125, // 125s to 225s - extremely slow, serene pace
      delay: -(Math.random() * 225), // Negative delay: -225s to 0s - ensures all bubbles are at different points in their cycle
      horizontalDrift: (Math.random() - 0.5) * 15, // -7.5vw to +7.5vw - subtle horizontal drift
    }));

    setBubbles(newBubbles);
  }, []);

  if (bubbles.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-bubble-up"
          style={
            {
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: `-${bubble.size}px`,
              backgroundColor: "hsl(var(--accent) / 0.25)", // Semi-transparent Aqua Blue
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              "--horizontal-drift": `${bubble.horizontalDrift}vw`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
