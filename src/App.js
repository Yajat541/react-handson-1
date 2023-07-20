
import React,{ useState } from "react";
import FunCompo from "./HandsonOne/FunCompo";
import ClassCompo from "./HandsonOne/ClassCompo";
import './App.css'
function App() {
  const [fstate,setfstate] = useState(false);
  const [cstate,setcstate] =useState(false);

  return (
   <>
   <h1 className="heading">Style using functional and class component</h1>
    <div className="btn">
   <button onClick={()=>setfstate(!fstate)}>to see styling in functional component</button>
   <button onClick={()=>setcstate(!cstate)}>to see styling in class based component</button>
   </div >
   <div className="par">
   <div className="func">
    { fstate &&  <FunCompo/> }
    </div>
    
    <div className="cls">
    { cstate &&  <ClassCompo/>}
    </div>
    </div>
   </>
  );
}

export default App;
