import { memo } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

function Container({
  children,
  maxWidth = '2xl',
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 md:px-12',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}

export default memo(Container);
