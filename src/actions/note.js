import firebase from '../config/firebase.config';
import {
    GET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE,
    NOTE_ERROR,
} from './types';

const notes = [
    { id: '322109', text: 'Make a birthday cake' },
    { id: '498429', text: 'Write some poems' },
    { id: '289989', text: 'start coding tonight' },
];

export const getNotes = async(dispatch) => {
    try {
        await firebase
            .firestore()
            .collection('evernote')
            .onSnapshot((res) => console.log(res));
        dispatch({ type: GET_NOTES, payload: notes });
    } catch (error) {
        dispatch({ type: NOTE_ERROR, payload: { code: error.code } });
        throw error;
    }
};

export const createNote = (dispatch, newNote) =>
    dispatch({ type: CREATE_NOTE, payload: newNote });

export const updateNote = (dispatch, id, newNote) =>
    dispatch({
        type: UPDATE_NOTE,
        payload: { id, payload: newNote },
    });

export const removeNote = (dispatch, id) =>
    dispatch({ type: REMOVE_NOTE, payload: id });