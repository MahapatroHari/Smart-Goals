'use client';
import { useState } from 'react';
import styles from './DoughnutChartContainer.module.scss';
import Card from '../../Card/Card';
import { Doughnut, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend, Colors);


export const salesData = [
    { id: 1, category: "Electronics", region: "Asia", sales: 12000, status: "Completed", date: "2024-01-15" },
    { id: 2, category: "Clothing", region: "Africa", sales: 5000, status: "Pending", date: "2024-02-10" },
    { id: 3, category: "Home & Garden", region: "USA", sales: 8000, status: "Completed", date: "2024-03-05" },
    { id: 4, category: "Electronics", region: "Africa", sales: 15000, status: "Cancelled", date: "2024-04-01" },
    { id: 5, category: "Clothing", region: "Europe", sales: 3000, status: "Completed", date: "2024-05-20" },
    { id: 6, category: "Home & Garden", region: "Asia", sales: 7000, status: "Pending", date: "2024-06-11" },
    { id: 7, category: "Electronics", region: "USA", sales: 9000, status: "Completed", date: "2024-07-03" },
    { id: 8, category: "Clothing", region: "Asia", sales: 4500, status: "Completed", date: "2024-08-19" },
    { id: 9, category: "Home & Garden", region: "Africa", sales: 6000, status: "Cancelled", date: "2024-09-08" },
    { id: 10, category: "Electronics", region: "Europe", sales: 11000, status: "Pending", date: "2024-10-14" },
    { id: 11, category: "Sports", region: "South America", sales: 7000, status: "Completed", date: "2024-11-02" },
    { id: 12, category: "Beauty", region: "Australia", sales: 4500, status: "Pending", date: "2024-12-21" },
    { id: 13, category: "Toys", region: "Canada", sales: 3200, status: "Completed", date: "2025-01-08" },
    { id: 14, category: "Automotive", region: "Middle East", sales: 15000, status: "Completed", date: "2025-01-22" },
    { id: 15, category: "Sports", region: "Asia", sales: 6500, status: "Cancelled", date: "2025-02-17" },
    { id: 16, category: "Beauty", region: "Europe", sales: 4800, status: "Completed", date: "2025-03-06" },
    { id: 17, category: "Toys", region: "USA", sales: 5200, status: "Pending", date: "2025-03-29" },
    { id: 18, category: "Automotive", region: "Africa", sales: 13000, status: "Completed", date: "2025-04-12" },
    { id: 19, category: "Sports", region: "Australia", sales: 7200, status: "Pending", date: "2025-05-03" },
    { id: 20, category: "Beauty", region: "South America", sales: 3900, status: "Cancelled", date: "2025-05-27" },
];

const DoughnutChartContainer = () => {
    const [statusFilter, setStatusFilter] = useState("All");
    const [yearFilter, setYearFilter] = useState("All");



    const filteredData = salesData
        .filter(item => statusFilter === "All" || item.status === statusFilter)
        .filter(item => {
            if (yearFilter === "All") return true;

            const itemYear = new Date(item.date).getFullYear();

            return itemYear === Number(yearFilter);
        });


    const categoryTotals = {};
    const regionTotals = {};

    filteredData.forEach((item) => {
        categoryTotals[item.category] =
            (categoryTotals[item.category] || 0) + item.sales;
        regionTotals[item.region] =
            (regionTotals[item.region] || 0) + item.sales;
    });

    const doughnutChartData = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                label: "Sales by Category",
                data: Object.values(categoryTotals),
                borderWidth: 1,
                borderJoinStyle: 'round',
            },
        ],
    };

    const pieChartData = {
        labels: Object.keys(regionTotals),
        datasets: [
            {
                label: "Sales by Region",
                data: Object.values(regionTotals),
                borderWidth: 1,
            },
        ],
    };

    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Sales Distribution by Category',
            },
        },
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Sales Distribution by Region',
            },
        },
    };




    return (
        <div className={`container ${styles.doughnutChartContainer}`}>
            <h2>Doughnut / Pie Charts</h2>

            <div className={styles.filtersWrapper}>
                {/* Status Filter */}
                <div className={styles.filter}>
                    <label>Status Filter:</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>

                {/* Year Filter */}
                <div className={styles.filter}>
                    <label>Year:</label>
                    <select
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                </div>
            </div>

            <div className={styles.chartsWrapper}>
                {/* Doughnut Chart */}
                <Card className={styles.chartContainer}>
                    <Doughnut data={doughnutChartData} options={doughnutChartOptions} className={styles.chart} />
                </Card>

                {/* Pie Chart */}
                <Card className={styles.chartContainer}>
                    <Pie data={pieChartData} options={pieChartOptions} className={styles.chart} />
                </Card>
            </div>
        </div>
    );
};

export default DoughnutChartContainer;