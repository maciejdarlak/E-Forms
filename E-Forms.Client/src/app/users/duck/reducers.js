import types from './types'


const userReducer = (state = [], action) => { 
    switch(action.type) {
        case types.ADD_USER:     
            return state = [...state, action.item]   
        case types.CLEAR_USERS:
            return state = []
        default:
            return state
    }
}

export default userReducer