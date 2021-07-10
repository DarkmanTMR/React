import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Counter from "./components/counter/Counter";
import Posts from "./components/counter/posts/Posts";






export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/counter'}>counter</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
            </div>

            <Switch>
                <Route path={'/counter'} component={Counter}/>
                <Route path={'/posts'} component={Posts}/>
            </Switch>
        </Router>


    );
}

