import ThemeCardwContextAPI from "@/app/_components/zustand/ThemeCardwContextAPI/ThemeCardwContextAPI"
import ContextApiCounterDisplay from "@/app/_components/zustand/ContextApiCounterDisplay/ContextApiCounterDisplay"
import ContextApiCounterControls from "@/app/_components/zustand/ContextApiCounterControls/ContextApiCounterControls"


const page = () => {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <h1 style={{ marginBottom: "50px" }}>Context API Examples</h1>
            <h2 style={{ marginBottom: "30px" }}>Example 01: Theme Example with Context API</h2>
            <ThemeCardwContextAPI />

            <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>Example 02: Counter Example with Context API</h2>
            <p>The below is a counter implementation, but here it uses Context API. The number and buttons are different components, yet they still share the state through Context API.</p>
            <ContextApiCounterDisplay />
            <ContextApiCounterControls />

        </div>
    )
}

export default page