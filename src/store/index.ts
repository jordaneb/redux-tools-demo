import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { hams, pineapples } from '../reducers';

const store = configureStore({
  reducer: combineReducers({
    hams,
    pineapples
  })
})

export default store;
