// General imports
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
// Shards React
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

// Components
import Info from './Info';
import Buttons from './Buttons';
import TodoList from './TodoList';

// Shards Components
import { Navbar, NavbarBrand } from 'shards-react';

import './Todo.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos';
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));

const sampleItems = [
  { id: uuidv4(), name: 'learn React', complete: true }, 
  { id: uuidv4(), name: 'build a simple todo app', complete: true }, 
  { id: uuidv4(), name: 'deploy App to firebase hosting', complete: true }, 
  { id: uuidv4(), name: 'learn redux', complete: false }, 
  { id: uuidv4(), name: 'create a twitter clone', complete: false } 
]
/* localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(sampleItems)) */

function App() { 
  const [todos, setTodos] = useState([]); 

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos.length !== 0) { 
      setTodos(storedTodos);
    } 
    else { 
      setTodos(sampleItems);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]); 

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  } 

  function handleAddTodo(e) { 
    const todoName = todoNameRef.current.value;
    if (todoName === '') return;

    setTodos(prevTodos => {
      return [{ id: uuidv4(), name: todoName, complete: false }, ...prevTodos] 
    });
    todoNameRef.current.value = null;
  }  

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  } 

  return (
    <> 
      <Navbar type="dark" theme="primary">
        <NavbarBrand> 
          <strong>React Todos App</strong>
        </NavbarBrand>
      </Navbar>
      <Info todosQty={todos.filter(todo => !todo.complete).length}></Info> 
      <Buttons todoNameRef={todoNameRef} handleAddTodo={handleAddTodo} handleClearTodos={handleClearTodos}></Buttons>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>  
    </>
  );
}  

export default App;
