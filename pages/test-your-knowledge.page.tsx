import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import cn from 'classnames';
import { getAssetUrl } from '../lib/assets';
import { useDragElement } from '../lib/custom-hooks';
import Background from '../components/background';
import DragBrainDevelopment from '../components/dragBrainDevelopment';
import DragNaturalDefences from '../components/dragNaturalDefences';
import DropBrainDevelopment from '../components/dropBrainDevelopment';
import DropNaturalDefences from '../components/dropNaturalDefences';
import FadeIn from '../components/fadeIn';
import Footer from '../components/footer';
import { Route } from '../lib/types';

export default function TestYourKnowledge() {
  const router = useRouter();
  const dhaProps = useDragElement();
  const pbbProps = useDragElement();
  const dhaIsDropped = dhaProps.isDropped;
  const pbbIsDropped = pbbProps.isDropped;

  useEffect(() => {
    if (dhaIsDropped && pbbIsDropped) {
      router.push(Route.WIN);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dhaIsDropped, pbbIsDropped]);

  return (
    <FadeIn>
      <Background src={getAssetUrl('images/bg-space-5.png')} />
      <main
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
                'images/product-aptamil-gold-plus-stage-2-dha-level-sm.png'
              )}
              alt="Aptamil Gold+ Stage 2 DHA level"
              width="379"
              height="365"
              className="mx-auto aspect-[379/365]"
              draggable={false}
            />
            <div
              className={cn(
                'flex flex-col items-center justify-center gap-4 z-10',
                'sm:flex-row',
                'md:flex-col md:w-[230px] md:transform md:-translate-x-[100px]',
                'xl:-translate-x-[70px]'
              )}
            >
              <DragBrainDevelopment {...dhaProps} />
              <DragNaturalDefences {...pbbProps} />
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
              <DropBrainDevelopment
                isDropped={dhaIsDropped}
                dropElRef={dhaProps.dropElRef}
              />
              <DropNaturalDefences
                isDropped={pbbIsDropped}
                dropElRef={pbbProps.dropElRef}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </FadeIn>
  );
}
