import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import Button from '../button/Button';

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

  return (
    <header
      className={`w-full hidden md:flex ${headerClass} transition-all h-16 bg-neutral-100 px-auto justify-center items-center drop-shadow-lg`}
    >
      <div className="w-full max-w-6xl flex justify-between items-center px-8">
        <Logo withKorean className="flex"></Logo>
        <Button className="flex font-semibold">
          이용하러 가기
        </Button>
      </div>
    </header>
  );
};

export default Header;
