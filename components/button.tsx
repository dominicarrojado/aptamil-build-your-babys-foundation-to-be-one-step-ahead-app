import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset';
};

export const buttonClassName = cn(
  'relative inline-block rounded-[30px] bg-sky-450 py-[20px] px-[45px] font-kghappy text-white text-[16px] text-center font-bold uppercase select-none',
  'transition hover:bg-sky-750 active:bg-sky-775'
);

export default function Button({
  type = 'button',
  children,
  className,
  ...props
}: Props) {
  return (
    <button {...props} type={type} className={cn(buttonClassName, className)}>
      {children}
    </button>
  );
}
