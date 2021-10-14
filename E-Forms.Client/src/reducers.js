import { combineReducers } from 'redux'
import userReducer from './app/users/duck/reducers'


const rootReducer = combineReducers({
    users: userReducer
})

export default rootReducer