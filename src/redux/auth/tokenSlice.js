import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authToken = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logOutLocal: state => {
      state.token = null;
    },
  },
});

export const { setToken, logOutLocal } = authToken.actions;

export const selectToken = state => state.authToken.token;

export default authToken.reducer;
