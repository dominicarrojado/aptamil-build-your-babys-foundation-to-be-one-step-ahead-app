import React, { useContext, useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { ErrorMessage, InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputEmail() {
  const context = useContext(StoreContext);
  const [hasError, setHasError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setFormError((value) =>
      value === ErrorMessage.FORM_INCOMPLETE ? '' : value
    );
    context.setContestForm((value) => ({
      ...value,
      email: e.target.value.trim(),
    }));
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.EMAIL}>
        Email Address <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.EMAIL}
        type="email"
        value={context.contestForm.email}
        hasError={hasError}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
}
