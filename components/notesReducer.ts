import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../redux/store'
import { INote } from '@/app/types';
import { initialState } from './initialState';

// Define a type for the slice state
export interface NotesState {
  value: number;
  notes: INote[];
}

export const notesSlice = createSlice({
  name: 'notes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getNotes: (state) => {
      state.notes;//.filter(x => x.)
    }
  },
})

export const { increment, decrement, getNotes } = notesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.notes.value

export default notesSlice.reducer