import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
function App() {
    const navigate = useNavigate()
    const [user,setuser] = useState("")
    const [pass,setpass] = useState("")
    function handleuser(evt){
        setuser(evt.target.value)
    }
    function handlepass(evt){
        setpass(evt.target.value)
    }
    function check(){
        var logindetails = axios.post("http://localhost:3000/login",{"username":user,"password":pass})
        logindetails.then(function (data){
            if(data.data === true){
                navigate("/success")
            } else{
                navigate("/fail")
            }
        })
    }
  return (
      <div>
          <h1>Login Form</h1>
          <br/>
        <input onChange={handleuser} placeholder="username" name="username"/>
          <br/>
          <br/>
        <input onChange={handlepass} placeholder="password" name="password"/>
          <br/>
          <br/>
        <button onClick={check}> Login </button>
      </div>
  );
}

export default App;
