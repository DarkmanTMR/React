


export default function UserInfo2(props) {
    console.log(props)
    let {location: {state}} = props;
    return(
        <div>
            {JSON.stringify(state)}
        </div>
    )
    
}