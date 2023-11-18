import React from 'react'

import SeoulImg from '../../assets/empty_seoul.png';

const MapSection = () => {
  return (
    <div className="hidden md:flex md:flex-1 lmdg:justify-start md:items-center">
        <div className="w-3/4">
          <img src={SeoulImg} alt="seoul_img" className="object-scale-down" />
        </div>
      </div>
  )
}

export default MapSection
