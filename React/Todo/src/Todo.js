import React from 'react'

export default function Todo({todo}) {

    return (
        <div>
            <span>{todo}</span>
            {/* <input type="checkbox" checked={todo}/> */}
        </div>
    )

    
}