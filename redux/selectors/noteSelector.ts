import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { INote } from "@/app/types";
import { useHelpers } from '@/hooks/useHelpers';
import { EnumSort } from "@/hooks/enums";

const { compareLatest } = useHelpers();

const selectSorted = (state: RootState) => state.notesReducer.notes

const getParentIds = createSelector(selectSorted, (notes: INote[]) => {
    const filtered = notes.filter(x => x.parentId === null);
    const sorted = filtered.sort((a, b) => compareLatest(a, b, EnumSort.date))
    return sorted.map(x => x.id)});

export { getParentIds };
