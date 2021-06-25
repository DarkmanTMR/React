

export default function Post({item, tikFather}) {
    let tik = tikFather;
    return (

        <div>
            {item.id} - {item.title} -
            <button onClick={
                    tik
            }>push the button</button>

        </div>


    );
}