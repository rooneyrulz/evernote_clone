import { GET_NOTES } from './types';

const notes = [
    { id: '322109', text: 'It is note one' },
    { id: '498429', text: 'It is note two' },
    { id: '289989', text: 'It is note three' },
    { id: '392021', text: 'It is note four' },
    { id: '389287', text: 'It is note five' },
];

export const getNotes = (dispatch) =>
    dispatch({ type: GET_NOTES, payload: notes });