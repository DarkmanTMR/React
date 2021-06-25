

export default function Post({item}) {
    let tik = () => console.log('Yo');
    return (

        <div>
            {item.id} - {item.title} -
            <button onClick={
                    tik
            }>push the button</button>

        </div>


    );
}