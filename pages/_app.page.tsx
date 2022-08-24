import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FontFaces from '../components/fontFaces';
import SeoTags from '../components/seoTags';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <FontFaces />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
