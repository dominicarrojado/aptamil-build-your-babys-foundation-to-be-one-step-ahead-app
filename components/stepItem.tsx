import React from 'react';
import cn from 'classnames';

type Props = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
  imageClassName: string;
};

export default function StepItem({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
}: Props) {
  return (
    <h2
      className={cn(
        'flex items-center font-kghappy text-sky-450 text-[14px] font-bold uppercase',
        'md:text-[16px]'
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={cn(
          imageClassName,
          'w-[50px] h-auto mr-2',
          'sm:w-auto sm:mr-3'
        )}
      />{' '}
      {title}
    </h2>
  );
}
