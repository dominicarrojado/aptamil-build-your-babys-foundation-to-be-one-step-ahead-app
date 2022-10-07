import React, { ReactNode } from 'react';
import cn from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

type Props = {
  children: ReactNode;
};

export default function Alert({ children }: Props) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-[10px] max-w-full rounded-[10px] bg-sky-150 py-[12px] px-[15px] text-red-550',
        'md:rounded-[15px] md:py-[12px] md:px-[20px]'
      )}
    >
      <ExclamationCircleIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <div
        className={cn(
          'text-left font-light text-[18px] leading-[1.3]',
          'md:text-[20px]'
        )}
      >
        <span className="font-kghappy font-bold text-[0.7em] uppercase">
          Error!
        </span>{' '}
        {children}
      </div>
    </div>
  );
}
