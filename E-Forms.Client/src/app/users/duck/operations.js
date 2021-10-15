import axios from 'axios'
import actions from './actions'


// API operations folder

export const getAllUsersFromAPI = () => 
        async(dispatch) => {
                const users = await axios.get('https://localhost:5001/api/users')
                users.data.map(user => dispatch(actions.add(user.item)))
}