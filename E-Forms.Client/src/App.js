import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { getAllUsers, createUser } from './services/UserService';
import Header from './components/Header'
import CreateUser from './components/CreateUser';
import { DisplayBoard } from './components/DisplayBoard';


const App =(props) => {

const [user, setUser] = useState('');  
const [users, setUsers] = useState('');
const [numberOfUsers, setNumberOfUsers] = useState(0);


const getAllUsers1 = () => {
  getAllUsers(users)
    .then(response => {
      console.log(response);
      setUsers(response);
      setNumberOfUsers(response.data.length);
    });
}

// assign entered values to the fields
const onChangeForm = (e) => {
  if (e.target.name == 'firstname') {
      user.firstName = e.target.value;
      setUser(user);
  } else if (e.target.name == 'lastname') {
      user.lastName = e.target.value;
      setUser(user);
  } 
}

const createUser1 = (e) => {
  createUser(user)
    .then(response => {
      console.log(response);
      setNumberOfUsers(numberOfUsers + 1);
  });
} 


  return (
    <div >
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              onChangeForm={onChangeForm}
              createUser={createUser1}
              >
            </CreateUser>
          </div>
          <div className="col-md-8">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={getAllUsers1}
            >                 
            </DisplayBoard>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;