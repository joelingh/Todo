
import React, { useEffect, useRef, useState } from 'react';

import TodoForm from './TodoForm';
import TodoLists from './TodoLists'


function App() {

  // get data from data.json in another file
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(()=>{
    console.log(todos)
  }, [todos])

  function addTodo() {
    const input = inputRef.current.value;
    if(input === "") return 
    setTodos(prevTodo=> {
      if(prevTodo.length < 0){
        return [{ id: 1, name:input, complete:false}]
      }else {
        return [...prevTodo, { id: prevTodo.length-1 + 1, name:input, complete:false}]
      }
      
    })
    
    inputRef.current.value = null;
  }

  function clearAllTodo() {
    const clearCompletedTodo = todos.filter(todo => !todo.complete)
    setTodos(clearCompletedTodo);
  }

  function toggleTodo(id) {
    const copyTodos = [...todos]
    const todo = copyTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(copyTodos)
  }


  return (
    <>
      <label>What is your todo list?</label>
      <input ref={inputRef} type="text" placeholder="todo" ></input>
      <button onClick={addTodo}>Submit</button>
      <button onClick={clearAllTodo}>Clear Completed</button>
      <TodoLists todos={todos} toggleTodo={toggleTodo}></TodoLists>
      <p>{todos.filter(todo => !todo.complete).length} left to do </p>
    </>
  );
}

export default App;
