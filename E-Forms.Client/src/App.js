import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { getAllUsers, createUser } from './services/UserService';
import Header from './components/Header'
import CreateUser from './components/CreateUser';
import { DisplayBoard } from './components/DisplayBoard';


class App extends Component {

state = {
  user: {},
  users: [],
  numberOfUsers: 0
}

getAllUsers = () => {
  getAllUsers()
    .then(users => {
      console.log(users);
      this.setState({ users: users, numberOfUsers: users.length })
    });
}
// assign entered values to the fields
onChangeForm = (e) => {
  let user = this.state.user
  if (e.target.name === 'firstname') {
      user.firstName = e.target.value;
  } else if (e.target.name === 'lastname') {
      user.lastName = e.target.value;
  } 
  this.setState({user})
}

createUser = (e) => {
  createUser(this.state.user)
    .then(response => {
      console.log(response);
      this.setState({numberOfUsers: this.state.numberOfUsers + 1})
  });
} 


  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <CreateUser
                onChangeForm={this.onChangeForm}
                createUser={this.createUser}
                >
              </CreateUser>
            </div>
            <div className="col-md-8">
              <DisplayBoard
                getAllUsers={this.getAllUsers}
                numberOfUsers={this.numberOfUsers}
              >                 
              </DisplayBoard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;