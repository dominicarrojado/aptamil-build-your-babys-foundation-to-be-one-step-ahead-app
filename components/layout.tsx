import React, { ReactNode } from 'react';
import cn from 'classnames';
import Header from './header';
import Footer from './footer';
import DesktopMenu from './desktopMenu';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <DesktopMenu />
      <main
        className={cn(
          'flex items-center flex-1 min-h-0 w-full h-full',
          'lg:pl-[170px] lg:pr-[130px]'
        )}
      >
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
