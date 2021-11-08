import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDolist = (props) =>{
   const removeItem=(index)=>{
        props.updata((todoitem) => {
        return todoitem.filter((arrayelem, id) => {
          return id !== index;
        });
      });
       
    }
          return <>
           <div className='todo_style'>
          
           <li>
           <span className='iconClass mr' 
           onClick={() => removeItem(props.keyy)}
        >
                <FontAwesomeIcon icon={faTrash} />
           </span>
               {props.text}  </li>
           </div>
           </>
}

export default ToDolist;