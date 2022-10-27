import React, { useContext, useState } from 'react';
import { removeNonDigit } from '../../lib/string';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { ErrorMessage, InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputPostalCode() {
  const context = useContext(StoreContext);
  const [hasError, setHasError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setFormError((value) =>
      value === ErrorMessage.FORM_INCOMPLETE ? '' : value
    );

    context.setContestForm((value) => ({
      ...value,
      postalCode: removeNonDigit(e.target.value),
    }));
  };
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
        inputMode="numeric"
        autoComplete="postal-code"
        pattern="\d{6}"
        maxLength={6}
        title="Please enter a 6 digit postal code."
        value={context.contestForm.postalCode}
        hasError={hasError}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
}
