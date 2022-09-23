import React, { useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const url = "https://assets.breatheco.de/apis/fake/todos/user/areandd";
  
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


  useEffect(() => {
    const getTodos = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setTodos(data);
        console.log(todos);  
        });
    };
    getTodos();
  }, []);


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
