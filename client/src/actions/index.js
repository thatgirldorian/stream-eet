import streams from '../apis/streams'
import history from '../history'

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

//add action creators for REST API operations

export const createNewStream = () => {
    return {
        type: 'CREATE_STREAM'
    }
}

export const listAllStreams = () => {
    return {
        type: 'LIST_ALL_STREAMS'
    }
}

export const getOneStream = () => {
    return {
        type: 'GET_ONE_STREAM'
    }

}

export const updateStream = () => {
    return {
        type: 'UPDATE_STREAM'
    }
}

export const deleteStream = () => {
    return { 
        type: 'DELETE_STREAM' 
    }
}



//create new action creator to handle stream creation and POST requests
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streams.post('/streams', {...formValues, userId})

    dispatch({ type: 'CREATE_STREAM', payload: response.data })

    //trigger navigation to the all streams page
    history.push('/')
}

export const fetchAllStreams = () => async dispatch => {
    const response = await streams.get('/streams')

    dispatch({ type: 'LIST_ALL_STREAMS', payload: response.data })
}

export const fetchOneStream = (id) => async dispatch =>{
    const response = await streams.get(`/streams/${id}`)

    dispatch({ type: 'GET_ONE_STREAM', payload: response.data })

}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch({ type: 'UPDATE_STREAM', payload: response.data })
    history.push('/')
}

export  const removeStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch({ type: 'DELETE_STREAM', payload: id})
    history.push('/')
}