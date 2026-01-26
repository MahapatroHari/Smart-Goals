'use client'
import { useThemeStore } from "@/context/store"
import { useTheme } from "@/context/ThemeContext"

const ZustandCounterControls = () => {
    const { incrementCounter, decrementCounter, resetCounter } = useThemeStore();
    return (
        <div style={{ display: "flex", gap: "20px", fontSize: "24px", marginTop: "20px", cursor: "pointer" }}>
            <div onClick={incrementCounter}>+</div>
            <div onClick={resetCounter}>Reset</div>
            <div onClick={decrementCounter}>-</div>
        </div>
    )
}

export default ZustandCounterControls