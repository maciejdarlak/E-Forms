import types from './types'


const userReducer = (action) => { 
    switch(action.type) {
        case types.ADD_USER: 
            return {
                ...state, list: [...state.list, (action.firstname, action.lastname)] 
            }
        case types.CLEAR_USERS:
            return {
                ...state, list: []
            }
        default:
            return state
    }
}

export default userReducer