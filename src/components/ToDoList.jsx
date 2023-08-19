import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";
const ToDoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const inputEvent = (event) => {
    setInput(event.target.value);
  };
  const listItems = () => {
    if (input !== "") {
      setItems((preVal) => {
        return [...preVal, input];
      });
    }
    setInput("");
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add a Items"
            value={input}
            onChange={inputEvent}
          />
          <Button onClick={listItems} color="primary" variant="contained">
            <Add />
          </Button>
          <ol>
            {items.map((itemVal, index) => {
              return (
                <ToDoLists
                  item={itemVal}
                  key={index}
                  id={index}
                  delete={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
