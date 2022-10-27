import React from 'react';
import cn from 'classnames';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { getAssetUrl } from '../lib/assets';
import { inputBoxClassName, inputBoxPrimaryClassName } from './inputBox';
import InputDateCalendar from './inputDateCalendar';

type Props = Omit<ReactDatePickerProps, 'value' | 'selected' | 'onChange'> & {
  value: Date | null;
  onChange: (value: Date | null) => void;
};

export default function InputDate({
  className,
  value,
  onChange,
  ...props
}: Props) {
  const onClear = () => onChange(null);

  return (
    <div className="relative">
      <DatePicker
        {...props}
        selected={value}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className={cn(inputBoxClassName, inputBoxPrimaryClassName)}
        calendarContainer={InputDateCalendar}
        onChange={onChange}
      />
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 m-auto flex items-center px-[15px]',
          {
            'pointer-events-none': !value,
          }
        )}
      >
        {!value ? (
          <img
            src={getAssetUrl('images/icon-calendar.png')}
            alt="Calendar icon"
          />
        ) : (
          <button
            type="button"
            className={cn(
              'ml-auto outline-none text-blue-950',
              'transition-opacity',
              'hover:opacity-70',
              'active:opacity-40'
            )}
            onClick={onClear}
          >
            <span className="sr-only">Clear date</span>
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
