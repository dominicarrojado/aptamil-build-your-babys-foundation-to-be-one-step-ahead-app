import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import DropItem from './dropItem';
import DropLabel from './dropLabel';

export default function DropNaturalDefences() {
  return (
    <>
      <DropLabel className={cn('bottom-0 right-[10px]', 'sm:right-[100px]')}>
        Natural <br />
        Defences
      </DropLabel>
      <DropItem
        active={false}
        className={cn('bottom-0 right-[110px]', 'sm:right-[195px]')}
        defaultImageSrc={getAssetUrl('images/icon-shield-outline-dashed.png')}
        defaultImageAlt="Dashed outline of shield icon"
        defaultImageWidth="67"
        defaultImageHeight="84"
        defaultImageClassName="aspect-[67/84]"
        activeImageSrc={getAssetUrl('images/icon-shield-outline-solid.png')}
        activeImageAlt="Solid outline of shield icon"
        activeImageWidth="68"
        activeImageHeight="85"
        activeImageClassName="aspect-[68/85]"
        dropImageSrc={getAssetUrl('images/icon-shield.png')}
        dropImageAlt="Shield icon"
        dropImageWidth="60"
        dropImageHeight="75"
        dropImageClassName="aspect-[60/75]"
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
