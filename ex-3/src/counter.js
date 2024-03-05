import  { useState } from 'react';

function Counter(){
    var [count, setCount] = useState(0)
    function increment(){
        var newCount = count+1
        setCount(newCount)
    }
    function decrement(){
        var newCount = count-1
        setCount(newCount)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter