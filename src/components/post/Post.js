

export default function Post({item, tikFather}) {

    return (

        <div>
            {item.id} - {item.title} -
            <button onClick={
                tikFather
            }>push the button</button>

        </div>


    );
}