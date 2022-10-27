import { Dispatch, SetStateAction } from 'react';

export enum Route {
  HOME = '/',
  NATURAL_DEFENCES = '/1st-pillar-of-foundation-natural-defences',
  BRAIN_DEVELOPMENT = '/2nd-pillar-of-foundation-brain-development',
  HOW_TO_WIN = '/how-to-win',
  TEST_YOUR_KNOWLEDGE = '/test-your-knowledge',
  WIN = '/win',
  UPLOAD = '/upload',
}

export enum ExternalUrl {
  APTAADVANTAGE = 'https://www.aptaadvantage.com.sg/',
}

export enum InputId {
  GIVEN_NAME = 'given-name',
  FAMILY_NAME = 'family-name',
  ADDRESS = 'address',
  POSTAL_CODE = 'postal-code',
  MOBILE_NUMBER = 'mobile-number',
  EMAIL = 'email',
  CHILD_NAME = 'child-name',
  CHILD_BIRTH_DATE = 'child-birth-date',
  ESTIMATED_DUE_DATE = 'estimated-due-date',
  SOURCE = 'source',
  CONSENT = 'consent',
}

export enum Source {
  FAIRPRICE = 'FairPrice',
  DOCTOR = 'Doctor / Paediatrician',
  NEWSPAPER = 'Newspaper',
  SOCIAL_MEDIA = 'Facebook / Instagram',
  ONLINE_BANNERS = 'Online Banners',
  OTHERS = 'Others',
}

export enum ErrorMessage {
  FORM_INCOMPLETE = 'Some fields are empty or contain an improper value.',
  FORM_CONSENT_UNCHECKED = 'You must consent to before you can proceed.',
}

export enum ExternalUrl {
  SHARER_FACEBOOK = 'https://www.facebook.com/sharer',
}

export type ContestForm = {
  givenName: string;
  familyName: string;
  address: string;
  postalCode: string;
  mobileNumber: string;
  email: string;
  childName: string;
  childBirthDate: Date | null;
  estimatedDueDate: Date | null;
  source?: Source;
  consent: boolean;
};

export type StoreContextType = {
  testCompleted: boolean;
  contestForm: ContestForm;
  formTouched: boolean;
  formCompleted: boolean;
  formError: string;
  userShared: boolean;
  userUploaded: boolean;
  setTestCompleted: Dispatch<SetStateAction<boolean>>;
  setContestForm: Dispatch<SetStateAction<ContestForm>>;
  setFormTouched: Dispatch<SetStateAction<boolean>>;
  setFormCompleted: Dispatch<SetStateAction<boolean>>;
  setFormError: Dispatch<SetStateAction<string>>;
  setUserShared: Dispatch<SetStateAction<boolean>>;
  setUserUploaded: Dispatch<SetStateAction<boolean>>;
};
