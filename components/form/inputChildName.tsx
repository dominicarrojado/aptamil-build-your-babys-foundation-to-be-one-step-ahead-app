import React from 'react';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';

export default function InputChildName() {
  return (
    <>
      <InputLabel htmlFor={InputId.CHILD_NAME}>Name of Child</InputLabel>
      <InputBox id={InputId.CHILD_NAME} type="text" />
    </>
  );
}
