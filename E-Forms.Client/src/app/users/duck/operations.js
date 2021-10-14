import axios from 'axios'


// API operations folder

// getting all users from db
export const getAllUsersFromAPI = async() => {
        const users = await axios.get('https://localhost:5001/api/users')
        return users.data
}