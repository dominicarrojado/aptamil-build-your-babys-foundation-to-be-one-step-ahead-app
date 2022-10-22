import { useRef, useState } from 'react';
import { checkElementsColliding, getTouchEventData } from './dom';
import { getRefValue, useStateRef } from './hooks';

export function useDragElement() {
  const dragElRef = useRef<HTMLImageElement>(null);
  const dropElRef = useRef<HTMLImageElement>(null);
  const currentOffsetXRef = useRef(0);
  const currentOffsetYRef = useRef(0);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const timeoutRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [offsetY, setOffsetY, offsetYRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isDropped, setIsDropped] = useState(false);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const currentY = getTouchEventData(e).clientY;
    const diffX = getRefValue(startXRef) - currentX;
    const diffY = getRefValue(startYRef) - currentY;
    const newOffsetX = getRefValue(currentOffsetXRef) - diffX;
    const newOffsetY = getRefValue(currentOffsetYRef) - diffY;

    setOffsetX(newOffsetX);
    setOffsetY(newOffsetY);
  };
  const onTouchEnd = () => {
    const dragEl = getRefValue(dragElRef);
    const dropEl = getRefValue(dropElRef);

    setIsSwiping(false);
    setOffsetX(0);
    setOffsetY(0);
    setIsDropped(checkElementsColliding(dragEl, dropEl));

    timeoutRef.current = window.setTimeout(() => setIsAnimating(true), 500);

    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('mouseup', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
  };
  const onTouchStart = (
    e: React.TouchEvent<HTMLImageElement> | React.MouseEvent<HTMLImageElement>
  ) => {
    setIsSwiping(true);
    setIsAnimating(false);

    startXRef.current = getTouchEventData(e).clientX;
    startYRef.current = getTouchEventData(e).clientY;

    window.clearTimeout(getRefValue(timeoutRef));
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
  };

  return {
    dragElRef,
    dropElRef,
    offsetX,
    offsetY,
    isSwiping,
    isAnimating,
    isDropped,
    onTouchStart,
  };
}
