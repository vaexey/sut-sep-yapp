import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routers";

function App() {
  return (
    <Router>
      <h1>hello</h1>
      <AppRoutes />
    </Router>
  );
}

export default App;