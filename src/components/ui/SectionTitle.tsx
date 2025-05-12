import React from 'react';
import { cn } from '@/utils/cn';
import Animated from './Animated';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = '',
  align = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn('mb-16', alignmentClasses[align], className)}>
      <Animated>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="mt-4 flex items-center justify-center">
          <div className="h-[2px] w-12 bg-cyan-500 rounded-full mr-2"></div>
          <div className="h-[4px] w-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
          <div className="h-[2px] w-12 bg-purple-500 rounded-full ml-2"></div>
        </div>
      </Animated>
    </div>
  );
};

export default SectionTitle;
