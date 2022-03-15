import React,{useState} from "react";

const Todo = (props) => {
    const [todo, setTodo] = useState({content: "", finished: false})

    const handleChange = (e) => {
        setTodo({content:e.target.value, finished: false})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
    }


    return(
        <div className="container-sm">
            <form onSubmit = {handleSubmit}>
                <input class="form-control mt-5 mb-5" type="text" onChange = {handleChange} value={todo.content}/>
                <input type="submit" className="btn btn-primary" value="Add"/>
            </form>
        </div>

    )

}

export default Todo;