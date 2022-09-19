import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";


const Todo = ({ todos, removeTodo }) => {

  return todos.map((todo) => (
    <div className="todo-row" >
      <div key={todo.id} >
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  ));
};

export default Todo;
