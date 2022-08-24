import '../styles/globals.css';
import type { AppProps } from 'next/app';
import FontFaces from '../components/fontFaces';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontFaces />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
