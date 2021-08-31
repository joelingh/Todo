
import React, { useEffect, useRef, useState } from 'react';

import TodoForm from './TodoForm';
import TodoLists from './TodoLists'


function App() {

  // get data from data.json in another file
  const [todos, setTodos ] = useState([]);
  const inputRef = useRef();

  function addTodo() {
    const input = inputRef.current.value;
    console.log(input)
    if(input === "") return 
    setTodos(prevTodo=> {
      return [...prevTodo, { name:input, complete:false}]
    })
    inputRef.current.value = null;
    console.log(todos)
  }

  function clearAllTodo() {
    setTodos([]);
  }


  


  return (
    <>
      <label>What is your todo list?</label>
      <input ref={inputRef} type="text" placeholder="todo" ></input>
      <button onClick={addTodo}>Submit</button>
      <button onClick={clearAllTodo}>Clear all</button>
      {/* <span>{inputRef.current}</span> */}
    <TodoLists todos={todos}></TodoLists>
    </>
  );
}

export default App;
