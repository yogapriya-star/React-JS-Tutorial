import  { useState } from 'react';

function Random(){
    var [randomNumber, setRandomNumber] = useState(0)
    function generateRandom(){
        var newRandomNumber  = Math.floor(Math.random() * 10) + 1;
        setRandomNumber(newRandomNumber)
    }
    return (
        <div>
            <h1>{randomNumber}</h1>
            <button onClick={generateRandom}>Generate Number</button>
        </div>
    )
}

export default Random