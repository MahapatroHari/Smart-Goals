"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler,
} from "chart.js";

import styles from "./StocksLineChart.module.scss";
import TimelineFilter from "../TimelineFilter/TimelineFilter";
import StatsTable from "../StatsTable/StatsTable";
import { StockPoint } from "../data";
import { options } from "../../charts/LineChartContainer/LineChartContainer";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler
);

const timelineMap: Record<string, number> = {
    "5D": 5,
    "1M": 30,
    "6M": 180,
    "1Y": 365,
    "MAX": Infinity,
};

function filterByTimeline(data: StockPoint[], days: number) {
    if (days === Infinity) return data;

    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    return data.filter(d => new Date(d.date) >= cutoff);
}

type Props = {
    data: StockPoint[];
};

export default function StocksLineChart({ data }: Props) {
    const [timeline, setTimeline] = useState("MAX");

    // 🔹 Derived data calculated directly
    const filteredData = filterByTimeline(data, timelineMap[timeline]);

    const chartData = {
        labels: filteredData.map(d => d.date),
        datasets: [
            {
                label: "Price",
                data: filteredData.map(d => d.price),
                borderColor: "#4ade80",
                backgroundColor: "rgba(74, 222, 128, 0.15)",
                tension: 0.3,
                fill: true,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "index" as const,
            intersect: false,
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `₹${ctx.parsed.y}`,
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { maxTicksLimit: 6 },
            },
            y: {
                grid: { color: "#e5e7eb" },
            },
        },
    };

    return (
        <div className={styles.stocksLineChart}>
            <div className={styles.left}>
                <div className={styles.chart}>
                    <Line data={chartData} options={options} />
                </div>
                <TimelineFilter value={timeline} onChange={setTimeline} />
            </div>
            <div className={styles.right}>
                <StatsTable data={filteredData} />
            </div>
        </div>
    );
}
