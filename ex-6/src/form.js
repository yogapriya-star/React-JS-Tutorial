import {useState} from "react"
import Result from "./result"

function Form(){
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [result, setResult] = useState("Result")
    const handleFname=(evt)=>{
        setfname(evt.target.value)
    }
    const handleLname=(evt)=>{
        setlname(evt.target.value)
    }

    const handleResult=(evt)=>{
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
            <Result result = {result}></Result>
        </>
    )
}

export default Form