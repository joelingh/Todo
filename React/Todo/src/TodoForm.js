import React from 'react'

export default function TodoForm() {
    return (
        <div>
            <label>What is your todo list?</label>
            <input placeholder="todo"></input>
            <button>Submit</button>
            <button>Clear all</button>
        </div>
    )
}