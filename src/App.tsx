import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lexica from "./pages/Lexica";

function App() {
  const [count, setCount] = useState(0);
  //no tienes snippets?
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lexica />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
