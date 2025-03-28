import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    name:'',
    email: '',
    password: '',
    isLogged: false
  }
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup:(state, action)
    login: (state, action) => {
      state.user = action.payload
      state.user.isLogged = true
    },
    logout: (state) => {
      state.user = initialState.user
    },
  },
})