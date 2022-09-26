import React, { useState, useEffect, useRef } from "react";


function TodoForm(props) {
  const url = "https://assets.breatheco.de/apis/fake/todos/user/areandd";
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = todo => {
    if (todo === '') {
      return;
    }
    // setTodos([...todos, {label:todo, done:false}]);
    updateTodos([...props.todos, {label:todo, done:false}]);
  };

  const updateTodos = (data) => {
    fetch(url, {
    method: 'PUT', // or 'POST'
    body: JSON.stringify(data), // data can be a `string` or  an {object} which comes from somewhere further above in our application
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
  })
  .then(response => props.func(response))
  .catch(error => console.error(error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <></>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
