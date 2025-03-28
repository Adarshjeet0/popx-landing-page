import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email: '',
    password: '',
    isLogged: false
    
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})