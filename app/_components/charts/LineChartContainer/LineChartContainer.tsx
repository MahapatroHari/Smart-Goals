'use client';
import { useState } from 'react';
import styles from './LineChartContainer.module.scss';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Colors
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Colors
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Chart defaults configuration
ChartJS.defaults.borderColor = '#66666621';
ChartJS.defaults.color = '#000';

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Monthly Sales Report',
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    },
    interaction: {
        intersect: false,
    },
};

export const data2024 = {
    labels,
    datasets: [
        {
            label: 'Monthly Revenue - 2024',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 5,
            backgroundColor: (context: { chart: ChartJS }) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) {
                    return null;
                }
                const gradient = ctx.createLinearGradient(
                    0,
                    chartArea.bottom,
                    0,
                    chartArea.top
                );
                gradient.addColorStop(0.7, 'rgba(53, 162, 235, 0.5)');
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                return gradient;
            },
        },
    ],
};

export const data2025 = {
    labels,
    datasets: [
        {
            label: 'Monthly Revenue - 2025',
            data: [90, 75, 60, 95, 88, 70, 50],
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 5,
            backgroundColor: (context: { chart: ChartJS }) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) {
                    return null;
                }
                const gradient = ctx.createLinearGradient(
                    0,
                    chartArea.bottom,
                    0,
                    chartArea.top
                );
                gradient.addColorStop(0.7, 'rgba(255, 99, 132, 0.5)');
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
                return gradient;
            },
        },
    ],
};

const LineChartContainer = () => {
    const [selectedYear, setSelectedYear] = useState<'2024' | '2025'>('2025');

    const getCurrentChartData = () => {
        return selectedYear === '2024' ? data2024 : data2025;
    };

    const handleYearChange = (year: '2024' | '2025') => {
        setSelectedYear(year);
    };


    return (
        <div className={`container ${styles.lineChartContainer}`}>
            <h2>Line Graph</h2>
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
            <Line className={styles.chart} options={options} data={getCurrentChartData()} />
        </div>
    )
}

export default LineChartContainer