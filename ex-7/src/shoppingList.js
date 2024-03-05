import {useState} from "react"
const ShoppingList=()=>
{
    const [mylist,setmylist] = useState(["Tomato","Potato","Shirt","Pant","Fruit"])
    const [item,setItem] = useState("")
    const handleChange =(evt)=>{
        setItem(evt.target.value)
    }
    const handleAdd=()=>{
        setmylist([...mylist,item])
        setItem("")
    }
    return(
        <>
            <h1>Shopping List</h1>
            <input value={item} onChange={handleChange} placeholder="Enter your list" />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {mylist.map(function (item){
                    return <li>{item}</li>
                })}
            </ul>
        </>
    )
}
export default ShoppingList