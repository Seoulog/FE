import React from 'react';

import LoginForm from './LoginForm';
import MapSection from './MapSection';

const Login = () => {
  return (
    <div className="bg-[#fff] flex flex-row w-full h-screen">
      {/* 왼쪽 영역 ( login form) */}
      <LoginForm />
      {/* 오른쪽 영역 (지도이미지) */}
      <MapSection />
    </div>
  );
};

export default Login;
