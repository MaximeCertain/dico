import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/type";


const user = {isLoggedIn: false, user: null};

const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null};


export default function (state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }

        }
        default:
            return state;
    }
}