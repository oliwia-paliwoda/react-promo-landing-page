import React from 'react';
import './styles/App.scss';
import Home from './components/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
