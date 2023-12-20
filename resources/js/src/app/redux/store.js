import { configureStore } from '@reduxjs/toolkit'
import readedReducer from './slice'



export const store = configureStore({
  reducer: {
    readed: readedReducer
  },
});

