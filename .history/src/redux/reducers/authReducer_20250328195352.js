import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    isLogged: false
  },
  error: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      if (action.payload.email === state.user.email && action.payload.password === state.user.password) {
        state.user.isLogged = true;
        state.error = false;
      } else {
        state.error = true;
      }
    },
    logout: (state) => {
      state.user = { ...initialState.user }; // Reset user state
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state) => state.auth;
