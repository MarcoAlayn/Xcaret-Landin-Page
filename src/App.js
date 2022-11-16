import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Landing from "./pages/landing";
import Thanks from "./pages/thanks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<Landing />} />
        <Route exact path={"/thanks"} element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
