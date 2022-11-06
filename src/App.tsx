import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Lexica from "./pages/Lexica";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lexica />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
