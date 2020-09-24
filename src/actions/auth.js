import firebase from '../config/firebase.config';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
} from './types';
import setError from './error';

export const loadUser = (dispatch) => {
    try {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: USER_LOADED,
                    payload: { id: user.uid, email: user.email },
                });
            } else {
                dispatch({ type: AUTH_ERROR });
            }
        });
    } catch (error) {
        dispatch({ type: AUTH_ERROR });
        setError({
                msg: error.message ? error.message : 'Unauthorized',
                status: 401,
                type: 'AUTH_ERROR',
            },
            dispatch
        );
    }
};

export const loginUser = async({ email, password }, dispatch, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: LOGIN_SUCCESS });
        history.push('/');
    } catch (error) {
        dispatch({ type: LOGIN_FAIL });
        setError({
                msg: error.code ? error.code : 'Something went wrong login',
                status: 500,
                type: 'LOGIN_ERROR',
            },
            dispatch
        );
    }

    loadUser(dispatch);
};

export const registerUser = async({ email, password }, dispatch, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        dispatch({ type: REGISTER_SUCCESS });
        history.push('/');
    } catch (error) {
        dispatch({ type: REGISTER_FAIL });
        setError({
                msg: error.code ? error.code : 'Something went wrong registering',
                status: 500,
                type: 'REGISTER_ERROR',
            },
            dispatch
        );
    }

    loadUser(dispatch);
};

export const signOutUser = async(dispatch) => {
    try {
        await firebase.auth().signOut();
        dispatch({ type: LOGOUT });
    } catch (error) {
        setError({
                msg: error.code ? error.code : 'Something went wrong logingout',
                status: 500,
                type: 'LOGOUT_ERROR',
            },
            dispatch
        );
    }
};