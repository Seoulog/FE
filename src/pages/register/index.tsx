import React from 'react';

import RegisterForm from './RegisterForm';
import MapSection from './MapSection';

const Register = () => {
  return (
    <div className="flex flex-row w-screen h-screen px-[calc(15vw)]">
      <MapSection />
      <RegisterForm />
    </div>
  );
};

export default Register;
