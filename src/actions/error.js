import { v4 } from 'uuid';
import { SET_ERROR, REMOVE_ERROR } from './types';

export default ({ msg, status, type }, dispatch) => {
    const id = v4();
    dispatch({ type: SET_ERROR, payload: { id, msg, status, type } });

    setTimeout(() => dispatch({ type: REMOVE_ERROR, payload: id }), 5000);
};