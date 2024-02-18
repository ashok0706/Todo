'use client';
import { useState } from 'react';
import Style from './todo.module.css';

function page() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const handleInputChange = (event) => {
    setInputTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputTodo]);
    setInputTodo('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditTodo(todos[index]);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
    //   setEditTodo('');
  };

  return (
    <div className={Style.container}>
      <div className={Style.title}>My Todos</div>
      <div className={Style.inputText}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={inputTodo}
          onChange={handleInputChange}
        ></input>
        <button className={Style.addButton} onClick={() => handleAddTodo()}>
          Save
        </button>
      </div>
      <ul className={Style.todoList}>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox"></input>
            <div onClick={() => editingIndex === handleEditTodo(index)}>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className={Style.editInput}
                />
              ) : (
                todo
              )}
            </div>

            {editingIndex === index && (
              <button
                className={Style.addButton}
                onClick={() => handleUpdateTodo()}
              >
                Save
              </button>
            )}
            {/* <button
              className={Style.editButton}
              onClick={
                () => handleUpdateTodo()
              }
            >
              Save
            </button> */}
            <button
              className={Style.deleteButton}
              onClick={() => handleDeleteTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
