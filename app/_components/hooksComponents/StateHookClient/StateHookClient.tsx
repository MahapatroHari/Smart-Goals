"use client"
import { useState } from "react"
import styles from './StateHookClient.module.scss'
import Card from "../../Card/Card";

const StateHookClient = () => {
    const [newTask, setNewTask] = useState({
        title: '',
        priority: 'Medium'
    });
    const [taskList, setTaskList] = useState<any[]>([])
    const [warning, setWarning] = useState('')

    const handleAddTask = () => {
        if (!newTask.title) {
            setWarning('Please enter a valid task');
            return;
        }
        setWarning('');

        const newTaskEntry = {
            title: newTask.title,
            priority: newTask.priority
        };
        setTaskList([...taskList, newTaskEntry]);
        setNewTask({
            title: '',
            priority: 'Medium'
        });
    };

    return (
        <div className={styles.stateHookClient}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.taskInput}
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            title: e.target.value
                        })
                    }}
                />
                <select
                    className={styles.taskPriority}
                    value={newTask.priority}
                    onChange={(e) => {
                        setNewTask({
                            ...newTask,
                            priority: e.target.value
                        })
                    }}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <div className={styles.addButton} onClick={handleAddTask}>Add</div>
            </div>
            {warning && <div className={styles.warning}>{warning}</div>}

            {taskList.length > 0 && (<Card className={styles.taskList}>
                {taskList.map((task, index) => (
                    <div key={index}>
                        {`Task: ${task.title} - Priority: ${task.priority}`}
                    </div>
                ))}
            </Card>)}
        </div>
    )
}

export default StateHookClient