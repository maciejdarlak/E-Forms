import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import { createUser } from './services/UserService';
import Header from './components/Header'
import CreateUser from './components/CreateUser';


class App extends Component {

state = {
  user: {},
  users: [],
  numberOfUsers: 0
}

createUser = (e) => {
  createUser(this.state.user)
    .then(response => {
      console.log(response);
      this.setState({numberOfUsers: this.state.numberOfUsers + 1})
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;