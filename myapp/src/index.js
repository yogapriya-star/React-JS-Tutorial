import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import name from "./data"
import age from "./data"
import department from "./data"
import {salary} from "./data"

const root = ReactDOM.createRoot(document.getElementById('root'));
//TO ADD A STYLE

var myStyle = {
    color:"red",
    backgroundColor:"blue"
}

//Add Component
function Navbar(){
    return(
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}

//To pass variable using props

function One(){
    var num =67
    return(
        <div>
            <h1>Iam One</h1>
            <Two num={num}></Two>
        </div>
    )
}

function Two(num){
    return(
        <div>
            <h1>Iam Two</h1>
            <Three num = {num.num}></Three>
        </div>
    )
}

function Three(num){
    return(
        <div>
            <h1>Iam Three, I received the number is {num.num}</h1>
        </div>
    )
}


function NameOne(props){
    return(
        <div style = {{backgroundColor: "skyblue", padding:"10px", margin:"10px"}}>
            <h1>{props.myname}</h1>
            <p>{props.dept}</p>
        </div>
    )
}

var arr = ["John","Mike","Henry"]
var dept = ["CSE","ECE","EEE"]

root.render(
    <div>
        <Navbar></Navbar>
        <h1 style={myStyle}>Hello {name}!</h1>
        <p style={{color:"violet"}}>Age :  {age} <br></br>
            Salary :  {salary} <br></br>
            Department : {department}</p>
        <h2 style={{color:"green"}}>Welcome</h2>
        <h3 class="clr">Welcome</h3>
        <One></One>
        <About></About>

        {
            arr.map(function(item,index){
                return <NameOne myname={item} dept={dept[index]}></NameOne>
            })
        }

    </div>
);

