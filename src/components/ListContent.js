import { useState } from "react";
const ListContent = ({ todos, setTodos, filter }) => {
  // This section should be hidden by default and shown when there are todos

  const inputHandler = (idx) => {
    const { isComplete, id } = todos[idx];
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !isComplete,
          };
        }
        return item;
      })
    );
  };

  const inputHandleAll = () => {
    setTodos(
      todos.map((item) => {
        return {
          ...item,
          isComplete: !allChecked,
        };
      })
    );
    setAllChecked(!allChecked);
  };

  const editTodo = (idx) => {
    const { isEditing, id } = todos[idx];
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isEditing: !isEditing,
          };
        }
        return item;
      })
    );
  };

  const destroyTodo = (idx) => {
    const { id } = todos[idx];
    setTodos(todos.filter((item) => item.id !== id));
  };

  // const onSubmitForm = (e) => {
  //   e.preventDefault();
  //   setTodos([...todos, value]);
  //   setId(id + 1);
  // };
  //
  // const onChangeInput = (e) => {
  //   setValue({
  //     name: e.target.value,
  //     isComplete: false,
  //     id: id,
  //     isEditing: false,
  //   });
  // };
  //
  // const [value, setValue] = useState({ name: "" });
  // const [id, setId] = useState(0);

  // useEffect(() => {
  //   setValue({ name: "" });
  // }, [todos]);

  const [allChecked, setAllChecked] = useState(false);
  return (
    todos.length !== 0 && (
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={allChecked}
          onChange={() => inputHandleAll()}
        />
        <label htmlFor="toggle-all" onClick={() => inputHandleAll()}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {todos.map((todo, idx) => {
            let show = true;
            if (filter !== null) {
              //filter on
              if (
                (filter === "completed" && !todo.isComplete) ||
                (filter === "active" && todo.isComplete)
              ) {
                //pass
                show = false;
              }
            }
            //filter off
            return show ? (
              <li key={idx} className={todo.isComplete ? "completed" : null}>
                <div className="view">
                  {todo.isEditing ? null : (
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.isComplete}
                      onChange={() => inputHandler(idx)}
                    />
                  )}
                  <label
                    className={todo.isEditing ? "editor" : null}
                    onClick={() => editTodo(idx)}
                  >
                    {todo.name}
                  </label>
                  {todo.isEditing ? null : (
                    <button
                      onClick={() => {
                        destroyTodo(idx);
                      }}
                      className="destroy"
                    />
                  )}
                </div>
              </li>
            ) : null;
          })}
        </ul>
      </section>
    )
  );
};

export default ListContent;
