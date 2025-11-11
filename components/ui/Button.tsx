import Link from 'next/link';
import { memo } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  type?: 'button' | 'submit';
}

function Button({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel,
  className,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-cyan-primary,#00B4D8)] disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]';

  const variantClasses = {
    primary:
      'bg-zinc-900 text-white shadow hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100',
    secondary:
      'border border-white/25 bg-white/60 text-zinc-900 shadow-sm backdrop-blur-md hover:bg-white/80 dark:border-white/10 dark:bg-zinc-800/80 dark:text-white dark:hover:bg-zinc-800',
    outline:
      'border border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel || label}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || label}
      className={classes}
    >
      {label}
    </button>
  );
}

export default memo(Button);
