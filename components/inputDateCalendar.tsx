import { CalendarContainer, CalendarContainerProps } from 'react-datepicker';
import cn from 'classnames';

export default function InputDateCalendar({
  className,
  children,
}: CalendarContainerProps) {
  return (
    <CalendarContainer className={className}>
      <div
        className={cn(
          'text-[16px]',

          // navigation-icon
          '[&>button>span]:text-[8px]',

          // current-month
          '[&>div:nth-child(3)>div:first-child>div:first-child]:text-[18px]',

          // day-names
          '[&>div:nth-child(3)>div:first-child>div:nth-child(3)]:mt-[8px]',
          '[&>div:nth-child(3)>div:first-child>div:nth-child(3)]:font-bold',

          // day-name
          '[&>div:nth-child(3)>div:first-child>div:nth-child(3)>div]:w-[32px]',

          // day
          '[&>div:nth-child(3)>div:nth-child(2)>div>div]:w-[32px]',
          '[&>div:nth-child(3)>div:nth-child(2)>div>div]:h-[32px]',
          '[&>div:nth-child(3)>div:nth-child(2)>div>div]:leading-[32px]',

          // day__outside-month
          `[&__[class*="outside-month"]]:text-gray-400`,

          // day--selected
          `[&__[class*="day--selected"]]:bg-gray-200`,
          `[&__[class*="day--selected"]]:text-black`,
          `[&__[class*="day--selected"][aria-selected="true"]]:bg-sky-750`,
          `[&__[class*="day--selected"][aria-selected="true"]]:text-white`,
          `[&__[class*="day--selected"]:hover]:bg-sky-750`,

          // day--keyboard-selected
          `[&__[class*="keyboard-selected"]]:bg-gray-200`,
          `[&__[class*="keyboard-selected"]]:text-black`,
          `[&__[class*="keyboard-selected"]:hover]:bg-gray-200`
        )}
      >
        {children}
      </div>
    </CalendarContainer>
  );
}
