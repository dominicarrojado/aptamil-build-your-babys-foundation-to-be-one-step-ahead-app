import React, { useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputEmail() {
  const [hasError, setHasError] = useState(false);
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
        hasError={hasError}
        onBlur={onBlur}
        required
      />
    </>
  );
}
