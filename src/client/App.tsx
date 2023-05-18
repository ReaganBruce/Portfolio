import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./views/Test";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
