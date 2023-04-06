import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/commons/Navbar';
import Home from './pages/Home';
import Login from './components/auth/SignIn';
import Register from './components/auth/SignUp';
import Colis from './pages/Colis';
import Clients from './pages/Clients';
import Utilisateurs from './pages/Utilisateurs';
import NotFound from './pages/NotFound';

const App = () => {
  
  return (
    <>
      <Navbar />
      <Register />
      <Routes basename={process.env.PUBLIC_URL} >
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="/colis" element={<Colis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;