import axios from 'axios'
import actions from './actions'


// API operations folder

// getting all users from db
export const getAllUsers = async() => {
        const users = await axios.get('https://localhost:5001/api/users')
        return users.data

        // console.log(users)
        // users.data.map(user => { 
        //     var firstname = user.firstname 
        //     var lastname = user.lastname   
        //     var item = { firstname, lastname }      
        //     dispatch(actions.add(item))
}


















// export const getAllUsers = async(data) => {
//     const response = await axios.get('https://localhost:5001/api/users');
//     return await response;
// }

// export const createUser = async(data) => {
//     const response = await axios.post('https://localhost:5001/api/user', {
//         firstname: '', 
//         lastname: ''
//     })
//     return await response;
// }