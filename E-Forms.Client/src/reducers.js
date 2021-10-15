import { combineReducers } from 'redux'
import headerReducer from './app/headers/duck/reducers'
import userReducer from './app/users/duck/reducers'


const rootReducer = combineReducers({
    headers: headerReducer,
    users: userReducer,
})

export default rootReducer