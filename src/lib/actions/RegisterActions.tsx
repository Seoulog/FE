import axios from 'axios';

/**
 * 회원가입 register
 *
 * @param email 사용자가 입력한 이메일
 * @param password 사용자가 입력한 비밀번호
 * @param nickname 사용자가 입력한 닉네임
 *
 * @returns accessToken, refreshToken
 */

export const register = async (email: string, password: string, nickname: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/login`,
    {
      email,
      password,
      nickname
    }
  );

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  return { accessToken, refreshToken };
};
