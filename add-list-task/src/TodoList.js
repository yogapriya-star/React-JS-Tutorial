import {useContext} from "react";
import {ArrContext} from "./ArrContextProvider";

function TodoList(){
    const {activityArr} = useContext(ArrContext)

    return(
        <div>
            {
                activityArr.map(function(item){
                    return <h1>{item}</h1>
                })
            }
        </div>

    )
}
export default TodoList