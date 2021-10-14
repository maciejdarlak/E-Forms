import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from './../duck/actions'


// How to get API to front: getAllUsersResult --> getAllUsers --> getAllUsersFromAPI --> getAllUsers --> getAllUsersResult

const UsersContainer = ({ users, getAllUsersResult }) => {

    useEffect(() => { getAllUsersResult() }, [])

    return(  
        <div className='container'>       
                <div className='mt-4 col-md-12'>
                    Number of users is { users.length }   
                </div>   
                <div className='mt-4 col-md-12'>         
                    <button type='button' onClick={(e) => getAllUsersResult()} className='btn btn-warning'>Get all users</button>
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
    getAllUsersResult: () => dispatch(getAllUsers()) // assignment of an action method - the goal is getting dispatch method
})

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);