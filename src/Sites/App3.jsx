import React,{ useState } from "react";

const App3 = () =>{
         const [num, setNum] = useState()
         return <>
                   <h1>Manees select {num}</h1>
                  <select value={num} onChange={(get) =>{setNum(get.target.value)}}>
                      <option value="1">1</option>
                      <option value="25">25</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select> 
               </>
}

export default App3;