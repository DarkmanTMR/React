import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Users from "./components/users/Users";
import UserInfo from "./components/user-info/UserInfo";

function App() {
  return (
   <Router>
     <div >
  <Link to={'/users'}>users page</Link>
       <Switch>
         <Route path={'/users'} component={Users}/>
         {/*  <Route path={'/users/:id'} component={UserInfo}/>*/}

                 </Switch>
    </div>
   </Router>
  );
}

export default App;