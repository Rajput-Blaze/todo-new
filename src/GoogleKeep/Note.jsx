import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react/cjs/react.development";

const Note = (props) =>{
            const [notes,setNotes] = useState(
                {
                    title:"",
                    content:""
                }
            )
            const Inputevent = (event) =>{
                    const {name,value} = event.target;
                    setNotes((prevalue) =>{
                         return { ...prevalue,
                                  [name] : value,
                     } })
            }
            const getEvent = () =>{
                   props.passNote(notes);
                   setNotes({
                    title:"",
                    content:""
                });
            }
            return <>
            <div className="center_div">
               <form>
                <input 
                 type="text" 
                 name="title"
                 value={notes.title}
                 onChange={Inputevent}
                 placeholder="title" 
                 autoComplete="off" 
                />
                <br />
                <br />
                <textarea 
                 rows="" cols="" 
                 name="content"
                 value={notes.content}
                 onChange={Inputevent}
                 placeholder="write a note.."
                 autoComplete="off">
                 </textarea>
                <br /><br /><br />
                <button type="button" onClick={getEvent}><FontAwesomeIcon icon={faPlusCircle} className="plus_sign"/></button>
                </form>
            </div>
            </>
}

export default Note;