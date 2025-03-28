import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    name:'',
    email: '',
    password: '',
    isLogged: false
  }
}

export const authReducerSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup:(state, action) => {
        state.user = action.user;
    },
    login: (state, action) => {
      state.user = action.payload
      state.user.isLogged = true
    },
    logout: (state) => {
      state.user = initialState.user
    },
  },
});


export const { signup, login, logout } = counterSlice.actions;

export default authReducer = authReducerSlice.reducer;

export const authSelector = (state)=> state.authReducer;