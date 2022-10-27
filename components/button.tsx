import React, { ForwardedRef, forwardRef, HTMLProps } from 'react';
import cn from 'classnames';
import ButtonIcon from './buttonIcon';

type Props = HTMLProps<
  HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement
> & {
  as?: 'button' | 'a' | 'label';
  type?: 'button' | 'submit' | 'reset';
  iconTitle?: string;
  iconSubtitle?: string;
  iconPosition?: 'right' | 'left';
  isExternal?: boolean;
};

const Button = forwardRef(
  (
    {
      as = 'button',
      type = 'button',
      iconPosition = 'right',
      children,
      className,
      iconTitle,
      iconSubtitle,
      isExternal,
      target,
      rel,
      disabled,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement | HTMLLabelElement>
  ) => {
    const withIcon = iconTitle && iconSubtitle;
    const commonProps = {
      ...props,
      className: cn(
        'group relative inline-block rounded-full bg-sky-450 py-[20px] font-kghappy text-[14px] text-white text-center font-bold uppercase select-none',
        'transition hover:bg-sky-750 active:bg-sky-775',
        'sm:text-[16px] ',
        className,
        {
          'px-[45px]': !withIcon,
          'pl-[20px] pr-[100px] sm:pl-[50px]':
            withIcon && iconPosition === 'right',
          'pr-[20px] pl-[100px] sm:pr-[50px]':
            withIcon && iconPosition === 'left',
          'opacity-40 pointer-events-none': disabled,
        }
      ),
    };
    const body = (
      <>
        {children}
        {withIcon && (
          <ButtonIcon
            title={iconTitle}
            subtitle={iconSubtitle}
            position={iconPosition}
          />
        )}
      </>
    );

    if (as === 'a') {
      return (
        <a
          {...commonProps}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          target={!isExternal ? target : '_blank'}
          rel={!isExternal ? rel : 'noopener noreferrer nofollow'}
        >
          {body}
        </a>
      );
    } else if (as === 'label') {
      return (
        <label {...commonProps} ref={ref as ForwardedRef<HTMLLabelElement>}>
          {body}
        </label>
      );
    } else {
      return (
        <button
          {...commonProps}
          ref={ref as ForwardedRef<HTMLButtonElement>}
          type={type}
        >
          {body}
        </button>
      );
    }
  }
);

Button.displayName = 'Button';

export default Button;
