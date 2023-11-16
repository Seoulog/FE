import React from 'react';

import Header from '../../components/ui/header/Header';
import Footer from '../../components/ui/footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
