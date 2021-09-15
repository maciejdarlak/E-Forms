import React  from "react";


export const DisplayBoard = ({ numberOfUsers, getAllUsers }) => {

    return(  
        <div className='container'> {/* alignment */}        
                <div className='mt-4 col-md-12'>
                    Number of users is  {numberOfUsers}   
                </div>   
                <div className='mt-4 col-md-12'>         
                    <button type='button' onClick={(e) => getAllUsers()} className='btn btn-warning'>Get all users</button>
                </div>
        </div>
    )
}

export default DisplayBoard;