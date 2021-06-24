
import {useEffect, useState} from "react";

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
                posts.map(post => <li>{post.id} - {post.title}: <h4>{post.body}</h4></li>)
            }
        </div>

    );

}