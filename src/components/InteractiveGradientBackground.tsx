'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { cn } from '@/lib/utils';

interface InteractiveGradientBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const emptySubscribe = () => () => {};

export function InteractiveGradientBackground({ className, ...props }: InteractiveGradientBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const dynamicGradientStyle = isClient ? {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.2), transparent 80%)`,
  } : {
    background: `radial-gradient(700px circle at 50% 0%, hsl(var(--primary)/0.15), transparent 80%)`,
  };
  
  return (
    <div
      className={cn(
        "fixed inset-0 -z-20 transition-background duration-100 ease-out", 
        "opacity-80 dark:opacity-60",
        className
      )}
      style={dynamicGradientStyle}
      {...props}
    />
  );
}
