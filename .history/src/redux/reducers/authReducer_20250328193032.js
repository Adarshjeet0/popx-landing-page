import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    email: '',
    
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})