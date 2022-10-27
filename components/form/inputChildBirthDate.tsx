import React, { useContext, useMemo } from 'react';
import InputDate from '../inputDate';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputChildBirthDate() {
  const context = useContext(StoreContext);
  const maxDate = useMemo(() => new Date(), []);
  const onChange = (date: Date | null) => {
    context.setContestForm((value) => ({
      ...value,
      childBirthDate: date,
    }));
  };

  return (
    <>
      <InputLabel htmlFor={InputId.CHILD_BIRTH_DATE}>
        Child&apos;s Date of Birth
      </InputLabel>
      <InputDate
        id={InputId.CHILD_BIRTH_DATE}
        maxDate={maxDate}
        value={context.contestForm.childBirthDate}
        onChange={onChange}
      />
    </>
  );
}
