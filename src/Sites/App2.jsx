import React, { useEffect, useState } from "react";

const App2 = () =>{
            const [num,setnum] = useState(0);
            useEffect(() =>{
                // alert("clicked");
                document.title = `you ${num} times clicked `;
            })
            return <button onClick={() =>{
                          setnum(num+1);
            }}>click me {num}</button>
           
}

export default App2;