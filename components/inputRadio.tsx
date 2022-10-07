import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLInputElement> & { label: string };

export default function InputRadio({ className, label, ...props }: Props) {
  return (
    <div>
      <label
        className={cn(
          'inline-flex flex-row-reverse items-center gap-2 select-none',
          'sm:gap-3'
        )}
      >
        <span className="text-white text-[18px] font-light">{label}</span>
        <input
          {...props}
          type="radio"
          className={cn('peer absolute w-0 h-0 opacity-0', className)}
        />
        <span
          className={cn(
            'flex items-center justify-center shrink-0 w-[26px] h-[26px] border-[3px] rounded-full border-blue-350',
            'peer-focus-visible:ring-[3px] peer-focus-visible:ring-sky-450',
            "before:content-[''] before:w-[14px] before:h-[14px] before:rounded-full before:bg-white before:opacity-0 before:scale-0",
            'before:transition before:duration-300 peer-checked:before:opacity-100 peer-checked:before:scale-100'
          )}
        />
      </label>
    </div>
  );
}
