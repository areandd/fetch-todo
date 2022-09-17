import React from 'react'


export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                 </div>
        </div>
    )
}