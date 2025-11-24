'use client'
import { useReducer, useState } from 'react'
import styles from './ReducerHookClient.module.scss'

type Task = {
    id: number;
    title: string;
    isComplete: boolean;
}

type Action =
    | { type: 'ADD_TASK'; payload: string }
    | { type: 'DELETE_TASK'; payload: number }
    | { type: 'TOGGLE_TASK'; payload: number }

const taskReducer = (state: Task[], action: Action): Task[] => {
    switch (action.type) {
        case 'ADD_TASK':
            return state;

        case 'DELETE_TASK':
            return state;

        case 'TOGGLE_TASK':
            return state;

        default:
            return state;
    }
}

const ReducerPage = () => {
    // 4. Initialize Hook
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        dispatch({ type: 'ADD_TASK', payload: input });
        setInput('');
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Task Master (useReducer)</h2>

            <div style={{ marginBottom: '1rem' }}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="New Task..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
                        <span onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
                            {task.title}
                        </span>
                        <button
                            onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                            style={{ marginLeft: '10px', color: 'red' }}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReducerPage