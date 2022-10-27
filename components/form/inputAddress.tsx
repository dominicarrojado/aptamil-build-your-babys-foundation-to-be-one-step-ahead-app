import React, { useContext, useState } from 'react';
import { replaceDoubleSpaces } from '../../lib/string';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { ErrorMessage, InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputAddress() {
  const context = useContext(StoreContext);
  const [hasError, setHasError] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setFormError((value) =>
      value === ErrorMessage.FORM_INCOMPLETE ? '' : value
    );
    context.setContestForm((value) => ({
      ...value,
      address: e.target.value.trimStart(),
    }));
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    context.setContestForm((value) => ({
      ...value,
      address: replaceDoubleSpaces(e.target.value),
    }));

    const inputEl = e.target as HTMLInputElement;

    setHasError(!inputEl.checkValidity());
  };

  return (
    <>
      <InputLabel htmlFor={InputId.ADDRESS}>
        Address <sup>*</sup>
      </InputLabel>
      <InputBox
        id={InputId.ADDRESS}
        type="text"
        autoComplete="street-address"
        value={context.contestForm.address}
        hasError={hasError}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
    </>
  );
}
