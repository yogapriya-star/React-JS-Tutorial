import React from 'react';
import ReactDOM from 'react-dom/client';
import  { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function ChangeName(){
    var [myname, setmyname] = useState("John")
    function change(){
        setmyname("Mike")
    }

    return(
        <div>
            <h1>{myname}</h1>
            <button onClick={change}>Change</button>
        </div>
    )
}

root.render(
<ChangeName />
);
