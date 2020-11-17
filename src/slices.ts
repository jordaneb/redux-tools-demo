import { createSlice } from "@reduxjs/toolkit";
import { clearAll } from './common/actions';
import { PineappleState } from "./types";

const initialState: PineappleState = { value: 0 };

export const pineappleSlice = createSlice({
  name: 'pineapple',
  initialState,
  reducers: {
    addPineapple(state) {
      state.value++
    },
    removePineapple(state) {
      state.value--
    }
  },
  extraReducers: (builder) => {
    builder.addCase(clearAll.type, (state) => initialState)
  }
});
