import axios from 'axios';
import actions from './duck/actions'


// API operations folder

export const getAllUsers = async(dispatch) => {
    const users = await axios.get('https://localhost:5001/api/users')
    users.map(user => dispatch(actions.add(user.firstname, user.lastname)))
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