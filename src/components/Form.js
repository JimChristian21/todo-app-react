import styles from "../styles/style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo('');
    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input className={styles.todoinput} onChange={handleChange} type="text" placeholder="Add Todo Item" value={todo}/>
                <button className={styles.todobutton} type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;