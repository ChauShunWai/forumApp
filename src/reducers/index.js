import {combineReducers} from 'redux'
import authReducer from './authReducer'
import threadReducer from './threadReducer'
import commentReducer from './commentReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    threads: threadReducer,
    comments: commentReducer
})