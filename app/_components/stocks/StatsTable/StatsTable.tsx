"use client";

import styles from "./StatsTable.module.scss";
import { StockPoint } from "../data";

type Props = {
    data: StockPoint[];
};

export default function StatsTable({ data }: Props) {
    if (!data.length) return null;

    const prices = data.map(d => d.price);

    const stats = {
        Open: prices[0],
        High: Math.max(...prices),
        Low: Math.min(...prices),
        Close: prices[prices.length - 1],
    };

    return (
        <div className={styles.grid}>
            {Object.entries(stats).map(([label, value]) => (
                <div key={label} className={styles.card}>
                    <span>{label}</span>
                    <strong>₹{value}</strong>
                </div>
            ))}
        </div>
    );
}
