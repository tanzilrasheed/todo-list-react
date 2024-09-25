import { useState } from "react";
import styles from './AddTodo.module.css';



function AddTodo({ getTask }) {
    const [task, setTask] = useState('');
    return (
        <div className={styles.inpSec}>
            <input className={styles.taskinp} placeholder='add task' type="text" onChange={(e) => {
                setTask(e.target.value);
            }} value={task}
            />
            <button className={styles.addBtn} onClick={() => {
                if (task) {
                    getTask(task);
                }
                setTask('');
            }}
            >Add</button>
        </div>
    )
}

export default AddTodo;