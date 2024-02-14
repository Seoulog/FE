import React from 'react';

import LeftMenu from '../ui/menus/LeftMenu';
import BottomMenu from '../ui/menus/BottomMenu';
import ImageUploadModal from '../modal/ImageUpload.modal';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <LeftMenu />
      <main className="min-h-screen lg:ml-[220px] pr-2">{children}</main>
      <ImageUploadModal />
      <BottomMenu />
    </div>
  );
};

export default Layout;
