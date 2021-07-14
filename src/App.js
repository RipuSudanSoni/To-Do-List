import React, { useState } from "react";
import ToDoLists from "./Components/ToDoLists.js";
import "./App.css";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const addItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");

  };
  const deleteItem = (id) => {
    console.log("deleted");

    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  
    return(
      <>
        <div className = "main_div">
          <div className = "center_div">
            <br />
            <h1> To DO List </h1>
            <br />
            <input type="text" placeholder="Add a Items" onChange={itemEvent}
             value = {inputList} />
            <button onClick = {addItem}> + </button>
            <ol>
              {/* <li>{inputList}</li> */}
          
              {Item.map((itemval, index) => {
                return (
                <ToDoLists 
                  key = {index}
                  id = {index}
                  text = {itemval}
                  onSelect = {deleteItem} />
                );
              })}
              

            </ol>
          </div>
        </div>
      </>
    );
}

export default App;