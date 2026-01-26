'use client'
import { useThemeStore } from '@/context/store'

const ZustandCounterDisplay = () => {
    const counter = useThemeStore((state) => state.counter)
    return (
        <div>ZustandCounterDisplay: {counter}</div>
    )
}

export default ZustandCounterDisplay