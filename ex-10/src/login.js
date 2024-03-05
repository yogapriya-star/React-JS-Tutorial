import {useState} from "react"


function Login(){
    const [uname,setuname] = useState("")
    const [pass,setpass] = useState("")
    const [login,setlogin] = useState(false)

    const handlelogin=()=>{
        var tusername = "john"
        var tpass = "123@"
        if(tusername == uname && tpass==pass){
            setlogin(true)
        }
    }
    const handleuname=(evt)=>{
        setuname(evt.target.value)
    }
    const handlepass=(evt)=>{
        setpass(evt.target.value)
    }

    return(
        <>
            <h1>Login Form</h1>
            {
                login?<h1>Login Successfully</h1>:<div>
                    <input value={uname} onChange={handleuname} placeholder="Enter username"/> <br />
                    <input value={pass} onChange={handlepass} placeholder="Enter password"/> <br />
                    <button onClick={handlelogin}>Login</button>
                </div>
            }
        </>
    )
}
export default Login