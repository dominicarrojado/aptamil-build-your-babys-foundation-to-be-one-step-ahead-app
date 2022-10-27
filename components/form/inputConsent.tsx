import React, { useContext } from 'react';
import { StoreContext } from '../../lib/store';
import { ErrorMessage, InputId } from '../../lib/types';
import InputCheck from '../inputCheck';

export default function InputConsent() {
  const context = useContext(StoreContext);
  const { consent } = context.contestForm;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setFormError((value) =>
      value === ErrorMessage.FORM_CONSENT_UNCHECKED ? '' : value
    );
    context.setContestForm((value) => ({
      ...value,
      consent: e.target.checked,
    }));
  };

  return (
    <InputCheck
      id={InputId.CONSENT}
      checked={consent}
      label="Yes, I consent to receiving information from AptaAdvantage on goods and services that best suit my needs and interest by mail, SMS, phone and email."
      hasError={context.formTouched && !consent}
      onChange={onChange}
    />
  );
}
