import { useContext } from 'react';
import { TaskContext } from '../../ContextHookClient';
import styles from './TaskList.module.scss'

const TaskList = () => {
    const { taskList, dispatch } = useContext(TaskContext);

    return (
        <div className={styles.listContainer}>
            {taskList.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <>
                    <h3>Your Tasks ({taskList.length})</h3>
                    {taskList.map((task) => (
                        <div
                            key={task.id}
                            className={`${task.done ? styles.doneTask : ''} ${styles.taskItem}`}
                        >
                            <span>{task.title}</span>

                            <div className={styles.taskActions}>

                                <button
                                    onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                                    className={styles.removeButton}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default TaskList     