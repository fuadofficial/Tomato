import { useState } from "react";
import Title from "./components/Title";
import "./App.css";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)} className="toggle-button">
        {toggle ? "Hide Button" : "Show Button"}
      </button>
      {toggle && <Title />}
      <div className="form-Container">
        <FormOne />
        <FormTwo />
      </div>
    </div>
  );
};

export default App;
