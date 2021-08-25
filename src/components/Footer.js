import React from "react";

const Footer = ({ filter, setFilter, setTodos, todos }) => {
  const clearCompleted = () => {
    setTodos(
      todos.filter((el) => {
        return el.isComplete === false;
      })
    );
  };

  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isComplete === false) {
      count++;
    }
  }

  return (
    <footer className="footer">
      {/*// This should be `0 items left` by default */}
      <span className="todo-count">
        <strong>{count} </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={() => setFilter(null)}
            className={filter === null ? "selected" : null}
          >
            All
          </button>
        </li>
        <li>
          <button onClick={() => setFilter("active")}>Active</button>
        </li>
        <li>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </li>
      </ul>

      {/*Hidden if no completed items are left ↓ */}
      <button onClick={() => clearCompleted()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
