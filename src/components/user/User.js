import {
    Link, Route
} from 'react-router-dom';
import {useState} from "react";
import Posts from "../Posts/Posts";

// export default function User({item:{name,id}}) { destruct
// {name} - <Link to={'/users/' + .id}

export default function User({item}) {

    return(
<div>
    {/*{item.name} - <Link to={'/users/' + item.id}>user info</Link>*/}
    {/*{item.name} - <Link to={*/}
    {/*            {*/}
    {/*                pathname: '/users/' + item.id,*/}
    {/*                state: item*/}
    {/*            }*/}

    {item.name} - <Link to={'/users/'+ item.id}> user's posts</Link>
    <Route path={'/users/' + item.id} component={Posts}/>
        </div>
    )

};