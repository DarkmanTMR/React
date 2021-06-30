export default function User({item, select}) {
    return(
        <div>
            {item.id} - {item.name} <button onClick={() => select(item.id)}> select
        </button>
        </div>
    );
    
}