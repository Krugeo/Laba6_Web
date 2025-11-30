import React, { useState } from "react";

function List() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;
    setItems([...items, input]);
    setInput("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
      <button onClick={addItem} style={{ marginLeft: "10px" }}>Додати</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeItem(index)}>Видалити</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;