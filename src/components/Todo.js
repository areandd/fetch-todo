import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";


const Todo = ({ todos, removeTodo }) => {

  return todos.map((todo, index) => (
    <div className="todo-row" >
      <div key={index} >
        {todo.label}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo)} className="delete-icon" />
      </div>
    </div>
  ));
};

export default Todo;
