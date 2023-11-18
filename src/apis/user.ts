import axios from 'axios'

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/login`,
    {
      email,
      password
    }
  );

  const { access_token: accessToken, refresh_token: refreshToken } = response.data;

  return { accessToken, refreshToken }
}

export const socialLogin = async (code: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API_URL}/login?code=${code}`
  );

  const { access_token: accessToken, refresh_token: refreshToken } = response.data;

  return { accessToken, refreshToken }
}
