import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
    console.log(...todos);
  };
  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <>
      <h1>todo list</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;