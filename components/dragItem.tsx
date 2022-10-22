import React, { ReactNode, RefObject } from 'react';
import cn from 'classnames';

type Props = {
  title: ReactNode;
  className: string;
  imageProps: React.ImgHTMLAttributes<HTMLImageElement> & {
    ref: RefObject<HTMLImageElement>;
  };
};

export default function DragItem({ title, className, imageProps }: Props) {
  return (
    <div
      className={cn(
        'relative max-w-[230px] w-full h-[55px] my-[15px] ml-[25px] inline-flex items-center justify-start rounded-[35px] bg-sky-650 pt-[7px] pb-[8px] pl-[35px]',
        className
      )}
    >
      <img
        {...imageProps}
        alt={imageProps.alt}
        className={cn(
          'absolute -left-[20px] -inset-y-0 m-auto cursor-grab',
          'transform transition-transform ease-out',
          'motion-reduce:transition-none',
          'active:cursor-grabbing',
          imageProps.className
        )}
        draggable={false}
      />
      <div className="flex-1 font-sans font-bold leading-5 text-center uppercase">
        {title}
      </div>
    </div>
  );
}
