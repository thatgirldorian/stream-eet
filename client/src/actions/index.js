import streams from '../apis/streams'

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

//create new action creator to handle stream creation and POST requests
export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues)
}
