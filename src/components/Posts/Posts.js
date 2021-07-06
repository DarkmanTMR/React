

import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../services/API";



export default function Posts({id}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(id).then(value => {
                       setPosts([...value.data]);
        });
    },[]);


    return(
        <div>

            {

               posts.map(value => <Post key={value.id} post={value}/>)

            }
        </div>
    );

}