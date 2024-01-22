import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { images } from './dummyimage';

const PicturesContainer = () => {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 480: 1, 768: 2, 976: 3, 1440: 4 }}
    >
      <Masonry columnsCount={4} gutter="16px">
        {images.map((aImage: any) => {
          return <img key={aImage.id} src={aImage.src} alt={aImage.src} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default PicturesContainer;
