import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Homepage/Home';
import Contact from './Pages/Contact/Contact';
import Single from './Pages/Single/Single'
import Units from './Pages/Units/Units'
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/units' element={<Units/>}/>
        <Route path='/single' element={<Single/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
