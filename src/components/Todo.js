import { useState } from "react";
import ListItem from "./ListItem";

export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        setTodo("");
        console.log(todoList);
    }

    const todos = todoList.map((item, index) => {
        return (
            <ListItem key={index} name={item}/>
        )
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={todo}/>
                <button type="submit">Add</button>
            </form>

            {todos}
        </div>
    )
}