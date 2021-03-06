import {
    SET_ERROR,
    REMOVE_ERROR,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
} from '../actions/types';

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload,
            };

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
            };

        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: {},
            };

        case SET_ERROR:
            return {
                ...state,
                errors: state.errors.filter((error) => error.msg === payload.msg).length > 0 ?
                    [...state.errors] :
                    [...state.errors, payload],
            };

        case REMOVE_ERROR:
            return {
                ...state,
                errors: state.errors.filter((error) => error.id !== payload),
            };

        default:
            return state;
    }
};