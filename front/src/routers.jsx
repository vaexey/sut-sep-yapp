import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Browse from './pages/Browse';

// import Loginpage from './pages/Loginpage';
// import Registerpage from './pages/Registerpage';
// import Dashboard from './pages/Dashboard';
// import AdminPanel from './pages/AdminPanel';
// import QuestionAsk from './pages/QuestionAsk';
// import QuestionInbox from './pages/QuestionInbox';
// import Report from './pages/Report';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/browse" element={<Browse />} />

    {/* <Route path="/login" element={<Loginpage />} />
    <Route path="/register" element={<Registerpage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/ask" element={<QuestionAsk />} />
    <Route path="/inbox" element={<QuestionInbox />} />
    <Route path="/report" element={<Report />} />
    <Route path="*" element={<div>404 Not Found</div>} /> */}
  </Routes>
);

export default AppRoutes;
