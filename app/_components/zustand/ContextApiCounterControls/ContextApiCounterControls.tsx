'use client'
import { useTheme } from "@/context/ThemeContext"

const ContextApiCounterControls = () => {
    const { incrementCounter, decrementCounter, resetCounter } = useTheme();
    return (
        <div style={{ display: "flex", gap: "20px", fontSize: "24px", marginTop: "20px", cursor: "pointer" }}>
            <div onClick={incrementCounter}>+</div>
            <div onClick={resetCounter}>Reset</div>
            <div onClick={decrementCounter}>-</div>
        </div>
    )
}

export default ContextApiCounterControls