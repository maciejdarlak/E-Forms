import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { getAllUsersFromAPI } from '../duck/operations'


const UsersContainer = ({ users, getAllUsers }) => {

    useEffect(() => { getAllUsers() }, [])

    return(  
        <div className='container'>       
                <div className='mt-4 col-md-12'>
                    Number of users is { users.length }   
                </div>   
                <div className='mt-4 col-md-12'>         
                    <button type='button' onClick={(e) => getAllUsers()} className='btn btn-warning'>Get all users</button>
                </div>
        </div>
    )
}

// mapStateToProps - added the state
const mapStateToProps = state => ({
    users: state.users
})

// mapDispatchToProps -, added the action methods
const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsersFromAPI()) 
})

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);