import { SIGN_IN, SIGN_OUT } from '../actions/types.js'

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null
}

export default (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { 
                ...state, 
                isSignedIn: true, 
                userId: action.payload.userId, 
                userName: action.payload.userName 
            };
        case SIGN_OUT:
            return { ...state, ...INITIAL_STATE, isSignedIn: false };
        default:
            return state;
    }
}