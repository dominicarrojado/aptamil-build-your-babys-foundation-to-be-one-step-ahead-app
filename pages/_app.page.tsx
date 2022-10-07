import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SeoTags from '../components/seoTags';
import FontFaces from '../components/fontFaces';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const { withMenu, ...otherPageProps } = pageProps;

  return (
    <>
      <SeoTags />
      <FontFaces />
      <Layout withMenu={withMenu}>
        <Component {...otherPageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
