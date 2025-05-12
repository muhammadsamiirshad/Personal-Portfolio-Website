import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to combine Tailwind classes without conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
