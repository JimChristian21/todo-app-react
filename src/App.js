import {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";

function App() {

  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const todos = todoList.map((task, index) => {
    return (
      <Todo key={index}/>
    );
  });

  return (
    <div className="App">
      <Header/>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}/>
      {todos}
    </div>
  );
}

export default App;
