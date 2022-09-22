import cn from 'classnames';
import Link from 'next/link';
import { getAssetUrl } from '../lib/assets';
import FadeIn from '../components/fadeIn';
import ButtonLink from '../components/buttonLink';
import { Route } from '../lib/types';

export default function Home() {
  return (
    <FadeIn>
      <div
        className={cn(
          'px-[20px]',
          'xl:px-0 xl:flex xl:items-center xl:gap-[15px]'
        )}
      >
        <div className={cn('xl:w-[58%]')}>
          <h1>
            <img
              src={getAssetUrl(
                'images/logo-build-your-babys-foundation-to-be-one-step-ahead.png'
              )}
              alt="Build Your Baby's Foundation To Be One Step Ahead"
              width="505"
              height="182"
              className="mx-auto aspect-[505/182]"
            />
          </h1>
          <div className={cn('max-w-[610px] mt-6 mx-auto', 'xl:max-w-full')}>
            <p className="mt-6 text-center font-mairy font-light text-[20px]">
              The early years of your baby has the highest rate of development
              in his entire lifetime. Providing the right nutrients such as{' '}
              <b className="text-yellow-550">
                DHA and Patented Prebiotic Blend
              </b>{' '}
              can help build your child&apos;s{' '}
              <b className="text-yellow-550">
                brain development and natural defences
              </b>{' '}
              - the 2 key pillars of foundation to keep him One Step Ahead.
            </p>
            <p className="mt-4 text-center font-mairy font-light text-[20px]">
              Find out more when you participate in our contest and stand a
              chance to win exclusive prizes and a trip to New Zealand - where
              Aptamil
              <sup>1</sup> is manufactured!
            </p>
          </div>
          <div
            className={cn(
              'max-w-[610px] mx-auto mt-6',
              'sm:flex',
              'xl:max-w-full'
            )}
          >
            <div className={cn('sm:flex-shrink-0', 'xl:w-3/12')}>
              <img
                src={getAssetUrl(
                  'images/trip-to-new-zealand-and-four-aptamil.png'
                )}
                alt="A trip to New Zealand and four Aptamil"
                width="131"
                height="155"
                className="aspect-[131/155] mx-auto"
              />
            </div>
            <div className={cn('p-4', 'lg:pl-6', 'xl:w-9/12')}>
              <div
                className={cn(
                  'relative mt-[20px] border-[3px] rounded-[20px] border-sky-550 pt-[30px] px-[15px] pb-[15px] text-center font-kghappy text-[13px] font-bold',
                  'xl:text-[16px]'
                )}
              >
                <div className="absolute -top-[20px] inset-x-0 px-[15px]">
                  <img
                    src={getAssetUrl(
                      'images/banner-attractive-prizes-up-for-grabs.png'
                    )}
                    alt="Attractive Prizes up for grabs!"
                    width="346"
                    height="37"
                    className="mx-auto aspect-[346/37]"
                  />
                </div>
                A trip to New Zealand worth{' '}
                <span className="text-yellow-550">$5000</span> &amp; 9 months of
                Aptamil
                <sup>7</sup> products worth{' '}
                <span className="text-yellow-550">$2900</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cn('xl:w-[42%]')}>
          <img
            src={getAssetUrl(
              'images/product-aptamil-gold-plus-stage-2-dha-level-lg.png'
            )}
            alt="Aptamil Gold+ Stage 2 DHA level"
            width="509"
            height="583"
            className="mx-auto aspect-[509/583]"
          />
        </div>
      </div>
      <div className={cn('mt-6 text-center', 'lg:mt-12')}>
        <Link href={Route.NATURAL_DEFENCES} passHref>
          <ButtonLink>Join Now</ButtonLink>
        </Link>
      </div>
    </FadeIn>
  );
}
