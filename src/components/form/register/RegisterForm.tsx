import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { register } from '../../../lib/actions/RegisterActions';
import { validate } from '../../../lib/validations/RegisterValidation';

interface IFormValues {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues: IFormValues = {
    email: '',
    password: '',
    passwordCheck: '',
    nickname: ''
  };

  const formik = useFormik({
    initialValues,
    onSubmit: async (values: IFormValues) => {
      try {
        const { accessToken, refreshToken } = await register(
          values.email,
          values.password,
          values.nickname
        );
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/home');
      } catch (error: any) {
        console.log(error);
      }
      navigate('/login');
    },
    validate
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      noValidate
      className="flex flex-col gap-3"
    >
      <p className="text-[#504E48] font-bold text-xl mb-6">이메일로 회원가입</p>
      <label
        htmlFor="email"
        className="text-[#504E48] font-bold text-base"
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
        className="text-[#504E48] font-bold text-base mt-2"
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
        className="text-[#504E48] font-bold text-base mt-2"
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
        <p className="text-red-400 text-sm">{formik.errors.passwordCheck}</p>
      )}
      <label htmlFor="text" className="text-[#504E48] font-bold text-base mt-2">
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
        className="bg-[#548BCF] rounded text-white w-full p-2 mt-2 text-lg hover:bg-sky-600"
      >
        회원가입
      </button>
    </form>
  );
};

export default RegisterForm;
