export default function Comment({item}) {
    return(
        <div>

            <h4>{item.id}:{item.name}</h4>
            <h5>{item.email}</h5>
            {item.body}
            <hr/>


        </div>
    )

}