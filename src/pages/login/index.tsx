import React from 'react';

import LoginForm from '../../components/form/login/LoginForm';

import SeoulImg from '../../assets/empty_seoul.png';
import KakaoSymbol from '../../assets/kakao_symbol.png';
import NaverSymbol from '../../assets/naver_symbol.png';
import HelperLink from '../../components/form/login/HelperLink';
import Layout from './Layout';
import SocialLoginButton from '../../components/form/login/SocialLoginButton';

const Login = () => {
  return (
    <Layout>
      {/* 왼쪽 영역 ( login) */}
      <div className="flex flex-col w-1/2 min-w-[400px]  lg:w-5/12 p-4 gap-8 lg:pl-8">
        <LoginForm />
        {/* helper 링크 (회원가입, 비밀번호 찾기) */}
        <div className="flex flex-row justify-between -mt-4">
          <HelperLink to="/register" content="아직 회원이 아니에요." />
          <HelperLink to="/help/password" content="비밀번호를 잊어버렸어요." />
        </div>
        {/* 소셜 로그인 */}
        <p className="text-[#504E48] font-bold text-xl mt-16">
          SNS 간편 로그인
        </p>
        <div className="flex flex-row space-x-4 mt-4">
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
      </div>
      {/* 오른쪽 영역 (map img) : lg(1024px 이상일때만 display) */}
      <div className="hidden lg:w-7/12 lg:flex lg:justify-center lg:items-center p-10">
        <img src={SeoulImg} alt="seoul_img" className="object-scale-down" />
      </div>
    </Layout>
  );
};

export default Login;
