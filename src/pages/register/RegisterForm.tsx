import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { signup } from '../../apis/user';
import Logo from '../../components/ui/logo/Logo';

import KakaoSymbol from '../../assets/kakao_symbol.png';
import NaverSymbol from '../../assets/naver_symbol.png';

interface IFormValues {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

interface IFormError {
  email?: string;
  password?: string;
  passwordCheck?: string;
  nickname?: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues: IFormValues = {
    email: '',
    password: '',
    passwordCheck: '',
    nickname: ''
  };

  const validate = (values: IFormValues) => {
    const errors: IFormError = {};
    // email
    if (values.email.length === 0) {
      errors.email = '이메일을 입력해 주세요';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = '이메일 입력 형식이 올바르지 않습니다';
    }
    // password
    if (values.password.length === 0) {
      errors.password = '비밀번호를 입력해주세요';
    } else if (values.password.length > 15) {
      errors.password = '비밀번호는 15자 이내로 입력해주세요';
    }
    // password check
    if (values.passwordCheck.length === 0) {
      errors.passwordCheck = '비밀번호를 확인해주세요';
    } else if (values.passwordCheck !== values.password) {
      errors.passwordCheck = '입력한 비밀번호와 일치하지 않습니다';
    }
    // nickname
    if (values.nickname.length === 0) {
      errors.nickname = '닉네임을 입력해주세요';
    } else if (values.nickname.length > 8) {
      errors.nickname = '닉네임은 8자 이내로 입력해주세요';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: IFormValues) => {
      try {
        await signup(values.email, values.password, values.nickname);
      } catch (error: any) {
        console.log(error);
        alert(error.message);
      }
      navigate('/login');
    },
    validate
  });

  const onLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex-1 w-1/2 flex flex-col justify-center items-center p-4">
      <div className=" min-w-sm max-w-sm">
        <p className="text-[#5F4541] font-bold text-2xl md:text-3xl mb-12 min-w-[384px]">
          내가 만들어 가는 서울, 로그
        </p>
        <div className="flex flex-row items:center mb-8 ">
          <p className="text-[#A5A3A4] font-semibold text-sm md:text-base mr-4">
            이미 회원이시라면?
          </p>
          <p
            className="text-[#504E48] font-semibold text-sm md:text-base hover:-translate-y-0.5 transition-all"
            onClick={onLoginClick}
          >
            로그인하기
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          noValidate
          className="flex flex-col"
        >
          <p className="text-[#504E48] font-bold text-xl">이메일로 회원가입</p>
          <label
            htmlFor="email"
            className="text-[#504E48] font-bold text-base mt-8"
          >
            이메일 주소
          </label>
          <input
            type="email"
            className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none"
            placeholder="abc123@email.com"
            {...formik.getFieldProps('email')}
          />
          {(formik?.touched.email ?? false) && (
            <p className="text-red-400 text-sm">{formik.errors.email}</p>
          )}
          <label
            htmlFor="password"
            className="text-[#504E48] font-bold text-base mt-4"
          >
            비밀번호
          </label>
          <input
            type="password"
            className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none"
            placeholder="영문, 숫자, 특수문자"
            {...formik.getFieldProps('password')}
          />
          {(formik?.touched.password ?? false) && (
            <p className="text-red-400 text-sm">{formik.errors.password}</p>
          )}
          <label
            htmlFor="password"
            className="text-[#504E48] font-bold text-base mt-4"
          >
            비밀번호 확인
          </label>
          <input
            type="password"
            className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none"
            placeholder="입력한 비밀번호와 일치해야 합니다."
            {...formik.getFieldProps('passwordCheck')}
          />
          {(formik?.touched.password ?? false) && (
            <p className="text-red-400 text-sm">
              {formik.errors.passwordCheck}
            </p>
          )}
          <label
            htmlFor="text"
            className="text-[#504E48] font-bold text-base mt-4"
          >
            닉네임
          </label>
          <input
            type="text"
            className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none"
            placeholder="ex) 서울로그"
            {...formik.getFieldProps('nickname')}
          />
          {(formik?.touched.nickname ?? false) && (
            <p className="text-red-400 text-sm">{formik.errors.nickname}</p>
          )}
          <button
            type="submit"
            className="bg-[#548BCF] rounded text-white w-full p-2 mt-4 text-lg hover:bg-sky-600"
          >
            회원가입
          </button>
        </form>
        <div className="mb-12">
          <p className="text-[#504E48] font-bold text-xl mt-8">
            SNS 간편 로그인
          </p>
          <div className="mt-4 flex flex-row space-x-4">
            {/* kakao */}
            <Link
              to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT_URI}&response_type=code`}
            >
              <button className="w-16 h-16 bg-[#FEE500] rounded-full flex items-center justify-center">
                <img src={KakaoSymbol} alt="kakao_symbol" />
              </button>
            </Link>
            {/* naver */}
            <Link
              to={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_API_KEY}&state=false&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT_URI}`}
            >
              <button className="w-16 h-16">
                <img src={NaverSymbol} alt="naver_symbol" />
              </button>
            </Link>
          </div>
        </div>
        <Logo className="text-[#5f4541] flex"></Logo>
      </div>
    </div>
  );
};

export default RegisterForm;
