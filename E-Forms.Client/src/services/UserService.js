import axios from 'axios';


//const mainRoad = 'https://localhost:44361/api'


export const getAllUsers = async() => {
    const response = await axios.get('https://localhost:44361/api/users');
    return await response.json();
}

export const createUser = async(data) => {
    const response = await axios.post('https://localhost:44361/api/user', {
        firstname: '', 
        lastname: ''
    })
    return await response.json();
}

