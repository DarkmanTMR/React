import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import Posts from "./components/posts/Posts";



export default function App() {

  let appTik = (id) => {

  getPost(id).then(value => console.log(value));
  };
  let [posts, setPosts] = useState([]) ;

  useEffect(() => {
    getPosts().then(value => setPosts(value.data));
  }, []);
  return (
    <div>
      <Posts items={posts} appTik={appTik}/>
    </div>
  );
}


