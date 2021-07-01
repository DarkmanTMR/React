import User from "../User/User";

export default function Users({items}) {


    return(
        <div>
            {
               items.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    );

}