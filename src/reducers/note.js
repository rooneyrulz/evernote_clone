import {
    SET_ERROR,
    REMOVE_ERROR,
    GET_NOTES,
    GET_PRIVATE_NOTES,
    CREATE_NOTE,
    UPDATE_NOTE,
    REMOVE_NOTE,
} from '../actions/types';

export default (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_NOTES:
            return {
                ...state,
                loading: false,
                notes: payload,
            };

        case GET_PRIVATE_NOTES:
            return {
                ...state,
                loading: false,
                userNotes: payload,
            };

        case CREATE_NOTE:
            return {
                ...state,
                loading: false,
                notes: [payload, ...state.notes],
            };

        case UPDATE_NOTE:
            return {
                ...state,
                loading: false,
                notes: state.notes.map((note) =>
                    note.id === payload.id ? payload.note : note
                ),
            };

        case REMOVE_NOTE:
            return {
                ...state,
                loading: false,
                notes: state.notes.filter((note) => note.id !== payload),
            };

        case SET_ERROR:
            return {
                ...state,
                errors: [...state.errors, payload],
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