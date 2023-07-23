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
    logOut: state => {
      state.token = null;
    },
  },
});

export const { setToken, logOut } = authToken.actions;

export default authToken.reducer;
