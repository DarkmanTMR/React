import {
        Link
} from 'react-router-dom';

// export default function User({item:{name,id}}) { destruct
// {name} - <Link to={'/users/' + .id}

export default function User({item}) {
    return(
        <div>
            {/*{item.name} - <Link to={'/users/' + item.id}>user info</Link>*/}
            {item.name} - <Link to={
                {
                    pathname: '/users/' + item.id,
                    state: item
                }
            }>user info</Link>
        </div>
    )
    
}