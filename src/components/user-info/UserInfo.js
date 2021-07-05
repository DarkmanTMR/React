import {useEffect, useState} from "react";
import {

    useParams
} from 'react-router-dom';
import axios from "axios";



export default function UserInfo(props) {
                                            // let {match: {params:{id}}} = props; equal -->
                             // let {match:{params:{id}}} = props; also equal -->
    let {id} = useParams();
    let [user, setUser] = useState({});
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/'+ id)
                 .then(value => {
               setUser({...value}.data);
            });
},[id]);

    return(
        <div>
            {

            }

        </div>
    )
    
}