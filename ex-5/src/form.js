import {useState} from "react"

function Form(){
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [result, setResult] = useState("Result")
    function handleFname(evt){
        setfname(evt.target.value)
    }
    function handleLname(evt){
        setlname(evt.target.value)
    }

    function handleResult(evt){
        evt.preventDefault()
        setResult(fname+" "+lname)
    }

    return(
        <>
            <form>
                <input value={fname} onChange={handleFname}/>
                <br />
                <input value={lname} onChange={handleLname}/>
                <br />
                <input type="submit" onClick={handleResult} />
            </form>
            <h1>{result}</h1>
        </>
    )
}

export default Form