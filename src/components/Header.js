import { useState, useEffect } from "react";

const Header = ({ setTodos, todos }) => {
  const [value, setValue] = useState({ name: "" });
  const [id, setId] = useState(0);

  useEffect(() => {
    setValue({ name: "" });
  }, [todos]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setId(id + 1);
  };

  const onChangeInput = (e) => {
    setValue({
      name: e.target.value,
      isComplete: false,
      id: id,
      isEditing: false,
    });
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
          value={value.name}
        />
      </form>
    </header>
  );
};

export default Header;
