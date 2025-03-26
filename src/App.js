import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Commands from "./Commands";
import Premium from "./Premium";
import Staff from "./Staff";
import Terms from "./Terms";
import Privacy from "./Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/UselessBot" element={<Home />} />
        <Route path="/UselessBot/commands" element={<Commands />} />
        <Route path="/UselessBot/premium" element={<Premium />} />
        <Route path="/UselessBot/staff" element={<Staff />} />
        <Route path="/UselessBot/terms" element={<Terms />} />
        <Route path="/UselessBot/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App;