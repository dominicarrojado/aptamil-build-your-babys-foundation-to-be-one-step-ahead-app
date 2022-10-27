import React, { useState } from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputFamilyName() {
  const [hasError, setHasError] = useState(false);
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.FAMILY_NAME}>
        Family Name <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.FAMILY_NAME}
        type="text"
        autoComplete="family-name"
        hasError={hasError}
        onBlur={onBlur}
        required
      />
    </>
  );
}
