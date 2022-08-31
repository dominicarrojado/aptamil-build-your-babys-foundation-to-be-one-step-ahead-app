import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { getAssetUrl } from '../../lib/assets';
import MobileMenu from './mobileMenu';
import { Route } from '../../lib/types';

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-[30px] pb-[20px] px-[20px]">
      <MobileMenu />
      <Link href={Route.HOME}>
        <a className="flex-shrink-0 ml-auto cursor-pointer z-10">
          <img
            src={getAssetUrl(
              'images/logo-aptamil-gold-plus-follow-on-formula.png'
            )}
            alt="Aptamil Gold+ Follow-On Formula logo"
            width="107"
            height="74"
            className={cn('w-auto h-[62px] aspect-[107/74]', 'lg:h-[74px]')}
          />
        </a>
      </Link>
    </header>
  );
}
