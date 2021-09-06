import React  from "react";
//import './CreateUser.css';

const CreateUser = () => {


    return(
        <div className='container'> {/* alignment */}
            <div className='row'>
                <div className="col-md-7 mrgnbtm">
                    <h2>Create User</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor='exampleInputEmail1'>First Name</label>
                                <input type='text' className='form-control' name='firstname' id='firstname' aria-describedby='emailHelp' placeholder='First Name' />
                            </div>                       
                            <div className='form-group col-md-6'>
                                <label htmlFor='exampleInputEmail1'>Last Name</label>
                                <input type='text' className='form-control' name='lastname' id='lastname' aria-describedby='emailHelp' placeholder='Last Name' />  
                            </div>                       
                        </div>






                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser;