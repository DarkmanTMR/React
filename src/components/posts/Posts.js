import Post from "../post/Post";

export default function Posts({items, appTik}) {

let tikFather = appTik;

    return(
        <div>
            {

                items.map((value)=> <Post key={value.id} item={value} tikFather={tikFather}/>)

            }


        </div>
    );

}