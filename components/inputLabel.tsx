import React, { HTMLProps } from 'react';
import cn from 'classnames';

type Props = HTMLProps<HTMLLabelElement>;

export const inputLabelClassName =
  'block mb-2 font-kghappy text-[12px] font-bold uppercase';

export default function InputLabel({ children, className, ...props }: Props) {
  return (
    <label {...props} className={cn(inputLabelClassName, className)}>
      {children}
    </label>
  );
}
