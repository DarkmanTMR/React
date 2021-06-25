import Post from "../post/Post";

export default function Posts({items, appTik}) {



    return(
        <div>
            {

                items.map((value)=> <Post key={value.id} item={value} tikFather={appTik}/>)

            }


        </div>
    );

}