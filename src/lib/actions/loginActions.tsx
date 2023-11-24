import axios from 'axios';

export const defaultLogin = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/login`,
    {
      email,
      password
    }
  );

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  return { accessToken, refreshToken };
};

export const socialLogin = async (platform: string, code: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/users/login/${platform}?code=${code}`
  );

  const { access_token: accessToken, refresh_token: refreshToken } =
    response.data;

  return { accessToken, refreshToken };
};
