'use client';
import { useState, useMemo } from 'react';
import styles from './MemoHookClient.module.scss';

const MemoHookClient = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn useMemo', done: true },
        { id: 2, title: 'Learn useCallback', done: false },
        { id: 3, title: 'Build Project', done: false },
        { id: 4, title: 'Review Code', done: true },
    ]);
    const [filter, setFilter] = useState('all');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const getFilteredTasks = (tasks: any[], filter: string) => {
        console.log("⚠️ Expensive Filter Running...");
        const start = performance.now();
        while (performance.now() - start < 100) { }

        switch (filter) {
            case 'active': return tasks.filter(t => !t.done);
            case 'completed': return tasks.filter(t => t.done);
            default: return tasks;
        }
    };

    const visibleTasks = useMemo(() => {
        return getFilteredTasks(tasks, filter);
    }, [tasks, filter]);

    return (
        <div className={`${styles.memoHookClient} ${isDarkMode ? styles.dark : ''}`}>
            <h2>To-Do List (useMemo)</h2>

            <div className={styles.controlsContainer}>
                <button onClick={() => setIsDarkMode(!isDarkMode)} className={styles.actionButton}>
                    Toggle Theme ({isDarkMode ? 'Dark' : 'Light'})
                </button>
                <div>
                    {['all', 'active', 'completed'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={styles.actionButton}
                            disabled={filter === f}
                            style={{ marginLeft: '10px' }}
                        >
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.listContainer}>
                {visibleTasks.map((task) => (
                    <div key={task.id} className={`${task.done ? styles.doneTask : ''} ${styles.taskItem}`}>
                        <span>{task.title}</span>
                        <span>{task.done ? "✅" : "⏳"}</span>
                    </div>
                ))}
            </div>

            <p className={styles.note}>
                Open Console: Toggling "Theme" should NOT trigger "Expensive Filter Running".
            </p>
        </div>
    );
};

export default MemoHookClient;