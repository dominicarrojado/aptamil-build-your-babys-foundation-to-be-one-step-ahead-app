import React from 'react';

export function getTouchEventData(
  e:
    | TouchEvent
    | MouseEvent
    | React.TouchEvent<HTMLElement>
    | React.MouseEvent<HTMLElement>
) {
  return 'changedTouches' in e ? e.changedTouches[0] : e;
}

export function checkElementsColliding(
  firstEl: HTMLElement,
  secondEl: HTMLElement
) {
  const firstElRect = firstEl.getBoundingClientRect();
  const secondElRect = secondEl.getBoundingClientRect();

  return (
    firstElRect.y + firstElRect.height > secondElRect.y &&
    firstElRect.y < secondElRect.y + secondElRect.height &&
    firstElRect.x + firstElRect.width > secondElRect.x &&
    firstElRect.x < secondElRect.x + secondElRect.width
  );
}
