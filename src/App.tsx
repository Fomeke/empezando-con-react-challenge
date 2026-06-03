import { useState } from "react";

import("./App.css");

function App() {
  const [esNegrita, setEsNegrita] = useState(false);

  return (
    <div className="contenedor">
      <h1 className={`texto ${esNegrita ? "bold" : "normal"}`}>Hola mundo</h1>
      <button onClick={() => setEsNegrita(!esNegrita)}>Dame click</button>
    </div>
  );
}

export default App;
