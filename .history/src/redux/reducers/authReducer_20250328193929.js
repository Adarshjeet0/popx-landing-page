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
        if((action.payload.email === state.user.email && action.payload.password === state.user.password)|| (action.payload.email === localStorage.getItem('email') && action.payload.password === localStorage.getItem('password'))) {
            localStorage.setItem("loggedIn", true);
            state.user.loggedIn = true;
            state.error = false;
        }
        else{
            state.error = true;
        }
    },
    logout: (state) => {
      state.user = initialState.user
    },
  },
});


export const { signup, login, logout } = counterSlice.actions;

export default authReducer = authReducerSlice.reducer;

export const authSelector = (state)=> state.authReducer;