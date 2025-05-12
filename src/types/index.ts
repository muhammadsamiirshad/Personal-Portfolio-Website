import { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export interface AnimatedProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}
