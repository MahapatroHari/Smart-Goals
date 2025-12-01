import { useContext, useState } from 'react';
import { TaskContext } from '../../ContextHookClient';
import styles from './TaskForm.module.scss'

const TaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [text, setText] = useState('');

    const handleAddTask = () => {
        if (!text) return;
        dispatch({
            type: 'ADD_TASK',
            payload: { id: Date.now(), title: text }
        });
        setText('');
    };

    return (
        <div className={styles.inputContainer}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New Task..."
                className={styles.taskInput}
            />
            <button onClick={handleAddTask} className={styles.actionButton}>
                Add
            </button>
        </div>
    );
}

export default TaskForm