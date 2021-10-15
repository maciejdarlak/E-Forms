import types  from './types'


var firstname
var lastname
var item = { firstname, lastname }

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