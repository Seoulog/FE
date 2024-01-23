import React from 'react';

import Layout from '../../components/layout/Layout';
import PicturesContainer from './PicturesContainer';
import PicturesFilter from './PicturesFilter';

import { images } from './dummyimage';

const Pictures = () => {
  const [pictures, setPictures] = React.useState(images);

  const handleFilter = () => {
    if (
      new Date(pictures[0].date).valueOf() <
      new Date(pictures[pictures.length - 1].date).valueOf()
    ) {
      const latestOrder = pictures.slice(0).sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
      setPictures(latestOrder);
    } else {
      const earliestOrder = pictures.slice(0).sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
      setPictures(earliestOrder);
    }
  };

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
            <PicturesFilter handleFilter={handleFilter} />
          </div>
          <PicturesContainer pictures={pictures} />
        </div>
      </Layout>
    </div>
  );
};

export default Pictures;
