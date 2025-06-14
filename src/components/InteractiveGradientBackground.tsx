
'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveGradientBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function InteractiveGradientBackground({ className, ...props }: InteractiveGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Gradient style that depends on mouse position
  // Increased size from 500px to 600px, and transparency stop from 70% to 80%
  const dynamicGradientStyle = isClient ? {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.2), transparent 80%)`,
  } : { // Fallback static gradient for SSR or before client hydration
    background: `radial-gradient(700px circle at 50% 0%, hsl(var(--primary)/0.15), transparent 80%)`,
  };
  
  return (
    <div
      className={cn(
        "fixed inset-0 -z-20 transition-background duration-100 ease-out", 
        "opacity-80 dark:opacity-60", // Increased opacity from 70/50 to 80/60
        className
      )}
      style={dynamicGradientStyle}
      {...props}
    />
  );
}
