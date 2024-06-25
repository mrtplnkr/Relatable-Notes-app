
export interface INote {
    parentId: number | null,
    id: number,
    text: string,
    order: number,
    dateUpdated: string,
    url?: string,
    cut?: boolean,
    done?: boolean,
}
