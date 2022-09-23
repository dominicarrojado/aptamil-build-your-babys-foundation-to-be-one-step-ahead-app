import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import DropItem from './dropItem';
import DropLabel from './dropLabel';

export default function DropBrainDevelopment() {
  return (
    <>
      <DropLabel className={cn('top-[15px] right-[10px]', 'sm:right-[45px]')}>
        Brain <br />
        Development
      </DropLabel>
      <DropItem
        active={false}
        className={cn('top-[15px] right-[140px]', 'sm:right-[175px]')}
        defaultImageSrc={getAssetUrl('images/icon-books-outline-dashed.png')}
        defaultImageAlt="Dashed outline of books icon"
        defaultImageWidth="80"
        defaultImageHeight="76"
        defaultImageClassName="aspect-[80/76]"
        activeImageSrc={getAssetUrl('images/icon-books-outline-solid.png')}
        activeImageAlt="Solid outline of books icon"
        activeImageWidth="80"
        activeImageHeight="76"
        activeImageClassName="aspect-[80/76]"
        dropImageSrc={getAssetUrl('images/icon-books.png')}
        dropImageAlt="Books icon"
        dropImageWidth="71"
        dropImageHeight="67"
        dropImageClassName="aspect-[71/67]"
      />
      <img
        src={getAssetUrl('images/arrow-line-downward.png')}
        alt="Arrow line pointing downwards"
        width="206"
        height="115"
        className={cn(
          'hidden aspect-[206/115]',
          'xl:block xl:absolute xl:top-[37px] xl:right-[265px]'
        )}
        draggable={false}
      />
    </>
  );
}
