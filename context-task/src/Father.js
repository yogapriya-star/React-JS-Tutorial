import {useContext} from "react";
import {NameContext} from "./App";

function Father() {
    const data = useContext(NameContext)
    return (
        <h1>
            My son name is {data.name}
        </h1>
    );
}

export default Father;
