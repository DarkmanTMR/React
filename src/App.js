
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


function App() {
  return (
      <Router>
        <div>

               <br/>
               <Link to={'/'}>Home</Link>
               <br/>
               <Link to={'/users'}>Users</Link>
               <br/>
               <Link to={'/posts'}>Posts</Link>
               <br/>
               <Link to={'/comments'}>Comments</Link>



          <Route path={'/users'} render={(props) => <Users{...props}/>}/>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} render={() => <Comments/>}/>
        </div>
      </Router>
  );
}

export default App;
