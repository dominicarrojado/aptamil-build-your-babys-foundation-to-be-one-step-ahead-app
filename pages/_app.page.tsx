import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SeoTags from '../components/seoTags';
import FontFaces from '../components/fontFaces';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SeoTags />
      <FontFaces />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
