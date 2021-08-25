import { useState, useEffect } from "react";

const Header = ({ setTodos, todos }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [todos]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmitForm}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeInput}
          value={value}
        />
      </form>
    </header>
  );
};

export default Header;
