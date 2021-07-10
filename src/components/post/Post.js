import {Link} from "react-router-dom";

export default function Post({item:{id, title}, ln}) {

    return (
        <div>
            {id} - {title}  {ln && <Link to={'/posts/'}></Link>}
        </div>
    );
}