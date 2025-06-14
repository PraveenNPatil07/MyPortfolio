'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
  title?: string;
  removePadding?: boolean;
}

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Section({
  id,
  className,
  contentClassName,
  children,
  title,
  removePadding = false,
}: SectionProps) {
  const shouldRenderTitle = title && !removePadding;

  return (
    <section
      id={id}
      className={cn('w-full overflow-hidden scroll-mt-24', className)} // 👈 Only here
      aria-labelledby={shouldRenderTitle ? `${id}-heading` : undefined}
    >
      <div
        className={cn(
          'container mx-auto max-w-5xl',
          !removePadding && 'pt-32 pb-16 md:pt-40 md:pb-24',
          contentClassName
        )}
      >
        {shouldRenderTitle && (
          <motion.h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl mb-12 font-headline"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
