import React, { useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputGivenName() {
  const [hasError, setHasError] = useState(false);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.GIVEN_NAME}>
        Given Name <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.GIVEN_NAME}
        type="text"
        autoComplete="given-name"
        hasError={hasError}
        onBlur={onBlur}
        required
      />
    </>
  );
}
