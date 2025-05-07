import React, { TdHTMLAttributes } from 'react';

interface TableDataProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

export function TableData({
  children,
  className = '',
  ...props
}: TableDataProps) {
  const baseClasses =
    'px-2 lg:px-0 border border-brand-200 text-sm font-inter text-brand-50 capitalize h-11';

  return (
    <td {...props} className={`${baseClasses} ${className}`}>
      {children}
    </td>
  );
}
