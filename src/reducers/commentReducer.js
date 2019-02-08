import {
    FETCH_COMMENT,
    FETCH_COMMENTS,
    CREATE_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actions/types.js'
import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_COMMENTS:
            return {...state};
        case DELETE_COMMENT:
            return _.omit(state, action.payload)
        case FETCH_COMMENT:
        case CREATE_COMMENT:
        case EDIT_COMMENT:
            return {...state, [action.payload.id]: action.payload}
        
        default:
            return state;
    }
}