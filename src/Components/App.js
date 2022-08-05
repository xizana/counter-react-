import React from "react";

export default function App() {
    const [state, setState] = React.useState(0)


    function discrement() {
        setState(prevState => prevState - 1)
    }

    function increment() {
        setState(prevState => prevState + 1)
    }
    return (

        <div className="container">
            <button className="btn1" onClick={discrement}>-</button>

            <h2 className="display">{state}</h2>

            <button className="btn2" onClick={increment}>+</button>
        </div>
    )
}