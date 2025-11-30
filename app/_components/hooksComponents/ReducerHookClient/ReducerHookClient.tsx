'use client';
import styles from './ReducerHookClient.module.scss'
import { useReducer, useState } from 'react';

const taskReducer = (state: any[], action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];

        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.payload);

        case 'TOGGLE_TASK':
            return state.map((task) =>
                task.id === action.payload ? { ...task, done: !task.done } : task
            );
        case 'CLEAR_ALL':
            return [];

        default:
            return state;
    }
};

const ReducerHookClient = () => {
    const [taskList, dispatch] = useReducer(taskReducer, []);
    const [text, setText] = useState('');

    const handleAddTask = () => {
        if (!text) return;

        const action = {
            type: 'ADD_TASK',
            payload: {
                id: Date.now(),
                title: text,
            }
        };

        dispatch(action);
        setText('');
    };

    const handleDelete = (id: number) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    };

    const handleDone = (id: number) => {
        dispatch({
            type: 'TOGGLE_TASK',
            payload: id
        });
    }


    return (
        <div className={styles.reducerHookClient}>
            <h2>To-Do List (useReducer)</h2>

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
                <button onClick={() => dispatch({ type: 'CLEAR_ALL' })} className={styles.actionButton}>
                    Clear All
                </button>
            </div>

            <div className={styles.listContainer}>
                {taskList.length === 0 ? (
                    <p>No tasks yet.</p>
                ) : (
                    <>
                        {taskList.map((task) => (
                            <div
                                key={task.id}
                                className={`${task.done ? styles.doneTask : ''} ${styles.taskItem}`}
                            >
                                <span>{task.title}</span>

                                <div className={styles.taskActions}>
                                    <button onClick={() => handleDone(task.id)} className={styles.toggleButton}>
                                        Done
                                    </button>

                                    <button
                                        onClick={() => handleDelete(task.id)}
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
        </div>
    )
}

export default ReducerHookClient