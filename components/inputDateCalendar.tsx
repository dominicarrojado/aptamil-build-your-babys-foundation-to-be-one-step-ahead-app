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

          '[&__[class*="navigation-icon"]]:text-[8px]',

          '[&__[class*="current-month"]]:text-[18px]',

          '[&__[class*="day-names"]]:mt-[8px]',
          '[&__[class*="day-names"]]:font-bold',

          '[&__[class$="day-name"]]:w-[32px]',

          // day
          '[&__[class$="month"]>div>div]:w-[32px]',
          '[&__[class$="month"]>div>div]:h-[32px]',
          '[&__[class$="month"]>div>div]:leading-[32px]',

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
