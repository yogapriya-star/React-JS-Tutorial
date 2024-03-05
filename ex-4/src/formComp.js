import {useState} from "react"

function FormComp(){
    const [myname, setmyname] = useState("John")
    function handleChange(evt){
        setmyname(evt.target.value)
        console.log(myname)
    }

    return(
        <>
            <form>
                <input value={myname} onChange={handleChange}/>
            </form>
        </>
    )
}

export default FormComp