import firebase from '../config/firebase.config';
import {
    GET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE,
    NOTE_ERROR,
} from './types';

export const getNotes = async(dispatch) => {
    try {
        const snapShot = await firebase.firestore().collection('evernote').get();
        const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: GET_NOTES, payload: data });
    } catch (error) {
        dispatch({ type: NOTE_ERROR, payload: { code: error.code } });
        throw error;
    }
};

export const createNote = async(dispatch, newNote) => {
    try {
        const docRef = await firebase
            .firestore()
            .collection('evernote')
            .add(newNote);
        dispatch({ type: CREATE_NOTE, payload: { id: docRef.id, ...newNote } });
    } catch (error) {
        dispatch({ type: NOTE_ERROR, payload: { code: error.code } });
        throw error;
    }
};

export const updateNote = (dispatch, id, newNote) =>
    dispatch({
        type: UPDATE_NOTE,
        payload: { id, payload: newNote },
    });

export const removeNote = (dispatch, id) =>
    dispatch({ type: REMOVE_NOTE, payload: id });