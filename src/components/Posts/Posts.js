
import {useEffect, useState} from "react";
import './Posts.css'
import Post from '../Post/Post'
export default function Posts(){


    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => setPosts(posts));
    },[]);


    return(
        <div>
            {
                posts.map(post => <Post item={post}/>)
            }
        </div>

    );

}
