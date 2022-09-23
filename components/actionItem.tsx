import React, { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  title: ReactNode;
  className: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: string;
  imageHeight: string;
  imageClassName: string;
};

export default function ActionItem({
  title,
  className,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClassName,
}: Props) {
  return (
    <div
      className={cn(
        'relative max-w-[230px] w-full h-[55px] my-[15px] ml-[25px] inline-flex items-center justify-start rounded-[35px] bg-sky-650 pt-[7px] pb-[8px] pl-[35px]',
        className
      )}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={cn(
          'absolute -left-[20px] -inset-y-0 m-auto cursor-grab',
          'animate-expand',
          'active:cursor-grabbing',
          imageClassName
        )}
        draggable={false}
      />
      <div className="flex-1 font-sans font-bold leading-5 text-center uppercase">
        {title}
      </div>
    </div>
  );
}
