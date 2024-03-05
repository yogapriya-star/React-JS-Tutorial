import {useState} from "react"
import Counter from "./Counter"
function App(){
    const [flag,setflag] = useState(true)
    function handleremove(){
        setflag(!flag)
    }
    return(
        <>
            {
                flag?<Counter/>:""
            }
            <button onClick={handleremove}>Remove/Add</button>
        </>
    )
}
export default App