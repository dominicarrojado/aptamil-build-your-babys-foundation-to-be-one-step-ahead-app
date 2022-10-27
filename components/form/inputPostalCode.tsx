import React, { useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputPostalCode() {
  const [hasError, setHasError] = useState(false);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.POSTAL_CODE}>
        Postal Code <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.POSTAL_CODE}
        type="text"
        autoComplete="postal-code"
        pattern="\d{6}"
        maxLength={6}
        title="Please enter a 6 digit postal code."
        hasError={hasError}
        onBlur={onBlur}
        required
      />
    </>
  );
}
