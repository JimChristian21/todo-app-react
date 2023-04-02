import Todo from "./Todo";

const TodoList = ({ todoList }) => {
   
    return (
        todoList.map((task, index) => {
            return (
              <Todo key={index} name={task}/>
            );
        })
    );
}

export default TodoList;