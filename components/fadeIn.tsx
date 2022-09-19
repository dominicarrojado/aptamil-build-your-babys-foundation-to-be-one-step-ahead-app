import React, { ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
};

export default function FadeIn({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  return (
    <div
      className={cn(
        'transition-opacity duration-500',
        isMounted ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
}
