import React, { Fragment, useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoData } from './type';

const defaultTodos: TodoData[] = [
  { text: 'Take over the world', complete: false },
  { text: 'Create a React app with Typecript', complete: true },
  { text: 'Achieve all my hopes and dreams', complete: false },
];

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  // Load
  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTodos === null) return;
    setTodos(JSON.parse(storedTodos));
  }, []);

  // Save
  useEffect(() => {
    todos !== defaultTodos &&
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const addNewTodo = (text: string) => {
    setTodos([...todos, { text, complete: false }]);
  };

  const toggleTodo = (todoToToggle: TodoData) => {
    const newTodos = todos.map((todo) => {
      if (todo === todoToToggle) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    });
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoForm addNewTodo={addNewTodo} clearCompleted={clearCompleted} />
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </Fragment>
  );
}

export default App;
