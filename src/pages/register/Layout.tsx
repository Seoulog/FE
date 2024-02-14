import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex w-full h-full max-w-7xl justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
