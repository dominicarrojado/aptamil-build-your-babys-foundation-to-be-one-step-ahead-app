import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import { buttonClassName } from './button';

type Props = HTMLProps<HTMLAnchorElement>;

const ButtonLink = forwardRef(
  (
    { children, className, ...props }: Props,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <a {...props} ref={ref} className={cn(buttonClassName, className)}>
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
