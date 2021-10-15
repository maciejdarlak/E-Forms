import types from './types'


const headerReducer = (state = [], action) => {
    switch(action.type) {
        case types.ADD_HEADER: 
            return state = [...state, action.item]
        default:
            return state
    }
}

export default headerReducer