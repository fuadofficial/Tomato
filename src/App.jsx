import { useState } from "react";
import Title from "./components/Title";
import './App.css'

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
        <button onClick={() => setToggle(!toggle)} className="toggle-button">
          {toggle ? "Hide Button" : "Show Button"}
        </button>
      {toggle && <Title />}
      <div className="button-Container">
      </div>
    </div>
  );
};

export default App;
