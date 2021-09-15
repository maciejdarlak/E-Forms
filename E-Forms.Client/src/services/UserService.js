import axios from 'axios';


export const getAllUsers = async(data) => {
    const response = await axios.get('https://localhost:5001/api/users');
    return await response;
}

export const createUser = async(data) => {
    const response = await axios.post('https://localhost:5001/api/user', {
        firstname: '', 
        lastname: ''
    })
    return await response;
}