import { NextPage } from 'next';
import Head from 'next/head';

import Top from '@/components/branding/Root/Top';
import Introduction from '@/components/branding/Root/Introduction';
import Recommend from '@/components/branding/Root/Recommend';
import Event from '@/components/branding/Root/Event';
import Note from '@/components/branding/Root/Note';
import Contact from '@/components/branding/Root/Contact';

import TEXTS from '@/constants/texts';
import ogpImage from '@/assets/branding/ogp.png';

const Root: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>オンライン商店街</title>
        <meta name="description" content={TEXTS.DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://online-shopping-streets.vercel.app"
        />
        <meta property="og:title" content="オンライン商店街" />
        <meta property="og:description" content={TEXTS.DESCRIPTION} />
        <meta
          property="og:image"
          content={`https://online-shopping-streets.vercel.app${ogpImage.src}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Top />
      <Introduction />
      <Recommend />
      <Event />
      <Note />
      <Contact />
    </>
  );
};

export default Root;
