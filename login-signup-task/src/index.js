import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import "./index.css"
import Landing from "./Landing";


const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
    const [users, setusers] = useState(
        [
            {
                username:"john",
                password:"123"
            }
        ]
    )
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login users={users}></Login>}></Route>
                    <Route path='/sign-up' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
                    <Route path='/landing' element={<Landing></Landing>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
root.render(
    <App></App>
);

