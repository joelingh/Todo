import React from 'react'

import Todo from "./Todo"

export default function ({todos}) {
    return (
        
            todos.map(todo => {
                return <Todo key={todo.name} todo={todo.name}></Todo>
            })
    
    )
}