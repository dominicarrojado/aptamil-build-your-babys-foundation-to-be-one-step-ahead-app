import React from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import ActionItem from '../components/actionItem';
import FadeIn from '../components/fadeIn';
import DropBrainDevelopment from '../components/dropBrainDevelopment';
import DropNaturalDefences from '../components/dropNaturalDefences';

export default function TestYourKnowledge() {
  return (
    <FadeIn>
      <div
        className={cn(
          'max-w-[600px] mx-auto px-[20px] pt-[10px] pb-[20px]',
          'md:max-w-[720px] md:rounded-[20px] md:bg-blue-650 md:mt-[60px] md:pb-[40px]',
          'lg:max-w-[800px]',
          'xl:max-w-[1140px]'
        )}
      >
        <h1 className="md:-mt-[60px] md:px-[10px]">
          <img
            src={getAssetUrl('images/banner-test-your-knowledge-and-win.png')}
            alt="Test your knowledge and win"
            width="674"
            height="131"
            className="mx-auto aspect-[674/131]"
            draggable={false}
          />
        </h1>
        <p
          className={cn(
            'mt-[20px] font-light text-center text-[18px]',
            'md:text-[23px]'
          )}
        >
          Build your baby&apos;s foundations by unlocking the nutrients needed
          for Brain Development and Natural Defences.
          <br />
          <b>Drag and drop</b> the nutrients to the corresponding pillar of
          foundation.
        </p>
        <div
          className={cn(
            'select-none',
            'xl:flex xl:items-center xl:justify-center xl:mt-3'
          )}
        >
          <div
            className={cn(
              'mt-3',
              'md:flex md:items-center',
              'xl:mt-0 xl:-translate-x-[50px] xl:flex-shrink-0 xl:z-10'
            )}
          >
            <img
              src={getAssetUrl(
                'images/product-aptamil-gold-plus-stage-2-dha-level-md.png'
              )}
              alt="Aptamil Gold+ Stage 2 DHA level"
              width="379"
              height="365"
              className="mx-auto aspect-[379/365]"
              draggable={false}
            />
            <div
              className={cn(
                'flex flex-col items-center justify-center gap-4',
                'sm:flex-row',
                'md:flex-col md:w-[230px] md:transform md:-translate-x-[100px]',
                'xl:-translate-x-[70px]'
              )}
            >
              <ActionItem
                title="DHA"
                className="text-[25px]"
                imageSrc={getAssetUrl('images/icon-books.png')}
                imageAlt="Books icon"
                imageWidth="71"
                imageHeight="67"
                imageClassName="aspect-[71/67]"
              />
              <ActionItem
                title={
                  <>
                    Patented <br />
                    Prebiotic Blend
                  </>
                }
                className="text-[16px]"
                imageSrc={getAssetUrl('images/icon-shield.png')}
                imageAlt="Shield icon"
                imageWidth="60"
                imageHeight="75"
                imageClassName="aspect-[60/75]"
              />
            </div>
          </div>
          <div className={cn('flex flex-col items-center mt-6', 'md:mt-0')}>
            <div className="relative inline-flex">
              <img
                src={getAssetUrl('images/x-ray-child-thinking.png')}
                alt="X-ray of a thinking child"
                width="379"
                height="365"
                className="aspect-[379/365]"
                draggable={false}
              />
              <DropBrainDevelopment />
              <DropNaturalDefences />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
