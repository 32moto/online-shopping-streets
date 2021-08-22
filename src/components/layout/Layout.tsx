import { FC } from 'react';
import Header from '@/components/layout/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
