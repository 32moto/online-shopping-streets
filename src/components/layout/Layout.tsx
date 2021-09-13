import { FC } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
