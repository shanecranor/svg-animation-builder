import { useState } from "react";
import "./App.css";
import { test } from "./svg-temp/templates/templates";
function App() {
  const [count, setCount] = useState(0);
  const svg = new Blob([test], { type: "image/svg+xml" });
  const svgUrl = URL.createObjectURL(svg);

  return (
    <>
      <div>{test}</div>
      <img src={svgUrl}></img>
    </>
  );
}

export default App;
