import {useEffect, useState} from "react";
import Comment from "../coment/Comment";


export default function Comments() {
    const [comments, setComments] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => setComments(comments))
},[])


return (

    <div>
        {
            comments.map(comment => <Comment item={comment}/>)

        }

    </div>



)
}