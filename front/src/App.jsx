import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routers';
import Navbar from './components/Navbar';

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <AppRoutes />
    </Router>
  );
}

export default App;
