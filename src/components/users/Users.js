import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import UserInfo from "../user-info/UserInfo";
import UserInfo2 from "../user-info2/UserInfo2";

import Posts from "../Posts/Posts";



export default function Users() {


    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => {
            console.log(value.data)
            setUsers([...value.data]);
        });
    },[]);

    return(
        <div>
            {
                users.map(value => <User key={value.id} item={value}/>)
            }
            <Switch>
                {/*<Route path={'/users/:id'} component={UserInfo}/>*/}
                {/*<Route path={'/users/:id'} component={UserInfo2}/>*/}
            </Switch>

        </div>
    );
    
}