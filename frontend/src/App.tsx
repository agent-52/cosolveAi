import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CoSolve ai </h1>
      <p>
        this is a webplatform to practice real time group discussions with real
        people and an ai host that analyze your performance during the
        disscusion and gives you feedback to improve.
      </p>
    </>
  );
}

export default App;
