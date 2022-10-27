import '../styles/globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import SeoTags from '../components/seoTags';
import FontFaces from '../components/fontFaces';
import TagManager from '../components/tagManager';
import Layout from '../components/layout';
import { ContestForm } from '../lib/types';
import { StoreContext } from '../lib/store';
import { CONTEST_FORM_DEFAULT_VALUES } from '../lib/constants';

function MyApp({ Component, pageProps }: AppProps) {
  const { withMenu, ...otherPageProps } = pageProps;
  const [testCompleted, setTestCompleted] = useState(false);
  const [contestForm, setContestForm] = useState<ContestForm>(
    CONTEST_FORM_DEFAULT_VALUES
  );
  const [formTouched, setFormTouched] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);
  const [formError, setFormError] = useState('');
  const [userShared, setUserShared] = useState(false);
  const [userUploaded, setUserUploaded] = useState(false);

  return (
    <>
      <SeoTags />
      <FontFaces />
      <TagManager />
      <StoreContext.Provider
        value={{
          testCompleted,
          contestForm,
          formTouched,
          formCompleted,
          formError,
          userShared,
          userUploaded,
          setTestCompleted,
          setContestForm,
          setFormTouched,
          setFormCompleted,
          setFormError,
          setUserShared,
          setUserUploaded,
        }}
      >
        <Layout withMenu={withMenu}>
          <Component {...otherPageProps} />
        </Layout>
      </StoreContext.Provider>
    </>
  );
}

export default MyApp;
