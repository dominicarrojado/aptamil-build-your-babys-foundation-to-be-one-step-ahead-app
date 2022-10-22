import React, { RefObject } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import DragItem from './dragItem';

type Props = {
  dragElRef: RefObject<HTMLImageElement>;
  dropElRef: RefObject<HTMLImageElement>;
  offsetX: number;
  offsetY: number;
  isSwiping: boolean;
  isAnimating: boolean;
  isDropped: boolean;
  onTouchStart: (
    e: React.TouchEvent<HTMLImageElement> | React.MouseEvent<HTMLImageElement>
  ) => void;
};

export default function DragNaturalDefences({
  dragElRef,
  offsetX,
  offsetY,
  isSwiping,
  isAnimating,
  isDropped,
  onTouchStart,
}: Props) {
  return (
    <DragItem
      title={
        <>
          Patented <br />
          Prebiotic Blend
        </>
      }
      className="text-[16px]"
      imageProps={{
        ref: dragElRef,
        src: getAssetUrl('images/icon-shield.png'),
        alt: 'Shield icon',
        width: '60',
        height: '75',
        className: cn('aspect-[60/75]', {
          'duration-500': !isSwiping,
          'duration-0': isSwiping,
          'animate-expand': isAnimating,
          'z-10': !isAnimating,
          'opacity-0 pointer-events-none': isDropped,
        }),
        style: {
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        },
        onTouchStart: onTouchStart,
        onMouseDown: onTouchStart,
      }}
    />
  );
}
