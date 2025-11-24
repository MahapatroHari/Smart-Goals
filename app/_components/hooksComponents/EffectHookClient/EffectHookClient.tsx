'use client'
import { useEffect, useState } from 'react';
import styles from './EffectHookClient.module.scss';
import Card from '../../Card/Card';

const EffectHookClient = () => {
    const [users, setUsers] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();

                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.effectHookClient} style={{ padding: '20px' }}>
            <h2>users Profile</h2>

            {isLoading ? (
                <p>Loading data...</p>
            ) : (
                <div className={styles.usersContainer}>
                    {users && users.map((user: any) => (
                        <Card key={user.id} className={styles.userCard}>
                            <h3>{user.name}</h3>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default EffectHookClient;