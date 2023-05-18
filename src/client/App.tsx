import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//View Imports
import Home from "./views/Home"
import Test from "./views/Test";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
