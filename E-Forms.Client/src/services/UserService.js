import axios from 'axios';


const mainRoad = 'https://localhost:44361/api/users'

export const getAllUsers = async() => {
    const response = await axios.get('${mainRoad}/users');
    return await response.json();
}

export const createUser = async(data) => {
    const response = await axios.post('${mainRoad}/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

