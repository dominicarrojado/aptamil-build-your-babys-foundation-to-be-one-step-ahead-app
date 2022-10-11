import React from 'react';

type Props = {
  src: string;
};

export default function Background({ src }: Props) {
  return (
    <div
      className="fixed w-full h-full inset-0 bg-cover bg-center bg-no-repeat -z-10 pointer-events-none"
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
