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

export const loadUser = (dispatch) => {
    try {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: USER_LOADED, payload: user.email });
            } else {
                dispatch({ type: AUTH_ERROR });
            }
        });
    } catch (error) {
        console.log(`AuthError: ${error.message}`);
        dispatch({ type: AUTH_ERROR });
    }
};

export const loginUser = async({ email, password }, dispatch, history) => {
    if (!email.trim() || !password.trim()) window.alert('Invalid fields!');
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: LOGIN_SUCCESS });
        history.push('/');
    } catch (error) {
        console.log(`Login Fail: ${error.message}`);
        dispatch({ type: LOGIN_FAIL });
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
        console.log(`Login Fail: ${error.message}`);
        dispatch({ type: REGISTER_FAIL });
    }

    loadUser(dispatch);
};

export const signOutUser = async(dispatch, history) => {
    try {
        await firebase.auth().signOut();
        dispatch({ type: LOGOUT });
        history.push('/sign-in');
    } catch (error) {
        console.log(`Signout Error: ${error.message}`);
    }
};