import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './components/TodoList.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('source')
);