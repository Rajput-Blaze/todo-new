import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Addnotes = (props) =>{
               const deleteNote = () =>{
                   props.deleteitem(props.id);
               }
               return <>
               <div className="container">
                  <div className="row">
                  <div className="col">
                   <div className="notes_div">
                       <h1>{props.title}</h1>
                       <p>{props.content}</p>
                       <button><FontAwesomeIcon icon={faTrashAlt} onClick={deleteNote} /></button>
                   </div>
                   </div>
                </div>
            </div> 
               </>
}

export default Addnotes;