import {
    TEACHER_SET_CLASS,
} from '../actionTypes';

const initialState = {

};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TEACHER_SET_CLASS:
            return {
                ...state,
                class: payload
            };
        break;

        default:
            return state;
    }
};