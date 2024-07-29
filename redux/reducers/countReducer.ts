import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { INote } from '@/app/types';
import { initialState } from '../../components/initialState';

// Define a type for the slice state
export interface CountState {
  value: number;
}

const initialCounter = {
    value: 1
}

export const countSlice = createSlice({
  name: 'count',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialCounter,
  reducers: {    
    increment: (state) => {
      state.value += 1;
    },
  },
})

export const { increment } = countSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.countReducer.value;

export default countSlice.reducer
