import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import Navbar from './components/commons/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Colis from './pages/Colis';
import Clients from './pages/Clients';
import Utilisateurs from './pages/Utilisateurs';
import Containers from './pages/Containers';
import NotFound from './pages/NotFound';
import { selectUser } from './features/usersReducer';
import { isEmpty } from './components/Utils';
import EditAccueil from './pages/admin/EditAccueil';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <>
      <Navbar />
      
      <Routes basename={process.env.PUBLIC_URL} >
        <Route path="/" element={<Home />} />
        <Route path="/containers" element={!isEmpty(user)?<Containers />:<Logout />} />
        <Route path="/clients" element={!isEmpty(user)?<Clients />:<Logout />} />
        <Route path="/colis" element={!isEmpty(user)?<Colis />:<Logout />} />
        <Route path="/utilisateurs" element={!isEmpty(user) && user.isAdmin===1?<Utilisateurs />:<Logout />} />
        <Route path="/edit-accueil" element={!isEmpty(user) && user.isAdmin==='1'?<EditAccueil />:<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;