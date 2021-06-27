import './Comment.css'
export default function Comment(props) {


let {item: comment} = props;
    return(
    <div className='target'>
        <h3>{comment.id}: {comment.name}  </h3>
        <h4>from: {comment.email}</h4>
        <p>Comment: "{comment.body}"</p>
    </div>
    )
}

