import React  from "react";


const CreateUser = ({ onChangeForm, createUser }) => {

    return(
        <div className='container'> {/* alignment */}
            <div className='row'>
                <div className="col-md-7 mrgnbtm">
                    <h2>Create User</h2>
                    <form>
                        <div class='mt-4 col-md-12'> {/* mt-... - spaces between rows */}   
                            <div className='row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor='exampleInputEmail1'>First Name</label>
                                    <input type='text' onChange={(e) => onChangeForm(e)} className='form-control' name="firstname" id='firstname' aria-describedby='emailHelp' placeholder='First Name' />
                                </div>                                         
                            </div>
                        </div>
                        <div class='mt-2 col-md-12'> 
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label htmlFor='exampleInputPassword1'>Last Name</label>
                                    <input type='text' onChange={(e) => onChangeForm(e)} className='form-control' name="lastname" id='lastname' placeholder='Last Name' />  
                                </div>
                            </div>
                        </div>   
                        <div class='mt-4 col-md-12'>   
                            <div className='row'></div>
                            <button type='button' onClick={(e) => createUser(e)} className='btn btn-danger'>Create</button>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;