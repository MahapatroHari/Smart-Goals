'use client';
import { useReducer } from 'react';

function reducer(count, action) {
    if (action.type === "increment") {
        return count + 1;
    }
    if (action.type === "decrement") {
        return count - 1;
    }
    if (action.type === "increment-ten") {
        return count + 10;
    }
    if (action.type === "decrement-ten") {
        return count - 10;
    }
    if (action.type === "reset") {
        return 0;
    }
    return count;
}


const page = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div>Use Reducer</div>
            <div>Count: {count}</div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => dispatch({ type: "increment" })} style={{ padding: '10px' }}>
                    +
                </button>
                <button onClick={() => dispatch({ type: "increment-ten" })} style={{ padding: '10px' }}>
                    +10
                </button>


                <button onClick={() => dispatch({ type: "reset" })} style={{ padding: '10px' }}>
                    Reset
                </button>

                <button onClick={() => dispatch({ type: "decrement" })} style={{ padding: '10px' }}>
                    -
                </button>
                <button onClick={() => dispatch({ type: "decrement-ten" })} style={{ padding: '10px' }}>
                    -10
                </button>

            </div>
        </div>
    )
}

export default page