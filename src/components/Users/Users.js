import {useEffect, useState} from "react";
import User from '../User/User';
export default function Users() {

let [users, setUsers] = useState([]);

   useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json())
           .then(usersFromServer => {
               setUsers(usersFromServer);
           });
   }, []);
    return(
        <div>
            {
                users.map(user => <User item= {user}/>)
            }
        </div>
    );
    
}