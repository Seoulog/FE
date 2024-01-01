import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  nickname: string;
  email: string;
}

const initialState: IUserState = {
  nickname: '',
  email: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<IUserState>) => {
      state = action.payload;
    },
    DELETE_USER: (state) => {
      state = { nickname: '', email: '' };
    }
  }
});

export const { SET_USER, DELETE_USER } = userSlice.actions;

export default userSlice;
