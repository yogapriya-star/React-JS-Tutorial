import {useState, useContext} from "react";
import {ArrContext} from "./ArrContextProvider";

function AddForm(){
    const [evalue, setEvalue] = useState("")
    const {activityArr, setActivityArr} = useContext(ArrContext)

    function handleChange(evt){
        setEvalue(evt.target.value)
    }

    function updateArr(){
        setActivityArr([...activityArr, evalue])
    }

    return(
        <div>
            <input value={evalue} onChange={handleChange} />
            <button onClick={updateArr}>Add List</button>
        </div>

    )
}
export default AddForm