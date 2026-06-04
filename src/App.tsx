import { useState } from "react";

import("./App.css");

function App() {
  const [isBlack, setIsBlack] = useState(false);

  const [text] = useState("Hello world");
  const [colorText, setColorText] = useState("#000000");
  const [colorFund, setColorFund] = useState("#ffffff");
  const [nameFont, setNameFont] = useState("Dancing Script");
  const [view, setView] = useState(false);
  const [temporalText, setTemporalText] = useState(text);

  return (
    <div className="container" style={{ backgroundColor: colorFund }}>
      <h1
        className={`${text} ${isBlack ? "bold" : "normal"}`}
        style={{ color: colorText, fontFamily: nameFont }}
      >
        {temporalText}
      </h1>
      <button onClick={() => setIsBlack(!isBlack)}>Click me</button>
      <input onChange={(e) => setColorText(e.target.value)} type="color" />
      <input onChange={(e) => setColorFund(e.target.value)} type="color" />
      <select onChange={(e) => setNameFont(e.target.value)}>
        <option value="Dancing Script">Dancing Script</option>
        <option value="Orbitron">Orbitron</option>
        <option value="Ole">Ole</option>
        <option value="Playwrite GB J">Playwrite England Joined</option>
        <option value="Black Ops One">Black Ops One</option>
      </select>
      <button className="pencil" onClick={() => setView(true)}>
        ✏️
      </button>
      {view && (
        <div className="modal">
          <input
            onChange={(e) => setTemporalText(e.target.value)}
            type="text"
          />
          <button onClick={() => setView(false)}>Cancel</button>
          <button
            onClick={() => {
              setTemporalText(temporalText);
              setView(false);
            }}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
