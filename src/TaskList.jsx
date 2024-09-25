import { useState } from 'react';
import AddTodo from "./AddTodo.jsx"
import styles from './TaskList.module.css'


function TaskList() {
    const [TaskList, setTaskList] = useState(JSON.parse(localStorage.getItem('title')));
    if (!(localStorage.getItem('title')) || localStorage.getItem('title') == 'null') {
        localStorage.setItem('title', JSON.stringify([]));
        setTaskList([])
    }
    function displayTasks() {
        return TaskList.map((value, index) => {
            return (<li className={styles.li}>
                        <div className={styles.taskText}>
                            <label htmlFor={value}>
                                <input type="checkbox" id={value}/>
                                {value}
                            </label>
                        </div>
                        <button className={styles.deleteBtn} onClick={() => {
                            TaskList.splice(index, 1);
                            setTaskList([...TaskList]);
                            localStorage.setItem('title', JSON.stringify([...TaskList]));
                        }}>Delete</button>
                    </li>
            )
        })
    }
    return (
        <>
        <div className={styles.addtodo}>
            <AddTodo getTask={(newTask) => {
                setTaskList([...TaskList, newTask]);
                localStorage.setItem('title', JSON.stringify([...TaskList, newTask]));
            }}/>
        </div>
        <ul className={styles.ul}>
            {displayTasks()}
        </ul>
        </>
    )
}

export default TaskList;