"use client";

import styles from "./TimelineFilter.module.scss";

const ranges = ["5D", "1M", "6M", "1Y", "MAX"] as const;

type Props = {
    value: string;
    onChange: (value: string) => void;
};

export default function TimelineFilter({ value, onChange }: Props) {
    return (
        <div className={styles.container}>
            {ranges.map(range => (
                <button
                    key={range}
                    className={value === range ? styles.active : ""}
                    onClick={() => onChange(range)}
                >
                    {range}
                </button>
            ))}
        </div>
    );
}
