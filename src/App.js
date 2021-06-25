import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import Posts from "./components/posts/Posts";



export default function App() {
  let [post, setPost] = useState(null);
  let appTik = (id) => {  getPost(id).then(value => setPost(value.data));  };

  let [posts, setPosts] = useState([]) ;

  useEffect(() => {getPosts().then(value => setPosts(value.data));  }, []);
  return (
    <div>
      <Posts items={posts} appTik={appTik}/>
      <hr/>
      {
        post && <div><h2>{post.body}</h2></div>
      }
      <hr/>

    </div>
  );
}


