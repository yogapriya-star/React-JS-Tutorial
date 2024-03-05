import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from "react"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Colorchange(){
    const [colorst,setcolorst] = useState(false)
    const handleChange = ()=>{
        setcolorst(!colorst)
    }
    return(
        <>
            <div style={{backgroundColor:colorst?"red":"green",height:"100px",width:"100px"}}></div>
            <button onClick={handleChange}>Change</button>
        </>
    )
}

root.render(
<Colorchange></Colorchange>
);

