import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        if (e.target.textContent.includes("Increment")) {
            setCount((prev) => prev + 1);
        } else if (e.target.textContent.includes("Decrement")) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl">Counter App</h1>
            <section className="m-4">Count: {count}</section>
            <div className="flex gap-4 m-4">
                <button
                    onClick={handleClick}
                    className="px-2 py-2 border cursor-pointer bg-green-400 rounded-md"
                >
                    Increment
                </button>
                <button
                    onClick={handleClick}
                    className="px-2 py-2 border cursor-pointer bg-red-400 rounded-md"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default App;
