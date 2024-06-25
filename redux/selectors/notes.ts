import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { INote } from "@/app/types";

const getNotes = (state: RootState): INote[] => state.noteReducer.notes;

const getParents = createSelector([getNotes], (x:INote[]) => {return x.filter(x=>x.parentId === null)})//todo: google that shit = selector underfined

export { getNotes, getParents };
