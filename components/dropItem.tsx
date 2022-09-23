import React from 'react';
import cn from 'classnames';

type Props = {
  active: boolean;
  className: string;
  defaultImageSrc: string;
  defaultImageAlt: string;
  defaultImageWidth: string;
  defaultImageHeight: string;
  defaultImageClassName: string;
  activeImageSrc: string;
  activeImageAlt: string;
  activeImageWidth: string;
  activeImageHeight: string;
  activeImageClassName: string;
  dropImageSrc: string;
  dropImageAlt: string;
  dropImageWidth: string;
  dropImageHeight: string;
  dropImageClassName: string;
};

export default function DropItem({
  active,
  className,
  defaultImageSrc,
  defaultImageAlt,
  defaultImageWidth,
  defaultImageHeight,
  defaultImageClassName,
  activeImageSrc,
  activeImageAlt,
  activeImageWidth,
  activeImageHeight,
  activeImageClassName,
  dropImageSrc,
  dropImageAlt,
  dropImageWidth,
  dropImageHeight,
  dropImageClassName,
}: Props) {
  return (
    <div className={cn('absolute', className)}>
      <img
        src={defaultImageSrc}
        alt={defaultImageAlt}
        width={defaultImageWidth}
        height={defaultImageHeight}
        className={cn(
          active ? 'opacity-0' : 'opacity-100',
          defaultImageClassName
        )}
        draggable={false}
      />
      <img
        src={activeImageSrc}
        alt={activeImageAlt}
        width={activeImageWidth}
        height={activeImageHeight}
        className={cn(
          'absolute inset-0 m-auto',
          active ? 'opacity-100' : 'opacity-0',
          activeImageClassName
        )}
        draggable={false}
      />
      {active && (
        <img
          src={dropImageSrc}
          alt={dropImageAlt}
          width={dropImageWidth}
          height={dropImageHeight}
          className={cn('absolute inset-0 m-auto', dropImageClassName)}
          draggable={false}
        />
      )}
    </div>
  );
}
