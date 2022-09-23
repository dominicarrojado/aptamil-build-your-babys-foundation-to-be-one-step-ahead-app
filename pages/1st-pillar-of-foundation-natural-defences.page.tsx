import Link from 'next/link';
import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import FadeIn from '../components/fadeIn';
import ButtonLink from '../components/buttonLink';
import { Route } from '../lib/types';

export default function NaturalDefences() {
  return (
    <FadeIn>
      <div className="px-[20px] text-center">
        <img
          src={getAssetUrl('images/banner-1st-pillar-of-foundation.png')}
          alt="1st Pillar of Foundation"
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
          Natural Defences
        </h1>
        <p
          className={cn(
            'mt-3 text-sky-450 font-kghappy font-bold',
            'sm:text-[18px]'
          )}
        >
          The only proven<sup>2</sup> Patented Prebiotic Blend<sup>3</sup>{' '}
          supporting your child&apos;s natural defences<sup>4</sup>
        </p>
        <p
          className={cn(
            'mt-3 text-[18px] font-light',
            'sm:text-[23px]',
            'xl:max-w-[60%] xl:text-left'
          )}
        >
          Clinical Study published in Journal of Pediatric Gastroenterology and
          Nutrition (JPGN<sup>5</sup>)
        </p>
        <div
          className={cn(
            'mt-7',
            'xl:mt-0 xl:flex xl:flex-row-reverse xl:items-center'
          )}
        >
          <div className="xl:w-2/5 xl:flex-shrink-0">
            <img
              src={getAssetUrl(
                'images/graph-formula-milk-with-and-without-patented-prebiotic-blend.png'
              )}
              alt="Graph comparison between Formula Milk with Patented Prebiotic Blend and Other Formula Milk"
              width="416"
              height="362"
              className="max-w-full h-auto aspect-416/362 mx-auto"
            />
          </div>
          <div
            className={cn(
              'mt-12 text-[18px]',
              'sm:text-[23px]',
              'xl:w-3/5 xl:mt-0 xl:pr-8'
            )}
          >
            <p className="text-left font-bold uppercase">
              Key highlights from this study:
            </p>
            <ul
              className="pl-6 text-left font-light"
              style={{
                listStyleImage: `url(${getAssetUrl('images/icon-check.png')})`,
              }}
            >
              <li className="pl-2">
                Conducted across various countries in Europe and Asia
              </li>
              <li className="pl-2">767 Childcare based children</li>
              <li className="pl-2">
                Consumption of formula milk supplement with Patented Prebiotic
                Blend (scGOS:IcFOS in ratio 9:1) led to
              </li>
              <li className="pl-2">
                Increase in number of children with{' '}
                <b>zero infectious episodes</b>
              </li>
            </ul>
          </div>
        </div>
        <div className={cn('mt-8', 'sm:mt-12')}>
          <Link href={Route.BRAIN_DEVELOPMENT} passHref>
            <ButtonLink>Learn more about brain development</ButtonLink>
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
