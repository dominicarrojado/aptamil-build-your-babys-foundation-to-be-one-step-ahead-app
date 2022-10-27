import React, { useState } from 'react';
import cn from 'classnames';
import InputLegend from '../inputLegend';
import InputRadio from '../inputRadio';
import { InputId, Source } from '../../lib/types';
import { SOURCES } from '../../lib/constants';

export default function InputSource() {
  const [value, setValue] = useState(Source.FAIRPRICE);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value as Source);

  return (
    <fieldset>
      <InputLegend>Where did you hear about this contest?</InputLegend>
      <div
        className={cn(
          'flex flex-col gap-2',
          'sm:flex-row sm:flex-wrap sm:gap-4',
          'md:gap-x-6'
        )}
      >
        {SOURCES.map((source) => (
          <InputRadio
            key={source}
            name={InputId.SOURCE}
            value={source}
            label={source}
            checked={value === source}
            onChange={onChange}
          />
        ))}
      </div>
    </fieldset>
  );
}
