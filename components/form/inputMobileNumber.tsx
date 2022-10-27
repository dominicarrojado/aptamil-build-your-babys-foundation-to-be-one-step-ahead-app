import React, { useContext, useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { ErrorMessage, InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';
import { RE_NON_DIGIT } from '../../lib/constants';
import { removeNonDigit } from '../../lib/string';

export default function InputMobileNumber() {
  const context = useContext(StoreContext);
  const [hasError, setHasError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setFormError((value) =>
      value === ErrorMessage.FORM_INCOMPLETE ? '' : value
    );

    context.setContestForm((value) => ({
      ...value,
      mobileNumber: removeNonDigit(e.target.value),
    }));
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.MOBILE_NUMBER}>
        Mobile Number <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.MOBILE_NUMBER}
        type="text"
        inputMode="numeric"
        autoComplete="tel-local"
        pattern="(6|8|9)\d{7}"
        maxLength={8}
        title="Please enter an 8 digit Singapore phone number."
        value={context.contestForm.mobileNumber}
        hasError={hasError}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
}
