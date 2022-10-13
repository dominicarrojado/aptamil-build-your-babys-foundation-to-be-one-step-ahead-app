import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import Background from '../components/background';
import Button from '../components/button';
import FadeIn from '../components/fadeIn';
import Footer from '../components/footer';
import ProductItem from '../components/productItem';
import StageItem from '../components/stageItem';
import { Route } from '../lib/types';

export default function NaturalDefences() {
  return (
    <FadeIn>
      <Background src={getAssetUrl('images/bg-space-3.png')} />
      <main className="px-[20px] text-center">
        <img
          src={getAssetUrl('images/banner-2nd-pillar-of-foundation.png')}
          alt="2nd Pillar of Foundation"
          width="309"
          height="42"
          className="max-w-full h-auto aspect-309/42 mx-auto"
        />
        <h1
          className={cn(
            'mt-3 font-kghappy text-[30px] uppercase',
            'sm:text-[35px]'
          )}
        >
          Brain Development
        </h1>
        <p
          className={cn(
            'max-w-[800px] mt-3 mx-auto text-sky-450 font-kghappy font-bold',
            'sm:text-[18px]'
          )}
        >
          Closest to helping your baby meet the World Health Organization (WHO)
          daily recommended DHA intake<sup>6</sup>
        </p>
        <p
          className={cn(
            'mt-6 font-kghappy text-[16px] font-bold',
            'sm:text-[18px]'
          )}
        >
          WHO Daily recommended DHA intake levels<sup>6</sup>
        </p>
        <div className={cn('flex flex-wrap justify-center items-center')}>
          <StageItem
            title={
              <>
                6 - 24
                <br />
                months
              </>
            }
            description={
              <>
                10 - 12mg
                <br />
                DHA/kg
                <br />
                body weight
              </>
            }
            imageSrc={getAssetUrl('images/illus-baby.png')}
            imageAlt="An illustation of a baby"
            imageWidth="47"
            imageHeight="72"
            imageClassName="aspect-47/72"
          />
          <StageItem
            title={
              <>
                2 - 4
                <br />
                years
              </>
            }
            description={
              <>
                100 - 150mg
                <br />
                DHA + EPA
              </>
            }
            imageSrc={getAssetUrl('images/illus-toddler.png')}
            imageAlt="An illustation of a toddler"
            imageWidth="35"
            imageHeight="92"
            imageClassName="aspect-35/92"
          />
          <StageItem
            title={
              <>
                4 - 6
                <br />
                years
              </>
            }
            description={
              <>
                150 - 200mg
                <br />
                DHA + EPA
              </>
            }
            imageSrc={getAssetUrl('images/illus-child.png')}
            imageAlt="An illustation of a child"
            imageWidth="45"
            imageHeight="127"
            imageClassName="aspect-45/127"
          />
        </div>
        <p
          className={cn(
            'mt-6 font-kghappy text-[16px] font-bold',
            'sm:text-[18px]'
          )}
        >
          Aptamil Gold+ Stage 2, 3 &amp; 4 DHA levels
        </p>

        <div className="flex flex-wrap justify-center items-center mt-4">
          <ProductItem
            title="96mg DHA"
            imageSrc={getAssetUrl(
              'images/product-aptamil-gold-plus-stage-2-dha-level.png'
            )}
            imageAlt="Aptamil Gold+ Stage 2 DHA level"
            imageWidth="92"
            imageHeight="119"
            imageClassName="aspect-92/119"
          />
          <ProductItem
            title="96mg DHA"
            imageSrc={getAssetUrl(
              'images/product-aptamil-gold-plus-stage-3-dha-level.png'
            )}
            imageAlt="Aptamil Gold+ Stage 3 DHA level"
            imageWidth="92"
            imageHeight="119"
            imageClassName="aspect-92/119"
          />
          <ProductItem
            title="96mg DHA"
            imageSrc={getAssetUrl(
              'images/product-aptamil-gold-plus-stage-4-dha-level.png'
            )}
            imageAlt="Aptamil Gold+ Stage 4 DHA level"
            imageWidth="91"
            imageHeight="119"
            imageClassName="aspect-91/119"
          />
        </div>
        <div className={cn('mt-6', 'sm:mt-8')}>
          <Link href={Route.HOW_TO_WIN} passHref>
            <Button as="a">How to Win?</Button>
          </Link>
        </div>
      </main>
      <Footer />
    </FadeIn>
  );
}
