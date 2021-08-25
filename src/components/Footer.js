import React, { useEffect } from "react";

const Footer = ({ filter, setFilter, setTodos, todos, count, setCount }) => {
  useEffect(() => {
    todos.reduce((setCount, count, i) => {
      return todos[i].isComplete ? null : setCount(count + 1);
    }, count);
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].isComplete === false) {
    //     setCount(count + 1);
    //   }
    // }
  }, []);
  //TODO: fix count state using reduce function
  const clearCompleted = () => {
    setTodos(
      todos.filter((el) => {
        if (el.isComplete === false) {
          setCount(count - 1);
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
