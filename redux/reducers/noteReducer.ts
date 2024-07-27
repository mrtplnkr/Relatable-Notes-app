import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { INote } from '@/app/types';
import { initialState } from '../../components/initialState';

// Define a type for the slice state
export interface NoteState {
  notes: INote[];
}

export const notesSlice = createSlice({
  name: 'notes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateNote: (state, action: PayloadAction<{id: number, text: string}>) => {
      state.notes = state.notes.map(x => x.id === action.payload.id ? {...x, text: action.payload.text} : x);
    }
  },
})

export const { updateNote } = notesSlice.actions

export default notesSlice.reducer
