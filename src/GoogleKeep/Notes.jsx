import React from "react";
import { useState } from "react/cjs/react.development";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Addnotes from "./Addnotes";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";



const Notes = () =>{
    const [addItem,setAddItem] = useState([]);
    const addNote = (notes) =>{
        // alert("clicked");
          setAddItem((prevdata) =>{
              return [...prevdata,notes];
          })
        //   console.log(notes);
    }
    const onDelete = (id) =>{
        console.log(id);
                setAddItem((olddata) =>{
                   return olddata.filter((currdata,indx) =>{
                        return indx !== id;
                    })
                })
                // setAddItem((todoitem) => {
                //     return todoitem.filter((arrayelem, id) => {
                //       return id !== index;
                //     });
                //   });
    }
    return <>
    <Header />
    <Note passNote={addNote} />

   { addItem.map((val,index) =>{
        return <Addnotes key={index}
               id={index}
               title={val.title}
               content={val.content}
               deleteitem={onDelete}
               />
               
    })}
    <Footer />
    </>
}

export default Notes;