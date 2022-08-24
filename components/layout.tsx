import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-full">
      <Header />
      <main className="flex items-center flex-1 min-h-0 w-full h-full">
        <div className="w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
