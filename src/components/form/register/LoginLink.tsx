import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = () => {
  return (
    <Link
      to="/login"
      className="text-[#504E48] font-semibold text-sm md:text-base hover:-translate-y-0.5 transition-all"
    >
      로그인하기
    </Link>
  );
};

export default LoginLink;
