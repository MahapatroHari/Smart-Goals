'use client';
import { useState } from 'react';
import styles from './BarChartContainer.module.scss'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
    // maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Monthly Sales Report',
        },
    },
};

export const data2024 = {
    labels,
    datasets: [
        {
            label: 'Monthly Revenue - 2024',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            hoverBorderWidth: 1,
            hoverBorderColor: 'rgba(0, 0, 0, 1)',
            hoverBackgroundColor: 'rgba(53, 162, 235, 1)',
            borderRadius: 10,
        },
    ],
};

export const data2025 = {
    labels,
    datasets: [
        {
            label: 'Monthly Revenue - 2025',
            data: [90, 75, 60, 95, 88, 70, 380],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            hoverBorderWidth: 1,
            hoverBorderColor: 'rgba(0, 0, 0, 1)',
            hoverBackgroundColor: 'rgba(255, 99, 132, 1)',
            borderRadius: 10,
        },
    ],
};

const BarChartContainer = () => {
    const [selectedYear, setSelectedYear] = useState<'2024' | '2025'>('2024');

    const getCurrentChartData = () => {
        return selectedYear === '2024' ? data2024 : data2025;
    };

    const handleYearChange = (year: '2024' | '2025') => {
        setSelectedYear(year);
    };


    return (
        <div className={`container ${styles.barChartContainer}`}>
            <h2>Bar Graph</h2>
            <div className={styles.filterBar}>
                <button
                    onClick={() => handleYearChange('2024')}
                    disabled={selectedYear === '2024'}
                    className={styles.button}
                >
                    View 2024
                </button>
                <button
                    onClick={() => handleYearChange('2025')}
                    disabled={selectedYear === '2025'}
                    className={styles.button}
                >
                    View 2025
                </button>
            </div>
            <Bar className={styles.chart} options={options} data={getCurrentChartData()} />
        </div>
    )
}

export default BarChartContainer