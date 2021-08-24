import React from "react";
import Footer from "./components/Footer";
import './App.css';
import Header from "./components/Header";
import Info from "./components/Info";
import ListContent from "./components/ListContent";

function App() {
  return (
    <>
      <div className="todoapp">
        <Header />
        <ListContent />
        <Footer />
      </div>
      <Info />
    </>
  );
}

export default App;
