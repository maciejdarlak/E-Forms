import types  from './types'
import { getAllUsers } from './operations'


const add = item => ({
    type: types.ADD_USER, 
    item
})

const clearUsers = () => ({
    type: types.CLEAR_USERS
}) 

export const getAllUsers2 =  () => {
    return(dispatch) => {
        getAllUsers().then(fetchData => {
            fetchData.map(user => { 
                var firstname = user.firstname 
                var lastname = user.lastname   
                var item = { firstname, lastname }      
                dispatch(add(item))
            })
        })
    }
}

export default {
    add,
    clearUsers
}  