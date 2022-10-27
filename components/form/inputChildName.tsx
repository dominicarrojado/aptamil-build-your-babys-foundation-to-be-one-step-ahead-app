import React, { useContext } from 'react';
import { replaceDoubleSpaces } from '../../lib/string';
import InputBox from '../inputBox';
import InputLabel from '../inputLabel';
import { InputId } from '../../lib/types';
import { StoreContext } from '../../lib/store';

export default function InputChildName() {
  const context = useContext(StoreContext);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    context.setContestForm((value) => ({
      ...value,
      childName: e.target.value.trimStart(),
    }));
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    context.setContestForm((value) => ({
      ...value,
      childName: replaceDoubleSpaces(e.target.value),
    }));
  };

  return (
    <>
      <InputLabel htmlFor={InputId.CHILD_NAME}>Name of Child</InputLabel>
      <InputBox
        id={InputId.CHILD_NAME}
        type="text"
        value={context.contestForm.childName}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}
