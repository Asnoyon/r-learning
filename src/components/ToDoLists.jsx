import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const ToDoLists = (props) => {
  return (
    <div className="todo_style">
      <DeleteIcon
        onClick={() => props.delete(props.id)}
        className="deleteIcon"
      />

      <li>{props.item}</li>
    </div>
  );
};

export default ToDoLists;
