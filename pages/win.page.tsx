import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import cn from 'classnames';
import React, { useContext, useEffect } from 'react';
import { getAssetUrl } from '../lib/assets';
import Alert from '../components/alert';
import Background from '../components/background';
import Button from '../components/button';
import FadeIn from '../components/fadeIn';
import Footer from '../components/footer';
import InputGivenName from '../components/form/inputGivenName';
import InputFamilyName from '../components/form/inputFamilyName';
import InputAddress from '../components/form/inputAddress';
import InputPostalCode from '../components/form/inputPostalCode';
import InputMobileNumber from '../components/form/inputMobileNumber';
import InputEmail from '../components/form/inputEmail';
import InputChildName from '../components/form/inputChildName';
import InputChildBirthDate from '../components/form/inputChildBirthDate';
import InputEstimatedDueDate from '../components/form/inputEstimatedDueDate';
import InputSource from '../components/form/inputSource';
import InputConsent from '../components/form/inputConsent';
import { ErrorMessage, InputId, Route } from '../lib/types';
import { StoreContext } from '../lib/store';

export default function Win() {
  const router = useRouter();
  const context = useContext(StoreContext);
  const { testCompleted, formError } = context;
  const formOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    context.setFormTouched(true);

    const formEl = e.target as HTMLFormElement;
    const givenName = formEl[InputId.GIVEN_NAME];
    const familyName = formEl[InputId.FAMILY_NAME];
    const address = formEl[InputId.ADDRESS];
    const postalCode = formEl[InputId.POSTAL_CODE];
    const mobileNumber = formEl[InputId.MOBILE_NUMBER];
    const email = formEl[InputId.EMAIL];

    if (
      !givenName.checkValidity() ||
      !familyName.checkValidity() ||
      !address.checkValidity() ||
      !postalCode.checkValidity() ||
      !mobileNumber.checkValidity() ||
      !email.checkValidity()
    ) {
      return context.setFormError(ErrorMessage.FORM_INCOMPLETE);
    }

    const consent = formEl[InputId.CONSENT] as HTMLInputElement;

    if (!consent.checked) {
      return context.setFormError(ErrorMessage.FORM_CONSENT_UNCHECKED);
    }

    context.setFormCompleted(true);
    router.push(Route.UPLOAD);
  };

  useEffect(() => {
    if (!testCompleted) {
      router.replace(Route.HOME);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testCompleted]);

  return (
    <FadeIn>
      <NextSeo noindex={true} />
      <Background src={getAssetUrl('images/bg-space-6.png')} />
      <main
        className={cn(
          'max-w-[800px] mx-auto py-[30px] px-[15px]',
          'md:pt-[50px]',
          'lg:px-0',
          'xl:pt-[70px] xl:max-w-5xl'
        )}
      >
        <h1
          className={cn(
            'font-kghappy text-[30px] text-center',
            'md:text-[35px]'
          )}
        >
          You have unlocked the nutrients needed for{' '}
          <span className="text-sky-450">Brain Development</span> and{' '}
          <span className="text-sky-450">Natural Defences!</span>
        </h1>
        <p
          className={cn(
            'mt-4 font-kghappy text-[16px] font-bold text-center',
            'md:text-[18px]'
          )}
        >
          Fill up the form below to qualify for the contest
        </p>
        <form className="flex flex-col gap-4 mt-6" onSubmit={formOnSubmit}>
          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputGivenName />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputFamilyName />
            </div>
          </div>
          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-2/3')}>
              <InputAddress />
            </div>
            <div className={cn('sm:w-1/3')}>
              <InputPostalCode />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputMobileNumber />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputEmail />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputChildName />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputChildBirthDate />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputEstimatedDueDate />
            </div>
            <div className={cn('hidden', 'sm:block sm:w-1/2')} />
          </div>

          <InputSource />

          <div className="mt-4">
            <InputConsent />
          </div>

          <div className="mt-4 text-[18px] font-thin">
            Note: We do not store the information you provide in this form into
            our server. This form is only shown for demonstration purposes only.
          </div>

          {formError && (
            <div className="mt-4 text-center">
              <Alert>{formError}</Alert>
            </div>
          )}

          <div className={cn('mt-6 text-center', 'sm:mt-8')}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </main>
      <Footer />
    </FadeIn>
  );
}

export async function getStaticProps() {
  return {
    props: {
      withMenu: false,
    },
  };
}
