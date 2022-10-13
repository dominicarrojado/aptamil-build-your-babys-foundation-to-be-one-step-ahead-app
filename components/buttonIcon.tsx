import React from 'react';
import cn from 'classnames';

type Props = {
  title: string;
  subtitle: string;
  position: 'right' | 'left';
};

export default function ButtonIcon({ title, subtitle, position }: Props) {
  return (
    <span
      className={cn(
        'absolute flex flex-col items-center justify-center w-[100px] h-[100px] inset-y-0 m-auto border-[8px] border-sky-450 rounded-full bg-white text-sky-450 font-kghappy font-bold leading-5',
        'transition group-hover:border-sky-750 group-active:border-sky-775 group-hover:text-sky-750 group-active:text-sky-775',
        {
          'right-0': position === 'right',
          'left-0': position === 'left',
        }
      )}
    >
      <span className={cn('text-[25px]')}>{title}</span>
      <span className={cn('text-[11px] uppercase')}>{subtitle}</span>
    </span>
  );
}
