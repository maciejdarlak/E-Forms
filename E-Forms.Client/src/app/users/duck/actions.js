import types  from './types'
import { getAllUsersFromAPI } from './operations'


const add = item => ({
    type: types.ADD_USER, 
    item
})

const clearUsers = () => ({
    type: types.CLEAR_USERS
}) 

export const getAllUsers =  () => {
    return(dispatch) => {
        getAllUsersFromAPI() // getAllUsersFromAPI - getting data from API
        .then(fetchData => { 
            fetchData.map(user => { // fetchdata - it is just a variable
                const firstname = user.firstname 
                const lastname = user.lastname   
                const item = { firstname, lastname } // two parameters to one JS object    
                dispatch(add(item)) // added item to the store --> action method (add) --> dispatch
            })
        })
    }
}

export default {
    add,
    clearUsers
}  