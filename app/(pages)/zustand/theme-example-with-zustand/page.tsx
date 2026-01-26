import ZustandCounterDisplay from "@/app/_components/zustand/ZustandCounterDisplay/ZustandCounterDisplay"
import ZustandCounterControls from "@/app/_components/zustand/ZustandCounterControls/ZustandCounterControls"
import ThemeCardwZustand from "@/app/_components/zustand/ThemeCardwZustand/ThemeCardwZustand"

const page = () => {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <h1 style={{ marginBottom: "50px" }}>Zustand Examples</h1>
            <h2 style={{ marginBottom: "30px" }}>Example 01: Theme </h2>
            <ThemeCardwZustand />
            <h2 style={{ marginBottom: "30px", marginTop: "30px" }}>Example 02: Counter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, illo?</p>
            <ZustandCounterDisplay />
            <ZustandCounterControls />
        </div>
    )
}

export default page