import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement> & {
  hasError?: boolean;
};

export const inputBoxClassName = cn(
  'block w-full border rounded-[8px] bg-blue-350 py-[8px] px-[15px] text-white text-[18px] font-light text-ellipsis outline-none placeholder:text-white placeholder:opacity-60',
  'transition-colors focus:ring-[3px] focus:ring-sky-450 focus:border-sky-450 disabled:bg-gray-200',
  'placeholder:transition-opacity focus:placeholder:opacity-0'
);
export const inputBoxPrimaryClassName = cn('border-transparent');
export const inputBoxErrorClassName = cn(
  'border-red-500 ring-[3px] ring-red-500'
);

export default function InputBox({ className, hasError, ...props }: Props) {
  return (
    <input
      {...props}
      className={cn(
        inputBoxClassName,
        !hasError ? inputBoxPrimaryClassName : inputBoxErrorClassName,
        className
      )}
    />
  );
}