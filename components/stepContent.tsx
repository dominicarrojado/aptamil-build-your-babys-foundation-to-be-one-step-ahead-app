import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
};

export default function StepContent({ children }: Props) {
  return (
    <p className={cn('mt-5 text-[18px] font-light', 'sm:text-[23px]')}>
      {children}
    </p>
  );
}
