import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { GlobalStyle } from '@/styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
