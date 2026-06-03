import { useState } from "react";

import("./App.css");

function App() {
  const [isBlack, setIsBlack] = useState(false);

  const [colorText, setColorText] = useState("#000000");
  const [colorFund, setColorFund] = useState("#ffffff");

  useState("Arial");

  return (
    <div className="container" style={{ backgroundColor: colorFund }}>
      <h1
        className={`text ${isBlack ? "bold" : "normal"}`}
        style={{ color: colorText }}
      >
        Hola mundo
      </h1>
      <button onClick={() => setIsBlack(!isBlack)}>Dame click</button>
      <input onChange={(e) => setColorText(e.target.value)} type="color" />

      <input onChange={(e) => setColorFund(e.target.value)} type="color" />
    </div>
  );
}

export default App;
