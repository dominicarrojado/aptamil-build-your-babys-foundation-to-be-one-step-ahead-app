import cn from 'classnames';
import React from 'react';
import Alert from '../components/alert';
import Button from '../components/button';
import FadeIn from '../components/fadeIn';
import InputBox from '../components/inputBox';
import InputCheck from '../components/inputCheck';
import InputLabel from '../components/inputLabel';
import InputLegend from '../components/inputLegend';
import InputRadio from '../components/inputRadio';

export default function Win() {
  const formOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <FadeIn>
      <div
        className={cn(
          'max-w-[800px] mx-auto py-[30px] px-[15px]',
          'md:pt-[50px]',
          'lg:px-0',
          'xl:pt-[70px] xl:max-w-5xl'
        )}
      >
        <h3
          className={cn(
            'font-kghappy text-[30px] text-center',
            'md:text-[35px]'
          )}
        >
          You have unlocked the nutrients needed for{' '}
          <span className="text-sky-450">Brain Development</span> and{' '}
          <span className="text-sky-450">Natural Defences!</span>
        </h3>
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
              <InputLabel htmlFor="first-name">First Name</InputLabel>
              <InputBox id="first-name" type="text" autoComplete="given-name" />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="last-name">Last Name</InputLabel>
              <InputBox id="last-name" type="text" autoComplete="family-name" />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-2/3')}>
              <InputLabel htmlFor="address">Address</InputLabel>
              <InputBox
                id="address"
                type="text"
                autoComplete="street-address"
              />
            </div>
            <div className={cn('sm:w-1/3')}>
              <InputLabel htmlFor="zip-code">ZIP Code</InputLabel>
              <InputBox id="zip-code" type="text" autoComplete="postal-code" />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="mobile-number">Mobile Number</InputLabel>
              <InputBox id="mobile-number" type="tel" />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <InputBox id="email" type="email" />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="child-name">Name of Child</InputLabel>
              <InputBox id="child-name" type="text" />
            </div>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="child-birth-date">
                Child&apos;s Date of Birth
              </InputLabel>
              <InputBox id="child-birth-date" type="date" />
            </div>
          </div>

          <div className={cn('flex flex-col gap-4', 'sm:flex-row sm:gap-6')}>
            <div className={cn('sm:w-1/2')}>
              <InputLabel htmlFor="estimated-due-date">
                For Pregnant Mums - Estimated Due Date (optional)
              </InputLabel>
              <InputBox id="estimated-due-date" type="date" />
            </div>
            <div className={cn('hidden', 'sm:block sm:w-1/2')}></div>
          </div>

          <fieldset>
            <InputLegend>Where did you hear about this contest?</InputLegend>
            <div
              className={cn(
                'flex flex-col gap-2',
                'sm:flex-row sm:flex-wrap sm:gap-4',
                'md:gap-x-6'
              )}
            >
              <InputRadio name="source" label="FairPrice" />
              <InputRadio name="source" label="Doctor / Paediatrician" />
              <InputRadio name="source" label="Newspaper" />
              <InputRadio name="source" label="Facebook / Instagram" />
              <InputRadio name="source" label="Online Banners" />
              <InputRadio name="source" label="Others" />
            </div>
          </fieldset>
          <div className="mt-4">
            <InputCheck label="Yes, I consent to receiving information from AptaAdvantage on goods and services that best suit my needs and interest by mail, SMS, phone and email." />
          </div>
          <div className="mt-4 text-center">
            <Alert>Some fields are empty or contain an improper value.</Alert>
          </div>
          <div className={cn('mt-6 text-center', 'sm:mt-8')}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
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
