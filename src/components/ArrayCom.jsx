import React, { useState } from "react";
import useArray from "../hooks/useArray";

function ArrayCom() {
  const { array, push, remove, clear } = useArray([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      push(input);
      setInput("");
    }
  };

  const filteredArray = array.filter(item =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введіть текст"
      />
      <button onClick={handleAdd}  style={{ marginLeft: "10px" }} >Додати</button>
      <button onClick={clear} style={{ marginLeft: "10px" }}>
        Очистити
      </button>
      <hr />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Фільтр"
        style={{ marginTop: "10px" }}
      />

      <ul>
        {filteredArray.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => remove(index)} style={{ marginLeft: "10px" }}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
      
      {filteredArray.length === 0 && <p>Нічого не знайдено</p>}
    </div>
  );
}

export default ArrayCom;