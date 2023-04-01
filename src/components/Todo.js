import { useState } from "react";

export default function Todo() {

    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} type="text" value={todo}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}