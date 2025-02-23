import { INote } from "@/app/types";
import { EnumSort } from "./enums";

export function useHelpers() {

    const compareLatest = (a: INote, b: INote, sortBy = EnumSort.index) => {
        if (sortBy === EnumSort.date) {
            if (a.dateUpdated < b.dateUpdated) {
                return 1;
            } else {
                return -1;
            }
        } else {
            if (a.order < b.order) {
                return 1;
            } else {
                return -1;
            }
        }
    };

    return { compareLatest }
}
