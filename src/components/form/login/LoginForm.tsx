import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { defaultLogin } from '../../../lib/actions/loginActions';
import { validate } from '../../../lib/validations/LoginFormValidation';

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues: IFormValues = {
    email: '',
    password: ''
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: IFormValues) => {
      try {
        const { accessToken, refreshToken } = await defaultLogin(
          values.email,
          values.password
        );
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/home');
      } catch (error) {
        console.log(error);
      }
    },
    validate
  });

  return (
    <form noValidate className="flex flex-col mt-12">
      {/* 헤더 */}
      <p className="text-seoul-brown font-bold text-2xl lg:text-3xl">
        내가 만들어가는 서울 로그
      </p>
      <p className="text-form-label text-xl font-bold mt-20">이메일로 로그인</p>
      {/* email */}
      <label htmlFor="email" className="text-form-label font-bold mt-6">
        이메일 주소
      </label>
      <input
        type="email"
        className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none mt-2"
        placeholder="abc123@email.com"
        {...formik.getFieldProps('email')}
      />
      {(formik?.touched.email ?? false) && (
        <p className="text-red-400 text-sm">{formik.errors.email}</p>
      )}
      {/* password */}
      <label htmlFor="password" className="text-form-label font-bold mt-4">
        비밀번호
      </label>
      <input
        type="password"
        className="border-b border-[#A5A3A4] w-full hover:outline-none focus:outline-none mt-2"
        placeholder="영문, 숫자, 문자"
        {...formik.getFieldProps('password')}
      />
      {(formik?.touched.password ?? false) && (
        <p className="text-red-400 text-sm">{formik.errors.password}</p>
      )}
      {/* 로그인 버튼 */}
      <button
        type="submit"
        className="bg-[#548BCF] rounded text-white w-full h-11 mt-4 text-xl font-semibold hover:bg-sky-700"
      >
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
