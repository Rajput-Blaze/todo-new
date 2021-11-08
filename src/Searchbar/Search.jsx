import React, { useState } from "react";
import Sresult from "./Sresult";


const Search = () =>{
             const [img,setImg] = useState(" ");
             const inputevent = (get) =>{
                 const data = get.target.value;
                 setImg(data);
                //  setImg("");
             }
             return <>
             <input type="text" value={img} placeholder="search anything" onChange={inputevent} />
             {img === " " ? null : <Sresult name={img} />}
             </>
}

export default Search;