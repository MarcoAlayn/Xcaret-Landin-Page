import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
