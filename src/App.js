import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import './components/Navbar.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
    document.title = `TextUtils ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`;
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#121212' : 'white';
    document.body.style.color = mode === 'dark' ? 'white' : 'black';
  }, [mode]);

  return (
    <Router>
      <Navbar Title="Textutils" About="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/TextUtilse"
            element={<TextForm Heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home mode ={mode} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
