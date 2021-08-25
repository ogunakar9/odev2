const ListContent = ({ todos }) => {
  // This section should be hidden by default and shown when there are todos
  return (
    todos.length !== 0 && (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo, idx) => {
            return (
              <li key={idx}>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo}</label>
                  <button className="destroy" />
                </div>
              </li>
            );
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
