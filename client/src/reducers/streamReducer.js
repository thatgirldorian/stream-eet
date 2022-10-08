/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

//Create an object-based reducer for streaming using the actions provided

export default (state = {}, action) => {
    switch (action.type) {
        case 'LIST_ALL_STREAMS':
            return {...state, ..._.mapKeys(action.payload, 'id') }
        case 'GET_ONE_STREAM': 
            return {...state, [action.payload.id]: action.payload }
        case 'CREATE_STREAM':
            return {...state, [action.payload.id]: action.payload }
        case 'UPDATE_STREAM':
            return {...state, [action.payload.id]: action.payload }
        case 'DELETE_STREAM':
            return _.omit(state, action.payload)  
        default:
            return state
    }
}