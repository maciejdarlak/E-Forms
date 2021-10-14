import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { getAllUsers2 } from './../duck/actions'


const UsersContainer = ({ users, getAllUsers }) => {

    useEffect(() => { getAllUsers() }, [])

    return(  
        <div className='container'>       
                <div className='mt-4 col-md-12'>
                    Number of users is { users.length }   
                </div>   
                <div className='mt-4 col-md-12'>         
                    <button type='button' onClick={(e) => getAllUsers()} className='btn btn-warning'>Get all users</button>
                </div>
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.users
})

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers2())
})

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);























// const [user, setUser] = useState('');  
// const [users, setUsers] = useState('');
// const [numberOfUsers, setNumberOfUsers] = useState(0);

// const getAllUsers1 = () => {
//   getAllUsers(users)
//     .then(response => {
//       console.log(response);
//       setUsers(response);
//       setNumberOfUsers(response.data.length);
//     });
// }

// // assign entered values to the fields
// const onChangeForm = (e) => {
//   if (e.target.name == 'firstname') {
//       user.firstName = e.target.value;
//       setUser(user);
//   } else if (e.target.name == 'lastname') {
//       user.lastName = e.target.value;
//       setUser(user);
//   } 
// }

// const createUser1 = (e) => {
//   createUser(user)
//     .then(response => {
//       console.log(response);
//       setNumberOfUsers(numberOfUsers + 1);
//   });
// } 

//   return (
//     <div >
//       <Header></Header>
//       <div className="container mrgnbtm">
//         <div className="row">
//           <div className="col-md-8">
//             <CreateUser
//               onChangeForm={onChangeForm}
//               createUser={createUser1}
//               >
//             </CreateUser>
//           </div>
//           <div className="col-md-8">
//             <DisplayBoard
//               numberOfUsers={numberOfUsers}
//               getAllUsers={getAllUsers1}
//             >                 
//             </DisplayBoard>
//           </div>
//         </div>
//       </div>
//     </div>
//   );