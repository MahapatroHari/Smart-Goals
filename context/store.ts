import { create } from "zustand";

interface ThemeState {
    counter: number;
    incrementCounter: () => void;
    decrementCounter: () => void;
    resetCounter: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    counter: 0,
    incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decrementCounter: () => set((state) => ({ counter: state.counter - 1 })),
    resetCounter: () => set({ counter: 0 }),
}));