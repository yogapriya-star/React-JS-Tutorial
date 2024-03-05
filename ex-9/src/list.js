import {useState} from "react"
import ListItem from "./Listitem"

function List(){
    const listact = ["Wake up at 7", "Go for a walk","Have an exercise"]
    return(
        <>
            <h1>List of Activities</h1>
            {
                listact.map(function (item){
                    return <ListItem activity ={item} />
                })
            }
        </>
    )
}
export default List