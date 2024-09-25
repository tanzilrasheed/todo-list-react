import TaskList from './TaskList.jsx';
import styles from './App.module.css';


function App() {
    return (
        <>
        <h1>Todo List</h1>
        <div className={styles.main}>
            <TaskList/>
        </div>
        </>
    )
}
export default App;