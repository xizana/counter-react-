import React, { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0)


    function discrement() {
        setCounter(prevState => prevState - 1)
    }

    function increment() {
        setCounter(prevState => prevState + 1)
    }
    return (

        <div className="container">
            <button className="btn1" onClick={discrement}>-</button>

            <h2 className="display">{counter}</h2>

            <button className="btn2" onClick={increment}>+</button>
        </div>
    )
}
