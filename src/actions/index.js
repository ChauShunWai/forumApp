import api from '../apis'
import history from '../history'
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_THREADS,
    FETCH_THREAD,
    FETCH_COMMENTS,
    FETCH_COMMENT,
    CREATE_THREAD,
    CREATE_COMMENT,
    EDIT_THREAD,
    EDIT_COMMENT,
    DELETE_COMMENT,
    DELETE_THREAD
} from './types.js'

export const signIn = (userId, userName) => {
    return {
        type: SIGN_IN,
        payload: {
            userId,
            userName
        }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const loadThreads = () => async dispatch => {
    const response = await api.get('/threads');
    dispatch({
        type: FETCH_THREADS,
        payload: response.data
    })
}

export const loadThread = (id) => async dispatch => {
    const response = await api.get(`/threads/${id}`)
    dispatch({
        type: FETCH_THREAD,
        payload: response.data
    })
}


export const createThread = (val) => async (dispatch, getState) => {
    const { userId, userName } = getState().auth;
    const response = await api.post('/threads', { ...val, userId, userName });
    dispatch({
        type: CREATE_THREAD,
        payload: response.data
    })
    history.push('/forum');
}

export const editThread = (id, val) => async dispatch => {
    const response = await api.patch(`threads/${id}`, val)
    dispatch({
        type: EDIT_THREAD,
        payload: response.data
    })
    history.push('/forum')
}

export const deleteThread = (id) => async (dispatch) => {
    await api.delete(`/threads/${id}`, id)
    dispatch({
        type: DELETE_THREAD,
        payload: id
    })
}

export const loadComments = (threadId) => async dispatch => {
    const response = await api.get(`/comments`)
    dispatch({
        type: FETCH_COMMENTS,
        payload: response.data.filter(element => element.threadId === threadId)
    })
}

export const loadComment = (id) => async dispatch => {
    const response = await api.get(`/comments/${id}`)
    dispatch({
        type: FETCH_COMMENT,
        payload: response.data
    })
}

export const createComment = (val, threadId) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await api.post(`/comments`, { ...val, threadId, userId });
    dispatch({
        type: CREATE_COMMENT,
        payload: response.data
    })
}

export const editComment = (id, val) => async dispatch => {
    const response = await api.patch(`comments/${id}`, val)
    dispatch({
        type: EDIT_COMMENT,
        payload: response.data
    })
}

export const deleteComment = (id) => async dispatch => {
    await api.delete(`/comments/${id}`)
    dispatch({
        type: DELETE_COMMENT,
        payload: id
    })
}