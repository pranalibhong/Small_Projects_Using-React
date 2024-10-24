import React, { useState } from 'react'

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newtodo = {
        id: new Date().getTime(),
        text: inputValue,
      }
      setTodos([...todos, newtodo]);
      setInputValue('');
    }
  }

  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos)
  }

  const enterEditMode = (todo) => {
    setIsEditing(true);
    setInputValue(todo.text); // Populate input with current todo text
    setCurrentTodo(todo); // Store the current todo
  };
  const updateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? { ...todo, text: inputValue } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false); // Exit edit mode
    setInputValue(''); // Clear input field
    setCurrentTodo(null); // Clear current todo
  };


  return (
    <div className='todo-container'>
      <h2>ToDo List</h2>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}
            <button id="remove-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button id="remove-btn" onClick={() => enterEditMode(todo)}>Edit</button>

          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default ToDoList
