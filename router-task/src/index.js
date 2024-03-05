import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
function Home(){
    return(<h1>Home</h1>)
}
function About(){
    return(<h1>About</h1>)
}
root.render(
    <div>
        <BrowserRouter>
            <nav>
                <Link to={"/home"}>Home</Link>
                {" "}
                <Link to={"/about"}>About</Link>
            </nav>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
);

