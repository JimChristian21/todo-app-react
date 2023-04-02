import styles from "./style.module.css";

export default function ModuleComponent() {

    console.log(styles);
    return (
        <div className={styles.header}>Green</div>
    )
}