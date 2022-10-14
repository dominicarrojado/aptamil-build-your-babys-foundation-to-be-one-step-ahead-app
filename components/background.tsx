import React from 'react';
import cn from 'classnames';

type Props = {
  src: string;
};

export default function Background({ src }: Props) {
  return (
    <div
      className={cn(
        'absolute w-full h-full inset-0 bg-cover bg-no-repeat -z-10 pointer-events-none'
      )}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
