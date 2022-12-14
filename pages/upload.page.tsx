import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import { trackEvent } from '../lib/google-analytics';
import Background from '../components/background';
import FadeIn from '../components/fadeIn';
import Footer from '../components/footer';
import Button from '../components/button';
import {
  ExternalUrl,
  GoogleAnalyticsEvent,
  Route,
  SocialName,
} from '../lib/types';
import { StoreContext } from '../lib/store';
import { MAIN_URL } from '../lib/constants';

export default function Upload() {
  const router = useRouter();
  const context = useContext(StoreContext);
  const { formCompleted } = context;
  const shareOnClick = () => {
    context.setUserShared(true);

    trackEvent({
      event: GoogleAnalyticsEvent.CONTEST_SHARE,
      socialName: SocialName.FACEBOOK,
    });
  };
  const fileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target as HTMLInputElement;

    if (!files || files.length === 0) {
      return;
    }

    context.setUserUploaded(true);

    trackEvent({
      event: GoogleAnalyticsEvent.CONTEST_RECEIPT_UPLOAD,
    });
  };

  useEffect(() => {
    if (!formCompleted) {
      router.replace(Route.HOME);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formCompleted]);

  return (
    <FadeIn>
      <NextSeo noindex />
      <Background src={getAssetUrl('images/bg-space-7.png')} />
      <main
        className={cn(
          'max-w-[540px] mx-auto pt-[30px] px-[15px]',
          'md:max-w-[720px] md:pt-[50px]',
          'xl:max-w-full xl:flex xl:items-center xl:pt-[70px]'
        )}
      >
        <div className="xl:w-1/2 xl:max-w-[534px]">
          <img
            src={getAssetUrl('images/banner-congratulations.png')}
            alt="Congratulations!"
            width="534"
            height="104"
            className="max-w-full h-auto aspect-534/104 mx-auto"
          />
          <h1
            className={cn(
              'mt-3 font-kghappy text-[30px] text-center',
              'md:text-[35px]'
            )}
          >
            Thank you for joining our contest!
          </h1>
          <p
            className={cn(
              'mt-4 font-kghappy text-[16px] font-bold text-center',
              'md:text-[18px]'
            )}
          >
            Get additional chances by sharing this contest with your friends and
            uploading your recent Aptamil<sup>7</sup> purchase receipt.
          </p>
          <div
            className={cn(
              'max-w-[460px] mt-8 mx-auto flex flex-col gap-[40px]',
              'sm:gap-[50px]'
            )}
          >
            <Button
              as="a"
              href={`${ExternalUrl.SHARER_FACEBOOK}?u=${encodeURIComponent(
                MAIN_URL
              )}`}
              className="w-full"
              iconTitle="+5"
              iconSubtitle="chances"
              disabled={context.userShared}
              onClick={shareOnClick}
              isExternal
            >
              <img
                src={getAssetUrl('images/icon-share.png')}
                alt="Share"
                width="23"
                height="22"
                className="inline-block w-auto h-[19px] aspect-23/22 -mt-1"
              />{' '}
              Share with friends
            </Button>
            <Button
              as="label"
              className="w-full"
              iconTitle="+10"
              iconSubtitle="chances"
              iconPosition="left"
              htmlFor="file-upload"
              disabled={context.userUploaded}
            >
              <img
                src={getAssetUrl('images/icon-receipt.png')}
                alt="Receipt"
                width="23"
                height="27"
                className="inline-block w-auto h-[19px] aspect-23/27 -mt-1"
              />{' '}
              Upload purchase receipt
            </Button>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              accept="image/jpeg, image/png"
              onChange={fileOnChange}
            />
            <div className="text-center">
              <Button
                as="a"
                className="w-full"
                href={ExternalUrl.APTAADVANTAGE}
                isExternal
              >
                <img
                  src={getAssetUrl('images/icon-web.png')}
                  alt="Web"
                  width="26"
                  height="26"
                  className="inline-block w-auto h-[19px] aspect-26/26 -mt-1"
                />{' '}
                Go to aptaadvantage<span className="inline-block">.com.sg</span>
              </Button>
              <Link href={Route.HOME}>
                <a
                  className={cn(
                    'inline-block mt-6 text-sky-450 font-light',
                    'hover:underline',
                    'sm:text-[18px]'
                  )}
                >
                  Back to Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2">
          <img
            src={getAssetUrl(
              'images/product-aptamil-gold-plus-stage-2-dha-level-md.png'
            )}
            alt="Aptamil Gold+ Stage 2 DHA level"
            width="486"
            height="556"
            className="mx-auto aspect-[486/556]"
          />
        </div>
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
