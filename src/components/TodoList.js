import Todo from "./Todo";

const TodoList = ({ todoList, setTodoList }) => {
   
    return (
        todoList.map((task) => {
            return (
              <Todo key={task.id} todoItem={task} todoList={todoList} setTodoList={setTodoList}/>
            );
        })
    );
}

export default TodoList;