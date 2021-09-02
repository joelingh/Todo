import React from 'react'

export default function Todo({todo, toggleTodo}) {
    function handleToggleTodo(id) {
        toggleTodo(id)
    }

    return (
        <div>
            <span>{todo.name}</span>
            <input type="checkbox" checked={todo.complete} onChange={()=> handleToggleTodo(todo.id)}/>
        </div>
    )

    
}