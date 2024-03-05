import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function TodoContainer(){
    const navigate = useNavigate()
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        }
    ])
    function logout(){
        navigate("/")
    }
    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}></AddTodoForm>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
            </div>
            <button  onClick={logout} className="bg-[#FCA201] w-24 p-1 m-5 rounded-md">Logout</button>
        </div>
    )
}
export default TodoContainer