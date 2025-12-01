'use client';
import { useReducer, createContext } from 'react';
import TaskForm from './parts/TaskForm/TaskForm';
import TaskList from './parts/TaskList/TaskList';
import styles from './ContextHookClient.module.scss'

export const TaskContext = createContext<any>(null);

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

const ContextHookClient = () => {
    const [taskList, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ taskList, dispatch }}>
            <div className={styles.contextHookClientContainer}>
                <h2>To-Do List (useContext + useReducer)</h2>
                <p>Note: Both Search and List are different components and communicate via context.</p>

                <p className={styles.breakLine}>Component One</p>
                <TaskForm />
                <p className={styles.breakLine}>Component Two</p>
                <TaskList />
            </div>
        </TaskContext.Provider>
    );
};

export default ContextHookClient;