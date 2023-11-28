import React from 'react';

import Layout from './Layout';
import SeoulImg from '../../assets/empty_seoul.png';
import RegisterForm from '../../components/form/register/RegisterForm';
import LoginLink from '../../components/form/register/LoginLink';
import SocialLoginButton from '../../components/form/SocialLoginButton';
import KakaoSymbol from '../../assets/kakao_symbol.png';
import NaverSymbol from '../../assets/naver_symbol.png';
import Logo from '../../components/ui/logo/Logo';

const Register = () => {
  return (
    <Layout>
      {/* 왼쪽 영역 (지도) */}
      <div className="hidden lg:w-1/2 lg:flex lg:justify-center lg:items-center p-10">
        <img src={SeoulImg} alt="seoul_img" className="object-scale-down" />
      </div>
      {/* 오른쪽 영역 (회원가입) */}
      <div className="flex flex-col w-1/2 min-w-[400px] lg:px-20 gap-10">
        <p className="text-[#5F4541] font-bold text-3xl">
          내가 만들어 가는 서울, 로그
        </p>
        <div className="flex flex-row items:center">
          <p className="text-[#A5A3A4] font-semibold text-sm md:text-base mr-4">
            이미 회원이시라면?
          </p>
          {/* 로그인 페이지 링크 */}
          <LoginLink />
        </div>
        <RegisterForm />
        {/* 소셜 로그인 */}
        <p className="text-[#504E48] font-bold text-2xl">SNS 간편 로그인</p>
        <div className="flex flex-row space-x-4">
          {/* kakao */}
          <SocialLoginButton
            className="bg-[#FEE500] rounded-full flex items-center justify-center"
            src={KakaoSymbol}
            alt="kakao_symbol"
            to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI}&response_type=code`}
          />
          {/* naver */}
          <SocialLoginButton
            src={NaverSymbol}
            alt="naver_symbol"
            to={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_API_KEY}&state=false&redirect_uri=${process.env.REACT_APP_NAVER_LOGIN_REDIRECT_URI}`}
          />
        </div>
        <Logo className="text-[#5f4541] flex" />
      </div>
    </Layout>
  );
};

export default Register;
