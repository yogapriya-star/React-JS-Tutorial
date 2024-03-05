import {useEffect, useState} from "react"

function Counter(){
    const [count,setcount] = useState(0)
    useEffect(function (){
        console.log("Mounted")
        return(function(){
            console.log("Un Mount")
        })
    },[count])
    function handlecount(){
        setcount(count+1)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={handlecount}>Add</button>
        </>
    )
}
export default Counter