import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import popularReducer from '../features/popular/popularSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popular: popularReducer
  },
});
