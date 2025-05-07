import React, { ThHTMLAttributes } from 'react';

interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function TableHeader({
  children,
  className = '',
  ...props
}: TableHeaderProps) {
  const baseClasses = 'border border-brand-200 px-2 lg:px-0';

  return (
    <th {...props} className={`${baseClasses} ${className}`}>
      {children}
    </th>
  );
}
