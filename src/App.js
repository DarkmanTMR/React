import {useEffect, useState} from "react";
import {getPosts} from "./components/services/API";
import Posts from "./components/posts/Posts";



export default function App() {

  let appTik = () => console.log('Yo');
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


