import axios, {
  type AxiosError,
  type AxiosHeaders,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios';

import { getCookie, setCookie } from './cookie';

export const defaultAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: true
});

export const authAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  withCredentials: true
});

// request 전에 호출되는 함수
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // const accessToken = localStorage.getItem('access_token');
  const accessToken = getCookie('accessToken');

  (config.headers as AxiosHeaders).set(
    'Authorization',
    `Bearer ${accessToken}`
  );

  return config;
};

// 요청에 error가 발생한 경우 -> catch로 넘어가기 전에 호출되는 함수
const onRequestError = async (
  error: AxiosError | Error
): Promise<AxiosError> => {
  return await Promise.reject(error);
};

// response를 받고 호출되는 함수
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// 응답에 error가 발생한 경우 -> catch로 넘어가기 전에 호출되는 함수
const onResponseError = async (
  error: AxiosError | Error
): Promise<AxiosError> => {
  const err = error as unknown as AxiosError;
  const { response } = err;
  const prevConfig = err?.config as AxiosRequestConfig;

  // Forbidden error (토큰 만료)
  if (response != null && response.status === 403) {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    // refresh token이 만료되었거나 삭제된 경우
    if (refreshToken == null) {
      console.log('리프레스 토큰 만료 or 삭제됨');
      // 이후 처리 로직은 고민중
      // 로그인 페이지로 이동?
    } else {
      // access token 재발급 요청
      try {
        const data = await defaultAxios.get('refresh', {
          headers: {
            Refresh: `Bearer ${refreshToken}`,
            Authorization: `Bearer ${accessToken}`
          }
        });
        if (err.response != null) {
          setCookie('accessToken', data.data.accessToken, {
            path: '/',
            secure: '/'
          });
          setCookie('refreshToken', data.data.refreshToken, {
            path: '/',
            secure: '/'
          });
          return await authAxios.request(prevConfig);
        }
      } catch (er) {
        console.log(er);
      }
    }
  }
  return await Promise.reject(error);
};

// auth axios 요청 interceptor 적용
authAxios.interceptors.request.use(onRequest, onRequestError);
// auth axios 응답 interceptor 적용
authAxios.interceptors.response.use(onResponse, onResponseError);
