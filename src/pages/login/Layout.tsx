import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="bg-[#fff] flex flex-row w-screen h-screen justify-center items-center ">
      <div className="w-full h-full max-w-7xl flex flex-row items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
