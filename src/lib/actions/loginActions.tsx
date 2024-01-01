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
