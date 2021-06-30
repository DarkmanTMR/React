import {useEffect, useReducer, useState} from "react";
import {getPost, getPosts, getUser, getUsers} from "./services/API";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USERS':
      return {...state, users: action.payload};
    case 'ADD_USER':
      return {...state, user : action.payload};
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

// let [user, setUser] = useState(null);
// let [users, setUsers] = useState([]);
// let [post, setPost] = useState(null);
// let [posts, setPosts] = useState([]) ;


// let appTik = (id) => {  getPost(id).then(value => setPost(value.data));  };
// useEffect(() => {getPosts().then(value => setPosts(value.data));  }, []);






  return (
    <div >
      <Users items={users} appSelect={appSelect}/>
      <hr/>
      {
        user && <div><h2> {user.id} - {user.name} </h2></div>
      }
      <hr/>
    </div>
  );
}

