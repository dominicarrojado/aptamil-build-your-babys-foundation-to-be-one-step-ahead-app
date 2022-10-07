import { useRouter } from 'next/router';
import React from 'react';
import cn from 'classnames';
import FadeIn from './fadeIn';
import { BACKGROUND_IMAGES } from '../lib/constants';

export default function Background() {
  const { pathname: currentPath } = useRouter();

  return (
    <FadeIn>
      {BACKGROUND_IMAGES.map(({ path, src }) => (
        <div
          key={path}
          className={cn(
            'absolute w-full h-full inset-0 bg-cover bg-top-center bg-no-repeat',
            'transition-opacity duration-700',
            currentPath === path ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
    </FadeIn>
  );
}
