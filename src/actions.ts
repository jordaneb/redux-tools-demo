import { createAction } from "@reduxjs/toolkit";
import { pineappleSlice } from './slices';

export const addHam = createAction('ADD_HAM');
export const removeHam = createAction('REMOVE_HAM');

export const { addPineapple, removePineapple } = pineappleSlice.actions;
