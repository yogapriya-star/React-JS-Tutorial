import {useState} from "react"

function Form(){
    const [fnum, setfnum] = useState("")
    const [secnum, setsecnum] = useState("")
    const [result, setResult] = useState("Result")
    function handleFnum(evt){
        setfnum(evt.target.value)
    }
    function handleSecnum(evt){
        setsecnum(evt.target.value)
    }

    function handleResult(evt){
        evt.preventDefault();
        const num1 = parseInt(fnum, 10);
        const num2 = parseInt(secnum, 10);

        if (!isNaN(num1) && !isNaN(num2)) {
            setResult(`${num1} + ${num2} = ${num1 + num2}`);
        } else {
            setResult("Invalid input. Please enter valid numbers.");
        }
    }

    return(
        <>
            <form>
                <input type="number" value={fnum} onChange={handleFnum}/>
                <br />
                <input type="number" value={secnum} onChange={handleSecnum}/>
                <br />
                <input type="submit" onClick={handleResult} />
            </form>
            <h1>{result}</h1>
        </>
    )
}

export default Form