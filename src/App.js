import {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  return (
    <div className="App">
      <Header/>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
