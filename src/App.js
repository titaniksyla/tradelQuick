import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Nav from './components/shared/Nav/Nav'
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
  <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  </Router>
    
  );
}

export default App;
