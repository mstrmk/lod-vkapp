import {
    TEACHER_SET_CLASS,
    TEACHER_SET_CLASS_ITEM
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
        case TEACHER_SET_CLASS_ITEM:
            return {
                ...state,
                classItem: payload,
            }
        break;

        default:
            return state;
    }
};