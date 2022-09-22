import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';

type Props = {
  number: 1 | 2 | 3;
  title: string;
};

export default function StepItem({ number, title }: Props) {
  return (
    <h2
      className={cn(
        'flex items-center font-kghappy text-sky-450 text-[14px] font-bold uppercase',
        'md:text-[16px]'
      )}
    >
      <img
        src={getAssetUrl(`images/icon-step-${number}.png`)}
        alt={`Step ${number}`}
        width="61"
        height="56"
        className={cn(
          'w-auto h-[45px] aspect-[61/56] mr-2',
          'sm:h-auto sm:mr-3'
        )}
      />{' '}
      {title}
    </h2>
  );
}
