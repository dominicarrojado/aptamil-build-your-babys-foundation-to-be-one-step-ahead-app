import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
};

export default function PrizeItem({ children }: Props) {
  return (
    <div
      className={cn(
        'max-w-[200px] mx-auto border-2 border-sky-450 rounded-[20px] p-2 text-[18px] font-light text-center',
        'sm:mx-0 sm:text-[23px]',
        'xl:min-w-[185px]'
      )}
    >
      {children}
    </div>
  );
}
