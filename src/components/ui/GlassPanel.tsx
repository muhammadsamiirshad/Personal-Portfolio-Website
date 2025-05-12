import React from 'react';
import { GlassPanelProps } from '@/types';
import { cn } from '@/utils/cn';

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  hoverEffect = false,
}) => {
  return (
    <div
      className={cn(
        'glass-panel p-4 sm:p-6', 
        hoverEffect && 'glass-panel-hover',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
