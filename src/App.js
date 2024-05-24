import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import SimpleCalc from "./Components/SimpleCalc/SimpleCalc";
import ScientificCalc from "./Components/ScientificCalc/ScientificCalc";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/simplecalc" element={<SimpleCalc />}></Route>
        <Route path="/scientificcalc" element={<ScientificCalc />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
