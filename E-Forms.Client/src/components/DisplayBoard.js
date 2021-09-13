import React  from "react";


export const DisplayBoard = ({ numberOfUsers, getAllUsers }) => {

    return(    
        <div class='mt-4 col-md-12'>
            <div className="number">
                {numberOfUsers}
            </div>
            <div className='btn'>                
                <button type='button' onClick={(e) => getAllUsers()} className="btn btn-warning">Get all users</button>
            </div>
        </div>
    )
}

export default DisplayBoard;