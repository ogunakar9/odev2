import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";
import ListContent from "./components/ListContent";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // console.log(todos);
  }, [todos]);

  return (
    <>
      <div className="todoapp">
        <Header setTodos={setTodos} todos={todos} />
        <ListContent todos={todos} />
        <Footer />
      </div>
      <Info />
    </>
  );
}

export default App;
