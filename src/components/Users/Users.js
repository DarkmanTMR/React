import User from "../User/User";

export default function Users({items, appSelect}) {


    return(
        <div>
            {
                items.map((value) => <User key={value.id} item={value} select={appSelect}/>)
            }
        </div>
    );

}