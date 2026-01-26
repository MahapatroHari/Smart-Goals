'use client'
import { useTheme } from '@/context/ThemeContext'
import React from 'react'

const ContextApiCounterDisplay = () => {
    const { counter } = useTheme();
    return (
        <div><b>ContextApiCounterDisplay: {counter}</b></div>
    )
}

export default ContextApiCounterDisplay