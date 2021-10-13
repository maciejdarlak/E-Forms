import types  from './types'


const add = (firstname, lastname) => ({
    type: types.ADD_USER, 
    firstname,
    lastname
})

const clearUsers = () => ({
    type: types.CLEAR_USERS
}) 

export default {
    add,
    clearUsers
}