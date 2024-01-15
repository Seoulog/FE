import React from 'react';

import Layout from '../../components/layout/Layout';
import AlbumContainer from './AlbumContainer';
import AlbumFilter from './AlbumFilter';

const Album = () => {
  return (
    <div>
      <Layout>
        <div className="w-full pt-8 lg:pt-[calc(7vh)] pb-2 pl-2 lg:sticky lg:top-0 bg-white">
          {/* 페이지 상세 상단영역  */}
        </div>
        <div className="px-4 mt-2 min-h-[calc(90vh)]">
          <div className="flex justify-between pb-3">
            <p className="text-xl text-[#5b4642] fond-semibold">
              서울특별시 {'>'} 종로구 {'>'} 홍지동
            </p>
            <AlbumFilter />
          </div>
          <AlbumContainer />
        </div>
      </Layout>
    </div>
  );
};

export default Album;
