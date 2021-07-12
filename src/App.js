import {useSelector} from "react-redux";
import {useState} from "react";


const CreateTodoForm = ({onSubmit}) => {

    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !description) return;

        onSubmit(title, description)


    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="title"
                   value={title}
                   onChange={({target:{value}}) => setTitle(value)}/>
            <br/>
            <br/>
            <input type="text"
                   placeholder="description"
                   value={description}
                   onChange={({target:{value}}) => setDescription(value)}/>
            <br/>
            <br/>
            <button type="submit" disabled={!title || !description}>create</button>                                       {/*disabled={!title || !description} дозволяє використовувати кнопку лише у випадку заповнення двох полів*/}
        </form>
    )
}



export default function App() {
   const store = useSelector(state => state);

   const onTodoCreate = async (title, description) => {
       if (!title || !description) return;

       const response = await fetch('http://localhost:8888/create-todo', {
           method: 'POST',
           body: JSON.stringify({title, description}),
           headers: {
               'Content-Type': 'application/json'
           }
       })
       const data = await response.json();
       console.log(data)
   }
    return (
      <div>
    <CreateTodoForm onSubmit={onTodoCreate} />
      </div>


    );
}

