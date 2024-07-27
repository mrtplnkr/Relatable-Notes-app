import { INote } from '@/app/types';
import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { EnumSort, compareLatest } from '@/hooks/useHelpers';
import { View, TextInput, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { updateNote } from '@/redux/reducers/noteReducer';
import { ThemedText } from './ThemedText';

export interface IReusableObjectProps {
    size: number;
    noteId: number;
}

export const ReusableComponent = (props:IReusableObjectProps) => {

    const [showChildren, setShowChildren] = useState<boolean>(false);

    const mainNote = useAppSelector((state) => {
        console.log('st1', state);
        return state.notesReducer.notes.find(x => x.id === props.noteId)}
    );//create RTK selector - only parent notes

    const sortByOrder = (notes: INote[]) => {
        return notes.sort((a, b) => compareLatest(a, b, EnumSort.date));
    };

    const childNotes: INote[] = useSelector((state: RootState) => {
        console.log('note', state);
        return state.notesReducer.notes.filter((x:INote) => x.parentId === props.noteId)
    }, () => true);

    const [text, onChangeText] = React.useState('new');

    const dispatch = useAppDispatch();
    const setInput = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        dispatch(updateNote({id: 4, text: (e.target as any).value}));
        onChangeText(x => x = '');
    }

    return (
        <View>
            {true ? <>
                <>
                    {<View style={{ borderWidth: 5, borderRadius: 55, padding: 10 }}>
                        <ThemedText style={{ fontSize: props.size -1 }} onPress={() => setShowChildren(x => !x)}>{mainNote?.text}</ThemedText>
                            <TextInput removeClippedSubviews={false} style={{borderWidth: 3, borderColor: 'green'}} value={text} onChangeText={onChangeText}
                                onSubmitEditing={(e) => setInput(e)} />
                        {childNotes.length ? showChildren &&
                            childNotes.map((x) => {
                                return (
                                    <View style={{ borderWidth: 3, borderRadius: 55 }} key={x.id}>
                                        <ReusableComponent noteId={x.id} size={props.size! - 1}>
                                        </ReusableComponent>
                                    </View>
                                );
                            })
                        : <ThemedText></ThemedText>}
                    </View>}
                </>
            </> : <ThemedText>loading...</ThemedText>}
        </View>
    );
};
