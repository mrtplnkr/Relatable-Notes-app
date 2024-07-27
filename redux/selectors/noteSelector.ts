import { useSelector } from "react-redux";
import { Reducer, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { INote } from "@/app/types";
import { State } from "@ngrx/store";
import notesReducer, { NoteState } from "@/redux/reducers/noteReducer";
import notesSlice from '../reducers/noteReducer';
import { useAppSelector } from "@/components/hooks";

// const getState = (state: INote[]) => state.filter(x=>x.parentId === null);

const getChildNotes = useSelector((state: RootState) => state.notesReducer);

const getParentNotes = useSelector((state: RootState) =>{
    console.log('st', state);
    
    return state.notesReducer.notes.filter((x:INote)=>x.parentId === null)});

//only use create selector for heavy computation or formation of new objects
// const getParentNotes = createSelector((state: RootState) => state.noteReducer, (s: NoteState) => getState(s.notes));

// const getParentNotes = (state) => state.noteReducer;

export { getParentNotes, getChildNotes };
