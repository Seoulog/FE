import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useFormik } from 'formik';

import KakaoSymbol from '../../assets/kakao_symbol.png';
import NaverSymbol from '../../assets/naver_symbol.png';

interface IFormValues {
  email: string;
  password: string;
}

interface IFormError {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues: IFormValues = {
    email: '',
    password: ''
  };

  const validate = (values: IFormValues) => {
    const errors: IFormError = {};
    // email
    if (values.email.length === 0) {
      errors.email = '이메일을 입력해 주세요.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = '이메일 입력 형식이 올바르지 않습니다.';
    }
    // password
    if (values.password.length === 0) {
      errors.password = '비밀번호를 입력해주세요';
    } else if (values.password.length > 15) {
      errors.password = '비밀번호는 15자 이내로 입력해주세요';
    }

    return errors;
  };

  const login = async (email: string, password: string) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_API_URL}/login`,
      {
        email,
        password
      }
    );

    return response;
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: IFormValues) => {
      const response = await login(values.email, values.password);
      const { access_token: accessToken, refresh_token: refreshToken } =
        response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/home');
    },
    validate
  });
  return (
    <div className="flex-1  w-full flex flex-col items:center md:items-end mr-10  justify-center m-4 p-4 md:mr-52">
      <div className=" min-w-sm max-w-sm">
        <p className="text-[#5F4541] font-bold text-2xl md:text-3xl mb-24 mt-2 min-w-[384px]">
          내가 만들어 가는 서울, 로그
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          noValidate
          className="flex flex-col"
        >
          <p className="text-[#504E48] font-bold text-xl py-3">
            이메일로 로그인
          </p>
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
            name="password"
            className="border-b border-[#A5A3A4] w-full mb-3 hover:outline-none focus:outline-none"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="영문, 숫자, 특수문자"
          />
          {(formik?.touched.password ?? false) && (
            <p className="text-red-400 text-sm">{formik.errors.password}</p>
          )}
          <button
            type="submit"
            className="bg-[#548BCF] rounded block text-white w-full mb-2 h-11 text-xl hover:bg-sky-700"
          >
            로그인
          </button>
        </form>
        <div className="flex flex-row justify-between">
          <p className="text-[#A5A3A4] text-sm underline underline-offset-2">
            비밀번호를 잊어버렸어요.
          </p>
          <p className="text-[#A5A3A4] text-sm underline underline-offset-2">
            아직 회원이 아니에요
          </p>
        </div>
        <p className="text-[#504E48] font-bold text-xl mt-20">
          SNS 간편 로그인
        </p>
        <div className="mt-4 flex flex-row space-x-4">
          {/* kakao */}
          <Link
            to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT_URI}&response_type=code`}
          >
            <button className="w-20 h-20 bg-[#FEE500] rounded-full flex items-center justify-center">
              <img src={KakaoSymbol} alt="kakao_symbol" />
            </button>
          </Link>
          {/* naver */}
          <Link
            to={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_API_KEY}&state=false&redirect_uri=${process.env.REACT_APP_LOGIN_REDIRECT_URI}`}
          >
            <button className="w-20 h-20">
              <img src={NaverSymbol} alt="naver_symbol" />
            </button>
          </Link>
        </div>
        <p className="text-[#5F4541] font-bold text-2xl mt-20">Seoulog</p>
      </div>
    </div>
  );
};

export default LoginForm;
