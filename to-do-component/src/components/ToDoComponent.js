import {useState, useEffect} from "react";
import axios from "axios";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(response.data.slice(0, 10));
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const addTodo = async () => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos",
                {
                    id: Math.floor(Math.random()*100)+11,
                    title: newTodo,
                    completed: false,
                },
            );
            setTodos([...todos, response.data]);
            setNewTodo("");
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    };

    const deleteToDo = async (id) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`,);
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    };

    return <div>
        <h1>To-Do-Components</h1>
        <div>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <p>{todo.title}</p>
                        <button onClick={()=>deleteToDo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" placeholder="Add a new todo" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    </div>
};

export default Todo;