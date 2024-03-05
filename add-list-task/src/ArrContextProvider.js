import {useState, createContext} from "react";

const ArrContext = createContext()

function ArrContextProvider(data){
    const[activityArr, setActivityArr] = useState(["Apple","orange"])
    return(
        <ArrContext.Provider value={{activityArr, setActivityArr}}>
            {data.children}
        </ArrContext.Provider>
    )
}
export default ArrContextProvider
export {ArrContext}