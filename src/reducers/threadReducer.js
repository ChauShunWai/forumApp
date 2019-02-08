import {
    FETCH_THREAD,
    FETCH_THREADS,
    CREATE_THREAD,
    EDIT_THREAD,
    DELETE_THREAD

} from '../actions/types.js'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_THREADS:
            return { ..._.mapKeys(action.payload, 'id') };
        case FETCH_THREAD ||
            CREATE_THREAD ||
            EDIT_THREAD:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_THREAD:
            return { ..._.omit(state, action.payload) }

        default:
            return state;
    }
}