import React from "react";

const ToDoLists = (props) => {

    
    return(<>
        <div className = "todo_style">
            <i className="ri-delete-bin-6-line" onClick={()=> {
                props.onSelect(props.id);
            }} />
            <li> {props.text} </li>
        </div>
            

    </>); 
}

export default ToDoLists;