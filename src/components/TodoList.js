import Todo from "./Todo";

const TodoList = ({ todoList }) => {
   
    return (
        todoList.map((task) => {
            return (
              <Todo key={task.id} name={task.name}/>
            );
        })
    );
}

export default TodoList;