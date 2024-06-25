import { INote } from '@/app/types';
import * as React from 'react';
// import randomColor from 'randomcolor';
// import { INote } from '../data/NotepadReducer';
import { Dispatch, useState } from 'react';
import { useAppSelector } from './hooks';
import { EnumSort, compareLatest } from '@/hooks/useHelpers';
// import { useNotepadContext } from '../data/NotepadContext';
// import { compareLatest } from '../helpers';
// import { ManageViews } from './organisms/ManageViews';
// import Loading from './atoms/Loading';
// import { EnumSort } from '../helpers/compareLatest';

export type ReusableType = {
    id: number,
    text: string,
    children?: ReusableType[],
    size?: number
}

export interface IReusableObjectProps {
    mainNote: INote;
    // sortBy: EnumSort;
    size?: number;
    showOptions: number;
    setShowOptions: Dispatch<React.SetStateAction<number>>;
    // dispatch: React.Dispatch<{
    //     type: string;
    //     payload: INote;
    // }>;
}

export const ReusableComponent = (props:IReusableObjectProps) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [showChildren, setShowChildren] = useState<boolean>(false);

    // const { notes, highlighted } = useNotepadContext();
    // const { setShowOptions, mainNote, showOptions, dispatch, sortBy } = props;

    // React.useEffect(() => {
    //     if (highlighted.includes(mainNote.id)) setShowChildren(true);
    // }, [highlighted.length])

    const notes = useAppSelector((state) => state.noteReducer.notes);//create RTK selector - only parent notes

    const sortByOrder = (notes: INote[]) => {
        return notes.sort((a, b) => compareLatest(a, b, EnumSort.date));
    };

    return (
        <div style={{ fontSize: props.size }}>
            {true ? <>
                <>
                    {<div style={{ border: 0 > 0 ? `1px solid ${'blue'}` : 'none', borderRadius: '50%', padding: 0 > 0 ? '25px 0' : '5px 0' }}>
                        <a onClick={() => setShowChildren(x => !x)}>{props.mainNote.text}</a>
                        <div style={{border: true ? '1px red dotted' : '1px black dotted'}}>
                            {showChildren &&
                                notes.filter(x => x.parentId === props.mainNote.id).map((x) => {
                                    return (
                                        <div style={{ border: '1px solid green', borderRadius: '50%' }} key={x.id}>
                                            <ReusableComponent mainNote={x} size={props.size! - 1} showOptions={0}
                                                setShowOptions={function (value: React.SetStateAction<number>): void {
                                                    throw new Error('Function not implemented.');
                                                }}>
                                            </ReusableComponent>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>}
                </>
            </> : <span>loading...</span>}
        </div>
    );
};
