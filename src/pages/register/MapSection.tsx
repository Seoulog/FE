import React from 'react';

import SeoulImg from '../../assets/empty_seoul.png';

const MapSection = () => {
  return (
    <div className="hidden md:flex md:flex-1 w-1/2 items-center">
      <div className="w-4/5">
        <img src={SeoulImg} alt="seoul_img" className="object-scale-down" />
      </div>
    </div>
  );
};

export default MapSection;
