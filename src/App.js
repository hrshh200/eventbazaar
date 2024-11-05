// All the routing of the pages are done here
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import EventLoginForm from './pages/Login/EventLogin';
import EventSignupForm from './pages/SignUp/EventSignup';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login/user" element={<Login />} />
              <Route path="/login/eventuser" element={<EventLoginForm />} />
              <Route path="/signup/user" element={<SignUp />} />
              <Route path="/signup/eventuser" element={<EventSignupForm />} />
              {/* Add more routes as needed */}
          </Routes>
      </Router>
  );
};

export default App