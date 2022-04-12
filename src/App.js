import './App.css';
import Navbar from './Components/Navbar.js';
import Form from './Components/Form';
import Cards from './Components/Cards';
import React, { useState } from 'react';
import Alert from './Components/Alert';
//importing for using react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      {/* if we are using router then we have to use <Router></Router> at start and end */}
      <Router>
        <Navbar title="TextUtilis" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
{/* (in version v6)Routes is use to swich a/some particular part when go to new page. In previous version Switch was used. */}
{/* Also exact(to go to exact path as react uses partial path maching so if two links have similar names then there
   may be conflict) were use in previous version but not from v6:-<Route exact path="/about" */}
{/* To make effective use of router we have to replace <a to <Link and 'herf' to  'to' so that website not refresh*/}
          <Routes>
            <Route path="/about" element={<Cards />}></Route>
            <Route path="/" element={<Form mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
