import {useState} from "react"
function ListItem(props){
    const [checked, setchecked] = useState(false)
    const handleChange =()=>{
        setchecked(!checked)
    }

    return(
        <>
            <div>
                <input onChange={handleChange} type="checkbox"/>
                <span style={{textDecoration:checked?"line-through":"none"}}>{props.activity}</span>
            </div>
        </>
    )
}
export default ListItem