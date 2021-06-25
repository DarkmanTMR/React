import Post from "../post/Post";

export default function Posts({items}) {

let tikFather = () => console.log('Yo')

    return(
        <div>
            {

                items.map((value)=> <Post key={value.id} item={value} tikFather={tikFather}/>)

            }


        </div>
    );

}