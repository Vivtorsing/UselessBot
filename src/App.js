import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, HashRouter } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import Commands from "./Commands";
import Premium from "./Premium";
import Staff from "./Staff";
import Terms from "./Terms";
import Privacy from "./Privacy";
import ReleaseNotes from "./ReleaseNotes";

function App() {
  return (
    <Router basename="/UselessBot">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/releasenotes" element={<ReleaseNotes />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  )
}

export default App;