import _ from 'lodash';

//Create an object-based reducer for streaming using the actions provided

export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_ONE_STREAM': 
            return {...state, [action.payload.id]: action.payload }

        case 'CREATE_STREAM':
            return {...state, [action.payload.id]: action.payload }

        case 'UPDATE_STREAM':
            return {...state, [action.payload.id]: action.payload }

        case 'DELETE_STREAM':
            return _.omit(state, action.payload)

        case 'LIST_ALL_STREAMS':
            return {...state, [action.payload.id]: action.pay}

        default:
            return state
    }
}