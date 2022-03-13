import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Routing 

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Components 

import Navbar from './components/Navbar';
import Tokenomics from './components/Tokenomics/Tokenomics';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Roadmap from './components/Roadmap/Roadmap';

const Routing = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/tokenomics" element={<Tokenomics/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/roadmap" element={<Roadmap/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
