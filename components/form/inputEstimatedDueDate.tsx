import React, { useState } from 'react';
import InputDate from '../inputDate';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputEstimatedDueDate() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <InputLabel htmlFor={InputId.ESTIMATED_DUE_DATE}>
        For Pregnant Mums - Estimated Due Date (optional)
      </InputLabel>
      <InputDate
        id={InputId.ESTIMATED_DUE_DATE}
        value={date}
        onChange={setDate}
      />
    </>
  );
}
