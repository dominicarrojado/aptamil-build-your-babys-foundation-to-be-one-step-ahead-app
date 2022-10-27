import React, { useState } from 'react';
import { InputId } from '../../lib/types';
import InputCheck from '../inputCheck';

type Props = { isFormTouched: boolean };

export default function InputConsent({ isFormTouched }: Props) {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((value) => !checked);

  return (
    <InputCheck
      id={InputId.CONSENT}
      checked={checked}
      label="Yes, I consent to receiving information from AptaAdvantage on goods and services that best suit my needs and interest by mail, SMS, phone and email."
      hasError={isFormTouched && !checked}
      onChange={onChange}
    />
  );
}
