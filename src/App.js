import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (!task) return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>✅ Simple To-Do App</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => removeTodo(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
