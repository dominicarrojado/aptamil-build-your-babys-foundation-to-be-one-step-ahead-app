import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import { MENU_ITEMS } from '../lib/constants';

export default function DesktopMenu() {
  const { pathname } = useRouter();

  return (
    <div
      className={cn(
        'hidden',
        'lg:flex lg:flex-col lg:justify-center lg:h-full lg:fixed lg:left-[40px]'
      )}
    >
      <nav className="group relative flex flex-col justify-around w-[130px] h-1/2 max-h-[750px]">
        <div className="absolute top-0 left-[15px] h-full border-l-2 border-dashed border-sky-450 -z-10 opacity-40"></div>
        {MENU_ITEMS.map((menuItem, idx) => {
          const num = (idx + 1).toString();
          const isActive = pathname === menuItem.path;

          return (
            <Link key={num} href={menuItem.path}>
              <a
                className="group flex items-center font-kghappy font-bold text-[10px] text-sky-450"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => close()}
              >
                <img
                  src={getAssetUrl(`images/icon-circle-${num}.png`)}
                  alt={num}
                  className="mr-1"
                />
                <span className="block overflow-hidden">
                  <span
                    className={cn(
                      'block transition transform',
                      isActive
                        ? 'translate-x-0 opacity-100'
                        : 'opacity-40 -translate-x-full group-hover:translate-x-0 group-focus-visible:translate-x-0 hover:opacity-80 group-focus-visible:opacity-80'
                    )}
                  >
                    {menuItem.title}
                  </span>
                </span>
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
