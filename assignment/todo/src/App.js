import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }


  // const [textStyle, setTextStyle] = useState({})
  const onChecked =(e, index) => {
    console.log(index);
    if (e.target.checked) {
      const copyTodos = [...todos];
      copyTodos[index].finished = true;
      setTodos(copyTodos);
    }
    else {
      const copyTodos2 = [...todos];
      copyTodos2[index].finished = false;
      setTodos(copyTodos2);
    }
  }

  const onDelete = (e,index) => {
    const copyTodos = [...todos];
    copyTodos.splice(index,1);
    setTodos(copyTodos);
  }
  const classStyle=(index) => {
      return todos[index].finished ? "strike" : "";
  }

  return (
    <div className="container-sm">
      <Todo onNewTodo={getTodo} />
        <ul>
          {todos.map((item,i)=>
          <li className="col d-flex align-items-center mt-5" key={i}><span className={classStyle(i)}>{item.content}</span>
          <input className='col mx-5' type="checkbox" onChange = {(e) => onChecked(e,i) }/>
          <button type="onSubmit" className='btn btn-warning ml-5'onClick={(e) => onDelete(e,i)}>Delete</button></li>
          )}
        </ul>        

      
    </div>
  );
}

export default App;
