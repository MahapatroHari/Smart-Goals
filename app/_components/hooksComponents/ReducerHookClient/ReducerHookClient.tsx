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
            return state;

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
                priority: 'Medium'
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


    return (
        <div className={styles.reducerHookClient} style={{ padding: '20px' }}>
            <h2>Task Master (useReducer)</h2>

            <div style={{ marginBottom: '20px' }}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="New Task..."
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button onClick={handleAddTask} style={{ padding: '8px 16px' }}>
                    Add
                </button>
            </div>

            <div className={styles.listContainer}>
                {taskList.length === 0 ? (
                    <p>No tasks yet.</p>
                ) : (
                    <ul>
                        {taskList.map((task) => (
                            <li key={task.id} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '10px',
                                background: '#f0f0f0',
                                padding: '10px',
                                borderRadius: '4px'
                            }}>
                                <span>{task.title} <small>({task.priority})</small></span>

                                <button
                                    onClick={() => handleDelete(task.id)}
                                    style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ReducerHookClient