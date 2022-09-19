import { useRouter } from 'next/router';
import React from 'react';
import cn from 'classnames';
import { BACKGROUND_IMAGES } from '../lib/constants';

export default function Background() {
  const { pathname: currentPath } = useRouter();

  return (
    <>
      {BACKGROUND_IMAGES.map(({ path, src }) => (
        <div
          key={path}
          className={cn(
            'fixed w-full h-full inset-0 bg-cover bg-center bg-no-repeat -z-10',
            'transition-opacity duration-500',
            currentPath === path ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
    </>
  );
}
