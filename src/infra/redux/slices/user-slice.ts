import { createSlice } from '@reduxjs/toolkit';

import { UserReducerStateData } from '../../types/reducer';

const initialState: UserReducerStateData = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'userInfos',
  initialState,
  reducers: {
    userLogin: (state, action) => action.payload,
    clearUser: () => {
      return { user: null, token: null };
    },
  },
});

export const { userLogin, clearUser } = userSlice.actions;

export default userSlice.reducer;
