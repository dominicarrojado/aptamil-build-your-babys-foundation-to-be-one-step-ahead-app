import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { inputLabelClassName } from './inputLabel';

type Props = HTMLProps<HTMLLegendElement>;

export default function InputLegend({ children, className, ...props }: Props) {
  return (
    <legend {...props} className={cn(inputLabelClassName, className)}>
      {children}
    </legend>
  );
}
