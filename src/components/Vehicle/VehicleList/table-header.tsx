import React, { ThHTMLAttributes } from 'react';

interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function TableHeader({
  children,
  className = '',
  ...props
}: TableHeaderProps) {
  const baseClasses = 'border border-brand-200';

  return (
    <th {...props} className={`${baseClasses} ${className}`}>
      {children}
    </th>
  );
}
