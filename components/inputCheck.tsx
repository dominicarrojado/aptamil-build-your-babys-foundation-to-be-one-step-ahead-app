import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement> & {
  label: string;
  hasError?: boolean;
};

export default function InputCheck({
  className,
  label,
  hasError,
  ...props
}: Props) {
  return (
    <label
      className={cn(
        'inline-flex flex-row-reverse items-start gap-2 select-none',
        'sm:gap-3'
      )}
    >
      <span className="pt-[4px] font-kghappy text-white text-[13px] font-bold">
        {label}
      </span>
      <input
        {...props}
        type="checkbox"
        className={cn('peer absolute w-0 h-0 opacity-0', className)}
      />
      <span
        className={cn(
          'flex items-center justify-center shrink-0 w-[26px] h-[26px] border-[3px] rounded-[5px] border-blue-350',
          'peer-focus-visible:ring-[3px] peer-focus-visible:ring-sky-450',
          "before:content-[''] before:w-[20px] before:h-[20px] before:bg-check-icon before:bg-no-repeat before:bg-cover before:opacity-0 before:scale-0",
          'before:transition before:duration-200 peer-checked:before:opacity-100 peer-checked:before:scale-100',
          {
            ['ring-[3px] ring-red-500']: hasError,
          }
        )}
      />
    </label>
  );
}
