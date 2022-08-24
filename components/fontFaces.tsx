import Head from 'next/head';
import React, { Fragment } from 'react';
import { getAssetUrl } from '../lib/assets';
import { FONTS } from '../lib/constants';

export default function FontFaces() {
  return (
    <Head>
      {FONTS.map((font, idx) => (
        <Fragment key={idx}>
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={getAssetUrl(`fonts/${font}.woff2`)}
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Fragment>
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'Mairy';
              font-style: normal;
              font-weight: 300;
              src: url('${getAssetUrl(
                'fonts/Mairy-Light.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/Mairy-Light.woff')}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'Mairy';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/Mairy-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/Mairy-Regular.woff'
                )}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'Mairy';
              font-style: normal;
              font-weight: 700;
              src: url('${getAssetUrl(
                'fonts/Mairy-Bold.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/Mairy-Bold.woff')}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'Mairy';
              font-style: normal;
              font-weight: 800;
              src: url('${getAssetUrl(
                'fonts/Mairy-ExtraBold.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/Mairy-ExtraBold.woff'
                )}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'Mairy';
              font-style: normal;
              font-weight: 900;
              src: url('${getAssetUrl(
                'fonts/Mairy-Black.woff2'
              )}') format('woff2'),
                url('${getAssetUrl('fonts/Mairy-Black.woff')}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'KG Happy';
              font-style: normal;
              font-weight: 400;
              src: url('${getAssetUrl(
                'fonts/KG-Happy-Regular.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/KG-Happy-Regular.woff'
                )}') format('woff');
              font-display: swap;
            }

            @font-face {
              font-family: 'KG Happy';
              font-style: normal;
              font-weight: 700;
              src: url('${getAssetUrl(
                'fonts/KG-Happy-Bold.woff2'
              )}') format('woff2'),
                url('${getAssetUrl(
                  'fonts/KG-Happy-Bold.woff'
                )}') format('woff');
              font-display: swap;
            }
          `,
        }}
      />
    </Head>
  );
}
