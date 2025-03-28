import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    name:''
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