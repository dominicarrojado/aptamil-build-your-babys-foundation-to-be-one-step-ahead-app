import React, { RefObject } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import DropItem from './dropItem';
import DropLabel from './dropLabel';

type Props = {
  isDropped: boolean;
  dropElRef: RefObject<HTMLImageElement>;
};

export default function DropNaturalDefences({ isDropped, dropElRef }: Props) {
  return (
    <>
      <DropLabel className={cn('bottom-0 right-[10px]', 'sm:right-[100px]')}>
        Natural <br />
        Defences
      </DropLabel>
      <DropItem
        isDropped={isDropped}
        className={cn('bottom-0 right-[110px]', 'sm:right-[195px]')}
        defaultImageProps={{
          ref: dropElRef,
          src: getAssetUrl('images/icon-shield-outline-dashed.png'),
          alt: 'Dashed outline of shield icon',
          width: '67',
          height: '84',
          className: 'aspect-[67/84]',
        }}
        activeImageProps={{
          src: getAssetUrl('images/icon-shield-outline-solid.png'),
          alt: 'Solid outline of shield icon',
          width: '68',
          height: '85',
          className: 'aspect-[68/85]',
        }}
        dropImageProps={{
          src: getAssetUrl('images/icon-shield.png'),
          alt: 'Shield icon',
          width: '60',
          height: '75',
          className: 'aspect-[60/75]',
        }}
      />
      <img
        src={getAssetUrl('images/arrow-line-upward.png')}
        alt="Arrow line pointing upwards"
        width="192"
        height="109"
        className={cn(
          'hidden aspect-[192/109]',
          'xl:block xl:absolute xl:bottom-[26px] xl:right-[270px]'
        )}
        draggable={false}
      />
    </>
  );
}
