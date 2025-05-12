import React from 'react';
import { SectionProps } from '@/types';
import { cn } from '@/utils/cn';

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative',
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
