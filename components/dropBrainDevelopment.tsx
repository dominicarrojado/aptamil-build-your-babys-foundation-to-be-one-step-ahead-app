import React, { RefObject } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import DropItem from './dropItem';
import DropLabel from './dropLabel';

type Props = {
  isDropped: boolean;
  dropElRef: RefObject<HTMLImageElement>;
};

export default function DropBrainDevelopment({ isDropped, dropElRef }: Props) {
  return (
    <>
      <DropLabel className={cn('top-[15px] right-[10px]', 'sm:right-[45px]')}>
        Brain <br />
        Development
      </DropLabel>
      <DropItem
        isDropped={isDropped}
        className={cn('top-[15px] right-[140px]', 'sm:right-[175px]')}
        defaultImageProps={{
          ref: dropElRef,
          src: getAssetUrl('images/icon-books-outline-dashed.png'),
          alt: 'Dashed outline of books icon',
          width: '80',
          height: '76',
          className: 'aspect-[80/76]',
        }}
        activeImageProps={{
          src: getAssetUrl('images/icon-books-outline-solid.png'),
          alt: 'Solid outline of books icon',
          width: '80',
          height: '76',
          className: 'aspect-[80/76]',
        }}
        dropImageProps={{
          src: getAssetUrl('images/icon-books.png'),
          alt: 'Books icon',
          width: '71',
          height: '67',
          className: 'aspect-[71/67]',
        }}
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
