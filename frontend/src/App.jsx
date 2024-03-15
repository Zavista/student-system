import React from "react";
import Home from "../pages/Home";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Results from "../pages/Results";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/students" element={<Students></Students>}></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
        <Route path="/results" element={<Results></Results>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
