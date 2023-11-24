import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Redirect from './pages/login/Redirect';
import FindPassword from './pages/help/password';
import SignUp from './pages/sign';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login/kakao/redirect" element={<Redirect />} /> */}
          {/* <Route path="/login/naver/redirect" element={<Redirect />} /> */}
          <Route path="/login/redirect/*" element={<Redirect />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/help/password" element={<FindPassword />} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
