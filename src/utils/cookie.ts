import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// option?: any 에서 warning 발생 -> 일단 eslint disable 처리했습니다.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCookie = (name: string, value: string, option?: any) => {
  cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  cookies.remove(name);
};
