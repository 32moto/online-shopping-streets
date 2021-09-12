import { NextPage } from 'next';

import Top from '@/components/branding/Root/Top';
import Introduction from '@/components/branding/Root/Introduction';
import Recommend from '@/components/branding/Root/Recommend';
import Event from '@/components/branding/Root/Event';
import Contact from '@/components/branding/Root/Contact';

const Root: NextPage = () => {
  return (
    <>
      <Top />
      <Introduction />
      <Recommend />
      <Event />
      <Contact />
    </>
  );
};

export default Root;
