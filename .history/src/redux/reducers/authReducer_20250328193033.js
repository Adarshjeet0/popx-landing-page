import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email: '',
    password: '',
    
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})