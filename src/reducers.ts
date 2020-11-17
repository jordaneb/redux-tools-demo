import { createReducer, createSlice } from '@reduxjs/toolkit';
import { addHam, removeHam } from './actions';
import { pineappleSlice } from './slices';
import { clearAll } from './common/actions';

const INITIAL_HAM_STATE = 0;
export const hams = createReducer<number>(
  INITIAL_HAM_STATE,
  (builder) => {
    builder.addCase(addHam.type, (state) => state + 1)
    builder.addCase(removeHam.type, state => state - 1)
    builder.addCase(clearAll.type, _ => INITIAL_HAM_STATE)
  }
);

export const pineapples = pineappleSlice.reducer;
