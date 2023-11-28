import axios from 'axios';
import { setCookie } from '../../utils/cookie';
import { defaultAxios } from '../../utils/axios';

// TODO : token expire time 설정

export const defaultLogin = async (email: string, password: string) => {
  const response = await defaultAxios.post('/users/login', {
    email,
    password
  });

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  setCookie('accessToken', accessToken, {
    path: '/',
    secure: '/'
  });
  setCookie('refreshToken', refreshToken, {
    path: '/',
    secure: '/'
  });

  return response;
};

export const socialLogin = async (platform: string, code: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/login/${platform}?code=${code}`
  );

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  setCookie('accessToken', accessToken, {
    path: '/',
    secure: '/'
  });
  setCookie('refreshToken', refreshToken, {
    path: '/',
    secure: '/'
  });

  return response;
};
