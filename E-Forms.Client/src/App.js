import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import CreateUser from './components/CreateUser';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <CreateUser></CreateUser>
      </div>
    );
  }
}

export default App;