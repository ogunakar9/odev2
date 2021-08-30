import React from "react";

const Footer = ({ filter, setFilter, setTodos, todos, count }) => {
  const clearCompleted = () => {
    setTodos(
      todos.filter((el) => {
        if (el.isComplete === false) {
          return el;
        }
        return null;
      })
    );
  };

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
