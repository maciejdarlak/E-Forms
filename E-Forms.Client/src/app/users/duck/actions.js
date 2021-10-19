import types from './types'


var firstName
var lastName
var item = { firstName, lastName }

const add = (item) => ({
    type: types.ADD_USER,
    item
})

const clearUsers = () => ({
    type: types.CLEAR_USERS
}) 

export default {
    add,
    clearUsers
}