import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HeaderContainer from './app/headers/components/HeaderContainer';
import UsersContainer from './app/users/components/UsersContainer'


const App =() => {
  return(
    <div className='App'>
      <HeaderContainer />
      <UsersContainer />
    </div>
  );
}

export default App