'use client';
import { useReducer, useState, createContext, useContext } from 'react';

const TaskContext = createContext<any>(null);

const taskReducer = (state: any[], action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter((task: any) => task.id !== action.payload);
        default:
            return state;
    }
};

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
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h3>Add a Task</h3>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="New Task..."
                style={{ padding: '8px', marginRight: '10px' }}
            />
            <button onClick={handleAddTask} style={{ padding: '8px 16px' }}>Add</button>
        </div>
    );
};

const TaskList = () => {
    const { taskList, dispatch } = useContext(TaskContext);

    return (
        <div>
            <h3>Your Tasks ({taskList.length})</h3>
            {taskList.length === 0 ? <p>No tasks yet.</p> : (
                <ul>
                    {taskList.map((task: any) => (
                        <li key={task.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '300px',
                            marginBottom: '10px',
                            background: '#f4f4f4',
                            padding: '10px'
                        }}>
                            {task.title}
                            <button
                                onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                                style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const ContextHookClient = () => {
    const [taskList, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ taskList, dispatch }}>
            <div style={{ padding: '20px' }}>
                <h2>Task Master (useContext + useReducer)</h2>
                <p>Note: No props are being passed to these components!</p>

                <TaskForm />
                <TaskList />
            </div>
        </TaskContext.Provider>
    );
};

export default ContextHookClient;