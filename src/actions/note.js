import firebase from '../config/firebase.config';
import {
    SET_ERROR,
    REMOVE_ERROR,
    GET_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE,
} from './types';
import { v4 } from 'uuid';

export const getNotes = async(dispatch) => {
    try {
        const snapShot = await firebase.firestore().collection('evernote').get();
        const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: GET_NOTES, payload: data });
    } catch (error) {
        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'GET_NOTES_ERROR',
            },
        });
        setTimeout(
            () =>
            dispatch({
                type: REMOVE_ERROR,
                payload: id,
            }),
            5000
        );
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
        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'CREATE_NOTE_ERROR',
            },
        });
        setTimeout(
            () =>
            dispatch({
                type: REMOVE_ERROR,
                payload: id,
            }),
            5000
        );
    }
};

export const updateNote = async(dispatch, id, newNote) => {
    try {
        await firebase.firestore().collection('evernote').doc(id).update(newNote);
        dispatch({
            type: UPDATE_NOTE,
            payload: { id, note: newNote },
        });
    } catch (error) {
        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'UPDATE_NOTE_ERROR',
            },
        });
        setTimeout(
            () =>
            dispatch({
                type: REMOVE_ERROR,
                payload: id,
            }),
            5000
        );
    }
};

export const removeNote = async(dispatch, id) => {
    try {
        await firebase.firestore().collection('evernote').doc(id).delete();
        dispatch({ type: REMOVE_NOTE, payload: id });
    } catch (error) {
        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'REMOVE_NOTE_ERROR',
            },
        });
        setTimeout(
            () =>
            dispatch({
                type: REMOVE_ERROR,
                payload: id,
            }),
            5000
        );
    }
};