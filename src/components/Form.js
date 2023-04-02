import styles from "../styles/style.module.css";

const Form = () => {
    return (
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput} type="text" placeholder="Add Todo Item" />
                <button className={styles.todobutton} type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;