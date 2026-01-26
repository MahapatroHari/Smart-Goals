"use client";
import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  counter: number;
  incrementCounter: () => void;
  decrementCounter?: () => void;
  resetCounter?: () => void;
}

const ThemeContext = createContext<ThemeContextType>(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [counter, setCounter] = useState<number>(0);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, counter, incrementCounter, decrementCounter, resetCounter }}>
      <div className={`app-container theme-${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};