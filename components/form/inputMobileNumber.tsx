import React, { useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputMobileNumber() {
  const [hasError, setHasError] = useState(false);
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
        type="tel"
        pattern="(6|8|9)\d{7}"
        maxLength={8}
        title="Please enter an 8 digit Singapore phone number."
        hasError={hasError}
        onBlur={onBlur}
        required
      />
    </>
  );
}
