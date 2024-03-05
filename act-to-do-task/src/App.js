import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing";
import {useState} from "react";

function App(){
      const [users, setusers] = useState(
          [
              {
                  username:"john",
                  password:"123"
              }
          ]
      )
      return(
          <div>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<Login users={users}></Login>}></Route>
                      <Route path='/sign-up' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
                      <Route path='/landing' element={<Landing></Landing>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      )
}


export default App;
