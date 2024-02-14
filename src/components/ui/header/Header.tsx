import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('fixed -top-16 z-50');
  const controlHeader = () => {
    if (window.scrollY > 160) {
      setHeaderClass('sticky top-0 z-50');
    } else {
      setHeaderClass('fixed -top-16 z-50');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, []);

  const onMoveClick = () => {
    window.location.href = '/login';
  };

  return (
    <header
      className={`w-full hidden md:flex ${headerClass} transition-all h-16 bg-neutral-100 px-auto justify-center items-center drop-shadow-lg`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center px-8">
        <Logo withKorean className="flex"></Logo>
        <button
          className="flex font-semibold p-2 w-fit hover:-translate-y-0.5 transition-all"
          onClick={onMoveClick}
        >
          이용하러 가기
        </button>
      </div>
    </header>
  );
};

export default Header;
