import React from 'react';

import SignForm from './SignForm';
import MapSection from './MapSection';

const Sign = () => {
  return (
    <div className="flex flex-row w-full h-screen px-[calc(15vw)]">
      <MapSection />
      <SignForm />
    </div>
  );
};

export default Sign;
