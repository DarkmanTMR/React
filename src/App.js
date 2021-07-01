import {useEffect, useReducer} from "react";
import {getPost, getPosts, getUser, getUsers} from "./services/API";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USERS':
      return {...state, users: action.payload};
    case 'ADD_USER':
      return {...state, user: action.payload};
      case 'ADD_POSTS':
      return {...state, posts: action.payload};
      case 'ADD_POST':
      return {...state, post: action.payload};
    default :
      return {...state};
  }
}

export default  function App() {

 let [state, dispatch] = useReducer(reducer, {users:[], user: null});
 let {users, user} = state;
  useEffect(() => {
  getUsers().then(value => dispatch({type: 'ADD_USERS', payload: value.data}));
  },[]);

  const appSelect = (id) => {
    getUser(id).then(value => dispatch({type:'ADD_USER', payload: value.data})); };


let {posts, post} = state;
useEffect(() => {
    getPosts().then(value => dispatch({type: 'ADD_POSTS', payload: value.data}));
},[]);
const appTik = (id) => {
    getPost(id).then(value => dispatch({type: 'ADD_POST', payload: value.data}));  };




  return (
   <Router>
       <div >
           <Users/>
          <ul>
              <li>
                  <Link to={'/Users'}>Users</Link>
              </li>
              <li>
                  <Link to={'/Posts'}>Posts</Link>
          </li>

                <Route path={'/Users'} render={() => <Users/>}/>



          </ul>
       </div>
   </Router>
  );
}

