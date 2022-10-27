import React, { useContext } from 'react';
import cn from 'classnames';
import InputLegend from '../inputLegend';
import InputRadio from '../inputRadio';
import { InputId, Source } from '../../lib/types';
import { SOURCES } from '../../lib/constants';
import { StoreContext } from '../../lib/store';

export default function InputSource() {
  const context = useContext(StoreContext);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setContestForm((value) => ({
      ...value,
      source: e.target.value as Source,
    }));
  };

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
            checked={context.contestForm.source === source}
            onChange={onChange}
          />
        ))}
      </div>
    </fieldset>
  );
}
