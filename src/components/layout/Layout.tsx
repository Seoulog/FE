import React from 'react';

import LeftMenu from '../ui/menus/LeftMenu';
import BottomMenu from '../ui/menus/BottomMenu';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <LeftMenu />
      <main className="min-h-screen lg:ml-[220px] pr-2">{children}</main>
      <button className="hidden lg:flex h-16 w-16 rounded-full bg-[#4C51CC] fixed right-16 bottom-[8.6vh] shadow-md shadow-slate-600 justify-center items-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 13C25.5 13.3978 25.342 13.7794 25.0607 14.0607C24.7794 14.342 24.3978 14.5 24 14.5H14.5V24C14.5 24.3978 14.342 24.7794 14.0607 25.0607C13.7794 25.342 13.3978 25.5 13 25.5C12.6022 25.5 12.2206 25.342 11.9393 25.0607C11.658 24.7794 11.5 24.3978 11.5 24V14.5H2C1.60218 14.5 1.22064 14.342 0.93934 14.0607C0.658035 13.7794 0.5 13.3978 0.5 13C0.5 12.6022 0.658035 12.2206 0.93934 11.9393C1.22064 11.658 1.60218 11.5 2 11.5H11.5V2C11.5 1.60218 11.658 1.22064 11.9393 0.93934C12.2206 0.658035 12.6022 0.5 13 0.5C13.3978 0.5 13.7794 0.658035 14.0607 0.93934C14.342 1.22064 14.5 1.60218 14.5 2V11.5H24C24.3978 11.5 24.7794 11.658 25.0607 11.9393C25.342 12.2206 25.5 12.6022 25.5 13Z"
            fill="white"
          />
        </svg>
      </button>
      <BottomMenu />
    </div>
  );
};

export default Layout;
