// store.js

import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slice/loginSlice';

const store = configureStore({
  reducer: {
    auth: loginReducer,
  },
});

export default store;
