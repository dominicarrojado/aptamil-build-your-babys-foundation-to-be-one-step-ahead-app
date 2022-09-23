import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  className: string;
  children: ReactNode;
};

export default function DropLabel({ className, children }: Props) {
  return (
    <div
      className={cn('absolute font-kghappy text-[14px] font-bold', className)}
    >
      {children}
    </div>
  );
}
