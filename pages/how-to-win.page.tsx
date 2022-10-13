import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import Background from '../components/background';
import Button from '../components/button';
import FadeIn from '../components/fadeIn';
import Footer from '../components/footer';
import PrizeItem from '../components/prizeItem';
import StepContent from '../components/stepContent';
import StepItem from '../components/stepItem';
import { Route } from '../lib/types';

export default function HowToWin() {
  return (
    <FadeIn>
      <Background src={getAssetUrl('images/bg-space-4.png')} />
      <main
        className={cn(
          'max-w-[800px] mx-auto px-[20px]',
          'sm:px-[30px]',
          'lg:max-w-full lg:px-[20px]'
        )}
      >
        <h1
          className={cn(
            'mt-3 font-kghappy text-[30px] text-center uppercase',
            'sm:text-[35px]'
          )}
        >
          How to Win
        </h1>
        <div className="xl:flex xl:flex-col xl:items-center">
          <div className="md:flex md:justify-center md:gap-8">
            <div className={cn('mt-8', 'md:max-w-[365px]')}>
              <StepItem
                title="Answer"
                imageSrc={getAssetUrl('images/icon-step-1.png')}
                imageAlt="Step One"
                imageWidth="61"
                imageHeight="56"
                imageClassName="aspect-[61/56]"
              />
              <div className="md:min-h-[117px]">
                <img
                  src={getAssetUrl('images/illus-drag-shield.png')}
                  alt="An illustration of dragging shield"
                  width="208"
                  height="108"
                  className="mt-3 mx-auto aspect-[208/108]"
                />
              </div>
              <StepContent>
                Answer the question on DHA &amp; Patented Prebiotic Blend
                correctly
              </StepContent>
            </div>
            <div className={cn('mt-8', 'md:max-w-[365px]')}>
              <StepItem
                title="Share/Purchase"
                imageSrc={getAssetUrl('images/icon-step-2.png')}
                imageAlt="Step Two"
                imageWidth="60"
                imageHeight="55"
                imageClassName="aspect-[60/55]"
              />
              <img
                src={getAssetUrl('images/illus-share-on-mobile.png')}
                alt="An illustration of sharing on mobile"
                width="155"
                height="118"
                className="mt-3 mx-auto aspect-[155/118]"
              />
              <StepContent>
                Share with your friends or purchase Aptamil<sup>7</sup> products
                to increase your chances of winning
              </StepContent>
            </div>
          </div>
          <div className={cn('mt-8')}>
            <StepItem
              title="Win"
              imageSrc={getAssetUrl('images/icon-step-3.png')}
              imageAlt="Step Three"
              imageWidth="55"
              imageHeight="60"
              imageClassName="aspect-[55/60]"
            />
            <div className={cn('xl:flex xl:items-center xl:gap-4')}>
              <div
                className={cn(
                  'sm:flex sm:justify-center sm:items-center sm:gap-7',
                  'xl:gap-4'
                )}
              >
                <img
                  src={getAssetUrl('images/trip-to-new-zealand.png')}
                  alt="A trip to New Zealand"
                  width="131"
                  height="127"
                  className={cn('mt-3 mx-auto aspect-[131/127]', 'sm:mx-0')}
                />
                <PrizeItem>
                  1 x 1st Prize
                  <br />
                  Trip to New Zealand Worth $5000
                </PrizeItem>
              </div>
              <div
                className={cn(
                  'mt-7 mb-3 text-sky-450 font-kghappy text-[14px] font-bold text-center',
                  'sm:mt-4 sm:text-[16px]'
                )}
              >
                and
              </div>
              <div className="sm:flex sm:justify-center sm:items-center">
                <img
                  src={getAssetUrl(
                    'images/product-aptamil-gold-plus-all-stages.png'
                  )}
                  alt="Aptamil Gold+ products"
                  width="159"
                  height="95"
                  className={cn(
                    'mx-auto aspect-[159/95]',
                    'sm:ml-0 sm:mr-10',
                    'xl:mr-4'
                  )}
                />
                <div
                  className={cn(
                    'mt-4 flex flex-col items-center gap-4',
                    'sm:flex-row sm:justify-center'
                  )}
                >
                  <PrizeItem>
                    1 x 2nd Prize
                    <br />6 months worth of Aptamil<sup>7</sup> products
                  </PrizeItem>
                  <PrizeItem>
                    1 x 3rd Prize
                    <br />3 months worth of Aptamil<sup>7</sup> products
                  </PrizeItem>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn('mt-8 text-center', 'sm:mt-12')}>
          <Link href={Route.TEST_YOUR_KNOWLEDGE} passHref>
            <Button as="a">Test your knowledge and win!</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </FadeIn>
  );
}
