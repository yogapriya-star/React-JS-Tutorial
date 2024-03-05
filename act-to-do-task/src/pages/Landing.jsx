import {useLocation} from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";

function Landing(){
   const data =useLocation()
   return(
       <div className="bg-black p-16">
          <div className="bg-[#EFEFEF] p-10 border rounded-md">
             <Header username={data.state.user}></Header>
             <div className="flex justify-between gap-7 my-5 flex-wrap">
                <Card bgcolor={'#8272DA'} title={"23"} subtitle={"chennai"}></Card>
                <Card bgcolor={'#FD6663'} title={"February 6"} subtitle={"14:23:08"}></Card>
                <Card bgcolor={'#FCA201'} title={"Built Using"} subtitle={"React"}></Card>
             </div>
             <TodoContainer></TodoContainer>
          </div>
       </div>
   )
}
export default Landing