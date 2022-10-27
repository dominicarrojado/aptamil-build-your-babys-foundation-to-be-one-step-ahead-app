import { RE_NON_DIGIT, RE_SPACES } from './constants';

export function removeNonDigit(value: string) {
  return value.replace(RE_NON_DIGIT, '');
}

export function replaceDoubleSpaces(value: string) {
  let newValue = value.trim();
  newValue = newValue.replace(RE_SPACES, ' ');

  return newValue;
}
