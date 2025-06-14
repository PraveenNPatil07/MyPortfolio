import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

export function IconLink({ href, icon: Icon, label, className, variant = "ghost", size = "icon" }: IconLinkProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn("text-muted-foreground hover:text-primary transition-transform duration-200 ease-in-out hover:scale-110", className)}>
      <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon className="h-6 w-6" />
      </Link>
    </Button>
  );
}
