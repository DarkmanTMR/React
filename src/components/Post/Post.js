export default function Post(props){
    let {item: post} = props;
    return (
        <div>{post.id} - {post.title}: <h4>{post.body}</h4></div>
    );
}