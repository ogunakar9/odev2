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

  return (
    todos.length !== 0 && (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
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
              <li key={idx}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => inputHandler(idx)}
                  />
                  <label>{todo.name}</label>
                  <button className="destroy" />
                </div>
              </li>
            ) : null;
          })}
          {/*<li className="completed">*/}
          {/*  <div className="view">*/}
          {/*    <input className="toggle" type="checkbox" />*/}
          {/*    <label>Learn JavaScript</label>*/}
          {/*    <button className="destroy" />*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <div className="view">*/}
          {/*    <input className="toggle" type="checkbox" />*/}
          {/*    <label>Learn React</label>*/}
          {/*    <button className="destroy" />*/}
          {/*  </div>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <div className="view">*/}
          {/*    <input className="toggle" type="checkbox" />*/}
          {/*    <label>Have a life!</label>*/}
          {/*    <button className="destroy" />*/}
          {/*  </div>*/}
          {/*</li>*/}
        </ul>
      </section>
    )
  );
};

export default ListContent;
