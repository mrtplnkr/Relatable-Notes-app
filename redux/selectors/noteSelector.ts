import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { INote } from "@/app/types";
import { useHelpers } from '@/hooks/useHelpers';
import { EnumSort } from "@/hooks/enums";

const { compareLatest } = useHelpers();

const selectSorted = (state: RootState) => state.noteReducer.notes

const getParentIds = createSelector(selectSorted, (notes: INote[]) => {
    const filtered = notes.filter(x => x.parentId === null);
    const sorted = filtered.sort((a, b) => compareLatest(a, b, EnumSort.date))
    return sorted.map(x => x.id)});

function getChildren(noteId: number) {
        createSelector(selectSorted, (notes) => {
        return notes.filter(x => x.parentId === noteId);
    })
}

export { getParentIds, getChildren };
