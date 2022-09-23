import React, { ReactNode } from 'react';
import cn from 'classnames';
import Background from './background';
import Header from './header';
import Footer from './footer';
import DesktopMenu from './desktopMenu';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-full">
      <Background />
      <Header />
      <DesktopMenu />
      <div
        className={cn(
          'flex items-center flex-1 min-h-0 w-full h-full z-10',
          'lg:pl-[170px] lg:pr-[130px] lg:-mt-20'
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
