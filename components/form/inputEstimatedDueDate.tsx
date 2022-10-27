import React, { useContext, useMemo } from 'react';
import InputDate from '../inputDate';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputEstimatedDueDate() {
  const context = useContext(StoreContext);
  const minDate = useMemo(() => new Date(), []);
  const onChange = (date: Date | null) => {
    context.setContestForm((value) => ({
      ...value,
      estimatedDueDate: date,
    }));
  };

  return (
    <>
      <InputLabel htmlFor={InputId.ESTIMATED_DUE_DATE}>
        For Pregnant Mums - Estimated Due Date (optional)
      </InputLabel>
      <InputDate
        id={InputId.ESTIMATED_DUE_DATE}
        minDate={minDate}
        value={context.contestForm.estimatedDueDate}
        onChange={onChange}
      />
    </>
  );
}
