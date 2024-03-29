import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  nickname: string;
  email: string;
  isLogin: boolean;
  accessToken: string;
}

const initialState: IUserState = {
  nickname: '',
  email: '',
  isLogin: false,
  accessToken: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<IUserState>) => {
      state.nickname = action.payload.nickname;
      state.email = action.payload.email;
    },
    DELETE_USER: (state) => {
      state.email = '';
      state.nickname = '';
    },
    SET_ISLOGIN: (state, action: PayloadAction<string>) => {
      state.isLogin = true;
      state.accessToken = action.payload;
    },
    DELETE_ISLOGIN: (state) => {
      state.isLogin = false;
      state.accessToken = '';
    },
    SET_TOKEN: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    DELETE_TOKEN: (state) => {
      state.accessToken = '';
    }
  }
});

export const {
  SET_USER,
  DELETE_USER,
  SET_ISLOGIN,
  DELETE_ISLOGIN,
  SET_TOKEN,
  DELETE_TOKEN
} = userSlice.actions;

export default userSlice;
