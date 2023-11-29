import axios from 'axios';

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
  await axios.post(`${process.env.REACT_APP_BASE_API_URL}/users/signup`, {
    email,
    password,
    nickname
  });

  return null;
};
