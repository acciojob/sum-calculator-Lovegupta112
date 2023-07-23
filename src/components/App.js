
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const[number,setNumber]=useState(0);
  const[sum,setSum]=useState(0);

  useEffect(()=>{
   add();
  },[number]);

  function add(){

    console.log(number);
    setSum((sum)=>sum+number);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e)=>setNumber(parseInt(e.target.value))} value={number}/>
         <p>Sum: {sum}</p>
    </div>
  )
}

export default App;
