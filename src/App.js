import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'

import Login from './views/Login'
import Devices from './views/Devices'
import Create from './views/Create'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/devices" element={<Devices />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
