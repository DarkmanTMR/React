export default function Post({item, tikFather}) {

    return (

        <div>
            {item.id} - {item.title} -
            <button onClick={
                () => tikFather(item.id)
            }>push the button</button>

        </div>


    );
}