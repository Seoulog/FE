import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import Redirect from './pages/login/Redirect';
import FindPassword from './pages/help/password';
import Register from './pages/register';
import RegisterRedirect from './pages/register/RegisterRedirect';
import Home from './pages/home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/redirect/*" element={<Redirect />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/redirect/*" element={<RegisterRedirect />} />
          <Route path="/help/password" element={<FindPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
