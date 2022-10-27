import React, { useState } from 'react';
import InputDate from '../inputDate';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputChildBirthDate() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <InputLabel htmlFor={InputId.CHILD_BIRTH_DATE}>
        Child&apos;s Date of Birth
      </InputLabel>
      <InputDate
        id={InputId.CHILD_BIRTH_DATE}
        value={date}
        onChange={setDate}
      />
    </>
  );
}
