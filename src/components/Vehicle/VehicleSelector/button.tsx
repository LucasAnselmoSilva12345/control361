import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export function Button({
  isActive,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `
    p-2 rounded-md text-xs font-medium font-inter transition-colors
    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50
  `;

  const activeClasses = isActive
    ? 'bg-brand-100 text-white shadow-md'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
  return (
    <button
      {...props}
      className={`${baseClasses} ${activeClasses} ${className}`}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
}
