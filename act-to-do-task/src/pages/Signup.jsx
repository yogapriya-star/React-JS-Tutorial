import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signup(props){
    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ecpassword, setECpassword] = useState()
    const [rpassword, setPassword] = useState(true)

    const users = props.users
    const setusers = props.setusers

    function handleUInput(evt){
        setEusername(evt.target.value)
    }
    function handlePInput(evt){
        setEpassword(evt.target.value)
    }
    function handleCPInput(evt){
        setECpassword(evt.target.value)
    }
    function addUser(){
        if (epassword === ecpassword) {
            setusers([...users,{username:eusername,password:epassword}])
            setPassword(true);
            navigate("/")
        } else {
            console.log("Password Mismatch")
            setPassword(false)
        }
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">
                    Hey Hi
                </h1>
                {rpassword ? <p>Sign Up here :)</p> : <p className="text-red-400">Password is Mismatch!!</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input onChange={handleUInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"/>
                    <input onChange={handlePInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"/>
                    <input onChange={handleCPInput} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password"/>
                    <button  onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup