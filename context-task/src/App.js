import Father from "./Father";
import Son from "./Son";
import {createContext} from "react";

const NameContext = createContext()
function App() {
    var myname ="John"
  return (
      <NameContext.Provider value={{"name":myname}}>
          <Father></Father>
          <Son></Son>
      </NameContext.Provider>
  );
}

export default App;
export {NameContext}
