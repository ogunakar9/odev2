import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import ListContent from "./components/ListContent";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="todoapp">
        <Header setTodos={setTodos} todos={todos} />
        <ListContent
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          count={count}
          setCount={setCount}
        />
        <Footer
          filter={filter}
          setFilter={setFilter}
          setTodos={setTodos}
          todos={todos}
          count={count}
          setCount={setCount}
        />
      </div>
      <Info />
    </>
  );
}

export default App;
