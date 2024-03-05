import {useState} from "react"
function Todo(){
    const [list, setlist ]= useState([{id:1,activity:"apple"},{id:2,activity:"orange"}])
    const [newitem, setnewitem] = useState("")
    function handleDelete(removeid){
        var temparr = list.filter(function (item){
            if (item.id === removeid)
            {
                return false
            } else {
                return true
            }
        })
        setlist(temparr)
    }
    function handleChange(evt){
        setnewitem(evt.target.value)
    }
    function addelement(){
        setlist([...list,{id:list.length+1,activity:newitem}])
    }
    return(
        <>
            <h1>To-Do List</h1>
            <input value={newitem} onChange={handleChange} />
            <button onClick={addelement}>Add</button>
            <ul>
                {
                    list.map(function (item){
                        return <li>{item.activity} <button onClick={()=>{handleDelete(item.id)}}>Delete</button></li>
                        }
                    )
                }
            </ul>
        </>
    )
}
export default Todo