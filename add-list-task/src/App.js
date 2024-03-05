import AddForm from "./AddForm";
import TodoList from "./TodoList";
import ArrContextProvider from "./ArrContextProvider";

function App() {
    return (
        <>
            <ArrContextProvider>
                <AddForm></AddForm>
                <TodoList></TodoList>
            </ArrContextProvider>
        </>
    );
}

export default App;

