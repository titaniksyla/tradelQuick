import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Nav from './components/shared/Nav/Nav'
import Footer from './components/shared/Footer/Footer';
import Login from './pages/auth/Login/Login';
import Signup from './pages/auth/Signup/Signup';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;
