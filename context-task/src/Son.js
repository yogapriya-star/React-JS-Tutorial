import {useContext} from "react";
import {NameContext} from "./App";

function Son() {
    const data = useContext(NameContext)
    return (
        <h1>
            My name is {data.name}
        </h1>
    );
}

export default Son;
