import firebase from '../config/firebase.config';
import { GET_NOTES, CREATE_NOTE, UPDATE_NOTE, REMOVE_NOTE } from './types';
import setError from './error';

export const getNotes = async(dispatch) => {
    try {
        const snapShot = await firebase.firestore().collection('evernote').get();
        const data = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: GET_NOTES, payload: data });
    } catch (error) {
        setError({
                msg: error.code ? error.code : 'Something went wrong getting notes',
                status: 500,
                type: 'GET_NOTES_ERROR',
            },
            dispatch
        );
    }
};

export const createNote = async(dispatch, newNote) => {
    try {
        const docRef = await firebase
            .firestore()
            .collection('evernote')
            .add(newNote);
        const snapShot = await firebase
            .firestore()
            .collection('evernote')
            .doc(docRef.id)
            .get();
        const data = snapShot.map((doc) => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: CREATE_NOTE, payload: data });
    } catch (error) {
        setError({
                msg: error.code,
                status: 500,
                type: 'CREATE_NOTE_ERROR',
            },
            dispatch
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
        setError({
                msg: error.code ? error.code : 'Something went wrong updating a note',
                status: 500,
                type: 'UPDATE_NOTE_ERROR',
            },
            dispatch
        );
    }
};

export const removeNote = async(dispatch, id) => {
    try {
        await firebase.firestore().collection('evernote').doc(id).delete();
        dispatch({ type: REMOVE_NOTE, payload: id });
    } catch (error) {
        setError({
                msg: error.code ? error.code : 'Something went wrong removing a note',
                status: 500,
                type: 'REMOVE_NOTE_ERROR',
            },
            dispatch
        );
    }
};