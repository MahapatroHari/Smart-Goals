"use client";
import styles from './ThemeCardwContextAPI.module.scss'

import { useTheme } from "@/context/ThemeContext";
import "./ThemeCardwContextAPI.module.scss";

const ThemeCardwContextAPI = () => {
    const { theme, toggleTheme } = useTheme();
    console.log("ThemeCardwContextAPI Rendered");

    return (
        <div className={styles.themeCardwContextAPICard}>
            <h2>Current Theme: {theme.toUpperCase()}</h2>
            <p>This component is reacting to global state.</p>

            <button onClick={toggleTheme} className={styles.toggleBtn}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
};

export default ThemeCardwContextAPI;