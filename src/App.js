import React, { useState }from 'react'

function App() {
  const [list, setlist] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    // add the todo to the list
    setlist([...list, newTodo]);

    //clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out too do with the id
    const newList = list.filter((todo) => todo.id !== id);

    setlist(newList);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
