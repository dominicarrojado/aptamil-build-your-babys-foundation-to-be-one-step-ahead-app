import React, { RefObject } from 'react';
import cn from 'classnames';

type Props = {
  isDropped: boolean;
  className: string;
  defaultImageProps: React.ImgHTMLAttributes<HTMLImageElement> & {
    ref: RefObject<HTMLImageElement>;
  };
  activeImageProps: React.ImgHTMLAttributes<HTMLImageElement>;
  dropImageProps: React.ImgHTMLAttributes<HTMLImageElement>;
};

export default function DropItem({
  isDropped,
  className,
  defaultImageProps,
  activeImageProps,
  dropImageProps,
}: Props) {
  return (
    <div className={cn('absolute', className)}>
      <img
        {...defaultImageProps}
        alt={defaultImageProps.alt}
        className={cn(
          isDropped ? 'opacity-0' : 'opacity-100',
          'transition-opacity duration-500',
          defaultImageProps.className
        )}
        draggable={false}
      />
      <img
        {...activeImageProps}
        alt={activeImageProps.alt}
        className={cn(
          'absolute inset-0 m-auto',
          'transition-opacity duration-500',
          isDropped ? 'opacity-100' : 'opacity-0',
          activeImageProps.className
        )}
        draggable={false}
      />
      {isDropped && (
        <img
          {...dropImageProps}
          alt={dropImageProps.alt}
          className={cn('absolute inset-0 m-auto', dropImageProps.className)}
          draggable={false}
        />
      )}
    </div>
  );
}
