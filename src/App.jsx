import React from "react";
import List from "./components/List";
import Planets from "./components/Planets";
import ArrayCom from "./components/ArrayCom";

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h2>Завдання 1</h2>
      <List />

      <h2>Завдання 2</h2>
      <Planets />

      <h2>Завдання 3</h2>
      <ArrayCom />
    </div>
  );
}

export default App;