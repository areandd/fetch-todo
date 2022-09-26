import React, { useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const url = "https://assets.breatheco.de/apis/fake/todos/user/areandd";
  

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




  console.log(todos);

  return (
    <>
      <h1>todo list</h1>
      <TodoForm todos={todos} func={setTodos} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;
