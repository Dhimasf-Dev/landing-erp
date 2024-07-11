import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
   isLogin: true
  },
  reducers: {
    setIsLoginTrue: (state) => {
      state.isLogin = true
    },
    setIsLoginFalse: (state) => {
      state.isLogin = false
    },
    
  },
});

export const { setIsLoginTrue, setIsLoginFalse } = loginSlice.actions;

export default loginSlice.reducer;
