import { useState } from "react";


export function Counter() {
    const [count, setCounter] = useState(0);

    function handleClick(){
        setCounter(currentCount=> currentCount + 1);
    }

    return (
        <div onClick={handleClick}>{count}</div>
    );
}