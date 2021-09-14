import React  from "react";


export const DisplayBoard = ({ props.setNumberOfUsers, getAllUsers }) => {

    return(    
        <div class='mt-1 col-md-5'>
            <div className='number' color='blue'>
                {numberOfUsers}
            </div>
            <div className='btn'>                
                <button type='button' onClick={(e) => getAllUsers()} className='btn btn-warning'>Get all users</button>
            </div>
        </div>
    )
}

export default DisplayBoard;