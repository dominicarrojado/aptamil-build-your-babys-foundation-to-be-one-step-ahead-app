import React, { ReactNode } from 'react';
import cn from 'classnames';
import Background from './background';
import Header from './header';
import Footer from './footer';
import DesktopMenu from './desktopMenu';

type Props = {
  children: ReactNode;
  withMenu?: boolean;
};

export default function Layout({ withMenu = true, children }: Props) {
  return (
    <div className="relative flex flex-col min-h-full">
      <Background />
      {withMenu && (
        <>
          <Header />
          <DesktopMenu />
        </>
      )}
      <div
        className={cn(
          'flex items-center flex-1 min-h-0 w-full h-full z-10',
          'lg:pr-[130px]',
          {
            'lg:pl-[180px] lg:-mt-20': withMenu,
            'lg:pl-[130px]': !withMenu,
          }
        )}
      >
        <div className="w-full">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
