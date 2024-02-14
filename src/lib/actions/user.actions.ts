import axios from 'axios';
import { defaultAxios } from '../../utils/axios';

// TODO : token expire time 설정

export const defaultLogin = async (email: string, password: string) => {
  const response = await defaultAxios.post('/users/login', {
    email,
    password
  });

  return response;
};

export const socialLogin = async (platform: string, code: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/login/${platform}?code=${code}`
  );

  return response;
};

/**
 * 자체 회원가입
 *
 * @param email 사용자가 입력한 이메일
 * @param password 사용자가 입력한 비밀번호
 * @param nickname 사용자가 입력한 닉네임
 *
 * @returns null
 */

export const defaultSignUp = async (
  email: string,
  password: string,
  nickname: string
) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/signup`,
    {
      email,
      password,
      nickname
    }
  );

  return response;
};

export const socialSignUp = async (platform: string, code: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/signup/${platform}?code=${code}`
  );

  return response;
};
