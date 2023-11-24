import axios from 'axios';

export const getDefaultAxios = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
  });

  return instance;
};

// TODO: axios interceptor
