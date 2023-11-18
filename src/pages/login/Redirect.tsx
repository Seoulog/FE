import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { socialLogin } from '../../apis/user';

const Redirect = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  const login = async (code: string) => {
    try {
      const { accessToken, refreshToken } = await socialLogin(code);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error: any) {
      console.log(error)
      alert(error.message)
    }
    navigate('/home');
  };

  useEffect(() => {
    if (code != null) {
      login(code).catch((error) => {
        console.log(error)
        alert(error.message)
      });
    } else {
      console.log('인가 코드 없음');
    }
  }, []);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="text-[#504E48] text-2xl mb-4">
        로그인 중입니다! 잠시만 기다려 주세요.
      </p>
      <div
        className="inline-block h-14 w-14 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] text-[#504E48]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ! [clip:rect(0,0,0,0)]" />
      </div>
    </div>
  );
};

export default Redirect;
