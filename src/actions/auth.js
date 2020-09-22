import firebase from '../config/firebase.config';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
    SET_ERROR,
    REMOVE_ERROR,
} from './types';
import setError from './error';
import { v4 } from 'uuid';

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
        console.log(`AuthError: ${error.code}`);
        dispatch({ type: AUTH_ERROR });
        setError({
                msg: error.code,
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
        console.log(`Login Fail: ${error.code}`);
        dispatch({ type: LOGIN_FAIL });

        // setError({
        //         msg: error.code,
        //         status: 401,
        //         type: 'LOGIN_ERROR',
        //     },
        //     dispatch
        // );

        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'LOGIN_ERROR',
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

    loadUser(dispatch);
};

export const registerUser = async({ email, password }, dispatch, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        dispatch({ type: REGISTER_SUCCESS });
        history.push('/');
    } catch (error) {
        console.log(`Login Fail: ${error.code}`);
        dispatch({ type: REGISTER_FAIL });

        // setError({
        //         msg: error.code,
        //         status: 401,
        //         type: 'LOGIN_ERROR',
        //     },
        //     dispatch
        // );

        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'REGISTER_ERROR',
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

    loadUser(dispatch);
};

export const signOutUser = async(dispatch, history) => {
    try {
        await firebase.auth().signOut();
        dispatch({ type: LOGOUT });
    } catch (error) {
        console.log(`Signout Error: ${error.code}`);

        // setError({
        //         msg: error.code,
        //         status: 401,
        //         type: 'LOGIN_ERROR',
        //     },
        //     dispatch
        // );

        const id = v4();

        dispatch({
            type: SET_ERROR,
            payload: {
                id,
                msg: error.code,
                status: 500,
                type: 'LOGOUT_ERROR',
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