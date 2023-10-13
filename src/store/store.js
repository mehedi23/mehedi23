import { configureStore } from '@reduxjs/toolkit';
import Auth from './auth';
import Testimonial from './testimonial'


export const store = configureStore({
  reducer: {
    auth : Auth,
    testimonial : Testimonial
  }
})