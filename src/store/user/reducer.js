import {
    USER_SET_DATA,
    USER_SET_IS_AUTH,
    USER_SET_ROLES
} from '../actionTypes';

const initialState = {
    data: {},
    token: window.localStorage.token,
    isAuth: !!window.localStorage.token
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SET_DATA:
            return {
                ...state,
                data: payload,
                isAuth: true,
                token: window.localStorage.token
            };

        case USER_SET_IS_AUTH:
            return {
                ...state,
                isAuth: payload
            };

        case USER_SET_ROLES:
            return {
                ...state,
                roles: payload
            };

        default:
            return state;
    }
};