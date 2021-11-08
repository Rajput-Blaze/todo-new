import React from "react";
import { useState } from "react/cjs/react.development";
import ToDolist from "./ToDolist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () =>{
             const [item1,setitem] = useState(" ");
             const [displayitem,setdisplayitem] = useState([]);
             const accessvalue = (get) =>{
                setitem(get.target.value);
             }
             const ditems = () => {
                //  if(item1){
                //      alert("Please input some value to add Todo !")
                //  }else{
                    if(item1 == " ")
                    {
                        alert("enter the items in the list");
                    }
                    else{
                    setdisplayitem([...displayitem,item1]);
                    setitem(" ");
                    }
                //  }
               
                // setdisplayitem(listitems =>{
                //        [...listitems,...item1];ruk abhi 2 min
                //    });
                // 
             }
             return ( <> 
                  <div className="main_div">
                      <div className="center_div">
                      <br />
                          <h1>ToDo List</h1>
                          <br />
                          <input type="text" placeholder="add item" value={item1} onChange={accessvalue}></input>
                          <button onClick={ditems}><FontAwesomeIcon icon={faPlus} color="green"/></button>
                          <ol>
                          {/*  */}
                             { displayitem.map((ownlist, id) =>
                            
                                 <ToDolist text={ownlist} keyy={id} updata={setdisplayitem}  />

                              )}
                          </ol>
                      </div>
                  </div>        
             </>
             );
}

export default App;